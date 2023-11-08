const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export class Svg {
  /**
   * create the Svg in the HTML DOM
   * @param containerElement
   * @returns {Element}
   */
  static createSvg(containerElement = null) {
    const svg = document.createElementNS(SVG_NAMESPACE, 'svg');
    if (containerElement) {
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      containerElement.appendChild(svg);
    }
    return svg;
  }

  /**
   * Add an Element to a SVG DOM
   * @param parent
   * @param name
   * @param attributes
   * @returns {Element}
   */
  static addElement(parent, name, attributes) {
    const element = document.createElementNS(SVG_NAMESPACE, name);
    if (name === 'use') {
      attributes['xlink:href'] = attributes.href; // fix for safari
    }
    for (const attribute in attributes) {
      if (attribute.indexOf(':') !== -1) {
        const value = attribute.split(':');
        element.setAttributeNS(`http://www.w3.org/1999/${value[0]}`, value[1], attributes[attribute]);
      } else {
        element.setAttribute(attribute, attributes[attribute]);
      }
    }
    parent.appendChild(element);
    return element;
  }

  /**
   * Remove an Element from a SVG DOM
   * @param element
   */
  static removeElement(element) {
    if (!element || !element.parentNode) return;
    element.parentNode.removeChild(element);
  }

  /**
   * Load sprite into html document (as `svg/defs`), elements can be referenced by `use` from all Svgs in page
   * @param url
   * @param elementIds array of element-ids, relevant for `use` in the svgs
   * @param callback called after successful load, parameter is the svg element
   * @param grid the grid size of the sprite
   */
  static loadSprite(url, elementIds, callback, grid = 45) {
    const request = new XMLHttpRequest(); // eslint-disable-line
    request.open('GET', url);
    request.send();
    request.onload = () => {
      const { response } = request;
      const parser = new DOMParser(); // eslint-disable-line
      const svgDom = parser.parseFromString(response, 'image/svg+xml');
      // add relevant nodes to sprite-svg
      const spriteSvg = this.createSvg(document.body);
      spriteSvg.setAttribute('style', 'display: none');
      spriteSvg.setAttribute('id', 'board-spriteSvg');
      const defs = this.addElement(spriteSvg, 'defs');
      // filter relevant nodes
      elementIds.forEach(elementId => {
        const elementNode = svgDom.getElementById(elementId);
        if (elementNode) {
          const transformList = elementNode.transform.baseVal;
          for (let i = 0; i < transformList.numberOfItems; i += 1) {
            const transform = transformList.getItem(i);
            // re-transform items on grid
            if (transform.type === 2) {
              transform.setTranslate(transform.matrix.e % grid, transform.matrix.f % grid);
            }
          }
          // filter all ids in childs of the node
          const filterChilds = childNodes => {
            childNodes.forEach(childNode => {
              if (childNode.nodeType === Node.ELEMENT_NODE) { // eslint-disable-line
                childNode.removeAttribute('id');
                if (childNode.hasChildNodes()) {
                  filterChilds(childNode.childNodes);
                }
              }
            });
          };
          filterChilds(elementNode.childNodes);

          defs.appendChild(elementNode);
        }
      });
      callback(spriteSvg);
    };
  }
}

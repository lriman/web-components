import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import transform from './transform';

const HtmlParserLite = props => {
  const { html, preprocessNodes } = props;

  const options = {
    decodeEntities: true,
    sParams: true,
    preprocessNodes,
    transform,
  };
  return ReactHtmlParser(html, options);
};

HtmlParserLite.propTypes = {
  html: PropTypes.string.isRequired,
  preprocessNodes: PropTypes.func,
};

HtmlParserLite.defaultProps = {
  preprocessNodes: undefined,
};

/** @component */
export default HtmlParserLite;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import Block from '../../Typography/Block';

import { FormContext } from '../_context';
import { StyledFormField } from '../_style';
import { COMPONENTS, FORM_REFS, FIELD_REFS as REFS } from '../_constants';
import { prepareFieldChildrenWithContext } from '../_utils';

class FormFieldWithContext extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    size: PropTypes.oneOf(Object.values(FORM_REFS.SIZES)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
    error: PropTypes.node,
    children: PropTypes.element.isRequired,
    setFormInputNode: PropTypes.func,
    removeFormInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: undefined,
    size: undefined,
    align: REFS.ALIGN.LEFT,
    error: null,
    setFormInputNode: null,
    removeFormInputNode: null,
  };

  setInputNode = () => {
    const { setFormInputNode, removeFormInputNode } = this.props;

    if (!setFormInputNode) return null;
    return (id, node, remove) => {
      if (remove) {
        if (removeFormInputNode) removeFormInputNode(id);
      } else if (setFormInputNode) setFormInputNode(id, node);
    };
  };

  render() {
    const { id, size, width, align, error, children } = this.props;

    const childrenProps = { setInputNode: this.setInputNode() };
    if (size) childrenProps.size = size;

    return (
      <StyledFormField {...addDataAttributes({ component: COMPONENTS.FIELD })} sWidth={width} sAlign={align}>
        {prepareFieldChildrenWithContext(children, childrenProps)}
        {error && (
          <Block id={id} margin={Block.REFS.MARGIN.S} color={Block.REFS.COLORS.NEGATIVE}>
            {error}
          </Block>
        )}
      </StyledFormField>
    );
  }
}

const FormField = props => (
  <FormContext.Consumer>
    {({ size, setFormInputNode, removeFormInputNode }) => (
      <FormFieldWithContext
        {...props}
        size={props.size || size}
        setFormInputNode={setFormInputNode}
        removeFormInputNode={removeFormInputNode}
      />
    )}
  </FormContext.Consumer>
);

FormField.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(Object.values(FORM_REFS.SIZES)),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
};

FormField.defaultProps = {
  width: '100%',
  align: REFS.ALIGN.LEFT,
  size: null,
};

FormField.REFS = REFS;

export default FormField;

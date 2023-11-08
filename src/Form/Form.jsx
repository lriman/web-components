import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, FORM_REFS as REFS } from './_constants';
import { StyledForm, StyledFormSubmitButton } from './_style';
import { FormContext } from './_context';
import FormField from './_internal/FormField';

export default class Form extends PureComponent {
  static REFS = { ...REFS };

  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    /** Component Id what need focus on mount */
    autoFocus: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    autoFocus: undefined,
    size: undefined,
    onSubmit: null,
  };

  constructor(props) {
    super(props);

    this.node = React.createRef();
    this.inputsNodes = {};
  }

  componentDidMount() {
    const { autoFocus } = this.props;
    if (autoFocus) this.setInitialFocus();
  }

  setInputNode = (id, node) => {
    if (!this.inputsNodes[id]) this.inputsNodes[id] = node;
  };

  setInitialFocus = () => {
    const { autoFocus } = this.props;
    if (this.inputsNodes[autoFocus]) this.inputsNodes[autoFocus].current.focus();
  };

  removeInputNode = id => {
    delete this.inputsNodes[id];
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    if (onSubmit) onSubmit(e);
  };

  render() {
    const { onSubmit, size, children } = this.props;

    if (onSubmit) {
      return (
        <StyledForm
          {...addDataAttributes({ component: COMPONENTS.GENERAL })}
          ref={this.node}
          sSize={size}
          onSubmit={this.handleSubmit}
        >
          <FormContext.Provider
            value={{ size, setFormInputNode: this.setInputNode, removeFormInputNode: this.removeInputNode }}
          >
            {children}
          </FormContext.Provider>
          <StyledFormSubmitButton />
        </StyledForm>
      );
    }

    return (
      <StyledForm as="div" {...addDataAttributes({ component: COMPONENTS.GENERAL })} ref={this.node} sSize={size}>
        <FormContext.Provider
          value={{ size, setFormInputNode: this.setInputNode, removeFormInputNode: this.removeInputNode }}
        >
          {children}
        </FormContext.Provider>
      </StyledForm>
    );
  }
}

Form.Field = FormField;

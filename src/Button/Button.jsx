import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import Loader from '../Loader';

import ColorContext from '../_context/colorContext';
import { INPUT_TYPE, REFS } from './_constants';
import { StyledButton, StyledButtonInner } from './_style';

export default class Button extends PureComponent {
  static REFS = REFS;

  static inputType = INPUT_TYPE;

  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    padding: PropTypes.string,
    overflow: PropTypes.string,
    isActive: PropTypes.bool,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,

    /** @ignore */
    setInputNode: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    type: REFS.TYPES.PRIMARY,
    display: REFS.DISPLAY.INLINE,
    size: REFS.SIZES.M,
    width: null,
    padding: null,
    overflow: null,
    isActive: false,
    isLoading: false,
    disabled: false,
    onFocus: () => null,
    onBlur: () => null,
    onClick: () => null,

    setInputNode: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };

    this.inputNode = React.createRef();
  }

  componentDidMount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode);
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { isFocused } = this.state;
    if (disabled && isFocused) this.handleBlur();
  }

  componentWillUnmount() {
    const { id, setInputNode } = this.props;
    if (setInputNode) setInputNode(id, this.inputNode, true);
  }

  handleFocus = () => {
    const { id, onFocus } = this.props;
    this.setState({ isFocused: true });
    onFocus({ id });
  };

  handleBlur = () => {
    const { id, onBlur } = this.props;
    this.setState({ isFocused: false });
    onBlur({ id });
  };

  handleClick = () => {
    const { id, disabled, onClick } = this.props;
    if (!disabled) onClick({ id });
  };

  render() {
    const { id, type, size, width, padding, overflow, display, disabled, isLoading, isActive, children } = this.props;
    const { isFocused } = this.state;

    return (
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <StyledButton
            {...addDataAttributes({ component: INPUT_TYPE })}
            ref={this.inputNode}
            as="button"
            sType={type}
            sSize={size}
            sWidth={width}
            sPadding={padding}
            sOverflow={overflow}
            sDisplay={display}
            isDisabled={disabled || isLoading}
            isLoading={isLoading}
            isFocused={isFocused}
            isActive={isActive}
            id={id}
            disabled={disabled || isLoading}
            sColorType={colorType}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onClick={this.handleClick}
          >
            <StyledButtonInner isLoading={isLoading}>{children}</StyledButtonInner>
            {isLoading && (
              <Loader isCentered size={size === REFS.SIZES.S ? Loader.REFS.SIZES.XS : Loader.REFS.SIZES.S} />
            )}
          </StyledButton>
        )}
      </ColorContext.Consumer>
    );
  }
}

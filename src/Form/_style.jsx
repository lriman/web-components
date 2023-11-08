import styled from 'styled-components';

import { STYLES } from './_constants';
import { getFieldWidth, getFieldAlign } from './_utils';

export const StyledForm = styled.form.attrs({
  autoComplete: 'off',
})`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledFormField = styled.div.attrs(({ sWidth }) => ({
  style: {
    width: getFieldWidth(sWidth),
  },
}))`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 2px 0;
  text-align: ${props => getFieldAlign(props.sAlign)};
`;

export const StyledFormSubmitButton = styled.button.attrs({
  type: 'submit',
  tabIndex: -1,
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  border: none;
  background: transparent;
  outline: none;
  opacity: 0;
  z-index: -1;
`;

export const StyledFormError = styled.div`
  position: relative;
  box-sizing: border-box;
  color: ${STYLES.ERROR_COLOR};
  padding-top: 4px;
`;

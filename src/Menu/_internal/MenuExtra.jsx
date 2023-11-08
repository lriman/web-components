import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import Popup, { Opener, Box } from '../../Popup';

import { COMPONENTS, EXTRA_OPENER_ID } from '../_constants';
import { StyledMenuExtra, StyledMenuExtraOpener, StyledMenuExtraPopup } from '../_style';

import MenuItem from './MenuItem';

export default class MenuExtra extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        active: PropTypes.bool,
      }),
    ).isRequired,
    size: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false,
    };
  }

  handlePopupOpen = () => {
    this.setState({ isPopupOpen: true });
  };

  handlePopupClose = () => {
    this.setState({ isPopupOpen: false });
  };

  handleItemClick = id => {
    const { onItemClick } = this.props;

    this.handlePopupClose();
    onItemClick(id);
  };

  render() {
    const { items, size } = this.props;
    const { isPopupOpen } = this.state;

    return (
      <StyledMenuExtra {...addDataAttributes({ component: COMPONENTS.EXTRA })}>
        <Popup isOpened={isPopupOpen} onOpen={this.handlePopupOpen} onClose={this.handlePopupClose}>
          <Opener display={Opener.REFS.DISPLAY.BLOCK}>
            <StyledMenuExtraOpener>
              <MenuItem id={EXTRA_OPENER_ID} title="..." size={size} onClick={() => {}} />
            </StyledMenuExtraOpener>
          </Opener>
          <Box placement={Box.REFS.PLACEMENT.BOTTOM} align={Box.REFS.ALIGN.END}>
            <StyledMenuExtraPopup>
              {items.map(item => (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  active={item.active}
                  size={size}
                  onClick={this.handleItemClick}
                  isExtra
                />
              ))}
            </StyledMenuExtraPopup>
          </Box>
        </Popup>
      </StyledMenuExtra>
    );
  }
}

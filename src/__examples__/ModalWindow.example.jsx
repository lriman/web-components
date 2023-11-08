import React, { PureComponent } from 'react';

import Card from '../Card';
import Button from '../Button';
import ModalWindow from '../ModalWindow';

export default class ModalWindowExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  handleToggleModal = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <Button id="modalOpenButton" onClick={this.handleToggleModal}>
          Open modal window
        </Button>
        {isOpen && (
          <ModalWindow onClose={this.handleToggleModal} {...this.props}>
            <Card width="400px" height="200px" padding="24px">
              content
            </Card>
          </ModalWindow>
        )}
      </>
    );
  }
}

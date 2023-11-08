import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import IconDocument from '../../Icon/IconDocument';
import IconClose from '../../Icon/IconClose';
import Span from '../../Typography/Span';
import IconRepeat from '../../Icon/IconRepeat';
import Progress from '../../Progress';

import { COMPONENTS } from '../_constants';
import {
  StyledFilesUploaderItem,
  StyledFilesUploaderItemIcon,
  StyledFilesUploaderItemRemove,
  StyledFilesUploaderItemName,
  StyledFilesUploaderItemRepeat,
} from '../_style';

import { getProgressColor } from '../_utils';

export default class FilesUploaderItem extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.shape({
      final: PropTypes.number,
      value: PropTypes.number,
      error: PropTypes.bool,
    }),
    onRemoveClick: PropTypes.func.isRequired,
    onReload: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    loading: undefined,
    onReload: undefined,
  };

  handleRemoveClick = () => {
    const { id, onRemoveClick } = this.props;
    onRemoveClick(id);
  };

  handleReload = () => {
    const { id, onReload } = this.props;
    onReload(id);
  };

  render() {
    const { id, name, disabled, loading } = this.props;

    return (
      <StyledFilesUploaderItem {...addDataAttributes({ component: COMPONENTS.ITEM, id })}>
        <StyledFilesUploaderItemIcon>
          <IconDocument display={IconDocument.REFS.DISPLAY.BLOCK} />
        </StyledFilesUploaderItemIcon>
        <StyledFilesUploaderItemName>
          <Span color={Span.REFS.COLORS.MINOR}>{name}</Span>
        </StyledFilesUploaderItemName>
        {!disabled && (
          <>
            {loading?.error && (
              <StyledFilesUploaderItemRepeat onClick={this.handleReload}>
                <IconRepeat
                  size={IconRepeat.REFS.SIZES.S}
                  display={IconRepeat.REFS.DISPLAY.BLOCK}
                  color={IconRepeat.REFS.COLORS.MINOR}
                />
              </StyledFilesUploaderItemRepeat>
            )}
            <StyledFilesUploaderItemRemove onClick={this.handleRemoveClick}>
              <IconClose
                size={IconClose.REFS.SIZES.S}
                display={IconClose.REFS.DISPLAY.BLOCK}
                color={IconClose.REFS.COLORS.MINOR}
              />
            </StyledFilesUploaderItemRemove>
          </>
        )}
        {loading && (
          <Progress
            final={loading.final}
            value={loading.value}
            lineHeight="xs"
            color={getProgressColor(loading)}
            isWithoutLabel
          />
        )}
      </StyledFilesUploaderItem>
    );
  }
}

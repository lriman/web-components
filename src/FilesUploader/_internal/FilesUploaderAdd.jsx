import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { addDataAttributes } from '../../_utils';
import Span from '../../Typography/Span';
import Button from '../../Button';
import IconUpload from '../../Icon/IconUpload';

import { COMPONENTS, LABELS } from '../_constants';
import { StyledFilesUploaderAdd, StyledFilesUploaderAddInner, StyledFilesUploaderAddError } from '../_style';

export default function FilesUploaderAdd({ id, multiple, maxSize, onAdd, accept }) {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      setIsActive(false);
      setError('');
      if (acceptedFiles.length) onAdd(acceptedFiles);
    },
    [onAdd],
  );

  const onDragEnter = () => {
    setIsActive(true);
  };

  const onDragLeave = () => {
    setIsActive(false);
  };

  const onDropRejected = useCallback(
    files => {
      if (maxSize !== undefined && files.some(file => file.size > maxSize)) {
        setError(LABELS.ERROR_HUGE_FILE_SIZE);
      } else {
        setError(LABELS.ERROR);
      }
    },
    [maxSize],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
    maxSize,
    onDragEnter,
    onDragLeave,
    onDropRejected,
    accept,
  });

  const onClick = () => {
    setError('');
  };

  return (
    <StyledFilesUploaderAdd
      {...addDataAttributes({ component: COMPONENTS.ADD })}
      isActive={isActive}
      isError={Boolean(error)}
      onClick={onClick}
    >
      <StyledFilesUploaderAddInner {...getRootProps()}>
        <input {...getInputProps()} />
        <Button
          id={id}
          display={Button.REFS.DISPLAY.BLOCK}
          type={Button.REFS.TYPES.OUTLINE}
          isTransparent
          onClick={() => {}}
        >
          <IconUpload />
          <Span>{LABELS.ADD}</Span>
        </Button>
        {error && (
          <StyledFilesUploaderAddError>
            <Span color={Span.REFS.COLORS.NEGATIVE}>{error}</Span>
          </StyledFilesUploaderAddError>
        )}
      </StyledFilesUploaderAddInner>
    </StyledFilesUploaderAdd>
  );
}

FilesUploaderAdd.propTypes = {
  id: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
  accept: PropTypes.string,
};

FilesUploaderAdd.defaultProps = {
  multiple: true,
  maxSize: Infinity,
  accept: undefined,
};

/*
export default class FilesUploaderAdd extends PureComponent {

  onDropRejected = () => {
    this.setState({ isError: true });
  };

  onDragEnter = () => {
    this.setState({ isActive: true });
  };

  onDragLeave = () => {
    this.setState({ isActive: false });
  };

  onClick = () => {
    this.setState({ isError: false });
  };

  render() {
    const { id, isMultiple, maxSize } = this.props;
    const { isActive, isError } = this.state;

    return (
      <StyledFilesUploaderAdd
        {...addDataAttributes({ component: COMPONENTS.ADD })}
        isActive={isActive}
        isError={isError}
        onClick={this.onClick}
      >
        <Dropzone
          multiple={isMultiple}
          maxSize={maxSize}
          onDrop={this.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onDropRejected={this.onDropRejected}
        >
          {({ getRootProps, getInputProps }) => (
            <StyledFilesUploaderAddInner {...getRootProps()}>
              <input {...getInputProps()} />
              <Button
                id={id}
                display={Button.REFS.DISPLAY.BLOCK}
                type={Button.REFS.TYPES.LINK}
                isTransparent
                onClick={() => {}}
              >
                <IconUpload />
                <Span>{LABELS.ADD}</Span>
              </Button>
              {isError && (
                <StyledFilesUploaderAddError>
                  <Span color={Span.REFS.COLORS.NEGATIVE}>{LABELS.ERROR}</Span>
                </StyledFilesUploaderAddError>
              )}
            </StyledFilesUploaderAddInner>
          )}
        </Dropzone>
      </StyledFilesUploaderAdd>
    );
  }
}
*/

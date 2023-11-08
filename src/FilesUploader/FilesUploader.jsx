import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { addDataAttributes } from '../_utils';
import Span from '../Typography/Span';

import FilesUploaderItem from './_internal/FilesUploaderItem';
import FilesUploaderAdd from './_internal/FilesUploaderAdd';

import { COMPONENTS } from './_constants';
import { StyledFilesUploader, StyledFilesUploaderHeader, StyledFilesUploaderItems } from './_style';
import { checkConstraints, calcFilesTotalSize } from './_utils';

export default function FilesUploader(props) {
  const {
    id,
    files = [],
    title,
    note,
    maxFilesQty,
    maxFilesTotalSize,
    maxFileSize,
    disabled,
    accept,
    onChange,
    onReload,
  } = props;

  const getMaxFileSize = () => {
    const calcMaxFileSize = maxFilesTotalSize - calcFilesTotalSize(files);
    return calcMaxFileSize < maxFileSize ? calcMaxFileSize : maxFileSize;
  };

  const handleAdd = uploaded => {
    const result = files.concat(
      uploaded.map(file => ({
        id: uuid(),
        name: file.name,
        size: file.size,
        file,
      })),
    );
    const verified = checkConstraints(result, maxFilesQty, maxFilesTotalSize, maxFileSize);
    onChange({ id, files: verified });
  };

  const handleItemRemoveClick = itemId => {
    const result = files.filter(item => item.id !== itemId);
    const verified = checkConstraints(result, maxFilesQty, maxFilesTotalSize, maxFileSize);
    onChange({ id, files: verified });
  };

  const handleItemReloadClick = fileId => {
    onReload({ id, fileId });
  };

  return (
    <StyledFilesUploader {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      {(title || note) && (
        <StyledFilesUploaderHeader>
          {title && <Span size={Span.REFS.SIZES.L}>{title}</Span>}
          {note && <Span size={Span.REFS.SIZES.S}> {note}</Span>}
        </StyledFilesUploaderHeader>
      )}
      {!disabled && maxFilesQty > files.length && (
        <FilesUploaderAdd
          id={id}
          maxSize={getMaxFileSize()}
          multiple={maxFilesQty !== 1}
          onAdd={handleAdd}
          accept={accept}
        />
      )}
      {!!files.length && (
        <StyledFilesUploaderItems>
          {files.map(file => (
            <FilesUploaderItem
              key={file.id}
              id={file.id}
              name={file.name}
              loading={file.loading}
              disabled={disabled}
              onRemoveClick={handleItemRemoveClick}
              onReload={handleItemReloadClick}
            />
          ))}
        </StyledFilesUploaderItems>
      )}
    </StyledFilesUploader>
  );
}

FilesUploader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  note: PropTypes.string,
  accept: PropTypes.string,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      file: PropTypes.shape({}),
      loading: PropTypes.shape({
        final: PropTypes.number,
        value: PropTypes.number,
        error: PropTypes.bool,
      }),
    }),
  ),
  maxFilesQty: PropTypes.number,
  maxFilesTotalSize: PropTypes.number,
  maxFileSize: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onReload: PropTypes.func,
};

FilesUploader.defaultProps = {
  title: undefined,
  note: undefined,
  files: undefined,
  maxFilesQty: Infinity,
  maxFilesTotalSize: Infinity,
  maxFileSize: Infinity,
  disabled: false,
  onChange: () => null,
  accept: undefined,
  onReload: () => null,
};

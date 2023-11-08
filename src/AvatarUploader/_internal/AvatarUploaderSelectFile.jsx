import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { addDataAttributes } from '../../_utils';

import { Block, H4 } from '../../Typography';
import Button from '../../Button';

import { COMPONENTS } from '../_constants';
import { StyledAvatarUploaderSelectFile, StyledAvatarUploaderSelectFileInner } from '../_style';

export default function AvatarUploaderSelectFile(props) {
  const { id, labels, onSelectFile } = props;

  const onDrop = useCallback(
    acceptedFiles => {
      if (acceptedFiles.length) onSelectFile(acceptedFiles);
    },
    [onSelectFile],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/jpeg, image/png',
  });

  return (
    <StyledAvatarUploaderSelectFile {...addDataAttributes({ component: COMPONENTS.SELECT_FILE })}>
      <StyledAvatarUploaderSelectFileInner {...getRootProps()}>
        <input {...getInputProps()} />
        <Block>
          <H4 color={H4.REFS.COLORS.MINOR}>{labels.drag}</H4>
        </Block>
        <Block color={Block.REFS.COLORS.MINOR}>{labels.or}</Block>
        <Block>
          <Button id={id} type={Button.REFS.TYPES.MUTED} onClick={() => {}}>
            {labels.add}
          </Button>
        </Block>
      </StyledAvatarUploaderSelectFileInner>
    </StyledAvatarUploaderSelectFile>
  );
}

AvatarUploaderSelectFile.propTypes = {
  id: PropTypes.string.isRequired,
  labels: PropTypes.shape().isRequired,
  onSelectFile: PropTypes.func.isRequired,
};

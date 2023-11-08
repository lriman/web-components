import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';

import { addDataAttributes } from '../_utils';
import { Block } from '../Typography';
import Grid, { Item } from '../Grid';
import Button from '../Button';

import { COMPONENTS } from './_constants';
import { StyledAvatarUploader, StyledAvatarUploaderCrop, StyledAvatarUploaderCropInner } from './_style';
import AvatarUploaderSelectFile from './_internal/AvatarUploaderSelectFile';

const defaultCrop = {
  unit: '%',
  width: 90,
  x: 5,
  y: 5,
  aspect: 1,
};

function getCroppedImg(image, param, fileName) {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = param.width;
  canvas.height = param.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    param.x * scaleX,
    param.y * scaleY,
    param.width * scaleX,
    param.height * scaleY,
    0,
    0,
    param.width,
    param.height,
  );

  return new Promise(resolve => {
    canvas.toBlob(blob => {
      if (!blob) {
        return;
      }
      blob.name = fileName;
      resolve(blob);
    }, 'image/jpeg');
  });
}

export default function AvatarUploader(props) {
  const { id, labels, onSubmit } = props;

  const [file, setFile] = useState(null);

  const imageRef = useRef(null);

  const [crop, setCrop] = useState(defaultCrop);

  const onSelectFile = files => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setFile(reader.result);
    });
    reader.readAsDataURL(files[0]);
  };

  const onCropChange = param => {
    setCrop(param);
  };

  const onImageLoaded = image => {
    imageRef.current = image;
  };

  const handleCancel = () => {
    setFile(null);
    setCrop(defaultCrop);
    imageRef.current = null;
  };

  const handleSubmit = async () => {
    let croppedImageUrl;

    if (imageRef.current && crop.width && crop.height) {
      croppedImageUrl = await getCroppedImg(imageRef.current, crop, 'newFile.jpeg');
    }

    setFile(null);
    setCrop(defaultCrop);
    imageRef.current = null;

    onSubmit(croppedImageUrl);
  };

  return (
    <StyledAvatarUploader {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      {!file && <AvatarUploaderSelectFile id={id} labels={labels} onSelectFile={onSelectFile} />}
      {file && (
        <StyledAvatarUploaderCrop>
          <StyledAvatarUploaderCropInner>
            <Block>
              <ReactCrop
                src={file}
                crop={crop}
                ruleOfThirds
                minWidth={200}
                minHeight={200}
                maxWidth={500}
                maxHeigh={500}
                keepSelection
                onImageLoaded={onImageLoaded}
                onChange={onCropChange}
              />
            </Block>
            <Block>
              <Grid justify={Grid.REFS.JUSTIFY.SPACE_BETWEEN}>
                <Item>
                  <Button id={`${id}_cancel`} type={Button.REFS.TYPES.SECONDARY} size="s" onClick={handleCancel}>
                    {labels.cancel}
                  </Button>
                </Item>
                <Item>
                  <Button id={`${id}_submit`} type={Button.REFS.TYPES.MUTED} size="s" onClick={handleSubmit}>
                    {labels.submit}
                  </Button>
                </Item>
              </Grid>
            </Block>
          </StyledAvatarUploaderCropInner>
        </StyledAvatarUploaderCrop>
      )}
    </StyledAvatarUploader>
  );
}

AvatarUploader.propTypes = {
  id: PropTypes.string.isRequired,
  labels: PropTypes.shape({
    submit: PropTypes.string,
    cancel: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

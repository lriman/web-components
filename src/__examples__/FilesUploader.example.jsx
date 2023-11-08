import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FilesUploader from '../FilesUploader';

export default class FilesUploaderExample extends PureComponent {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    files: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      files: props.files || [],
    };
  }

  handleChange = ({ id, files }) => {
    this.setState({ files });
    console.log(id, files); /* eslint-disable-line */
  };

  render() {
    const { files } = this.state;

    return <FilesUploader {...this.props} files={files} onChange={this.handleChange} />;
  }
}

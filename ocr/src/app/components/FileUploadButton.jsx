import React from 'react';

const FileUploadButton = ({ onFileChange }) => {
  return (
    <div>
      <input
        type="file"
        id="fileUpload"
        style={{ display: 'none' }}
        onChange={onFileChange}
      />
      <label htmlFor="fileUpload">
        <button type="button">Upload File</button>
      </label>
    </div>
  );
};

export default FileUploadButton;

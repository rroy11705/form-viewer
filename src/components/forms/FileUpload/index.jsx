import React, { useState, useCallback } from 'react';

const FileSelector = () => {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback(event => {
    event.preventDefault();
    setDragging(false);
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  const handleDragOver = event => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleFileInputChange = event => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }
  };

  const handleClick = () => {
    document.getElementById('file-input').click();
  };

  const removeFile = id => {
    const newFiles = files.filter((file, i) => i !== id);
    setFiles(newFiles);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
      style={{
        border: `2px dashed ${dragging ? 'green' : 'gray'}`,
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <input
        id="file-input"
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      {files.length === 0 ? (
        <p>Drag & Drop files here or click to select files</p>
      ) : (
        <div>
          <p>Files selected:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name}{' '}
                <button
                  onClick={e => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileSelector;

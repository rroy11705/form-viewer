import React from 'react';
// {
//   "type": "html",
//   "name": "doctor",
//   "minWidth": "250px",
//   "maxWidth": "5%",
//   "html": "<p style=\"line-height: 32px;\">Patient questionnaire for Dr</p>\n"
// },
const HTMLElement = ({ id, type = 'html', name, minWidth = '', maxWidth = '', html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ 'minWidth': minWidth, 'maxWidth': maxWidth }}
    ></div>
  );
};

export default HTMLElement;

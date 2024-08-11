import React from 'react';
import JsonFormatter from 'react-json-formatter';

const SubmitFormView = ({ data, model }) => {
  const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' },
  };

  return (
    <div className="p-10 overflow-auto">
      <JsonFormatter json={data} tabWith={4} jsonStyle={jsonStyle} />
    </div>
  );
};

export default SubmitFormView;

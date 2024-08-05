import React from 'react';

const FormContent = ({ page }) => {
  console.log(page);
  return (
    <div className="w-full p-4">
      <div>{page.title}</div>
    </div>
  );
};

export default FormContent;

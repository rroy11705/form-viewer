import React from 'react';

const FormSidebar = ({ details = [], page, onPageChange }) => {
  return (
    <div className="min-w-56 p-4 h-full border-r border-solid border-gray-500 flex flex-col gap-4">
      {details.map((x, i) => (
        <div
          onClick={() => onPageChange(i)}
          className={`py-2 px-4 hover:bg-lime-300 rounded-md cursor-pointer ${
            page === i ? 'bg-lime-300' : ''
          }`}
        >
          {x.title}
        </div>
      ))}
    </div>
  );
};

export default FormSidebar;

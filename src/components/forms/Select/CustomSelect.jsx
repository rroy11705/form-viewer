import React, { useState, useEffect, useRef } from 'react';
// import './style.css';

const CustomSelect = React.forwardRef(
  (
    {
      id,
      selectHeight,
      label,
      name,
      value,
      optionMapFunction,
      onOptionSearch,
      options = [],
      onChange,
      onBlur,
      required,
      placeholder,
      disabled,
      startIcon,
      endIcon,
      color,
      error,
      success,
      showErrorIcon,
      showSuccessIcon,
      helperText,
      iconInfo,
      searchable,
      searchInputPlaceholder,
      menuHeight,
      emptySearchComponent,
      emptyOptionsComponent,
      clearSelectionButton,
    },
    ref,
  ) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');
    const selectRef = useRef(null);

    // Filter options based on search query
    const filteredOptions = options.filter(option =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Handle outside click to close dropdown
    useEffect(() => {
      function handleOutsideClick(event) {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

    // Handle select change
    const handleSelectChange = optionValue => {
      setSelectedValue(optionValue);
      onChange && onChange({ target: { name, value: optionValue } });
      setIsOpen(false);
    };

    // Handle search input change
    const handleSearchChange = e => {
      const query = e.target.value;
      setSearchQuery(query);
      onOptionSearch && onOptionSearch(query);
    };

    // Clear selection
    const clearSelection = () => {
      setSelectedValue('');
      onChange && onChange({ target: { name, value: '' } });
    };

    return (
      <div className="custom-select-container" ref={selectRef} style={{ color }}>
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}
        <div
          className="flex flex-row justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style={{ height: selectHeight }}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <div>
            {selectedValue || !!placeholder}
            {!selectedValue && <span className="placeholder">{placeholder}</span>}
          </div>
          {endIcon && (
            <span className="end-icon" title={iconInfo}>
              {endIcon}
            </span>
          )}
        </div>
        {isOpen && (
          <div
            className="custom-select-options"
            style={{ maxHeight: menuHeight, overflowY: 'auto' }}
          >
            {searchable && (
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder={searchInputPlaceholder}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            )}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) =>
                optionMapFunction ? (
                  optionMapFunction(option)
                ) : (
                  <div
                    key={index}
                    className="custom-select-option"
                    onClick={() => handleSelectChange(option.value)}
                  >
                    {option.label}
                  </div>
                ),
              )
            ) : (
              <div className="custom-select-option disabled">
                {emptySearchComponent || 'No options available'}
              </div>
            )}
          </div>
        )}
        {clearSelectionButton && selectedValue && (
          <button className="clear-selection-button" onClick={clearSelection}>
            Clear
          </button>
        )}
        {showErrorIcon && error && <span className="error-icon">!</span>}
        {showSuccessIcon && success && <span className="success-icon">✔</span>}
        <div className="helper-text" style={{ color: error ? 'red' : 'inherit' }}>
          {error || helperText}
        </div>
      </div>
    );
  },
);

export default CustomSelect;

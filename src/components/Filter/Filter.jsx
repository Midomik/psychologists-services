import React, { useEffect } from 'react';
import css from './Filter.module.css';

import Select from 'react-select';
import { customStyles } from './selectStyles';

import { useSelector } from 'react-redux';
import { selectFilterOptions } from '../../redux/filters/filters.selectors';

const Filter = ({ onFilterChange }) => {
  const options = useSelector(selectFilterOptions);

  useEffect(() => {});
  return (
    <div className={css.filter_container}>
      <label className={css.select_brand_label}>
        <p className={css.select_title}>Filters</p>
        <Select
          defaultValue={options[0]}
          options={options}
          onChange={choice => onFilterChange(choice.label)}
          styles={customStyles}
        />
      </label>
    </div>
  );
};

export default Filter;

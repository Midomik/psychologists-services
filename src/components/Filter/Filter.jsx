import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectBrands,
//   selectRentalPrices,
// } from '../../redux/filters/filters.selectors';
import Select from 'react-select';
import { customStyles } from './selectStyles';
// import { filterCars } from '../../redux/filters/filters.reducer';
// import { selectTotalCars } from '../../redux/cars/cars.selectors';
// import options from '../../data/filter';
import { useSelector } from 'react-redux';
import { selectFilterOptions } from '../../redux/filters/filters.selectors';

const Filter = () => {
  //   const dispatch = useDispatch();
  //   const brands = useSelector(selectBrands);
  //   const rentalPrices = useSelector(selectRentalPrices);
  //   const cars = useSelector(selectTotalCars);
  //   const [modelChoice, setModelChoice] = useState('');
  const options = useSelector(selectFilterOptions);

  const [value, setValue] = useState(options[0]);

  //   const handlerFormFilter = e => {
  //     e.preventDefault();
  //     const { from, to } = e.target.elements;
  //     const barnd = modelChoice.value === undefined ? '' : modelChoice.value;
  //     const rentalPrice =
  //       rentalPriceChoice.value === undefined ? '' : rentalPriceChoice.value;
  //     const mileageFrom = from.value;
  //     const mileageTo = to.value;
  //     // const data = {
  //     //   cars,
  //     //   filterInfo: { barnd, rentalPrice, mileageFrom, mileageTo },
  //     // };
  //     // dispatch(filterCars(data));
  //   };
  useEffect(() => {});
  return (
    <div className={css.filter_container}>
      <label className={css.select_brand_label}>
        <p className={css.select_title}>Filters</p>
        <Select
          defaultValue={options[0]}
          options={options}
          //   placeholder="Enter the text"
          value={value}
          onChange={setValue}
          styles={customStyles}

          //   onChange={choice => setModelChoice(choice)}
        />
      </label>
    </div>
  );
};

export default Filter;

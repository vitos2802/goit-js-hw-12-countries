import './styles.css';

import fetchCountries from './js/fetchCountries';
import { success, error } from './js/notification';
import renderCountry from './js/one-country-markup';
import renderMoreCountry from './js/more-country-markup';
import clearList from './js/clear-list';
import selectCountry from './js/select-country';
const debounce = require('lodash.debounce');
const countryList = document.querySelector('.js-country-wrap');

const input = document.querySelector('.input');

const findCountry = e => {
  const value = e.target.value.trim();

  if (!value) {
    clearList(countryList);
    return;
  }
  fetchCountries(value).then(country => {
    clearList(countryList);
    if (country.length > 10) {
      error({
        text: 'Please enter a more specific query!',
      });
      return;
    }

    if (country.length > 1) {
      renderMoreCountry(country);
      selectCountry(country);
    }

    if (country.length === 1) {
      renderCountry(country[0]);
      success({
        text: 'Country is find!',
      });
    }
  });
};

const inputDebounce = debounce(findCountry, 500);

input.addEventListener('input', inputDebounce);

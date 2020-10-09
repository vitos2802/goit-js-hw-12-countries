import './styles.css';

import fetchCountries from './js/fetchCountries';
import { success, error } from './js/notification';
import renderCountry from './js/one-country-markup';
import renderMoreCountry from './js/more-country-markup';
const debounce = require('lodash.debounce');
const countryList = document.querySelector('.js-country-wrap');

const input = document.querySelector('.input');

const findCountry = e => {
  const value = e.target.value;

  if (!value) {
    countryList.innerHTML = '';
    return;
  }
  fetchCountries(value).then(country => {
    if (country.length > 10) {
      error({
        text: 'Please enter a more specific query!',
      });
      return;
    }

    if (country.length > 1) {
      renderMoreCountry(country);
    }

    if (country.length === 1) {
      renderCountry(country);
      success({
        text: 'Country is find!',
      });
    }
  });
};

const inputDebounce = debounce(findCountry, 500);

input.addEventListener('input', inputDebounce);

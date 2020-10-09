import oneCountryTamplate from '../templates/one-country.hbs';
const countryList = document.querySelector('.js-country-wrap');

const renderCountry = country => {
  const murkup = oneCountryTamplate(country);
  countryList.insertAdjacentHTML('beforeend', murkup);
};

export default renderCountry;

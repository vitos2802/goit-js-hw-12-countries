import moreCountry from '../templates/more-country.hbs';
const countryList = document.querySelector('.js-country-wrap');

const renderMoreCountry = country => {
  const murkup = moreCountry(country);
  countryList.insertAdjacentHTML('beforeend', murkup);
};

export default renderMoreCountry;

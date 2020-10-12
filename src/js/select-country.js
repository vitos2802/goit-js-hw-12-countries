import clearList from './clear-list';
import renderCountry from './one-country-markup';
const countryList = document.querySelector('.js-country-wrap');

const selectCountry = country => {
  const list = countryList.querySelector('.country-wrap__list');
  list.addEventListener('click', e => {
    e.preventDefault();
    clearList(countryList);
    const countryName = e.target.textContent.trim();
    const thisCountry = country.find(country => country.name === countryName);
    renderCountry(thisCountry);
  });
};
export default selectCountry;

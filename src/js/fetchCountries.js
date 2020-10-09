const fetchCountries = searchQuery => {
  if (!searchQuery) return;
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => response.json())
    .catch(console.log());
};

export default fetchCountries;

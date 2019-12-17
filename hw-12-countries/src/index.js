import './styles.css';
import countries from './apiCountries';
import templateCountry from './templates/country.hbs';
import templateCountriesList from './templates/countries-list-items.hbs';
import PNotify from 'pnotify/dist/es/PNotify.js';

const debounce = require('lodash.debounce');

const refs = {
  searchInput: document.querySelector('#js-input'),
  countryInfo: document.querySelector('#country-info'),
  countryList: document.querySelector('#js-countries-list'),
};

function inputHandler(e) {
  const searchQuery = e.target.value;
  /* console.dir(searchQuery); */

  countries.fetchCountries(searchQuery).then(data => {
    if (data.length < 2) {
      clearCountryInfo();
      clearCountryList();
      const markup = buildCountryMarkup(data[0]);
      insertCountryInfo(markup);
    } else if (data.length >= 2 && data.length <= 10) {
      clearCountryInfo();
      clearCountryList();
      const listMarkup = buildCountryListMarkup(data);
      insertCountryList(listMarkup);
    } else if (data.length > 10) {
      clearCountryInfo();
      clearCountryList();
      PNotify.error({
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 2000,
      });
    }
  });
}

const debounceInputHandler = debounce(e => {
  inputHandler(e);
}, 1000);

refs.searchInput.addEventListener('input', e => {
  debounceInputHandler(e);
});

function insertCountryInfo(markup) {
  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}
function buildCountryMarkup(country) {
  return templateCountry(country);
}

function buildCountryListMarkup(countryList) {
  return templateCountriesList(countryList);
}
function insertCountryList(markup) {
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}
function clearCountryInfo() {
  refs.countryInfo.innerHTML = '';
}
function clearCountryList() {
  refs.countryList.innerHTML = '';
}

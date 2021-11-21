import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import refs from './js/refs.js';
import { fetchCountries } from './js/fetchCountries.js';
import { renderMarkupCounties, renderMarkupCountry, clearMarkup } from './js/markup.js';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const INFO = 'Too many matches found. Please enter a more specific name.';
const FAILURE = 'Oops, there is no country with that name';

function onCountrySearch(e) {
  const name = e.target.value.trim();

  if (name === '') {
    clearMarkup();
    return false;
  }

  fetchCountries(name)
    .then(country => {
      clearMarkup();
      const numberOfCountries = country.length;

      if (numberOfCountries > 10) return Notify.info(INFO);

      if (numberOfCountries > 1 && numberOfCountries <= 10) {
        renderMarkupCounties(country);
        return;
      }
      refs.countryList.innerHTML = '';
      renderMarkupCountry(country);
    })
    .catch(err => {
      clearMarkup();
      Notify.failure(FAILURE);
    });
}

refs.input.addEventListener('input', debounce(onCountrySearch, DEBOUNCE_DELAY));

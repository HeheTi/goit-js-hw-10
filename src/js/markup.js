import refs from './refs.js';

function createMarkupCounties({ flags, name }) {
  return `<li class="country-list-item">
    <img src="${flags.svg}" alt="${name.official}" />
    <p>${name.official}</p>
    </li>`;
}

function renderMarkupCounties(countries) {
  const countriesString = countries.map(createMarkupCounties).join('');
  refs.countryList.innerHTML = countriesString;
}

function createMarkupCountry(country) {
  const { name, flags, capital, population, languages } = country[0];
  return `<div class="wrapper-title">
  <img src="${flags.svg}" alt="${name.official}" />
  <p class="country-list-title bold">${name.official}</p>
</div>
<p class="country-list-text"><span class="bold">Capital: </span>${capital.join('')}</p>
<p class="country-list-text"><span class="bold">Population: </span>${population}</p>
<p class="country-list-text"><span class="bold">Languages: </span>${Object.values(
    languages,
  ).join()}</p>`;
}

function renderMarkupCountry(array) {
  refs.countryInfo.innerHTML = createMarkupCountry(array);
}
function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

export { renderMarkupCounties, renderMarkupCountry, clearMarkup };

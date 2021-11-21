const BASE_URL = 'https://restcountries.com/v3.1/name';
const OPTIONS = ['name', 'capital', 'population', 'flags', 'languages'].join();

function fetchCountries(nameCountry) {
  return fetch(`${BASE_URL}/${nameCountry}?fields=${OPTIONS}`).then(response => {
    if (response.status === 404) {
      return Promise.reject(new Error('Error'));
    }
    return response.json();
  });
}

export { fetchCountries };

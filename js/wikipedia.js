const selectLanguage = document.getElementById("select-language");
const languageSelected = document.getElementById("language-selected");
const dropdownMoreLanguages = document.getElementById('search-form-2');
const containerSearchForm2 = document.querySelector('.container-search-form-2');
const containerDropdownMoreLanguages = document.querySelector('.container-dropdown-more-languages');
let isClickedDropdown = false

selectLanguage.addEventListener("change", (e) => {
  languageSelected.innerHTML = e.target.value
});

document.addEventListener('DOMContentLoaded', () => {
  languageSelected.innerHTML = selectLanguage.value
})

dropdownMoreLanguages.addEventListener('click', () => {
  isClickedDropdown = !isClickedDropdown;
  
  if (isClickedDropdown) {
    document.querySelector('#search-form-2 svg').style.transform = 'rotate(180deg)';
    containerSearchForm2.classList.add('max-width-80vw')
    containerDropdownMoreLanguages.classList.remove('display-none')
    return;
  }

  document.querySelector('#search-form-2 svg').style.transform = 'rotate(0deg)';
  containerSearchForm2.classList.remove('max-width-80vw')
  containerDropdownMoreLanguages.classList.add('display-none')
})
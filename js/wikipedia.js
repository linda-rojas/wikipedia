const selectLanguage = document.getElementById("select-language");
const languageSelected = document.getElementById("language-selected");

selectLanguage.addEventListener("change", (e) => {
  languageSelected.innerHTML = e.target.value
});

document.addEventListener('DOMContentLoaded', () => {
  languageSelected.innerHTML = selectLanguage.value
})
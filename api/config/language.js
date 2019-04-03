function configureAppLanguage() {
  process.env.osLang = process.env.LANG.substr(0, 5);
}

module.exports = {
  configureAppLanguage
};

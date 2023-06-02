const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gallery-app.vivifyideas.com/',
    env: {
      registeredEmail: "leo@gmail.com",
      validPassword: "12345678",
      baseApiUrl: 'https://gallery-api.vivifyideas.com/api/',
      myGalleriesBtnLabel: 'My Galleries'
    }
  },
});

module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "semi": ["error", "never"],
      "no-param-reassign": ["error", {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "state", // for Vuex mutations
        ]
      }]
    }
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyCHZdzLHv5vagHEXvcLPpbrkwZ3SuQxb6g",
    authDomain: "investment-tracker-5a2f1.firebaseapp.com",
    databaseURL: "https://investment-tracker-5a2f1.firebaseio.com",
    projectId: "investment-tracker-5a2f1",
    storageBucket: "investment-tracker-5a2f1.appspot.com",
    messagingSenderId: "628387636979"
  }
};

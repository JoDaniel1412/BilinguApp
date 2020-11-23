// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://7ddba7b1c8e8.ngrok.io/',
  firebaseConfig: {
    apiKey: 'AIzaSyAN4VT-gnCgDHWwuJwPHH8bZ5kpryR-4Oc',
    authDomain: 'bilinguapp.firebaseapp.com',
    databaseURL: 'https://bilinguapp.firebaseio.com',
    projectId: 'bilinguapp',
    storageBucket: 'bilinguapp.appspot.com',
    messagingSenderId: '230232417298',
    appId: '1:230232417298:web:fb36eac5e722492c4424cb'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

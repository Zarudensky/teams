// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  locales: ['en', 'ru', 'ua'],
  defaultLocale: 'en',
  firebase: {
    apiKey: 'AIzaSyCA6D-uC_WJlk3tRkZDPIzuPGos-dyKBUY',
    authDomain: 'teams-d98f6.firebaseapp.com',
    databaseURL: 'https://teams-d98f6-default-rtdb.firebaseio.com',
    projectId: 'teams-d98f6',
    storageBucket: 'teams-d98f6.appspot.com',
    messagingSenderId: '277595646270',
    appId: '1:277595646270:web:3104ce915cb7a1cecce46f'
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

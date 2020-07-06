// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAdiqwjO8KdSUwNcfyM_or1bAt7rycqfj8',
  authDomain: 'pontoambev-30bc8.firebaseapp.com',
  databaseURL: 'https://pontoambev-30bc8.firebaseio.com',
  projectId: 'pontoambev-30bc8',
  storageBucket: 'pontoambev-30bc8.appspot.com',
  messagingSenderId: '667513701962',
  appId: '1:667513701962:web:083ea0658a2e1d91d888b3',
  measurementId: 'G-4Q2WWXN8JL',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

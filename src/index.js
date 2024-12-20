import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './tailwind.output.css'; // Hapus baris ini karena file tidak ditemukan
import App from './App';
import * as serviceWorker from './serviceWorker';

// Render aplikasi utama ke elemen root
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

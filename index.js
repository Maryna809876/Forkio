import './src/scss/style.scss';
import './src/js/script.js';

function importAll(r) {
  return r.keys().map(r);
  }
  
  const images = importAll(require.context('./src/img', false, /\.(jpe?g|png|gif|svg)$/i));
  
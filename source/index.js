import "./index.scss";
import "normalize.css"
import createMenu from './components/menu/menu';
var menu = createMenu(['Главная','Обо мне','Портфолио'], 'menu');
document.body.appendChild(menu);

console.log("in index.js");
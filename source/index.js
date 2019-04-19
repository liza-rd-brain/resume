import "./index.scss";
import createMenu from './components/avatar/avatar';
var menu = createMenu(['Главная','Обо мне','Портфолио'], 'menu');
document.body.appendChild(menu);
import MainLayout from './layout/main/index.js'
import './index.css';


const root = document.querySelector('#root');

const mainLayoutTemplate = MainLayout();
root.innerHTML = '';
root.append(mainLayoutTemplate);
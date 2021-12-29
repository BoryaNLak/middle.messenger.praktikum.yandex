import MainLayout from './layout/main';
import './index.css';

// const root = document.querySelector('#root');

// const mainLayoutTemplate = MainLayout();
// root.innerHTML = '';
// root.append(mainLayoutTemplate);

function render(query, block): HTMLElement {
  const root = document.querySelector(query);
  root.innerHTML = '';
  root.appendChild(block.getContent());
  return root;
}

const mainLayoutTemplate = MainLayout();
render('#root', mainLayoutTemplate);

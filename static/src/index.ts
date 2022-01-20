import MainLayout from './layout/main';
import './index.css';
import Block from './utils/Block';

function render(query: string, block: Block): HTMLElement | undefined {
  const root: HTMLElement | null = document.querySelector(query);
  if (root instanceof HTMLElement) {
    root.innerHTML = '';
    root.appendChild(block.getContent());
    return root;
  }
  return undefined;
}

const mainLayoutTemplate = MainLayout();
render('#root', mainLayoutTemplate);

const tmpl = `
  <div class="error-window">
    <h1 class="error-window__header">{{ number }}</h1>
    <p class="error-window__message">{{ message }}</p>
    <a href="#" class="error-window__link">Назад к чатам</a>
  </div>
`.trim();

export default tmpl;
const tmpl = `
  <section class="signup">
    <h1 class="signup__header">Регистрация</h1>
    <form class="signup__form">
      <fieldset class="signup__fieldset">
        {{{ emailInput }}}
        {{{ loginInput }}}
        {{{ firstNameInput }}}
        {{{ secondNameInput }}}
        {{{ phoneInput }}}
        {{{ passwordInput }}}
        {{{ confirmPasswordInput }}}
      </fieldset>
      <button type="submit" class="signup__buttom">Зарегистрироваться</button>
    </form>
    <a href="/login" class="signup__link">Войти</a>
  </section>
`.trim();

export default tmpl;

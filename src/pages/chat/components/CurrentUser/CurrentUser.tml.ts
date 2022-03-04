import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `

    <div class="chat__current-user">
      <div class="chat__current-user-info">
        <img src="{{{ avatar }}}" class="chat__current-user-image" alt="current_user"/>
        <p class="chat__current-user-name">{{{ name }}}</p>
      </div>
      {{{ userMenuButton }}}
    </div>
    {{{ dropdownUserMenu }}}

`;
tmpl = trimTemplate(tmpl);
export default tmpl;

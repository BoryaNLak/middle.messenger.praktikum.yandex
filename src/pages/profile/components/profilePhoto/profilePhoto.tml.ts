import { trimTemplate } from '../../../../utils/HandleTemplate';

let tmpl = `
  <img class="profile__photo" src="{{ photo }}" alt="profile_photo"/>
   <p class="profile__photo-title">Поменять аватар</p>
`;
tmpl = trimTemplate(tmpl);
export default tmpl;

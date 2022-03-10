import { v4 as makeUUID } from 'uuid';
import tmpl from './CurrentUser.tml';
import Block from '../../../../utils/Block';
import DropdownMenu from '../../../../components/dropdownMenu';
import UserMenuButton from '../buttons/userMenuButton';
import plusImage from '../../../../../static/icons/plus.svg';
import crossImage from '../../../../../static/icons/cross.svg';

const itemsDropdownTop = [
  {
    icon: plusImage,
    text: 'Добавить пользователя',
  },
  {
    icon: crossImage,
    text: 'Удалить пользователя',
  },
];

type TData = {
  name: string,
  avatar: string,
  handleClickByAddUser: () => void,
  handleClickByRemoveUser: () => void,
}

class CurrentUser extends Block {
  props: TData;

  _id: string;

  children: {
    userMenuButton: UserMenuButton,
    dropdownUserMenu: DropdownMenu,
  };

  constructor(props: TData) {
    super('div', props);
    this._id = makeUUID();
    this.wrapperStyles = 'chat__block chat__block_type_current-user';

    this.children.userMenuButton = new UserMenuButton({
      events: {
        click: () => {
          console.log('click by user menu button');
          this.children.dropdownUserMenu.toggle();
        },
      },
    });
    this.children.dropdownUserMenu = new DropdownMenu({
      wrapperStyles: 'dropdown-menu_type_right dropdown-menu_type_bottom',
      dataItems: [{
        ...itemsDropdownTop[0],
        events: {
          click: () => {
            this.props.handleClickByAddUser();
          },
        },
      },
      {
        ...itemsDropdownTop[1],
        events: {
          click: () => {
            this.props.handleClickByRemoveUser();
          },
        },
      },
      ],
    });
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      userMenuButton: this.children.userMenuButton,
      dropdownUserMenu: this.children.dropdownUserMenu,
    });
  }
}

export default CurrentUser;

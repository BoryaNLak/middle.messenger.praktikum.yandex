import tmpl from './chat.tml';
import Block from '../../utils/Block';
import Contact from './components/contact';
import CreateChatButton from './components/buttons/CreateChatButton';
import CreateChatModal from './components/CreateChatModal';
import MessagesContainer from './components/MessagesContainer';
import { Link } from '../../utils/Router';
import { connect } from '../../utils/Store';
import {
  TStore, TUserInitialValues, TChatInitialValues, TMessageInitialValues, ChatController, MessageController,
} from '../../controllers';
import { TcreateChat } from '../../utils/Api';
import { PATHS } from '../../utils/constants';

function mapStateToProps(state: TStore) {
  const data = {
    user: state.user,
    chats: state.chat,
    messagesData: state.messages,
  };
  return data;
}

type TchatPage = {
  events?: Record<string, () => void>
  user: TUserInitialValues,
  chats: TChatInitialValues,
  messagesData: TMessageInitialValues
}

class Chat extends Block {
  props: TchatPage;

  children: {
    createChatButton: CreateChatButton,
    createChatModal: CreateChatModal,
    profileLink: Link,
    messages: MessagesContainer,
    contacts: Array<Contact>,
  };

  constructor(tag: string, props: TchatPage) {
    super('section', props);
    this.wrapperStyles = 'chats';

    this.children.profileLink = new Link({
      text: 'Профиль',
      to: PATHS.SETTINGS_PATH,
      cssClass: 'chat__link chat__link_type_profile',
    });

    this.children.createChatButton = new CreateChatButton({
      events: {
        click: () => {
          this.children.createChatModal.show();
        },
      },
    });

    this.children.messages = new MessagesContainer({
      messages: this.props.messagesData,
      selectionChat: {
        name: '',
        avatar: '',
        id: 0,
      },
    });

    this.renderChats();

    this.children.createChatModal = new CreateChatModal({
      handle: (value: TcreateChat) => {
        ChatController.createChat(value)
          .then(() => {
            this.renderChats();
          });
      },
    });
  }

  renderChats() {
    this.children.contacts = this.props.chats.map((chat) => (new Contact({
      ...chat,
      events: {
        click: () => {
          MessageController.initChatConnection(this.props.user.id, chat.id);
          this.children.messages = new MessagesContainer({
            selectionChat: { name: chat.title, avatar: chat.avatar, id: chat.id },
            messages: this.props.messagesData,
          });
          MessageController.setUpdater(this.children.messages.rebuildMessageList);
        },
      },
    })));
  }

  componentDidUpdate(oldProps: { [x: string]: any; }, newProps: { [x: string]: any; }): boolean {
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      messages: this.children.messages,
      contacts: this.children.contacts,
      createChatButton: this.children.createChatButton,
      profileLink: this.children.profileLink,
    });
  }
}

export default connect(Chat, mapStateToProps);

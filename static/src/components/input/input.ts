/* eslint-disable default-param-last */
/* eslint-disable camelcase */
import { v4 as makeUUID } from 'uuid';
import tmpl from './input.tml';
import Block from '../../utils/Block';

export type IProps = {
  value?: string
  id?: string,
  label?: string,
  error_message?: string,
  name?: string,
  type?: string,
  isDisable?: boolean,
  required?: string,
  minLen?: number,
  maxLen?: number,
  minVal?: number,
  maxVal?: number,
  pattern?: string,
  isValid?: boolean,
  styles?: {
    label_styles: string,
    input_styles: string,
    error_styles: string
  },
  onInput?: (value:string) => void,
  events?: {
    input?: () => void,
  }
}

class Input extends Block {
  props: IProps;

  _id: string;

  _BASE_ERROR_MESSAGE: string;

  constructor(props: IProps) {
    super('div', props);
    this.wrapperStyles = '';
    this._id = makeUUID();
    this._setBaseEvents();
    this._BASE_ERROR_MESSAGE = 'Пожалуйста, заполните поле';
  }

  _setBaseEvents() {
    this.setProps({
      events: {
        input: () => {
          this.inputValidation();
          if (this.props.onInput) {
            this.props.onInput(this.getValue());
          }
        },
        focusout: () => {
          this.touchValidate();
        },
      },
    });
  }

  _isValidInput() {
    const input = this._getInput();
    if (input) {
      return input.validity.valid;
    }
    return true;
  }

  _getInvalidMessage() {
    const input = this._getInput();
    if (input) {
      return input.validationMessage;
    }
    return '';
  }

  getValue() {
    const input = this._getInput();
    if (input) {
      return input.value;
    }
    return '';
  }

  _isValidDefine() {
    if (this.props.isValid === undefined) {
      return false;
    }
    return true;
  }

  _setCursor() {
    const input = this._getInput();
    if (input) {
      input.focus();
      input.selectionStart = input.value.length;
      input.selectionEnd = input.value.length;
    }
  }

  _getInput(): HTMLInputElement | undefined {
    const input = this.getContent().querySelector('input');
    if (input instanceof HTMLElement) {
      return input;
    }
    return undefined;
  }

  _setInputProperty(input: HTMLInputElement | undefined, property: string, value: string): void {
    if (input) {
      input.setAttribute(property, value);
    }
  }

  inputValidation() {
    const value = this.getValue();
    const validationMessage = this._getInvalidMessage();
    const isValid = this._isValidInput();
    const error_message = (isValid ? validationMessage : validationMessage || this._BASE_ERROR_MESSAGE);
    this.setProps({ isValid, error_message });
    this._setInputProperty(this._getInput(), 'value', value);
    this._setCursor();
  }

  touchValidate() {
    const value = this.getValue();
    const isValidDefine = this._isValidDefine();
    const isValid = isValidDefine ? this.props.isValid : false;
    const error_message = isValid ? '' : this._BASE_ERROR_MESSAGE;
    this.setProps({ isValid, error_message });
    this._setInputProperty(this._getInput(), 'value', value);
  }

  validate(isFormValid = true, errorMessage: string) {
    if (!isFormValid) {
      this.setProps({ isValid: false, error_message: errorMessage });
      return isFormValid;
    }
    const isValidDefine = this._isValidDefine();
    if (!isValidDefine) {
      this.setProps({ isValid: false });
    }
    const { isValid } = this.props;
    return isValid;
  }

  getName(): string {
    const { name } = this.props;
    if (typeof name === 'string') {
      return name;
    }
    return '';
  }

  componentDidUpdate(): boolean {
    return true;
  }

  render() {
    const isValidDefine = this._isValidDefine();
    return this.compile(tmpl, { ...this.props, isValid: isValidDefine ? this._isValidInput() : true });
  }
}

export default Input;

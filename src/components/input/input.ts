/* eslint-disable default-param-last */
/* eslint-disable camelcase */
import { v4 as makeUUID } from 'uuid';
import tmpl from './input.tml';
import Block from '../../utils/Block';
import ErrorMessage from './errorMessage';

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

  _setErrorMessage(errorMessage: string) {
    const error = new ErrorMessage({
      text: errorMessage,
      style: this.props.styles ? this.props.styles.error_styles : '',
    });
    const content = this.getContent();
    const errorDOM = content.querySelector('.error');
    if (errorDOM) {
      errorDOM.replaceWith(error.getContent());
    } else {
      this.getContent().append(error.getContent());
    }
  }

  _removeErrorMessage() {
    const content = this.getContent();
    const errorDOM = content.querySelector('.error');
    errorDOM?.replaceWith('');
  }

  _getValidationMessage():string {
    const input = this._getInput();
    if (input) {
      return input.validationMessage;
    }
    return '';
  }

  _inputValidation():void {
    const isValid = this._isValidInput();
    const message = this._getValidationMessage();
    if (!isValid) {
      this._setErrorMessage(message);
      this._setInvalidStyle();
    } else {
      this._removeErrorMessage();
      this._setValidStyle();
    }
  }

  _setBaseEvents() {
    this.setProps({
      events: {
        input: () => {
          this._inputValidation();
          if (this.props.onInput) {
            const value = this.getValue();
            this.props.onInput(value);
          }
        },
        focusout: () => {
          this._inputValidation();
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

  _setInvalidStyle():void {
    const input = this._getInput();
    if (input) {
      input.classList.add('form-group__input_invalid');
      this._removeValidStyle();
    }
  }

  _removeInvalidStyle():void {
    const input = this._getInput();
    if (input) {
      input.classList.remove('form-group__input_invalid');
    }
  }

  _setValidStyle():void {
    const input = this._getInput();
    if (input) {
      input.classList.add('form-group__input_valid');
      this._removeInvalidStyle();
    }
  }

  _removeValidStyle():void {
    const input = this._getInput();
    if (input) {
      input.classList.remove('form-group__input_valid');
    }
  }

  getValue() {
    const input = this._getInput();
    if (input) {
      return input.value;
    }
    return '';
  }

  _getInput(): HTMLInputElement | undefined {
    const input = this.getContent().querySelector('input');
    if (input instanceof HTMLElement) {
      return input;
    }
    return undefined;
  }

  validate(isFormValid = true, errorMessage: string) {
    if (!isFormValid) {
      this._setErrorMessage(errorMessage);
      return isFormValid;
    }
    const isValid = this._isValidInput();
    const message = this._getValidationMessage();
    if (!isValid) {
      this._setErrorMessage(message || this._BASE_ERROR_MESSAGE);
    }
    return isValid;
  }

  getName(): string {
    const { name } = this.props;
    if (typeof name === 'string') {
      return name;
    }
    return '';
  }

  componentDidUpdate(oldProp: Record<string, string | Block>, newProp: Record<string, string | Block>): boolean {
    if ('isValid' in oldProp || 'isValid' in newProp) {
      return false;
    }
    return true;
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}

export default Input;

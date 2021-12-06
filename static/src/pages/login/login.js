import tmpl from './login.tml';
import InputCredentials from '../../components/inputCredentials';
import { renderDOMElement } from '../../utils/DOMApi';
import { inputsDataLogin } from '../../utils/constants';


export function render(){

  const page = renderDOMElement(tmpl);
  const inputWrapper = page.querySelector('.login__fieldset');

  const handleInput = (value) => {
    console.log(value)
  }

  inputsDataLogin.forEach(data => {
    const inputElement = InputCredentials({ data, onInput: handleInput});
    inputWrapper.append(inputElement);
  })

  return page
}
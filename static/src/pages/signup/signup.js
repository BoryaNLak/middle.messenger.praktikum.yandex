import tmpl from './signup.tml';
import InputCredentials from '../../components/inputCredentials';
import { renderDOMElement } from '../../utils/DOMApi';
import { inputsDataSignup } from '../../utils/constants';


export function render(){

  const page = renderDOMElement(tmpl);
  const inputWrapper = page.querySelector('.signup__fieldset');

  const handleInput = (value) => {
    console.log(value)
  }

  inputsDataSignup.forEach(data => {
    const inputElement = InputCredentials({data, onInput: handleInput});
    inputWrapper.append(inputElement);
  })

  return page
}
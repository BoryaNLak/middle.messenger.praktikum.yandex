import Input from '../components/input';
import Block from './Block';

const FormValidator = (
  formChildren: Record<string, Block>,
  errors?: Record<string, string> | undefined,
): boolean => {
  const formFields: Array<Input> = [];
  Object.keys(formChildren).forEach((key) => {
    if (formChildren[key] instanceof Input) {
      formFields.push(formChildren[key] as Input);
    }
  });
  let isFormValid = true;
  formFields.forEach((field) => {
    const fieldName = field.getName();
    let error = '';
    if (errors) {
      error = errors[fieldName];
    }
    const isFormErorrExist = !!error;
    const isHTMLFieldValid = field.validate(!isFormErorrExist, error);
    if (!isHTMLFieldValid || isFormErorrExist) {
      isFormValid = false;
    }
  });

  return isFormValid;
};

export default FormValidator;

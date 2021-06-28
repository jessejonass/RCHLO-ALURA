import { useState } from 'react';

function createInitialState(validations) {
  const initialState = {};

  for (let v in validations) {
    initialState[v] = {
      valido: true,
      texto: '',
    }
  }
  return initialState;
}

export default function useErrors(validations) {
  const initialState = createInitialState(validations);
  
  const [errors, setErrors] = useState(initialState);

  function validateFields(e) {
    const { name, value } = e.target;
    const newState = {...errors};
    newState[name] = validations[name](value)
    setErrors(newState);
  }

  function isValid() {
    for (let e in errors) {
      if (!errors[e].valido) {
        return false;
      }
    }
    return true;
  }

  return [errors, validateFields, isValid];
}

import { useState } from 'react';

function useForm(valoresIniciais){
    const [values, setValues ] = useState(valoresIniciais);
  
    function setValue(key, valor) {
      setValues({
        ...values,
        [key]: valor, //nome: 'valor'
      })
    }
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }
  
    function clearForm(valoresIniciais){
      setValues(valoresIniciais);
    }
  
    return {
      values,
      handleChange,
      clearForm,
    };
  }

  export default useForm;
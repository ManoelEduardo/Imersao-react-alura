import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);



  useEffect(()=>{
    const URL_back_end = 'http://localhost:3200/categorias';
    fetch(URL_back_end)
    .then(async (data)=>{
      const result = await data.json();
      setCategorias([
        ...result,
      ]);
    });
  }, []);
  

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        clearForm(valoresIniciais);
      }}>

        <FormField
          label="Título da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 &&(
        <div>
          Loading...
        </div>
      )}
     

      <ul>
        {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
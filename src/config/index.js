const URL_BACK_END = window.location.hostname.includes('localhost')
? 'http://localhost:8080/categorias'
: 'https://imersao-react.herokuapp.com/categorias';

export default {
    URL_BACK_END,
};
const URL_BACK_END = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://imersao-react.herokuapp.com';

export default {
    URL_BACK_END,
};
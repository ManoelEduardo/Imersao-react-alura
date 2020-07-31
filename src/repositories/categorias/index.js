import config from '../../config';

const URL_CATEGORIAS = `${config.URL_BACK_END}/categorias`;

function getAll() {

    return fetch(`${URL_CATEGORIAS}`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const result = await respostaDoServidor.json();
                return result;
            }
            throw new Error('Não foi possível encontrar o servidor!')
        });
}

function getAllWithVideos() {

    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const result = await respostaDoServidor.json();
                return result;
            }
            throw new Error('Não foi possível encontrar o servidor!')
        });
}

export default {
    getAllWithVideos,
    getAll,
}; 
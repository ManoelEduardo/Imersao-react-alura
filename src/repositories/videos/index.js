import config from '../../config';

const URL_VIDEOS = `${config.URL_BACK_END}/videos`;

function create(objetoDoVideo) {

    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const result = await respostaDoServidor.json();
                return result;
            }
            throw new Error('Não foi possível cadastrar o servidor!')
        });
}

export default {
    create,
}; 
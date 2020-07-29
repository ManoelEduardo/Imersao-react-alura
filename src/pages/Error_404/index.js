import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../assets/img/emoji-404.png';
import PageDefault from '../../components/PageDefault';
import './error404.css'

function Error404(){
    return (
      <PageDefault>
        <div className="error">
            <img className="Error404" src={error404} alt="Emoji erro 404" />
            <h2>Ops! Page Not Found.</h2>
        
            <Link to="/">
                Ir para a home
            </Link>
        </div>
      </PageDefault>
    )
  }

  export default Error404;
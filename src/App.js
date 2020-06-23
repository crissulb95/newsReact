import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';

function App() {
  
  //definir la categoría y noticias
  const [ categoria, updateCategoria ] = useState('');
  const [ noticias, updateNoticias ] = useState([]);

  useEffect( () => {
    const consultaApi = async () => {
      
      const apikey = 'ccb5d02e9aa74ce7a877e4bce5a4ae61';  
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apikey}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      updateNoticias(noticias.articles);
      
    };
    
    consultaApi();
  }, [categoria] );

  return (
    <Fragment>
      <Header 
        titulo='Buscador de noticias'
      />

      <div className='container white'>
        <Formulario
          updateCategoria={updateCategoria}
        />
      </div>
      <Noticias 
        noticias={noticias}
      />
    </Fragment>
  );
}

export default App;

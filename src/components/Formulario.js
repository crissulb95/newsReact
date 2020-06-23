import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';

const Formulario = ({updateCategoria}) => {

    const apikey = 'ccb5d02e9aa74ce7a877e4bce5a4ae61';
    
    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deporte' },
        { value: 'technology', label: 'Tecnología' }
    ];

    //utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect( 'general', OPCIONES )

    //al hacer submit al form, pasar la categoria al app.js
    const handleSubmit = e => {
        e.preventDefault();
        updateCategoria(categoria); 
    };

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias />
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;
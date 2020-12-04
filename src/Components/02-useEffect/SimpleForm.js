import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // Se dispara solamente por primera vez
    useEffect(()=>{
        // console.log('First time baby!');
    },[]);

    // Cada vez que ocurra un cambio en este hook se dispara el siguiente
    useEffect(()=>{
        // console.log('Cambio el email');
    },[formState]);

    // Cada vez que ocurra un cambio en el email
    useEffect(()=>{
        // console.log('Cambio en el email');
    },[email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ] : target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange = { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electronico"
                    autoComplete="off"
                    value={ email }
                    onChange = { handleInputChange }
                />
            </div>

            { (name === '123' ) && <Message/> }

        </>
    )
}

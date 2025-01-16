import React, {useState} from 'react';
import data from './db/data.js';

/* CardUserComponent è un componente completo di stato (proprietà) e funzioni (metodi) */
const CardUserComponent = () => {
    const [users, setUsers] = useState(data);

    const removeItem = (id) => {
        //filter filtra dell'array solo gli elementi u tale che soddisfano la condizione u.id!=id passato
        let usersRemained = users.filter( u => u.id !== id);
        //quindi nell'array users rimarranno tutti tranne l'utente con id passato
        setUsers(usersRemained);
    }

    return (
        <>
        {
            users.map( (user) => { //scorre tutti gli elem dell'array users
                const {id, cognome, nome, ruolo, foto} = user;
                //console.log(cognome, nome);
                return (
                    <div id={id} style={{width: '18rem;', margin: '0 auto'}} className='border border-dark rounded card'>
                        <img src={foto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{cognome} &nbsp; {nome}</h5>
                            <p class="card-text" style={{color: 'blue'}}>{ruolo}</p>
                            <a href="/" className="btn btn-outline-primary">Dettagli</a> &nbsp;
                            <button className='btn btn-outline-danger' onClick={ () => removeItem(id) }>Elimina</button>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
};

export default CardUserComponent;
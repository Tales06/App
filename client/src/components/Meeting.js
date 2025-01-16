import React from 'react';
import './Meeting.css';

import {useState, useEffect} from 'react';
import axios from 'axios';
//import cors from 'cors';

//dinamicizzare
import photoUser123 from '../img/user-photo-profile/user123.webp';
import deleteIcon from '../img/delete-icon.png';
import modifyIcon from '../img/modify-icon.png';
import addNewMeetIcon from '../img/add-icon.jpg';

//import pathPhotoUsers from '../img/user-photo-profile/';

const Meeting = () => { //componente Meeting (che occupa la sezione content)

    /* gestione dello stato del componente Meeting - controllato da noi in base alle operazioni fatte dall'utente */
    //const [dataMeetings, setDataMeetings] = useState([]);
    const [dataMeetings, setDataMeetings] = useState([]);

    /* gestione dello stato per effetto di cambiamenti dall'esterno (in questo caso arrivo di dati provenienti da un database) */
    useEffect( () => {
        listMeettings();
    }, []);

    const listMeettings = async () => {
        const res = await axios.get('http://localhost:3001/api/meetings')
        setDataMeetings(res.data)
    }

    const showDateTime = (dataOraMySQL, orario) => {
        let dateTimeMeet = new Date(dataOraMySQL);
        let today = new Date();

        let diff = Math.floor((dateTimeMeet - today) / (1000 * 60 * 60 * 24));
        if (diff === 0) { //in giorni
            return 'Oggi, ore '+orario;
        } else if (diff === 1) {
            return 'Domani, ore '+orario;
        } else {
            return 'Tra '+diff+' giorni';
        }
    }

    const setClassImportant = (flagImportant) => {
        if (flagImportant) return 'appuntamento importante'; else return 'appuntamento';
    }

    const removeMeeting = (id) => {
        axios.delete(`http://localhost:3001/api/meetings/delete/${id}`)
        let newDataMeetings = dataMeetings.filter(meet => meet.ID !== id)
        setDataMeetings(newDataMeetings);
    }

    const updateMeeting = (id) => {
        axios.put(`http://localhost:3001/api/meetings/update/${id}`)
        //... completare ...
    }

    return (

        <div id="content">

          <span style={{float:'left'}} >
            <a id='linkAddMeet' href='/meetings/add'>
                <img src={addNewMeetIcon} alt='meetIcon' />Aggiungi
            </a>
          </span>
          <h3 style={{display:'inline',float:'center' }}>Appuntamenti</h3>
          <br /><br />

            {/* <div> prova semplice per introdurre
            {
                dataMeetings.map((meeting, index) => {
                    return (
                        <ul key={index}>
                            <li>{meeting.id}</li>
                            <li>{meeting.descrizione}</li>
                        </ul>
                    )
                })
            }
            </div> */}

            {
                //la map scansiona un array
                //parametri: l'elemento puntato <meet> (in questo caso) e l'<indice> con cui identificare un component
                dataMeetings.map((meet, index) => {

                    return (
                        <>
                         <div className={setClassImportant(meet.importante)} key={index}>
                             <div style={{width: '8%', float:'left', textAlign:'left'}}>
                                 <img src={`http://localhost:3000/user-photo-profile/${meet.foto_profilo}`} class="rounded-circle" alt="" title="Nunzio Galati" width="60" height="60" />
                             </div>
                             <div style={{width: '87%', float: 'right', textalign:'left', overflow: 'auto'}}>
                                 <span style={{fontWeight:'bold'}}>
                                     {meet.titolo}</span>
                                     <br />
                                     <span style={{color:'gray'}}>
                                     {
                                         showDateTime(meet.data_ora, meet.orario)
                                     }
                                 </span>
                                 <br />
                                 <span>{meet.descrizione}</span>
                             </div>
                             <div style={{width:'5%', verticalAlign:'middle'}}>
                                 <a href='/'><img src={deleteIcon} onClick={() => removeMeeting(meet.ID)} alt="" title={"Elimina defintivamente il meet"} /></a><br /><br />
                                 <a href="/"><img src={modifyIcon} onClick={() => updateMeeting(meet.ID)} alt="" title={"Modifica meet"} width="30" height="30" /></a>
                             </div>
                         </div><br />
                        </>
                     );
                })
            }

            {/* <div className="appuntamento">
                <div style={{width: '8%', float:'left', textAlign:'left'}}>
                    <img src={photoUser123} class="rounded-circle" alt="" title="Nunzio Galati" width="60" height="60" />
                </div>
                <div style={{width: '87%', float: 'right', textalign:'left', overflow: 'auto'}}>
                    <span style={{color:'gray', fontWeight:'bold'}}>Domani, ore 17:45</span><br />
                    <span>Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti
                    </span>
                </div>
                <div style={{width:'5%', verticalAlign:'middle'}}>
                    <a href="./meetings/delete/123"><img src={deleteIcon} alt="" title={"Elimina defintivamente il meet"} /></a><br /><br />
                    <a href="#"><img src={modifyIcon} alt="" title={"Modifica meet"} width="30" height="30" /></a>
                </div>
            </div><br />

            <div className="appuntamento importante">
                <div style={{width: '8%', float:'left', textAlign:'left'}}>
                    <img src={photoUser123} class="rounded-circle" alt="" title="Nunzio Galati" width="60" height="60" />
                </div>
                <div style={{width: '87%', float: 'right', textalign:'left', overflow: 'auto'}}>
                    <span style={{color:'gray', fontWeight:'bold'}}>Domani, ore 17:45</span><br />
                    <span>Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti
                    </span>
                </div>
                <div style={{width:'5%', verticalAlign:'middle'}}>
                    <a href="./meetings/delete/234"><img src={deleteIcon} alt="" title="Elimina defintivamente il meet" /></a><br /><br />
                    <a href="#"><img src={modifyIcon} alt="" title="Modifica meet" width="30" height="30" /></a>
                </div>
            </div><br />

            <div className="appuntamento">
                <div style={{width: '8%', float:'left', textAlign:'left'}}>
                    <img src={photoUser123} class="rounded-circle" alt="" title="Nunzio Galati" width="60" height="60" />
                </div>
                <div style={{width: '87%', float: 'right', textalign:'left', overflow: 'auto'}}>
                    <span style={{color:'gray', fontWeight:'bold'}}>Domani, ore 17:45</span><br />
                    <span>Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti
                    </span>
                </div>
                <div style={{width:'5%', verticalAlign:'middle'}}>
                    <a href="./meetings/delete/345"><img src={deleteIcon} alt="" title="Elimina defintivamente il meet" /></a><br /><br />
                    <a href="#"><img src={modifyIcon} alt="" title="Modifica meet" width="30" height="30" /></a>
                </div>
            </div><br />

            <div className="appuntamento">
                <div style={{width: '8%', float:'left', textAlign:'left'}}>
                    <img src={photoUser123} class="rounded-circle" alt="" title="Nunzio Galati" width="60" height="60" />
                </div>
                <div style={{width: '87%', float: 'right', textalign:'left', overflow: 'auto'}}>
                    <span style={{color:'gray', fontWeight:'bold'}}>Domani, ore 17:45</span><br />
                    <span>Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti
                    </span>
                </div>
                <div style={{width:'5%', verticalAlign:'middle'}}>
                    <a href="./meetings/delete/345"><img src={deleteIcon} alt="" title="Elimina defintivamente il meet" /></a><br /><br />
                    <a href="#"><img src={modifyIcon} alt="" title="Modifica meet" width="30" height="30" /></a>
                </div>
            </div><br /> */}

        </div>
    );
}
export default Meeting;
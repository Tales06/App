import React, {useState, useEffect} from 'react';
import './AddNewMeetForm.css';
import axios from 'axios';

import MaterialDesignSwitch from './MaterialDesignSwitch.js';
import ControlDateTime from './ControlDateTime.js';
import moment from 'moment'; //libreria per date e orari


/* per l'oggetto datetime */
//import dayjs from 'dayjs';
//import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
//import 'react-datepicker.js';
//import "react-datepicker/src/stylesheets/datepicker.scss";

//import 'react-datepicker/dist/react-datepicker.css'
//import "react-datepicker/dist/react-datepicker.css";
//  <link rel="stylesheet"  href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" /> 

//require("react-datepicker/dist/react-datepicker-cssmodules.css");
//import 'https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css';

//alert(moment().format('YYYY-MM-DD hh:mm'));

const AddNewMeetForm = () => {
 
    /*const [newMeet, setNewMeet] = useState({
        contatto: '',
        titolo: '',
        descrizione: '',
        dataOra: '2000-01-12 09:30',
        importante: false
    });
    const {contatto, titolo, descrizione, dataOra, importante} = newMeet;*/

    let payload = {
        //id: dataMeetings.length + 1,
        contatto: '',
        titolo: '',
        descrizione: '',
        dataOra: moment().format('YYYY-MM-DD hh:mm'), //di default now
        importante: false
    };

    const [newMeet, setNewMeet] = useState(payload);

    const [dateSelectedInput, setDateSelectedInput] = useState(new Date());
    
    const handleOnChange = (event) => {

        //setNewMeet({ ...setNewMeet, [e.target.name]: e.target.value });
        /*alert('change value campo:'+e.target.id+'nuovo valore:'+e.target.value);*/
        if (event.target.id === 'inputContatto')
            newMeet.contatto = event.target.value;
        else if (event.target.id === 'inputTitolo') {
            newMeet.titolo = event.target.value;
            /*if (objNewMeet.titolo.length > 0) {
                e.target.style.background='red';
            } provare*/
        } else if (event.target.id === 'inputDescrizione') {
            newMeet.descrizione = event.target.value;
        } 
        
        //aggiorna stato 
        setNewMeet(newMeet);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:3001/api/meetings/add';
        //console.log(newMeet);
        const res = axios.post(url, newMeet)
        .then(res => console.log(res.data))
        .catch( (err) => {
            console.log('Errore registrazione appuntamento');
        })
    }

    //let switchState; passato come parametro al componente <MaterialDesignSwitch switchState={switchState} />
    //ma cosi non va perchè la var è readonly. Soluzione con funzione
    //const [important, setImportant] = useState(false);
    //dopo aver definito lo stato
    const handleCallbackToggleSwitchImportant = (checked) => {
        //alert('ricevuto: child (interruttore) => parent (form) ');
        newMeet.importante = checked;
        setNewMeet(newMeet); //aggiorna stato
    }

    /* come per il toggleSwitch serve per gestire i passaggio dei dati al contrario
       parente <= child (ossia ricevere l'output dal sotto-componente) */
    const handleCallbackDateTimeControl = (dateSelectedInput) => {       
        newMeet.dataOra = dateSelectedInput;
        setNewMeet(newMeet); //aggiorna stato
    }


    return (

        <>
        
        {/* gestione finestra modal di info inserimento avvenuto */}
        <div className="modal" tabindex="-1" role="dialog" style={{backColor:'red'}}>
            <div className="modalDialog" role="document">
                <div className="modalContent">
                    <div className="modalHeader">
                    <h5 className="modalTitle">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modalBody">
                    <p>Modal body text goes here.</p>
                    </div>
                    <div className="modalFooter">
                    <button type="button" className="btn btnPrimary">Save changes</button>
                    <button type="button" className="btn btnSecondary" dataDismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
  
        <div id='formAddNewMeet'>
            <h4 style={{display: 'block', textAlign: 'center'}}>Nuovo appuntamento</h4>
            
            <form method='post' onSubmit={handleSubmit}> 
                {/* <form method='post' action='http://localhost:3001/api/meetings/add' enctype="multipart/form-data"> non va!*/}
                Contatto     
                <select id='inputContatto' onChange={handleOnChange} class="form-select" aria-label="Default select example">
                    <option selected>Seleziona contatto</option>
                    <option>bianchipaola@yahoo.it</option>
                    <option>g.verdi2000@gmail.com</option>
                    <option value='rmaria@tiscali.it'>rmaria@tiscali.it</option>
                </select>
                <br />
                {/* titolo */}
                <div class="mb-3">
                    <label for="inputTitolo" class="form-label">Titolo</label>
                    <input type="text" onChange={handleOnChange} class="form-control" id="inputTitolo" aria-describedby="titoloHelp" />
                    <div id="titoloHelp" class="form-text">Inserisci qui un'eventuale nota sintetica riguatdo il meeting.</div>
                </div>
                {/* descrizione */}
                <span class="form-label">Descrizione</span>
                <div class="form-floating">                   
                    <textarea class="form-control" id="inputDescrizione" onBlur={handleOnChange} style={{height: '100px'}}></textarea>
                    <div id="descrizioneHelp" class="form-text">Inserisci qui un'eventuale descrizione più dettagliata del meeting.</div>
                </div>
                <br />
                {/* !!!<MaterialDesignSwitch /> */}
                {/* <MaterialDesignSwitch getStateToggleSwitch={getStateToggleSwitch} /> */}
                <MaterialDesignSwitch parentCallback={handleCallbackToggleSwitchImportant} />
                <br />

                {/* <DateTimePickerComponent /> */}
                <ControlDateTime 
                    parentCallback={handleCallbackDateTimeControl}
                />
                <br /><br /><br />

                <button type='submit' className='btn btn-success' style={{backColor:'#0B9040'}}>Salva</button>
            </form>
        </div>
        </>
    )
}

export default AddNewMeetForm;
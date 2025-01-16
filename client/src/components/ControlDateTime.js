import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import { setDefaultLocale } from "react-datepicker";
//setDefaultLocale('it');

// CSS Modules, react-datepicker-cssmodules.css// 
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ControlDateTime = (props) => {  
      
    //const maxdate = new Date(2023,8,20,0,0,0);
    const limiteMax = 5;
    const adesso = new Date();
    let maxdate = adesso.setDate(adesso.getDate() + limiteMax);

    const [dateSelected, setDateSelected] = useState(new Date());

    const handleChange = (dateSelected) => {
        //const dateIT = new Date(dateSelected).toLocaleDateString('it-IT');
        setDateSelected(dateSelected);
        //alert('data selezionata:' + dateIT);
        props.parentCallback(dateSelected);
    }

    console.log(dateSelected);

    return (    
        <DatePicker 
            selected={dateSelected}  
            onChange={handleChange} 
            //l'aggiunta delle seguenti props <=> integrare al componente anche il controllo dell'orario                 
            //dateFormat="Pp"
            dateFormat="dd/MM/yyyy hh:mm"       
            showTimeSelect        
            //timeFormat="p"
            minDate={new Date()} 
            maxDate={maxdate}  
        />  
   );
};

export default ControlDateTime;
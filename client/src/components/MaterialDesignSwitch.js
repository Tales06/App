import React, { useState } from "react";
//import ReactSwitch from "react-switch";
import "./MaterialDesignSwitch.css";

import { Component } from "react";
import Switch from "react-switch";

/* copiata dalla libreria (conviene convertirla in componente funzionale) */
class MaterialDesignSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.props.parentCallback(checked);
    this.setState({ checked });
    //alert('checked='+checked);
    //objNewMeet.importante = true; 
    //this.props.switchState = checked;   child => parent non possibile in questo modo
  }

  render() {
    return (
      <div>
        <label>
          <span>normale</span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#ff7f50"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={25}
            width={48}
            className="react-switch"
            id="material-switch"
          />
          <span>importante</span>
        </label>
      </div>
    )
  }
} 
 
export default MaterialDesignSwitch;
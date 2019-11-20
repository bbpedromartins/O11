/*
*********************************************
* LIBRARY NAME  : OB11_CORE
* VERSION       : 20.11.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_core.js
* SITE          : 
* LICENSE       : 
*********************************************
*/

"use strict";

const RED      = "rgba(255,000,000,1.0)";
const LIME     = "rgba(000,255,000,1.0)";
const BLUE     = "rgba(000,000,255,1.0)";
const BLACK    = "rgba(000,000,000,1.0)";
const WHITE    = "rgba(255,255,255,1.0)";
const YELLOW   = "rgba(255,255,000,1.0)";
const CYAN     = "rgba(000,255,255,1.0)";
const AQUA     = "rgba(000,255,255,1.0)";
const MAGENTA  = "rgba(255,000,255,1.0)";
const FUCHSIA  = "rgba(255,000,255,1.0)";
const SILVER   = "rgba(192,192,192,1.0)";
const GRAY     = "rgba(128,128,128,1.0)";
const GREY     = "rgba(128,128,128,1.0)";
const MARROON  = "rgba(128,000,000,1.0)";
const OLIVE    = "rgba(128,128,000,1.0)";
const GREEN    = "rgba(000,128,000,1.0)";
const PURPLE   = "rgba(128,000,128,1.0)";
const TEAL     = "rgba(000,128,128,1.0)";
const NAVY     = "rgba(000,000,128,1.0)";
const ORANGE   = "rgba(255,165,000,1.0)";

/* 
*************************************************************************
* Object O11_prop
*************************************************************************
*/
class O11_prop {
  constructor() {
    this.value = undefined;
  }
  
  set(value) {
    this.value = value;
  }
  
  get() {
    return this.value;
  }
} // end O11_prop
  
/* 
*************************************************************************
* Object O11_obj
*************************************************************************
*/
class O11_obj {
  constructor() {
    this.p_id = new O11_prop();
    this.p_parentid = new O11_prop();
    this.p_name = new O11_prop();
    this.p_type = new O11_prop(); 

    // object properties defaults  
    this.p_id.set(undefined);
    this.p_parentid.set(undefined);
    this.p_name.set("obj");
    this.p_type.set(""); 
  }
    
  set_div(id, parentid) {
    let parentcontainer, newcontainer, att;

    if (parentid === undefined) {
      parentcontainer = document.getElementById("body");
      this.p_parentid.set("body");
    } else {
      parentcontainer = document.getElementById(parentid);
      this.p_parentid.set(parentid);
    }

    newcontainer = document.createElement("div");
    att = document.createAttribute("id");

    att.value = id;

    newcontainer.setAttributeNode(att);
    parentcontainer.appendChild(newcontainer);
  }  
} // end O11_obj

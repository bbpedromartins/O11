/*
*********************************************
* OBJECT NAME   : O11_audio
* VERSION       : 31.12.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_audio.js
* SITE          : o11.pt
* LICENSE       : o11.pt
*********************************************
*/

/* 
*************************************************************************
* Object O11_audio
*************************************************************************
*/

class O11_audio {

    constructor() {
      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();
      this.p_audio = new O11CORE_audio();
      
      // object properties defaults
      this.p_align.set_locate("middlecenter");
    
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("audio" + globalobjid);
      }
    
    }  
  
    render() {
      let container;
  
  
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
      container = document.getElementById(this.p_obj.p_id.get());
      this.p_align.set_prop2container(container);
  
      this.p_audio.set_prop2container(container);
      container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "audio");
    }
  
  } 
  // end O11_audio
/*
*********************************************
* OBJECT NAME   : O11_image
* VERSION       : 24.11.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_image.js
* SITE          : obj11.com
* LICENSE       : obj11.com
*********************************************
*/

/* 
*************************************************************************
* Object O11_image
*************************************************************************
*/
class O11_image {
  constructor() {
    this.p_obj = new O11CORE_obj();
    this.p_align = new O11CORE_align();
    this.p_image = new O11CORE_image();
     
    // object properties defaults
    this.p_align.set_locate("middlecenter");
  
  
    globalobjid = globalobjid + 1;
  
    if (this.p_obj.p_id.get() === undefined) {
      this.p_obj.p_id.set("image" + globalobjid);
    }
  }  
  
  render() { 
    let container;
  
    this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
    container = document.getElementById(this.p_obj.p_id.get());
  
    this.p_align.set_prop2container(container);
  
    this.p_image.set_prop2container(container);
    container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "img");
  }  
} 
// end O11_image
  
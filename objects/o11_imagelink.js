/*
*********************************************
* OBJECT NAME   : O11_imagelink
* VERSION       : 31.12.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_imagelink.js
* SITE          : o11.pt
* LICENSE       : o11.pt
*********************************************
*/

/* 
*************************************************************************
* Object O11_imagelink
*************************************************************************
*/

class O11_imagelink {

    constructor() {
      this.p_obj = new O11CORE_obj();
      this.p_imagealt = new O11CORE_prop();
      this.p_filepath = new O11CORE_prop();
      this.p_align = new O11CORE_align();
      this.p_link = new O11CORE_link();
      this.p_size = new O11CORE_size();

  
      // object properties defaults
      this.p_align.set_locate("middlecenter");
  
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("imagelink" + globalobjid);
      }
  
    }  
  
    render() {
      let container, container2;
  
      
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
      container = document.getElementById(this.p_obj.p_id.get());

      //p_align
      this.p_align.set_prop2container(container);
      
      //p_link
      this.p_link.set_prop2container(container);

      //p_size
      this.p_size.set_prop2container(container);

      container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "a");
  
      container2 = document.getElementById(this.p_obj.p_id.get()+ "a");

      container2.innerHTML="<img src='"+this.p_filepath.get()+"'"+
      " alt='"+this.p_imagealt.get()+"'"+ 
      " width='"+this.p_size.p_width.get()+"'"+
      " height='"+this.p_size.p_height.get()+"'"+"/>"

      container2.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "img");
  
    }
  
  } 
  // end O11_imagelink
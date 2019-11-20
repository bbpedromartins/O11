/*
*********************************************
* OBJECT NAME   : O11_tile
* VERSION       : 20.11.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_page.js
* SITE          : obj11.com
* LICENSE       : obj11.com
*********************************************
*/

/* 
*************************************************************************
* Object O11_tile
*************************************************************************
*/
class O11_tile {
 
    constructor(id) {
      this.p_obj = new O11_obj();
      this.p_align = new O11_align();
      this.p_bgcolor= new O11_backgroundcolor();
      this.p_bggradient = new O11_gradient();
      this.p_size = new O11_size();
      this.p_bgimage = new O11_backgroundimage();
      this.p_bgvideo = new O11_backgroundvideo();
      this.p_option = new O11_prop();
      this.p_overflow = new O11_prop();
  
      // object properties defaults
      this.p_option.set("bgcolor");
      this.p_size.p_height.set("64px");
      this.p_size.p_width.set("100%");
      this.p_overflow.set("auto");
  
  
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("tile" + globalobjid);
      }
  
    } 
  
    render() { 
      let container;
    
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
      container = document.getElementById(this.p_obj.p_id.get());
  
      this.p_size.set_prop2container(container);
      
      this.p_align.set_prop2container(container);
  
      container.style.overflow = this.p_overflow.get();
      
      switch (this.p_option.get()) {
        case "bgcolor":
          this.p_bgcolor.set_prop2container(container);
          break;
        case "bggradient":
          this.p_bggradient.set_prop2container(container);
          break;
        case "bgimage":
          this.p_bgimage.set_prop2container(container);
          break;
        case "bgvideo":
          this.p_bgvideo.set_prop2container(container);  
          break;
      }
  
    }
  }  // end O11_tile

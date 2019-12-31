/*
*********************************************
* OBJECT NAME   : O11_tile
* VERSION       : 31.12.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_tile.js
* SITE          : o11.pt
* LICENSE       : o11.pt
*********************************************
*/

/* 
*************************************************************************
* Object O11_tile
*************************************************************************
*/
class O11_tile {
 
    constructor(id) {
      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();
      this.p_bgcolor= new O11CORE_backgroundcolor();
      this.p_bggradient = new O11CORE_gradient();
      this.p_size = new O11CORE_size();
      this.p_bgimage = new O11CORE_backgroundimage();
      this.p_bgvideo = new O11CORE_backgroundvideo();
      this.p_option = new O11CORE_prop();
      this.p_overflow = new O11CORE_prop();
  
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
  }  
  // end O11_tile
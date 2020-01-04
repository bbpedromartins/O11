/* 
*************************************************************************
* Object O11_tile
*************************************************************************
*/

class O11_tile {
 
    constructor(id) {
      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();

      this.p_backcolor= new O11CORE_backcolor();

      //gradient
      this.p_backgradientcolor1 = new O11CORE_color();
      this.p_backgradientcolor2 = new O11CORE_color();
      this.p_backgradientdirection = new O11CORE_prop();
      
      this.p_size = new O11CORE_size();
      this.p_backimage = new O11CORE_backimage();
      this.p_backvideo = new O11CORE_video();
      this.p_option = new O11CORE_prop();
      this.p_overflow = new O11CORE_prop();
  
      // object properties defaults
      this.p_option.set("bgcolor");
      this.p_size.p_height.set("64px");
      this.p_size.p_width.set("100%");
      this.p_overflow.set("auto");

      //gradient
      this.p_backgradientcolor1.set_rgbacolor(0,0,0,1.0);
      this.p_backgradientcolor2.set_rgbacolor(255,255,255,1.0);
      this.p_backgradientdirection.set("180deg");
 
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("tile" + globalobjid);
      }
  
    } 
  
    render() { 
      let container, style;
    
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
      container = document.getElementById(this.p_obj.p_id.get());
  
      //p_size
      this.p_size.set_prop2container(container);
      
      //p_align
      this.p_align.set_prop2container(container);
  
      container.style.overflow = this.p_overflow.get();
      
      switch (this.p_option.get()) {
        case "backcolor":
          //p_backcolor
          this.p_backcolor.set_prop2container(container);
          break;
        case "backgradient":
          //p_backgradient...
          style = "linear-gradient(" + this.p_backgradientdirection.get() + ", " +
          this.p_backgradientcolor1.get_rgbacolor() + ", " + 
          this.p_backgradientcolor2.get_rgbacolor() + ") no-repeat";
          container.style.background = style;
          break;
         
        case "backimage":
          //p_backimage
          this.p_backimage.set_prop2container(container);
          break;
        case "backvideo":
          //p_backvideo
          this.p_backvideo.set_prop2container(container);  
          break;
      }
  
    }
  }  
  // end O11_tile
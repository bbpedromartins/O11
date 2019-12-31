/*
*********************************************
* OBJECT NAME   : O11_tile
* VERSION       : 31.12.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_textlink.js
* SITE          : o11.pt
* LICENSE       : o11.pt
*********************************************
*/

/* 
*************************************************************************
* Object O11_textlink
*************************************************************************
*/
class O11_textlink {

    constructor() {
      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();
      this.p_font = new O11CORE_font;
      this.p_text = new O11CORE_text(); 
      this.p_link = new O11CORE_link();
      this.p_decoration = new O11CORE_prop();
      this.p_textcolor_mouseout = new O11CORE_color();
      this.p_textcolor_mouseover = new O11CORE_color();
      
      // object properties defaults
      this.p_align.set_locate("middlecenter");
      this.p_text.set("mylink");
      this.p_textcolor_mouseout.set_rgbacolor(93,173,236,1.0);
      this.p_textcolor_mouseover.set_rgbacolor(255,255,255,1.0);
      this.p_decoration.set("none");
  
  
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("textlink" + globalobjid);
      }
  
  
    }  
  
    render() {
      let container, container2;
  
  
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
      container = document.getElementById(this.p_obj.p_id.get());
  
      this.p_align.set_prop2container(container);
      
      this.p_link.set_prop2container(container);
  
  
      container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "a");
      container.firstElementChild.textContent = this.p_text.get();
  
      container2 = document.getElementById(this.p_obj.p_id.get() + "a");
  
      this.p_font.set_prop2container(container2);
      
      //link ini color
      container2.style.color = this.p_textcolor_mouseout.get_rgbacolor();
      
      container2.style.textDecoration = this.p_decoration.get();
  
      container2.onmouseover = this.set_mouseover(container2);
      container2.onmouseout = this.set_mouseout(container2);

      
  
    }
  
    set_mouseover(container) {
      let that;
  
      that = this;
  
      return function () {
          container.style.cursor = "pointer";
          container.style.color = that.p_textcolor_mouseover.get_rgbacolor();
      }
    }
  
    set_mouseout(container) {
      let that;
  
      that = this;
  
      return function () {
          container.style.cursor = "pointer";
          container.style.color = that.p_textcolor_mouseout.get_rgbacolor();
      }
    }
  
  } 
  // end O11_textlink
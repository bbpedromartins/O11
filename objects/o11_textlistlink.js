/*
*********************************************
* OBJECT NAME   : O11_tile
* VERSION       : 31.12.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_textlistlink.js
* SITE          : o11.pt
* LICENSE       : o11.pt
*********************************************
*/

/* 
*************************************************************************
* Object O11_textlistlink
*************************************************************************
*/
class O11_textlistlink {
    constructor() {
      this.p_textlist = []; 
  
  
      this.p_display = "block";
  
      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();
  
      // for all
      this.p_textcolor_mouseselected = new O11CORE_color();
      this.p_textcolor_mouseout = new O11CORE_color();
      this.p_textcolor_mouseover = new O11CORE_color();
  
      this.p_selected = new O11CORE_prop();
      this.p_lineheight = new O11CORE_prop();
      this.p_styletype = new O11CORE_prop();
      this.p_color = new O11CORE_color();
      this.p_font = new O11CORE_font();
      this.p_decoration = new O11CORE_prop();
      this.p_link = new O11CORE_link();
  
      // object properties defaults
      this.p_lineheight.set("");
      this.p_textcolor_mouseselected.set_color(WHITE);
      this.p_textcolor_mouseout.set_color(GRAY);
      this.p_textcolor_mouseover.set_color(WHITE);
  
      this.p_styletype.set("disc"); // disc circle square none
      this.p_selected.set(0); // first is selected
      this.p_decoration.set("none");
    
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("textlistlink" + globalobjid);
      }
  
    }
  
    addnew(element, url, target) {
      
      let obj = {
        p_text: new O11CORE_text(),
        p_link: new O11CORE_link()
      };
  
      obj.p_text.set(element);

      if (url===undefined) {
        obj.p_link.p_url.set("#");
      } else {
        obj.p_link.p_url.set(url);
      }
      
      if (target===undefined) {
        obj.p_link.p_target.set("_self");
      } else {  
        obj.p_link.p_target.set(target);
      }  

      this.p_textlist.push(obj);
    }
    
    get(idx) {
      return this.p_textlist[idx];
    }
  
    len() {
      this.length = this.p_textlist.length;
      return this.length;
    }
  
    render() {
      let container, container2, container3, container4, st, i, listlinks;
  
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
  
      container = document.getElementById(this.p_obj.p_id.get()); 
  
      this.p_align.set_prop2container(container);   
  
  
      st = "<ul id="+ this.p_obj.p_id.get()+"textlistlinkul" + ">";
  
      for (i = 0; i < this.len(); i++) {
          st = st + "<li id='" + this.p_obj.p_id.get() + "textlistlinkli" + i.toString() + "'" + ">" + 
          "<a href='" + this.p_textlist[i].p_link.p_url.get() + "'" +
          " target='" + this.p_textlist[i].p_link.p_target.get() + "'" + 
          " id='" + this.p_obj.p_id.get() + "textlistlinka" + i.toString() + "'" + ">" + 
          this.p_textlist[i].p_text.get() + 
          "</a>" + 
          "</li>";
      }
      st = st + "</ul>";
      container.innerHTML = st;
    
      container2 = document.getElementById(this.p_obj.p_id.get()+"textlistlinkul");
      container2.style.display = this.p_display;
      container2.style.listStyleType = this.p_styletype.get();
      container2.style.lineHeight = this.p_lineheight.get();
  
      if (this.p_styletype.get() == "none") {
        container2.style.margin = 0;
        container2.style.padding = 0;
      }
  
      for (i = 0; i < this.len(); i++) {
        container3 = document.getElementById(this.p_obj.p_id.get() + "textlistlinka"+ i.toString()); 
  
        container3.style.textDecoration = this.p_decoration.get();
        container3.style.fontSize = this.p_font.p_fontsize.get();
        container3.style.fontFamily = this.p_font.p_fontfamily.get();
        if (this.p_selected.get()===i) {
          container3.style.color=this.p_textcolor_mouseselected.get_rgbacolor();   
        } else {
          container3.style.color=this.p_textcolor_mouseout.get_rgbacolor();   
        }  
  
        container3.onmouseover = this.set_mouseover(container3,i);
        container3.onmouseout = this.set_mouseout(container3,i);
        container3.onclick = this.set_mouseclick(container3,i);
      }  
  
  
    }  
  
    set_mouseclick(container,i) {
      let that;
  
      that = this;
  
      return function () {
        let container3aux, ii;
        for (ii = 0; ii < that.len(); ii++) { 
          container3aux = document.getElementById(that.p_obj.p_id.get() + "textlistlinka"+ ii.toString());
          container3aux.style.color=that.p_textcolor_mouseout.get_rgbacolor();
        }  
        container.style.cursor = "pointer";
        
        container.style.color = that.p_textcolor_mouseselected.get_rgbacolor();
        that.p_selected.set(i);
  
        //scroll ??? not working
        window.scroll(0,200);
  
      }
    }
  
  
    set_mouseout(container,i) {
      let that;
  
      that = this;
  
      return function () {
          container.style.cursor = "pointer";
          
          if (that.p_selected.get()===i) {
            
            container.style.color = that.p_textcolor_mouseselected.get_rgbacolor();
          } else { 
            container.style.color = that.p_textcolor_mouseout.get_rgbacolor();
          }  
      }
    }
  
    set_mouseover(container,i) {
      let that;
  
      that = this;
  
      return function () {
          container.style.cursor = "pointer";
          if (that.p_selected.get()===i) {
            container.style.color = that.p_textcolor_mouseselected.get_rgbacolor();
          } else {  
            container.style.color = that.p_textcolor_mouseover.get_rgbacolor();
          }  
      }
    }
  
  
  } 
  // end O11_textlistlink
/* 
*************************************************************************
* Object O11_textlist
*************************************************************************
*/

class O11_textlist {
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
       
      // object properties defaults
      this.p_lineheight.set("");
      this.p_textcolor_mouseselected.set_color(WHITE);
      this.p_textcolor_mouseout.set_color(GRAY);
      this.p_textcolor_mouseover.set_color(WHITE);
  
      this.p_styletype.set("disc"); // disc circle square none
      this.p_selected.set(0); // first is selected
      
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("textlist" + globalobjid);
      }
  
    }
  
    addnew(element) {
      this.p_textlist.push(element);
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
  
  
      st = "<ul id="+ this.p_obj.p_id.get()+"textlistul" + ">";
  
      for (i = 0; i < this.len(); i++) {
          st = st + "<li id='" + this.p_obj.p_id.get() + "textlistli" + i.toString() + "'" + ">" + 
          "<span id='" + this.p_obj.p_id.get() + "textlistspan" + i.toString() + "'" + ">" + 
          this.p_textlist[i] + 
          "</span>" + 
          "</li>";
      }
      st = st + "</ul>";
      container.innerHTML = st;
    
      container2 = document.getElementById(this.p_obj.p_id.get()+"textlistul");
      container2.style.display = this.p_display;
      container2.style.listStyleType = this.p_styletype.get();
      container2.style.lineHeight = this.p_lineheight.get();
   
  
      if (this.p_styletype.get() == "none") {
        container2.style.margin = 0;
        container2.style.padding = 0;
      }
  
      for (i = 0; i < this.len(); i++) {
        container3 = document.getElementById(this.p_obj.p_id.get() + "textlistspan"+ i.toString()); 
  
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
          container3aux = document.getElementById(that.p_obj.p_id.get() + "textlistspan"+ ii.toString());
          container3aux.style.color=that.p_textcolor_mouseout.get_rgbacolor();
        }  
        
        container.style.color = that.p_textcolor_mouseselected.get_rgbacolor();
        that.p_selected.set(i);
  
      }
    }
  
    set_mouseout(container,i) {
      let that;
  
      that = this;
  
      return function () {
          
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

          if (that.p_selected.get()===i) {
            container.style.color = that.p_textcolor_mouseselected.get_rgbacolor();
          } else {  
            container.style.color = that.p_textcolor_mouseover.get_rgbacolor();
          }  
      }
    }
  
  }  
  // end O11_textlist
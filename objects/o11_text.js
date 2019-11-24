/*
*********************************************
* OBJECT NAME   : O11_text
* VERSION       : 23.11.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_text.js
* SITE          : obj11.com
* LICENSE       : obj11.com
*********************************************
*/


/* 
*************************************************************************
* Object O11_text
*************************************************************************
*/
class O11_text {

    constructor() {
      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();

      this.p_textcolor = new O11CORE_color();
      this.p_textgradient = new O11CORE_textgradient();
      this.p_bgcolor = new O11CORE_backgroundcolor();
      this.p_bggradient = new O11CORE_gradient();

      this.p_font = new O11CORE_font;
      this.p_option1 = new O11CORE_prop();  // textcolor textgradient
      this.p_option2 = new O11CORE_prop();  // bgcolor bggradient

      this.p_text = new O11CORE_text();
      this.p_filepath = new O11CORE_prop();
      
  
      // object properties defaults
      this.p_option2.set("textcolor");
      this.p_textcolor.set_rgbacolor(0, 0, 0, 1.0); 
      this.p_option1.set("bgcolor");
      this.p_bgcolor.set_rgbacolor(255, 255, 255, 1.0);

      this.p_align.set_locate("middlecenter");
      
      this.p_text.set("mytext");
   
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("text" + globalobjid);
      }
  
    }  
  
  
    load_textfile() {
      let request, text_aux;
  
      request = new XMLHttpRequest();
  
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
  
            text_aux = request.responseText;
        }
      };
  
      request.open("GET", this.p_filepath.get(), false);
      request.send();
  
      this.p_text.set(text_aux);
  
    } 
  
    set_wordcolor(searchst,replacest,color) {
      let outputst, inputst;
  
      inputst=this.p_text.get();
  
      outputst=inputst.replace(RegExp("\\b"+searchst+"\\b", "g"), "<span style='color:"+color+";'>"+replacest+"</span>");
      // g - global
      // i - insensitive letters
      // \\b - whole words
  
      this.p_text.set(outputst);
    }
  
    render() { 
      let container, container2, style;
  
  
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
      container = document.getElementById(this.p_obj.p_id.get());
      this.p_align.set_prop2container(container);
      this.p_font.set_prop2container(container);
      this.p_text.set_prop2container(container);

      switch (this.p_option1.get()) {
        case "bgcolor":
          this.p_bgcolor.set_prop2container(container);
          break;
        case "bggradient":
          this.p_bggradient.set_prop2container(container);
          break;
      }

      container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "text");
  
      container2 = document.getElementById(this.p_obj.p_id.get() + "text");
      
      switch (this.p_option2.get()) {
        case "textcolor":
          this.p_textcolor.set_prop2container(container2);
          break;
        case "textgradient":
          this.p_textgradient.set_prop2container(container2);
          break;
      }


    }  
  } // end O11_text
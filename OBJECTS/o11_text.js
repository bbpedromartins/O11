/* 
*************************************************************************
* Object O11_text
*************************************************************************
*/

class O11_text {

    constructor() {
      this.p_text = [];


      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();
      this.p_size = new O11CORE_size();

      //textgradient
      this.p_textgradientcolor1 = new O11CORE_color();
      this.p_textgradientcolor2 = new O11CORE_color();
      this.p_textgradientcolor3 = new O11CORE_color();
      this.p_textgradientdirection = new O11CORE_prop();

      //textbackgradient
      this.p_textbackgradientcolor1 = new O11CORE_color();
      this.p_textbackgradientcolor2 = new O11CORE_color();
      this.p_textbackgradientcolor3 = new O11CORE_color();
      this.p_textbackgradientdirection = new O11CORE_prop();

      this.p_textcolor = new O11CORE_color();
      this.p_textbackcolor = new O11CORE_backcolor();
      
      this.p_font = new O11CORE_font;
      this.p_option = new O11CORE_prop();  // style1 style2 style3 style4
      

      
      this.p_filepath = new O11CORE_prop();
      
  
      // object properties defaults
      this.p_textgradientcolor1.set_rgbacolor(0,0,0,1.0);
      this.p_textgradientcolor2.set_rgbacolor(255,255,255,1.0);
      this.p_textgradientcolor3.set_rgbacolor(255,255,255,1.0);
      this.p_textgradientdirection.set("to right");

      this.p_textbackgradientcolor1.set_rgbacolor(0,0,0,1.0);
      this.p_textbackgradientcolor2.set_rgbacolor(255,255,255,1.0);
      this.p_textbackgradientcolor3.set_rgbacolor(255,255,255,1.0);
      this.p_textbackgradientdirection.set("to right");

      this.p_option.set("style1");
      this.p_textcolor.set_rgbacolor(0, 0, 0, 1.0); 
      this.p_textbackcolor.set_rgbacolor(255, 255, 255, 1.0);

      this.p_align.set_locate("middlecenter");
               
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("text" + globalobjid);
      }
  
    }  
  
    addline(element) {
      this.p_text.push(element);
    }
    
    getline(idx) {
      return this.p_text[idx];
    }
  
    len() {
      this.length = this.p_text.length;
      return this.length;
    }

  
    load_textfile() {
      let i, request, textaux, textarr;
            
      request = new XMLHttpRequest();
      
      request.onreadystatechange = function () {
          if (request.readyState === 4 && request.status === 200) {
              
              textaux = request.responseText;
          }
      };
      
      request.open("GET", this.p_filepath.get(), false);
      request.send();

      //create array with textlines
      textarr=textaux.split("\n");

      //load p_text matrix
      for (i = 0; i < textarr.length; i = i + 1) { 
        this.addline(textarr[i]);
      }  

    } 
      
  
    render() { 
      let container, container2, style1, style1back, style2, style2back, style3, style3back, style4, style4back, st, i;
  
  
      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
      container = document.getElementById(this.p_obj.p_id.get());
      
      
      //p_align
      this.p_align.set_prop2container(container);
      
      //p_font
      this.p_font.set_prop2container(container);
      
      //p_size
      this.p_size.set_prop2container(container);


       

      st = "";
      for (i = 0; i < this.len(); i = i + 1) {
        switch (this.p_option.get()) {
          case "style1": //textcolor+textbackcolor
            style1="color: "+this.p_textcolor.get_rgbacolor();
            style1back="background-color: "+this.p_textbackcolor.get_rgbacolor();

            st = st + "<span style='"+style1back+"';>"+
            "<span style='"+style1+"'>"+this.p_text[i] + "</span>"+
            "</span><br>";

            break;
          case "style2": //textcolor+textbackgradient
            style2 = "color: "+this.p_textcolor.get_rgbacolor();

            style2back = "background: linear-gradient(" + this.p_textbackgradientdirection.get() + ", " + 
            this.p_textbackgradientcolor1.get_rgbacolor() + ", " +
            this.p_textbackgradientcolor2.get_rgbacolor() + ", " +
            this.p_textbackgradientcolor3.get_rgbacolor() + ")" +
            " no-repeat";

            st = st + "<span style='"+style2back+"';>"+
            "<span style='"+style2+"'>"+this.p_text[i] + "</span>"+
            "</span><br>";



            break;

          case "style3": //textgradient+textbackcolor
            style3="background: linear-gradient(" + this.p_textgradientdirection.get() + ", " + 
            this.p_textgradientcolor1.get_rgbacolor() + ", " + 
            this.p_textgradientcolor2.get_rgbacolor() + ", " + 
            this.p_textgradientcolor3.get_rgbacolor() + ");" + 
            "-webkit-background-clip: text; -webkit-text-fill-color: transparent; white-space: nowrap;";
            
            style3back="background-color: "+this.p_textbackcolor.get_rgbacolor();

            st = st + "<span style='"+style3back+"';>"+
            "<span style='"+style3+"'>"+this.p_text[i] + "</span>"+
            "</span><br>";


            break;
                          
            
          case "style4": //textgradient+textbackgradient  
            style4="background: linear-gradient(" + this.p_textgradientdirection.get() + ", " + 
            this.p_textgradientcolor1.get_rgbacolor() + ", " + 
            this.p_textgradientcolor2.get_rgbacolor() + ", " + 
            this.p_textgradientcolor3.get_rgbacolor() + ");" + 
            "-webkit-background-clip: text; -webkit-text-fill-color: transparent; white-space: nowrap;";

            style4back = "background: linear-gradient(" + this.p_textbackgradientdirection.get() + ", " + 
            this.p_textbackgradientcolor1.get_rgbacolor() + ", " +
            this.p_textbackgradientcolor2.get_rgbacolor() + ", " +
            this.p_textbackgradientcolor3.get_rgbacolor() + ")" + 
            " no-repeat";
          
            st = st + "<span style='"+style4back+"';>"+
            "<span style='"+style4+"'>"+this.p_text[i] + "</span>"+
            "</span><br>";

            break;

        }
        
      }

      container.innerHTML = st;
      
      //set id container
      container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "text");
  
      container2 = document.getElementById(this.p_obj.p_id.get() + "text");

      
      


    }  
  } // end O11_text
/*
*********************************************
* LIBRARY NAME  : OB11_CORE
* VERSION       : 20.11.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_core.js
* SITE          : 
* LICENSE       : 
*********************************************
*/

"use strict";

const RED      = "rgba(255,000,000,1.0)";
const LIME     = "rgba(000,255,000,1.0)";
const BLUE     = "rgba(000,000,255,1.0)";
const BLACK    = "rgba(000,000,000,1.0)";
const WHITE    = "rgba(255,255,255,1.0)";
const YELLOW   = "rgba(255,255,000,1.0)";
const CYAN     = "rgba(000,255,255,1.0)";
const AQUA     = "rgba(000,255,255,1.0)";
const MAGENTA  = "rgba(255,000,255,1.0)";
const FUCHSIA  = "rgba(255,000,255,1.0)";
const SILVER   = "rgba(192,192,192,1.0)";
const GRAY     = "rgba(128,128,128,1.0)";
const GREY     = "rgba(128,128,128,1.0)";
const MARROON  = "rgba(128,000,000,1.0)";
const OLIVE    = "rgba(128,128,000,1.0)";
const GREEN    = "rgba(000,128,000,1.0)";
const PURPLE   = "rgba(128,000,128,1.0)";
const TEAL     = "rgba(000,128,128,1.0)";
const NAVY     = "rgba(000,000,128,1.0)";
const ORANGE   = "rgba(255,165,000,1.0)";

/* 
*************************************************************************
* Object O11_prop
*************************************************************************
*/
class O11_prop {
  constructor() {
    this.value = undefined;
  }
  
  set(value) {
    this.value = value;
  }
  
  get() {
    return this.value;
  }
} // end O11_prop
  
/* 
*************************************************************************
* Object O11_obj
*************************************************************************
*/
class O11_obj {
  constructor() {
    this.p_id = new O11_prop();
    this.p_parentid = new O11_prop();
    this.p_name = new O11_prop();
    this.p_type = new O11_prop(); 

    // object properties defaults  
    this.p_id.set(undefined);
    this.p_parentid.set(undefined);
    this.p_name.set("obj");
    this.p_type.set(""); 
  }
    
  set_div(id, parentid) {
    let parentcontainer, newcontainer, att;

    if (parentid === undefined) {
      parentcontainer = document.getElementById("body");
      this.p_parentid.set("body");
    } else {
      parentcontainer = document.getElementById(parentid);
      this.p_parentid.set(parentid);
    }
    newcontainer = document.createElement("div");
    att = document.createAttribute("id");

    att.value = id;

    newcontainer.setAttributeNode(att);
    parentcontainer.appendChild(newcontainer);
  }  
} // end O11_obj

    
/* 
*************************************************************************
* Object O11_size
*************************************************************************
*/
class O11_size {
  constructor() { 
    this.p_width = new O11_prop(); // px %
    this.p_height = new O11_prop(); // px %
    this.p_boxsizing = new O11_prop();
  
    // object properties defaults
    this.p_width.set(""); // px %
    this.p_height.set(""); // px %
    this.p_boxsizing.set("border-box"); // doesn't include margin
  }
  
  set_prop2container(container) {
    container.style.width = this.p_width.get();
    container.style.height = this.p_height.get();
    container.style.boxSizing = this.p_boxsizing.get();
  }  
  
} // end O11_size


/* 
*************************************************************************
* Object O11_backgroundimage
*************************************************************************
*/
class O11_backgroundimage {
 
  constructor() {
    this.p_bgposition = new O11_prop();
    this.p_bgsize = new O11_prop();
    this.p_bgrepeat = new O11_prop(); 
    this.p_filepath = new O11_prop();
  
    // object properties defaults
    this.p_bgposition.set("");
    this.p_bgsize.set("");
    this.p_bgrepeat.set("no-repeat"); // no-repeat | repeat
    this.p_filepath.set("");
  }
  
  set_prop2container(container) {
    container.style.backgroundRepeat = this.p_bgrepeat.get();
    container.style.backgroundPosition = this.p_bgposition.get();
    container.style.backgroundSize = this.p_bgsize.get();
    container.style.backgroundImage = "url('" + this.p_filepath.get() + "')";
  }
}  
// end O11_backgroundimage


/* 
*************************************************************************
* Object O_color
*************************************************************************
*/
class O11_color {

  constructor() {
    this.p_rgbacolor="";

    // object properties defaults
    this.p_rgbacolor="rgba(000,000,000,1.0)";
  }

  set_rgbacolor(newred, newgreen, newblue, newtransparency) {
    let red, green, blue, transparency; 
    
    if (Number.isFinite(newred) === true &&
        Number.isFinite(newgreen) === true &&
        Number.isFinite(newblue) === true &&
        Number.isFinite(newtransparency) === true) {

      if (newred < 0) {
        newred = 0
      }  
  
      if (newred > 255) {
        newred = 255
      }  

      red = newred.toString();

      if (newred < 10) {
        red = "00" + red;
      }

      if (newred > 10 && newred < 100) {
        red = "0" + red;
      }


      if (newgreen < 0) {
        newgreen = 0
      }  

      if (newgreen > 255) {
        newgreen = 255
      }  
  
      green = newgreen.toString();

      if (newgreen < 10) {
        green = "00" + green;
      }

      if (newgreen > 10 && newgreen < 100) {
        green = "0" + green;
      }

      if (newblue < 0) {
        newblue = 0
      }  
  
      if (newblue > 255) {
        newblue = 255
      }  

      blue = newblue.toString();

      if (newblue < 10) {
        blue = "00" + blue;
      }

      if (newblue > 10 && newblue < 100) {
        blue = "0" + blue;
      }

      if (newtransparency < 0.0) {
        transparency = "0.0";
      }
  
      if (newtransparency > 1.0) {
        transparency = "1.0";
      }
  
      transparency = newtransparency.toString();

      this.p_rgbacolor = "rgba(" + red + "," + green + "," + blue + "," + transparency + ")";
    } else {
      console.log("Error: set_rgbacolor ... at least one param is not numeric");
    }

  }
  
  get_rgbacolor() {
    return this.p_rgbacolor;
  }

  set_red(newred) {
    let red, green, blue, transparency;  

    red = this.p_rgbacolor.substr(5,3);
    green = this.p_rgbacolor.substr(9,3);
    blue = this.p_rgbacolor.substr(13,3);
    transparency = this.p_rgbacolor.substr(17,3);

    if (Number.isFinite(newred) === true) {

      if (newred < 0) {
        newred = 0
      }  
  
      if (newred > 255) {
        newred = 255
      }  

      red = newred.toString();

      if (newred < 10) {
        red = "00" + red;
      }

      if (newred > 10 && newred < 100) {
        red = "0" + red;
      }
 
      this.p_rgbacolor = "rgba(" + red + "," + green + "," + blue + "," + transparency + ")";

    } else {
      console.log("Error: set_red ... param newred is not numeric");  
    }  
  }

  get_red() {
    return this.p_rgbacolor.substr(5,3);
  }

  set_green(newgreen) {
    let red, green, blue, transparency;  

    red = this.p_rgbacolor.substr(5,3);
    green = this.p_rgbacolor.substr(9,3);
    blue = this.p_rgbacolor.substr(13,3);
    transparency = this.p_rgbacolor.substr(17,3);

    if (Number.isFinite(newgreen) === true) {

      if (newgreen < 0) {
        newgreen = 0
      }  

      if (newgreen > 255) {
        newgreen = 255
      }  
  
      green = newgreen.toString();

      if (newgreen < 10) {
        green = "00" + green;
      }

      if (newgreen > 10 && newgreen < 100) {
        green = "0" + green;
      }
 
      this.p_rgbacolor = "rgba(" + red + "," + green + "," + blue + "," + transparency + ")";
    } else {
      console.log("Error: set_green ... param newgreen is not numeric");
    }
     
  }

  get_green() {
    return this.p_rgbacolor.substr(9,3);
  }

  set_blue(newblue) {
    let red, green, blue, transparency;  

    red = this.p_rgbacolor.substr(5,3);
    green = this.p_rgbacolor.substr(9,3);
    blue = this.p_rgbacolor.substr(13,3);
    transparency = this.p_rgbacolor.substr(17,3);

    if (Number.isFinite(newblue) === true) {
  
      if (newblue < 0) {
        newblue = 0
      }  

      if (newblue > 255) {
        newblue = 255
      }  

      blue = newblue.toString();

      if (newblue < 10) {
        blue = "00" + blue;
      }

      if (newblue > 10 && newblue < 100) {
        blue = "0" + blue;
      }
      
      this.p_rgbacolor = "rgba(" + red + "," + green + "," + blue + "," + transparency + ")";

    } else {
      console.log("Error: set_blue ... param newblue is not numeric");
    }   
  }

  get_blue() {
    return this.p_rgbacolor.substr(13,3);
  }

  set_transparency(newtransparency) {
    let red, green, blue, transparency;  

    red = this.p_rgbacolor.substr(5,3);
    green = this.p_rgbacolor.substr(9,3);
    blue = this.p_rgbacolor.substr(13,3);
    transparency = this.p_rgbacolor.substr(17,3);
    
    if (Number.isFinite(newtransparency) === true) {

      if (newtransparency < 0.0) {
        transparency = "0.0";
      }

      if (newtransparency > 1.0) {
        transparency = "1.0";
      }

      transparency = newtransparency.toString();

      this.p_rgbacolor = "rgba(" + red + "," + green + "," + blue + "," + transparency + ")";
    } else {
      console.log("Error: set_transparency ... param newtransparency is not numeric");
    }

  }

  get_transparency() {
    return this.p_rgbacolor.substr(17,3);
  }

  set_color(color) {
     this.p_rgbacolor = color;    
  }

    
  set_prop2container(container) {
    container.style.color = this.p_rgbacolor;
  }
}
// end O11_color


/* 
*************************************************************************
* Object O11_backgroundcolor
*************************************************************************
*/
class O11_backgroundcolor extends O11_color {

  set_prop2container(container) {
    container.style.backgroundColor = this.p_rgbacolor;
  }
} 
// end O11_backgroundcolor


/* 
*************************************************************************
* Object O11_gradient
*************************************************************************
*/
class O11_gradient {
  constructor() { 

    this.p_direction= new O11_prop();
    this.p_color1 = new O11_color();
    this.p_color2 = new O11_color();
    
    // object properties defaults
    this.p_color1.set_rgbacolor(0,0,0,1.0);
    this.p_color2.set_rgbacolor(255,255,255,1.0);
    this.p_direction.set("180deg");

  }

  set_prop2container(container) {
    let style;
    
    style = "linear-gradient(" + this.p_direction.get() + ", " + this.p_color1.get_rgbacolor() + ", " + this.p_color2.get_rgbacolor() + ") no-repeat";

    container.style.background = style;
 
  }
}
// end O11_gradient



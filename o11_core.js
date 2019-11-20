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


/* 
*************************************************************************
* Object O11_align
*************************************************************************
*/
class O11_align {
  constructor() {

    this.p_position = new O11_prop();
    this.p_zindex = new O11_prop();

    this.p_locate = new O11_prop();
    this.p_top = new O11_prop();
    this.p_bottom = new O11_prop();
    this.p_right = new O11_prop(); 
    this.p_left = new O11_prop();
    this.p_transform = new O11_prop();
    this.p_float = new O11_prop();

    this.p_margintop = new O11_prop(); 
    this.p_marginbottom = new O11_prop(); 
    this.p_marginleft = new O11_prop(); 
    this.p_marginright = new O11_prop(); 

    this.p_paddingtop = new O11_prop(); 
    this.p_paddingbottom = new O11_prop();
    this.p_paddingleft = new O11_prop();
    this.p_paddingright = new O11_prop();
  
    // object properties defaults

    this.p_locate.set();
    // float
    // topleft, topmiddle, topright
    // middleleft, middle, middleright
    // bottomleft, bottommiddle, bottomright

    this.p_position.set("absolute"); // fixed relative absolute
    this.p_zindex.set(0);
    
    this.p_top.set("0px"); // px
    this.p_bottom.set("0px"); // px
    this.p_right.set("0px"); // px
    this.p_left.set("0px"); // px
    this.p_transform.set("");  
    this.p_float.set("left"); // left right none

    this.p_margintop.set("0px"); // auto px
    this.p_marginbottom.set("0px"); // auto px
    this.p_marginleft.set("auto"); // auto px
    this.p_marginright.set("auto"); // auto px

    this.p_paddingtop.set("0px"); // px
    this.p_paddingbottom.set("0px"); // px
    this.p_paddingleft.set("0px"); // px
    this.p_paddingright.set("0px"); // px

  }

  set_prop2container(container) {

    if (this.p_position.get() === "fixed") {
      container.style.top = this.p_top.get();
      container.style.bottom = this.p_bottom.get();
      container.style.right = this.p_right.get();
      container.style.left = this.p_left.get();
      container.style.transform = this.p_transform.get();
    }  

    if (this.p_position.get() === "absolute") {
      container.style.top = this.p_top.get();
      container.style.bottom = this.p_bottom.get();
      container.style.right = this.p_right.get();
      container.style.left = this.p_left.get();
      container.style.transform = this.p_transform.get();
    }

    if (this.p_position.get() === "relative") {
      container.style.float = this.p_float.get();
      container.style.marginTop = this.p_margintop.get();
      container.style.marginBottom = this.p_marginbottom.get();
      container.style.marginRight = this.p_marginright.get();
      container.style.marginLeft = this.p_marginleft.get();
    }
    
    container.style.position = this.p_position.get();
    container.style.zIndex = this.p_zindex.get();

    container.style.paddingTop = this.p_paddingtop.get();
    container.style.paddingBottom = this.p_paddingbottom.get();
    container.style.paddingLeft = this.p_paddingleft.get();
    container.style.paddingRight = this.p_paddingright.get();

  }

  subtract_px(px1, px2) {
    let result;
    let res;
    
    res = parseInt(px1,10) - parseInt(px2,10);

    result = res.toString() + "px";
          
    return result;
  }

  add_px(px1, px2) {
    let result;
    let res;
    
    res = parseInt(px1,10) + parseInt(px2,10);

    result = res.toString() + "px";
          
    return result;
  }

  set_locate(locate) {
    
    if (locate === "topleft") {
        this.p_top.set("0px");
        this.p_bottom.set("");
        this.p_left.set("0px");
        this.p_right.set("");
        this.p_transform.set("translate(0%, 0%)");
        this.p_locate.set("topleft");
    }

    if (locate === "topcenter") {
        this.p_top.set("0px");
        this.p_bottom.set("");
        this.p_left.set("50%");
        this.p_right.set("");
        this.p_transform.set("translate(-50%, 0%)");
        this.p_locate.set("topcenter");
    }

    if (locate === "topright") {
        this.p_top.set("0px");
        this.p_bottom.set("");
        this.p_left.set("");
        this.p_right.set("0px");
        this.p_transform.set("translate(0%, 0%)");
        this.p_locate.set("topright");
    }

    if (locate === "middleleft") {
        this.p_top.set("50%");
        this.p_bottom.set("");
        this.p_left.set("0px");
        this.p_right.set("");
        this.p_transform.set("translate(0%, -50%)");
        this.p_locate.set("middleleft");
    }

    if (locate === "middlecenter") {
        this.p_top.set("50%");
        this.p_bottom.set("");
        this.p_left.set("50%");
        this.p_right.set("");
        this.p_transform.set("translate(-50%, -50%)");
        this.p_locate.set("middlecenter");
    }

    if (locate === "middleright") {
        this.p_top.set("50%"); 
        this.p_bottom.set("");
        this.p_left.set("");
        this.p_right.set("0px");
        this.p_transform.set("translate(0%, -50%)");
        this.p_locate.set("middleright");
    }

    if (locate === "bottomleft") {
        this.p_top.set("");
        this.p_bottom.set("0px");
        this.p_left.set("0px");
        this.p_right.set("");
        this.p_transform.set("translate(0%, 0%)");
        this.p_locate.set("bottomleft");
    }

    if (locate === "bottomcenter") {
        this.p_top.set("");
        this.p_bottom.set("0px");
        this.p_left.set("50%");
        this.p_right.set("");
        this.p_transform.set("translate(-50%, 0%)");
        this.p_locate.set("bottomcenter");
    }

    if (locate === "bottomright") {
        this.p_top.set("");
        this.p_bottom.set("0px");
        this.p_left.set("");
        this.p_right.set("0px");
        this.p_transform.set("translate(0%, 0%)");
        this.p_locate.set("bottomright");
    }
  }

}
// end O11_align



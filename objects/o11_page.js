/*
*********************************************
* OBJECT NAME   : O11_PAGE
* VERSION       : 20.11.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_page.js
* SITE          : 
* LICENSE       : 
*********************************************
*/

class O11_page {
    constructor() {
        this.p_obj = new O11_obj();
        this.p_size = new O11_size();
        this.p_bgcolor = new O11_backgroundcolor();
        this.p_bgimage = new O11_backgroundimage();
        this.p_bggradient = new O11_gradient();
        this.p_option = new O11_prop();
        
        // object properties defaults
        this.p_obj.p_id.set("body");
        this.p_option.set("image");
        this.p_size.p_height.set(""); // set value for scrolling
    }
    render() {
        let container;
        container = document.getElementById("body");
        container.style.margin = 0;
        this.p_size.set_prop2container(container);
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
        }
    }
} // end O11_page 


/* 
*************************************************************************
* Object O11_page
*************************************************************************
*/

class O11_page {
    constructor() {
        this.p_obj = new O11CORE_obj();
        this.p_size = new O11CORE_size();

        this.p_backcolor = new O11CORE_backcolor();

        this.p_backimage = new O11CORE_backimage();

        //gradient
        this.p_backgradientcolor1 = new O11CORE_color();
        this.p_backgradientcolor2 = new O11CORE_color();
        this.p_backgradientdirection = new O11CORE_prop();


        this.p_option = new O11CORE_prop();
        
        // object properties defaults
        this.p_obj.p_id.set("body");
        this.p_option.set("backcolor");
        this.p_size.p_height.set(""); // set value for scrolling

        //gradient
        this.p_backgradientcolor1.set_rgbacolor(0,0,0,1.0);
        this.p_backgradientcolor2.set_rgbacolor(255,255,255,1.0);
        this.p_backgradientdirection.set("180deg");
         



    }
    render() {
        let container, style;
        container = document.getElementById("body");
        container.style.margin = 0;
        
        //p_size
        this.p_size.set_prop2container(container);

        //p_option
        switch (this.p_option.get()) {
          case "backcolor":
            this.p_backcolor.set_prop2container(container);
            break;
          case "backgradient":
            style = "linear-gradient(" + this.p_backgradientdirection.get() + ", " +
            this.p_backgradientcolor1.get_rgbacolor() + ", " + 
            this.p_backgradientcolor2.get_rgbacolor() + ") no-repeat";
            container.style.background = style;
            break;
          case "backimage":
            this.p_backimage.set_prop2container(container);
            break;
        }
    }
} 
// end O11_page 
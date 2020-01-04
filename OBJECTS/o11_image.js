/* 
*************************************************************************
* Object O11_image
*************************************************************************
*/

class O11_image {
  constructor() {
    this.p_obj = new O11CORE_obj();
    this.p_align = new O11CORE_align();
    this.p_imagealt = new O11CORE_prop();
    this.p_filepath = new O11CORE_prop();
    this.p_size = new O11CORE_size();
     
    // object properties defaults
    this.p_align.set_locate("middlecenter");
    this.p_filepath.set("");
    this.p_size.p_width.set("32px");
    this.p_size.p_height.set("32px");
    
    globalobjid = globalobjid + 1;
  
    if (this.p_obj.p_id.get() === undefined) {
      this.p_obj.p_id.set("image" + globalobjid);
    }
  }  
  
  render() { 
    let container;
  
    this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
    
    container = document.getElementById(this.p_obj.p_id.get());
  
    this.p_align.set_prop2container(container);
  
    container.innerHTML="<img src='"+this.p_filepath.get()+"'"+
    " alt='"+this.p_imagealt.get()+"'"+ 
    " width='"+this.p_size.p_width.get()+"'"+
    " height='"+this.p_size.p_height.get()+"'"+"/>"

    //container id
    container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "img");
  }  
} 
// end O11_image
  
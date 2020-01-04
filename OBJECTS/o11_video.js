/* 
*************************************************************************
* Object O11_video
*************************************************************************
*/

class O11_video {

  constructor() {
    this.p_obj = new O11CORE_obj();
    this.p_align = new O11CORE_align();
    this.p_filepath = new O11CORE_prop();
    this.p_size = new O11CORE_size();
    
    // object properties defaults
    this.p_align.set_locate("middlecenter");
    this.p_size.p_width.set("100%");
    this.p_size.p_height.set("auto");
    
    globalobjid = globalobjid + 1;
    
    if (this.p_obj.p_id.get() === undefined) {
      this.p_obj.p_id.set("video" + globalobjid);
    }
    
  }  

  render() {
    let container, container2;

    this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());
  
    container = document.getElementById(this.p_obj.p_id.get());

    //p_align
    this.p_align.set_prop2container(container);
    
    //p_size
    this.p_size.set_prop2container(container);

    container.innerHTML = 
    "<video width='" + this.p_size.p_width.get() + "'" 
    + " height='" + this.p_size.p_height.get() + "'" + 
    " autoplay loop" + ">" + "<source src='" + 
    this.p_filepath.get() + "'" + "type='video/mp4'" + ">" + "</video>";
   
  }

}
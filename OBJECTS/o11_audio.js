/* 
*************************************************************************
* Object O11_audio
*************************************************************************
*/

class O11_audio {

    constructor() {
      this.p_obj = new O11CORE_obj();
      this.p_align = new O11CORE_align();

      this.p_filepath = new O11CORE_prop();
      this.p_loop = new O11CORE_prop();
      this.p_autoplay = new O11CORE_prop();
      this.p_controls = new O11CORE_prop();
      this.p_type = new O11CORE_prop();
      
      
      //this.p_audio = new O11CORE_audio();
     
      // object properties defaults
      this.p_align.set_locate("middlecenter");
      this.p_filepath.set("");
      this.p_loop.set(false); 
      this.p_autoplay.set(false); 
      this.p_controls.set(false);
      this.p_type.set("audio/mpeg");
    
      globalobjid = globalobjid + 1;
  
      if (this.p_obj.p_id.get() === undefined) {
        this.p_obj.p_id.set("audio" + globalobjid);
      }
    
    }  
  
    render() {
      let audio, source, container;

      this.p_obj.set_div(this.p_obj.p_id.get(), this.p_obj.p_parentid.get());

      container = document.getElementById(this.p_obj.p_id.get());

      //p_align
      this.p_align.set_prop2container(container);
  
      //this.p_audio.set_prop2container(container);

      audio = document.createElement("AUDIO");
      source = document.createElement("SOURCE");
      source.setAttribute("src", this.p_filepath.get());    
      source.setAttribute("type", this.p_type.get());
      audio.appendChild(source);
      audio.autoplay = this.p_autoplay.get();
      audio.loop = this.p_loop.get();
      audio.controls = this.p_controls.get();
      container.appendChild(audio);
      
      // id container
      container.firstElementChild.setAttribute("id", this.p_obj.p_id.get() + "audio");


      
      
            
      
  



    }
  
  } 
  // end O11_audio
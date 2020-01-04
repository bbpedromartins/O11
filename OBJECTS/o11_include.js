/* 
*************************************************************************
* Object O11_include
*************************************************************************
*/

class O11_include {

    constructor() {
      this.p_filepath=new O11CORE_prop();
  
      //object properties default
      this.p_filepath.set("");
    }  
  
    render() {
      let myfilepath;
  
      myfilepath=this.p_filepath.get();
  
      // example: /site/js/file.js
      document.writeln("<script src='"+myfilepath+"'></script>");
    }  
  
  
  }  
  // end O11_include
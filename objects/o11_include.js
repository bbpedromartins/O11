/*
*********************************************
* OBJECT NAME   : O11_include
* VERSION       : 31.12.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_include.js
* SITE          : o11.pt
* LICENSE       : o11.pt
*********************************************
*/

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
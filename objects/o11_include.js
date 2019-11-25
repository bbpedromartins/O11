/*
*********************************************
* OBJECT NAME   : O11_include
* VERSION       : 25.11.2019
* AUTHOR/CODER  : Pedro Martins
* FILE NAME     : o11_include.js
* SITE          : obj11.com
* LICENSE       : obj11.com
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
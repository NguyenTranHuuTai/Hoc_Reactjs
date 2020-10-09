import React from 'react';
 


function Test() {
  return (
    <div className="Test">
      Đây là File Test.js có tài khoản và password như sau: 
       
       <input type= "text" id="hoten" ></input>
       <button type = "button" onClick="alert(document.getElementById('hoten').value) ">Click
       </button>

       <label id="lb1">a</label>
        
    </div>
  );

}

export default Test;

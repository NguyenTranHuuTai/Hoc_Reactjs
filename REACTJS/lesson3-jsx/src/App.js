import React from 'react';
 
import './App.css';


function App() 
{
  function showInDoituong(a){
    if(doituong .status){
      return(
        <h3>
           Id là: {doituong .id} <br/>
           Name là: {doituong .name} <br/>
           content là: {doituong.content}<br/> 
           stutus: {doituong .status ? "Active":"Not active"}<br/>
  
  
         </h3>
      ) ;
    } 
  }
  
  var a  = 5;
  var hoten= "JSX";
  var doituong ={
        id:1,
        name: "JSX",
        content: "Bài 3 Reactjs",
        status: true
              };
  var users = [
    {
        MaUser:1,
        Name: "ABC",
        Age: 20
    },
    {
      MaUser:2,
        Name: "DEF",
        Age: 23
    },
    {
      MaUser:3,
      Name: "GHI",
      Age: 22
    } 
  ];
  var elements = users.map((users,index) =>{ 
    return( <div key= {users.MaUser}>      
            <h2>Tên : {users.Name}</h2> 
            <p>Tuổi: {users.Age}</p> 
          </div>)
  }); // hàm map sử dụng vòng lặp copy ra 1 cái array trả về từng user và số thứ tự (index)
          
  return(
          <div> 
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Link 1</a>l.
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link 2</a>
                </li>
              </ul> 
                  <span className="navbar-text"> 
                      Navbar text
                  </span>
            </nav>
            <div className= "ml-30">
              <h3>{a}</h3> 
              <h3>name:{hoten}</h3>
                {showInDoituong(doituong )} <br/>
                <hr/> 
                {elements}
            </div>
                
          </div>
        );
}

export default App;

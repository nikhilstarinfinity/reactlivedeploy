//import React from 'react'//rafce
//import krne ki jarurat pdti hai before 17.02.. version tk
//mera 17.00 bda hai so no need see


import React from 'react'
import Merapro from "./Components/Merapro"  //ye ./components/.. dhyan se likhna 
//nhi toh  port resolve nhi kr payega

const App = () => {
  return <Merapro/>
  
}

export default App





// 1.we need to close all nonclosing tags in jsx
// like <img src="" alt="" > img tag close nhi krta tha html me but vhi yha close krna hoga hr non-closing tag ko... perfect!!!
// 2.  use camelCase tarika to write attributes
// 3.Javascript React use kr lo esily autocomplete ho jayega.. kr chuke hahahahahha!!!







/*/
const App = () => {
  return (
    <>//React.Fragment likhne ki jagah shortcut
    
    <Merannnam/> //ye mene fun based comp ko pass kia apne app function me tag ki form me or mera aa jayega
//1 component ko dusre k andr call kia toh ise nested comonents kehte hai
    <Merannnam/> 
    <Merannnam/>
    <Merannnam/>
    <Merannnam/>
    <Merannnam/>
    <h1>Ye mera componenet hai</h1>
    <h1 className="className">Ye class bna di {5+6}</h1>
    <p>ye paragrph hai</p>

      <h1>
        ye function banaya haimene

      </h1>
<h1>ab hum project banayenge baHUT HUA BASICS</h1>
    </>
  )
}
//ye functional based components hai ..class based comp. outdated!!!
const Merannnam = () => {
  return <h1>is fun ko  ME nested components k roop me use karoonga</h1>;
}

//react isko kese fekh  rha hota hai

// const App = () => {
//   return React.createElement("h1",{},"ye function banaya haimene")
// }




















export default App
*/

/*
import logo from './logo.svg';
import './App.css';

function App() {
let myvariable ="Nikhil hai jo mera nam ";
  return (
    <div className="App">
      <header className="App-header">
        <div>{myvariable}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import './tailwind.output.css';
//import { extend } from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state ={users: []};
}



async componentDidMount() {
       await fetch('/stations')

         .then(res => {
             console.log(res);
             return res.json()
          })
         .then(users => { 
             console.log(users); 
             this.setState({ users })
          })
          .catch(error =>{
            console.log(error)
          });
      }
render() {
     return (
         <div className="App">
             <h1>Gas Stations</h1>
             {this.state.users.map(user =>
             <div key={user.id}>Station: {user.address} Brand: {user.brand}</div>
           )}
         </div>
     );
 }
}

// const data = await fetch('/')

//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <h1 className="text-3xl font-bold underline">
//         Hello Ster!
//       </h1>
//       <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
//     <div className="ml-6 pt-1">
//       <h1 className="text-2xl text-blue-700 leading-tight">
//         Tailwind and Create React App
//       </h1>
//       <p className="text-base text-gray-700 leading-normal">
//         Building apps together
//       </p>
//     </div>
//   </div>
//     </div>
    
//   );
//   }
//}

export default App;

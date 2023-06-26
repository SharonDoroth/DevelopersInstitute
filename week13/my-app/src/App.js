import { useState } from "react";
import Counter,{useState} from "./components/Counter";
import React from "react";
import './App.css';


function App(){
  const [users, setUsers] = userState([])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  }

  return ( 
    <div className="App">
      <h1>users</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
      {
        users.map( (item,indx) => {
          return(
            <User info={item} key={indx}/>
          )
        })
      }
    </div>
  );
    }
//      <div className="App">
//          <header className="App-header">
//           <div>

//            </div>
//           <Counter />
//          </header>
//      </div>
//  }

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       title:'My Counter'
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <button onClick={this.change}>Change Title</button>
//           </div>
//           {
//           this.state.show ? <Counter title={this.state.title}/>
//           }
//         </header>
//       </div>
//     )
//   }
// }

export default App;

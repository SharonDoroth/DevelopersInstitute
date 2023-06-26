import React, {Component, useEffect} from 'react'

const Counter = (props) => {
    const [Counter,setCount] = useState(0)

    useEffect(()=>{
        console.log(count);
    },[])
    const add = () => {
        setCount(count + 1)
    }
    return(
       <>
        <h2>Counter</h2>
        <button onClick={add}> + </button>
        {count}
        <button onClick={()=>setCount(count-1)}> - </button>
        </>
    )
}
 export default Counter


// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count:0
//         }
//     }

//     //componentDidMount=()=>{
//         //console.log(3)
//    // }
//    add = () => {
//     // this.state.count++
//     // console.log(this.state.count);
//     this.setState({count: this.state.count + 1})
//     console.log(this.state.count);
//    }
//       minus = () => {
//         this.setState({count: this.state.count - 1})
//    }
//     render(){
//         return (
//             <>
//             <h2>Counter Class</h2>
//             <h2>{this.state.count}</h2>
//             <button onClick={this.add}>+</button> 
//             <button onClick={this.minus}>-</button>
//             </>
//         )
//     }
// }

// const Counter = (props) = > {
//     return(
//          <>
//          <h2>Counter</h2>
//          </>
//      )
//  }
// export default Counter
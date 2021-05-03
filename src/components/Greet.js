import React from 'react';

//traditional function
/*function Greet() {
    return(
        <h1>Welcome, Betty Bada</h1>
    )
}

//arrow function
const Greet = () => {
    return (<h1>Welcome to oral b, Betty created this document.</h1>)
}*/

//using props in functional components. 
const Greet = (props) => {
    return(<h1>{props.message}</h1>)
}

export default Greet;
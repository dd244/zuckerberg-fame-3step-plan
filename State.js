import React from 'react';
import './App.css';
import Information from "./Information.js"
import img1 from "./zuckerberg-happy1.jpg"
import img2 from "./zuckerberg-happy2.jpg"
import img3 from "./zuckerberg-happy3.jpg"
class State extends React.Component {
   
state ={
   Information:{name: "zuckerberg-stage-1",img : {img1},para : "original phase=before developpement phase"}
}
   render (){
     
     const Information1={
        Step1 : {name: "zuckerberg-stage-2",img : img2,para : "facebook developpement"},
        Step2 : {name: "zuckerberg-stage-3",img : img3,para : "facebook famous = he famous"}
     }
       return (
           <div>
        <button onClick={() => this.setState({Information :Information1.Step1})}>
        zuckerberg-stage-2 
      </button>
              <button onClick={() =>this.setState({Information :Information1.Step2})}>
        zuckerberg-stage-3
            </button>
      <Information information={this.state.Information}/>
            </div>
       
       )
   }
  
}
export default State
// Application entrypoint.

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


//Define Component as Class
class Buttons extends React.Component{

  handleClick = () => {
        this.props.onClickFunc(this.props.incrementValue);
  };

   render() {
     return(
        <button onClick={this.handleClick}>{this.props.incrementValue}</button>
     )      
   };
}

//Define Component as Function
const Container = (props) => {
        console.log('Rendered..'+props.initCounter);
        return(
                <div>{props.initCounter}</div>  
        );
}


class Container2 extends React.Component{

        constructor(props){
          super(props);
        }       
        render(){
                return(
                        <div>{props.counter}</div>  
                )
        };
}



class SubmitButton extends React.Component{
        Sb = (e) =>{
           e.preventDefault();
           this.setState({email:  this.props.email, counter: this.props.counter})
           console.log (this.state);
        }

       onInputchange = (e) =>{
                e.preventDefault();
                this.setState({email: e.target.value, counter: this.props.counter})
                console.log ("Input Component:",this.state);
        }

        render(){
           return (
              <div>
                  <input type="email" onChange={this.onInputchange}/>
                  <button title="My Button" onClick={this.Sb}>Submit</button>
              </div>
           )
        };
} export default SubmitButton

class Count extends React.Component{
           constructor(props){
                super(props);
                this.state = {counter: props.counter};
        }

        incrementCounter = (incrementValue) => {
                this.setState((prevState) => {      
                return{
                    counter : this.updateCounter(prevState, incrementValue) 
                };
                 
            });
         
           
        };

        updateCounter = (prevState, incrementValue) =>{
                let counter = prevState.counter + incrementValue;
               this.props.setCount(counter); 
               return counter;
        
        }


     render(){
         localStorage.setItem("counter", this.state.counter);             
        return(
         <div className="text-center">
                <Container initCounter={this.state.counter} /> 
                <Buttons class="Counter" incrementValue = {1} onClickFunc = {this.incrementCounter}/>
                <Buttons class="Counter" incrementValue = {-2} onClickFunc = {this.incrementCounter}/>
                <Buttons class="Counter" incrementValue = {3} onClickFunc = {this.incrementCounter}/>
                <Buttons class="Counter" incrementValue = {-4} onClickFunc = {this.incrementCounter}/>
                <Buttons class="Counter" incrementValue = {5} onClickFunc = {this.incrementCounter}/>
        </div> 
        );           
     }
}

class SonFetch extends React.Component{

        getData = (event) => {
               event.preventDefault();
                axios.get('https://raw.githubusercontent.com/LearnWebCode/json-example/master/pets-data.json')
                        .then(function (response) {
                        let petsList = [response.data];
                        console.log('Get Data', petsList);
                })
                .catch(function (error) {
                        console.log(error);
                });
        }

        render(){
                return (
                        <div>
                            <input type="submit" onClick={this.getData} value="Click "/>
                        </div>
 
                )
        };
}

class App extends React.Component {
        
        constructor(props){
           super(props);
           this.state = {counter : 1 }
        }

        setUpdatedConterValue = (_counter) => {
           this.setState({counter: _counter});
        }

        render(){
           let counter = localStorage.getItem('counter');

        return(
        <div className="container-fluid">
               <Count counter={this.state.counter} setCount={this.setUpdatedConterValue} /> 
                <SubmitButton counter={this.state.counter} />
                <SonFetch />
                <br/>{this.state.counter}
        </div>
        )};
}


const app = document.getElementById('react-root');

ReactDOM.render(
        <App />
, app);

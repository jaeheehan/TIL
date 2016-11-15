import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }

  render(){
    return (
      <div>
        <button onClick={()=> {this.setState({name : 'Velopert'});}}>Click Me</button>
        <h1>Hello!!!! 1111안녕하세요 {this.state.name}</h1>
      </div>
    );
  }
}

export default App;

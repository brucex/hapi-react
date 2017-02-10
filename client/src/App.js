import React from 'react';

class App extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    
    //let txt = this.props.txt

    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}

/*
<input type="text"
          onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
        */
export default App;

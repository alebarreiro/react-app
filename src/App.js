import React from 'react';


//Con estado
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

  update (e) {
    this.setState({txt: e.target.value})
  }

  render(){
    let txt = this.props.txt
    return (
      <div>
        <label>Text: </label> <input type="text" onChange={this.update.bind(this)}></input>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "default txt" //Valor por defecto si no recibimos txt
}

// Sin estado
// const App = () => <h1> Sin estado </h1>

export default App
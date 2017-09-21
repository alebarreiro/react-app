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
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
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
const Widget = (props) => <input type="text" onChange={props.update}/>

export default App
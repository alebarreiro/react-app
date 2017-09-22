import React from 'react';


//Con estado
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      a: '',
      b: ''
    }
  }

  update (e) {
    this.setState({
      txt: e.target.value,
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }

  render(){
    let txt = this.props.txt
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>

        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
          /> {this.state.b}

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

class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

// Sin estado
const Widget = (props) => <input type="text" onChange={props.update}/>

export default App
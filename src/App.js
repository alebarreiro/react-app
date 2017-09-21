import React from 'react';


//Con estado
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return (
      <div>
        <h1>Hello World</h1>
        <b>{txt}</b>
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
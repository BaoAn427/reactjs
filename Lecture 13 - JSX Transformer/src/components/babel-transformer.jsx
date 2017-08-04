import React from 'react';
import * as Babel from 'babel-standalone';

export default class BabelTransformer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputJSX: '/* Write some JSX */',
      outputJS: '',
      error: ''
    }
    this.transformJSX = this.transformJSX.bind(this);
  }
  transformJSX(event) {
    let code = event.target.value;
    try {
      var preset = {presets : ['es2015', 'react']};
      this.setState({
        outputJS: Babel.transform(code, preset).code,
        error: ''
      })
    }
    catch(error) {
      this.setState({
        error: error.message
      })
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <textarea id="input" onChange={this.transformJSX} defaultValue={this.state.inputJSX}></textarea>
          <div id="output">{this.state.outputJS}</div>
        </div>
        <footer>{this.state.error}</footer>
      </div>
    )
  }
}

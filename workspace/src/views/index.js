var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {

  constructor ( props ) {
    super( props ) ; 
    console.log( '======>' , this.props.default ) ; 
    console.log( '===//===>' , this.props.info ) ; 
  }

  render() {
    return (
      <DefaultLayout  info={ this.props.info } { ...this.props.default }>
        <div>안녕 세상아!</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
let React = require('react');
let DefaultLayout = require('./layouts/default');

let yaho = 'yyyyyyyyyyyyyyyy' ; 

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
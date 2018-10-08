import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import express , { Router } from 'express'; 
// import { renderToString } from 'react-dom/server';
import ReactDOMServer , { renderToString } from 'react-dom/server';
import ejs from 'ejs' ; 

// import IndexContainer from '../../js/IndexContainer' ;

const Index = Router() ; 

Index.get( '/' , ( req , res ) => {

	// const contentApp = renderToString( <IndexContainer /> );
	res.render( 'index' , {
		title : 'sss Welcome to the Gaesigner Blog' , 
		description : '개발지식을 공유하고싶어요' , 
		css : 'css/index.css' , 
		js : 'js/IndexContainer.js' , 
	}) ; 
}) ; 

/*var props = { initialCount: 3 };
var counterHtml = React.renderToString(
    Counter(props)
);
  res.send(
      '<div id="container">' + counterHtml + '</div>' +
      '<script>' +
        'var Counter = React.createFactory(require("./counter"));' + 
        'React.render(Counter(' + safeStringify(props) + '), document.getElementById("container"))' +
      '</script>'
  );*/

/*Index.get( '/' , ( req , res ) => {
	const contentApp = renderToString( <IndexContainer /> );
	res.render( 'index' , {
		title : 'Welcome to the Gaesigner Blog' , 
		description : '개발지식을 공유하고싶어요' , 
		css : 'css/index.css' , 
		// js : 'js/indexTest.js' , 
		body : contentApp , 
	}) ; 
}) ; */

export default Index ; 
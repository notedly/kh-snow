import fs from 'fs' ; 
import React , { Component } from 'react' ; 
import express , { Router } from 'express'; 
import { renderToString } from 'react-dom/server';
import ReactDOMServer from 'react-dom/server';
import ejs from 'ejs' ; 

import IndexContainer from '../../js/IndexContainer' ;

const Index = Router() ; 

const app = express() ; 
app.engine( 'html' , require( 'ejs' ).renderFile ) ;  

Index.get( '/' , ( req , res ) => {
	const contentApp = renderToString( <IndexContainer /> );
	const template = ejs.compile(fs.readFileSync( __dirname + '/../template/default.ejs', 'utf8')) ; 

	res.send(template({
		// title : 'Welcome to the Gaesigner Blog' , 
		description : '개발지식을 공유하고싶어요' , 
		css : '/css/index.css' , 
		body : contentApp , 
	})) ; 
}) ; 


export default Index ; 
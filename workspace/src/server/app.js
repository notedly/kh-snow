import ejs from 'ejs' ; 
import fs from 'fs' ; 
import React from 'react' ; 
import ReactDOMServer from 'react-dom/server';
import express from 'express' ; 
import PATH from './Dir' ; 

const app = express() ; 
app.set( 'views' , `/${ PATH.appRoot }/build` ) ; 
app.set( 'view engine' , 'ejs' ) ; 
app.engine( 'html' , require( 'ejs' ).renderFile ) ;  
app.use( '/' , express.static( `/${ PATH.appRoot }/build` )) ; 

app.get( '/' , ( req , res ) => {

	let template = ejs.compile(fs.readFileSync(__dirname + '/template/default.ejs', 'utf8'));
	res.send(template({
		title : 'yaho' , 
	})) ; 
}) ; 


const server = app.listen( PATH.PORT , () => {
	console.log( 'Express listening on port : ' +  server.address().port ) ;
}) ; 
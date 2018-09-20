import express from 'express' ; 
import PATH from './Dir' ; 

const app = express() ; 
app.set( 'views' , `/${ PATH.appRoot }/build` ) ; 
app.set( 'view engine' , 'ejs' ) ; 
app.engine( 'html' , require( 'ejs' ).renderFile ) ;  
app.use( '/' , express.static( `/${ PATH.appRoot }/build` )) ; 


app.get( '/' , ( req , res ) => {
	res.end( 'yaho' ) ; 
}) ; 

const server = app.listen( PATH.PORT , () => {
	console.log( 'Express listening on port : ' +  server.address().port ) ;
}) ; 
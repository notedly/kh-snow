import express from 'express' ; 
import PATH from './Dir' ; 

// Routes
import Index from './routes/Index' ; 

const absolutePath = `${ PATH.appRoot }/../` ; 
const app = express() ; 

app.engine( 'html' , require( 'ejs' ).renderFile ) ; 
app.set( 'views' , `${ absolutePath }/views` ) ; 
app.set( 'view engine' , 'ejs' ) ; 

app.use( '/' , express.static( `${ absolutePath }/` )) ; 
app.use( '/' , Index ) ; 

const server = app.listen( PATH.PORT , () => {
	console.log( 'Express listening on port : ' +  server.address().port ) ; 
}) ; 
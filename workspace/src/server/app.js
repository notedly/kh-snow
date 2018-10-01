import express from 'express' ; 
import PATH from './Dir' ; 

// Routes
import Index from './routes/Index' ; 

const app = express() ; 
// app.set( 'views' , `${ PATH.appRoot }/../` ) ; 
app.engine( 'html' , require( 'ejs' ).renderFile ) ;  
// app.set( 'views' , `${ PATH.appRoot }/../` ) ; 
app.set( 'views' , __dirname + '\\..' ) ;
app.set( 'view engine' , 'ejs' ) ; 
app.use( '/' , express.static( `${ PATH.appRoot }\\..` )) ; 

console.log( '=====> ' , `${ PATH.appRoot }\\..` ) ; 
console.log( '-----> ' , __dirname + '\\..' ) ; 

// app.set('views', path.join(__dirname, '/../views'));
// app.set('view engine', 'ejs');


app.use( '/' , Index ) ; 

const server = app.listen( PATH.PORT , () => {
	console.log( 'Express listening on port : ' +  server.address().port ) ; 
}) ; 
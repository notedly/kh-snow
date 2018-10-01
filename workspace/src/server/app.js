import express from 'express' ; 
import PATH from './Dir' ; 

// Routes
import Index from './routes/Index' ; 


const absolutePath = `${ PATH.appRoot }/../` ; 
// const absolutePath = __dirname + '/../' ; 
// console.log( 'absolutePath : ' , absolutePath ) ; 

const app = express() ; 
// app.set( 'views' , `${ PATH.appRoot }/../` ) ; 
app.engine( 'html' , require( 'ejs' ).renderFile ) ;  
// app.set( 'views' , `${ PATH.appRoot }/../` ) ; 
app.set( 'views' , express.static( absolutePath )) ;
app.set( 'view engine' , 'ejs' ) ; 
app.use( '/' , express.static( absolutePath )) ; 

// console.log( '=====> ' , `${ PATH.appRoot }\\..` ) ; 
// console.log( '-----> ' , __dirname + '\\..' ) ; 

// app.set('views', path.join(__dirname, '/../views'));
// app.set('view engine', 'ejs');


app.use( '/' , Index ) ; 

const server = app.listen( PATH.PORT , () => {
	console.log( 'Express listening on port : ' +  server.address().port ) ; 
}) ; 
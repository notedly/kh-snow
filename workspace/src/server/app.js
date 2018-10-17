import express from 'express' ; 
import reactViews from 'express-react-views' ; 
import PATH from './Dir' ; 

const absolutePath = `${ PATH.appRoot }/../` ; 
const app = express() ; 

app.set( 'views' , `${ absolutePath }views` ) ; 
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
app.use( '/' , express.static( `${ absolutePath }/` )) ; 

// Routes
import Index from './routes/Index' ; 
import Sub1 from './routes/Sub1' ; 
import Sub2 from './routes/Sub2' ; 
import Sub3 from './routes/Sub3' ; 
import Sub4 from './routes/Sub4' ; 

app.use( '/' , Index ) ; 
app.use( '/sub1' , Sub1 ) ; 
app.use( '/sub2' , Sub2 ) ; 
app.use( '/sub3' , Sub3 ) ; 
app.use( '/sub4' , Sub4 ) ; 

const server = app.listen( PATH.PORT , () => {
	console.log( 'Express listening on port : ' +  server.address().port ) ; 
}) ; 
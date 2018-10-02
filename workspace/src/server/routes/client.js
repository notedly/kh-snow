import mysql from 'mysql' ; 

const client = mysql.createConnection({
	user : 'root' , 
	password : '' , 
	dateStrings : true , 
	database : 'blog' , 
}) ; 

/*실서버*/
/*const client = mysql.createConnection({
	host : 'gaesignerblog.c94snuwsgmf4.us-west-2.rds.amazonaws.com' , 
	port : 3306 , 
	user : 'teamjjackkun' , 
	password : '!yahoyaho11jj' , 
	dateStrings : true , 
	database : 'blog' , 
}) ; */
export default client ; 
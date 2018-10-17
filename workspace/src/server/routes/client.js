import mysql from 'mysql' ; 

const client = mysql.createConnection({
	user : 'root' , 
	password : '' , 
	dateStrings : true , 
	database : 'blog' , 
}) ; 

export default client ; 
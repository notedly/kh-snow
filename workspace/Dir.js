const DIR = {
	SRC : 'src' , 
	DEST : 'build' , 
} ; 

const PATH = {
	appRoot : __dirname , 
	PORT : 8005 , 
	DIR : DIR , 
	SRC : {
		JS : `${ DIR.SRC }\\js` , 
		SERVER : `${ DIR.SRC }\\server` , 
		IMAGES : `${ DIR.SRC }\\images` , 
		CSS : `${ DIR.SRC }\\css` , 
		SCSS : `${ DIR.SRC }\\scss` , 
		EJS : `${ DIR.SRC }` , 
	} , 
	DEST : {
		JS : `${ DIR.DEST }/js` , 
		SERVER : `${ DIR.DEST }/server` , 
		IMAGES : `${ DIR.DEST }/images` , 
		CSS : `${ DIR.DEST }/css` , 
		EJS : `${ DIR.DEST }/` , 
	}
} ; 

export default PATH ; 
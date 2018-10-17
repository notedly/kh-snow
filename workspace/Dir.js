const DIR = {
	SRC : 'src' , 
	DEST : 'build' , 
} ; 

const PATH = {
	appRoot : __dirname , 
	PORT : 8005 , 
	DIR : DIR , 
	SRC : {
		JS : `${ DIR.SRC }/js` , 
		LIB : `${ DIR.SRC }/lib` , 
		SERVER : `${ DIR.SRC }/server` , 
		IMAGES : `${ DIR.SRC }/images` , 
		CSS : `${ DIR.SRC }/css` , 
		SCSS : `${ DIR.SRC }/scss` , 
		VIEW : `${ DIR.SRC }/views` , 
	} , 
	DEST : {
		JS : `${ DIR.DEST }/js` , 
		LIB : `${ DIR.DEST }/lib` , 
		SERVER : `${ DIR.DEST }/server` , 
		IMAGES : `${ DIR.DEST }/images` , 
		CSS : `${ DIR.DEST }/css` , 
		VIEW : `${ DIR.DEST }/views` , 
	}
} ; 

export default PATH ; 
import fs from 'fs' ; 

let getFiles = ( pathStr ) => {
	let fileNames = [] ; 
	let prom = new Promise( resolve => {
		fs.readdir( pathStr , ( err , fls ) => {
			fls.forEach( fileName => {
				if ( !fs.statSync( `${pathStr}${fileName}` ).isDirectory() ) {					
					fileNames.push( fileName ) ; 
				}
			}) ; 

			resolve( fileNames ) ; 
		}) ; 
	}) ; 

	return prom ; 
} ; 

export default getFiles ; 
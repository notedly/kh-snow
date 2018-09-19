import del from 'del' ; 
import PATH from 'Dir' ; 

const cleanSet = () => {
	console.log( '\n\n[ cleanSet ]' ) ; 
	return new Promise( resolve => {
		resolve( del.sync( `${ PATH.appRoot }/${ PATH.DIR.DEST }` ) ) ; 
	}) ; 
}

export default cleanSet ; 
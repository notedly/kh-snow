import browserSync from 'browser-sync' ; 
import PATH from 'Dir' ; 

const browserSyncSet = () => {
	console.log( '\n\n[ browserSyncSet ]' ) ; 
	return new Promise( resolve => {
		browserSync.init( null , {
			proxy : `http://localhost:${ PATH.PORT }` , 
			port : PATH.PORT + 1 
		}) ; 

		resolve() ; 
	}) ; 
} ; 

export default browserSyncSet ; 
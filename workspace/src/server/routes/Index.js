import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import express , { Router } from 'express'; 
import { renderToString } from 'react-dom/server';
import ReactDOMServer from 'react-dom/server';
import ejs from 'ejs' ; 

import IndexContainer from '../../js/IndexContainer' ;

const Index = Router() ; 

Index.get( '/' , ( req , res ) => {
	const contentApp = renderToString( <IndexContainer /> );
	res.render( 'index' , {
		title : 'Welcome to the Gaesigner Blog' , 
		description : '개발지식을 공유하고싶어요' , 
		css : 'css/index.css' , 
		js : 'js/indexTest.js' , 
		body : contentApp , 
	}) ; 
}) ; 

export default Index ; 
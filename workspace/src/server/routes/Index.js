import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import express , { Router } from 'express'; 
import ReactDOMServer , { renderToString } from 'react-dom/server';
import ejs from 'ejs' ; 

const Index = Router() ; 

/*Index.get( '/' , ( req , res ) => {
	res.render( 'index' , { info : {
		title : 'index - Welcome to the Gaesigner Blog' , 
		description : '메인페이지 - 개발지식을 공유하고싶어요' , 
		css : '/css/index.css' , 
		js : '/js/IndexContainer.js' , 
		lib : '/lib/tmp_lib1.js' , 
		// lib : [ 'lib/tmp_lib1.js' ] , // 배열형태로 여러개의 라이브러리를 추가할 수 도 있습니다. 
	}}) ; 
}) ; */

Index.get( '/' , ( req , res ) => {
	let promises = [] ;
	const getBlogPost = () => {
		return new Promise(( resolve , reject ) => {
			client.query( 'select no, category, title, description, admin_id, regist_date from blog_post where temporary_save_bln = 1 order by regist_date desc limit 50' , ( err , list , fields ) => {
				let limitList = [];

				if(list) {
					for(let i=0; i<20; i++){
						limitList[i] = list[i];
					}
				}

				if(err == null){
					resolve(limitList);
				}else {
					reject(err);
				}
			}) ;
		}) ;
	}

	const getCategoryNames = () => {
		return new Promise(( resolve , reject ) => {
			// client.query('select * from blog_category', (err, list, fields) => {
			client.query('select category_name from blog_category', (err, list, fields) => {
				if(err == null){
					resolve(list);
				}else {
					reject(err);
				}

			});
		}) ;
	} ;

	Promise.all( [getBlogPost() , getCategoryNames() ] ).then( result => {
		let list = result[0]
		, category = result[1] ; 

		console.log( 'list : ' , list ) ; 
		console.log( 'category : ' , category ) ; 

		res.render( 'index' , 
			{ 
				default : {
					title : 'index - Welcome to the Gaesigner Blog' , 
					description : '메인페이지 - 개발지식을 공유하고싶어요' , 
					css : '/css/index.css' , 
					js : '/js/IndexContainer.js' , 
					lib : '/lib/tmp_lib1.js' , 
					// lib : [ 'lib/tmp_lib1.js' ] , // 배열형태로 여러개의 라이브러리를 추가할 수 도 있습니다. 
				} , 
				info : {
					list : list , 
					category : category , 
				} , 
			}
		) ; 
	}) ;

}) ; 

export default Index ; 
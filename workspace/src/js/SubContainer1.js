import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import SnowWrapper from './snow/snowWrapper' ;

/**
 * 체크리스트
 * [O] js 파일 분리 - SnowWrapper , Particle , Controller
 * [O] 컨트롤 speed 변경 후 눈 추가
 * [O] 컨트롤 wind 변경 후 눈 추가
 * [O] 바람의 강도에 따른 x 좌표 영역 수정 
 * [O] delete 전달값 동적으로
 * [] button addEventListener 함수로 통합
 * [] 서서히 사라지는 효과 
 * []
 */

class WrapContainer extends Component {
	constructor ( props ) {
		super( props ) ; 
	}
	render () {
		return (
			<div className="opt">
				<button className="startBtn">start</button>
				<button className="stopBtn">stop</button>
				<button className="clearBtn">clear</button>
				<button className="deleteBtn">delete</button>
				<button className="addBtn">add</button>
				<h1>wind : <span className="numWind"></span></h1>
				<input className="variance" type="range" min="-3" max="3" step="0.1" defaultValue="1.5" />
				<h1>speed : <span className="numSpeed"></span></h1>
				<input className="speed" type="range" min="-1" max="1" step="0.01" defaultValue="1" />
			</div>
		) ; 
	}
}

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 

	let winterSnow = new SnowWrapper ;
	winterSnow.init({ 
		target : document.body , 
		len : 300 ,	// 눈 갯수
		size : 2 , // 사이즈 1 ~ 5
		wind : 0.8 ,	// 바람 max : 3 , min : -3 
		speed : 0.5 ,  // 속도 max : 1 , min : 0 
	}) ;
	
	/**
	 * 메소드 리스트
	 * start : 시작
	 * stop : 눈 내리기 중지
	 * clear : 현시점에서 바로 중지
	 * delete : 삭제하기
	 * add : 추가하기
	 * change : 값 변화하기 ( options: windVariance , speed )
	 */

	document.querySelector(".startBtn").addEventListener("click", () => {
		winterSnow.start();
	});
	
	document.querySelector(".stopBtn").addEventListener("click", () => {
		winterSnow.stop();
	});
	
	document.querySelector(".clearBtn").addEventListener("click", () => {
		winterSnow.clear();
	});
	
	document.querySelector(".deleteBtn").addEventListener("click", () => {
		winterSnow.delete( 100 );
	});
	
	document.querySelector(".addBtn").addEventListener("click", () => {
		winterSnow.add( 100 );
	});
	
	document.querySelector(".variance").addEventListener("input", e => {
		winterSnow.change("windVariance", e.target.value);		
	});
	
	document.querySelector(".speed").addEventListener("input", e => {
		winterSnow.change("speed", e.target.value);
	});

}) ; 
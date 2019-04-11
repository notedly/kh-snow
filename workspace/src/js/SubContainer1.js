import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import SnowWrapper from './snow/snowWrapper' ;
import ControllerSetting from "./controller/constrollerSetting";
/**
 * 체크리스트
 * [O] js 파일 분리 - SnowWrapper , Particle , Controller
 * [O] 컨트롤 speed 변경 후 눈 추가
 * [O] 컨트롤 wind 변경 후 눈 추가
 * [O] 바람의 강도에 따른 x 좌표 영역 수정 
 * [O] delete 전달값 동적으로
 * [O] 서서히 사라지는 효과
 * [O] 컨트롤 마크업 클래스 생성
 */

 class WrapContainer extends Component {
	constructor ( props ) {
		super( props ) ; 

		this.winterSnow = new SnowWrapper ;
		this.winterSnow.init({ 
			target : document.body , 
			len : 100 ,	// 눈 갯수
			size : 5 , // 사이즈 1 ~ 5
			wind : 0.8 ,	// 바람 max : 3 , min : -3 
			speed : 0.1 ,  // 속도 max : 1 , min : 0 
		}) ;

	}
	render () {
		
		let setting = new ControllerSetting ;

		return (
			/**
			 * 메소드 리스트
			 * start : 시작
			 * stop : 눈 내리기 중지
			 * clear : 현시점에서 바로 중지
			 * delete : 삭제하기
			 * add : 추가하기
			 * change : 값 변화하기 ( options: windVariance , speed )
			 */
			<div className="opt">
				{setting.addBtn({ name : 'start' , callback : this.winterSnow.start })}
				{setting.addBtn({ name : 'stop' , callback : this.winterSnow.stop })}
				{setting.addBtn({ name : 'clear' , callback : this.winterSnow.clear })}
				{setting.addBtn({ name : 'delete' , callback : () => this.winterSnow.delete( 200 ) })}
				{setting.addBtn({ name : 'add' , callback : () => this.winterSnow.add( 300 ) })}
				{setting.addRange({ name : 'windVariance' , callback : this.winterSnow.change , min : -3, max : 3, step : 0.1, value : 0.8 })}
				{setting.addRange({ name : 'speed' , callback : this.winterSnow.change , min : -1, max : 1, step : 0.1, value : 0.1 })}
			</div>
		) ; 
	}
}

// 컨트롤 

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 
}) ; 
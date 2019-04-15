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
 * [] 눈의 속도를 제어할 경우 크기가 큰 눈의 속도가 제어가 안됨.
 * [] this의 사용을 너무 많이 했다. this의 중복을 제거한다.
 * [O] 눈의 갯수가 80개 인데 100개를 삭제했을 경우 어떤 처리를 했는가
 */

 class WrapContainer extends Component {
	constructor ( props ) {
		super( props ) ; 

		this.winterSnow = new SnowWrapper ;
		this.winterSnow.init({ 
			target : document.body , 
			len : 1000 ,	// 눈 갯수
			size : 5 , // 사이즈 1 ~ 5
			wind : 0.8 ,	// 바람 max : 3 , min : -3 
			speed : 0.3 ,  // 속도 max : 1 , min : 0 
		}) ;

	}
	render () {
		
		let setting = new ControllerSetting ;
		let { winterSnow } = this ;

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
				{setting.addBtn({ name : 'start' , callback : winterSnow.start })}
				{setting.addBtn({ name : 'stop' , callback : winterSnow.stop })}
				{setting.addBtn({ name : 'clear' , callback : winterSnow.clear })}
				{setting.addBtn({ name : 'delete' , callback : () => winterSnow.delete( 500 ) })}
				{setting.addBtn({ name : 'add' , callback : () => winterSnow.add( 300 ) })}
				{setting.addRange({ name : 'windVariance' , callback : winterSnow.change , min : -3, max : 3, step : 0.1, value : 0.8 })}
				{setting.addRange({ name : 'speed' , callback : winterSnow.change , min : -1, max : 1, step : 0.1, value : 0.3 })}
			</div>

		) ; 
	}
}

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 
}) ; 
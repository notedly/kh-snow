import React , { Component } from 'react' ; 

class Btm extends Component {
	constructor ( props ) {
		super( props ) ; 
	}

	render () {	
		return (
			<footer id="footer">
				<div className="contents">
					<div className="copyright">
						<div className="warning">
							<p>이 컨텐츠는 <a href="http://www.gaesigner.com" target="_blank">Team Gaesigner</a> 로부터 제공되고 있습니다. 무단 불펌을 허용하지 않습니다. 퍼가시는경우 출처를 남겨주세요.</p>
						</div>
						<p>Copyright www.gaesigner.com All rights reserved.</p>
					</div>
					<p className="mailWrap"><a href="mailto:teamgaesigner@email.com">teamgaesigner@gmail.com</a></p>
				</div>
			</footer>
		) ; 
	}
}

export default Btm ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import { Comn } from "../common/Comn";

class ControllerSetting {
    constructor( props ){
    }
    addBtn = ( opt ) => {
			return <button onClick={opt.callback}>{opt.name}</button>;
    }
    addRange = ( opt ) => {
			let { name , min, max, step, callback, value } = opt ;
			let numValue = value; 
			let style = {
				color : '#fff' ,
				textAlign : 'center'
			}

			let changeFunc = ( tg, value ) => {
				numValue = value ;
				tg.nextElementSibling.textContent = numValue ;
				callback( name, value ) ;
			}

			return (
				<div>
					<p>change : {name}</p>
					<input type="range" min={min} max={max} step={step} defaultValue={value} onInput={ e => e.target = changeFunc( e.target, e.target.value ) } />
					<p style={style} className="numValue">{numValue}</p>
					{/* <input type="range" min={min} max={max} step={step} defaultValue={value} onInput={ e => e.target = callback( name, e.target.value) } /> */}
				</div>
			)
	}
}

export default ControllerSetting ;
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
        let style = {
            color : '#fff' ,
            textAlign : 'center'
        }
        let num = null; 
        let changeFunc = ( v ) => {
            callback( name, v ) ;
            num = v ;
            this.txt.textContent = v ;
            console.log( 'num :', num ) ;
        }
        return (
            <div>
                <p>change : {name}</p>
                <p style={style} ref={ ref => this.txt = ref }>value : {num}</p>
                {/* <input type="range" min={min} max={max} step={step} defaultValue={value} onInput={ e => e.target = changeFunc( e.target.value) } /> */}
                <input type="range" min={min} max={max} step={step} defaultValue={value} onInput={ e => e.target = callback( name, e.target.value) } />
            </div>
        )
    }
}

export default ControllerSetting ;
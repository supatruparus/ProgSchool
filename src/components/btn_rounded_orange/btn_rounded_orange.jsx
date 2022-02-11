import css from './btn_rounded_orange.module.css'
import img from './Arrow 1.svg'
function BtnRoundedOrange(props){
    return (
        <button class={css.button}>{props.text}
            <img src={img} alt =''></img>
        </button>
    )

}

export default BtnRoundedOrange;
import css from './btn_rounded_orange.module.css'
function BtnRoundedOrange(props){
    return (
        <button class={css.button}>{props.text}
            <img src={props.img}></img>
        </button>
    )

}

export default BtnRoundedOrange;
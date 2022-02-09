import css from './text.module.css'
export const Text = (props)=>{
  return(
    <p className={css.text} >{props.text}</p>
  
  )
}
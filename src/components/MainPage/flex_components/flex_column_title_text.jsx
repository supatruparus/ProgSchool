import css from './flex_comp.module.css';

export const Flex = (props)=>{
return (
  <div className={css.wrapper}>
    <h1 className={css.title}>{props.title}</h1>
    <p className={css.text}>{props.text}</p>
    <p className={css.text}>{props.text2}</p>
  </div>
)}
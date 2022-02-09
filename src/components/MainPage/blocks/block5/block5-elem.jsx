import css from './block5.module.css'
function Block5_elem(props){
return (
<div className={css.elem}>
	<div className={css.number}>{props.number}</div>
	<div className={css.title}>{props.title}</div>
	<div className={css.text}>{props.text}</div>
</div>
)}

export default Block5_elem;

export const Line = (props)=>{
  return(
    <div className = {(props.className!==undefined)? props.className + ' table__line': '' + ' table__line'}>
      <span>{props.col1}</span>
      <span>{props.col2}</span>
      <span>{props.col3}</span>

    </div>
  )
}
import React from 'react'

function ButtonLink(props){
  // props => {} (é um objeto)
  console.log(props)
  return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
  )
}

export default ButtonLink

import React from 'react'

const ActionButton = (props) => {
  return (
    <button className={`${props.color} ${props.rounded} capitalize font-light text-xs  tracking-wider w-2/3  md:w-1/2 py-1.5 text-center cursor-pointer`}>
        {props.label}
    </button>
  )
}

export default ActionButton
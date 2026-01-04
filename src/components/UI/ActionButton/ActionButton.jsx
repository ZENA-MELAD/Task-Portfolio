import React from 'react'

const ActionButton = (props) => {
  return (
    <button className={`${props.color} rounded-3xl capitalize font-light text-sm tracking-wider w-2/3 md:w-1/2 py-1.5 text-center`}>
        {props.label}
    </button>
  )
}

export default ActionButton
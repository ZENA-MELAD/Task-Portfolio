import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.color} rounded-xl w-full`}>
        <div className='w-full'>
            <img src={props.src} className={`${props.size}  w-40 sm:w-52 object-contain`}/>
        </div>
        <div className='bg-gray-700/80 rounded-b-xl text-center text-sm py-0.5 capitalize'><h3>{props.title}</h3></div>
    </div>
  )
}

export default Card
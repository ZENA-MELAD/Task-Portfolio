import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const Form = () => {
  return (
    <div className='md:w-2/3'>
      <h2>send me a message</h2>
      <form className='mt-2 w-full flex flex-col gap-y-2'>
        <input type='text' placeholder='Name' className='input-base'/>
        <input type='email' placeholder='Email Address' className='input-base'/>
        <input type='text' placeholder='Subject' className='input-base'/>
        <textarea className='bg-gray-400/40 rounded-md p-2 text-xs h-28 focus:outline-none' defaultValue="your message"></textarea>
        <ActionButton color="bg-gradient-to-r from-[#C961DE]  to-[#2957A3]" label="send message" rounded="rounded-md"/>
      </form>
    </div>
  )
}

export default Form
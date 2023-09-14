import React from 'react'

const User = ({user}) => {
  return (
    <div className='p-5 flex text-lg items-center bg-slate-600 rounded-3xl flex-col flex-wrap w-[400px] mt-10 text-slate-200 mr-10'>
      <img className='mr-2 rounded-full w-[100px] mb-4' src={user.picture.large} alt=''/>
      <div className=''>
        <h3 className='mb-2'>
          Name: {user.name.first}
        </h3>
        <h3 className='mb-2'>
          Surname: {user.name.last}
        </h3>
        <p className='mb-2'>
          Phone: {user.phone}
        </p>
        <p className='mb-2'>
          Email: {user.email}
        </p>
        <p className='mb-2'>
          {user.location.country} | {user.location.city}
        </p>
      </div>
    </div>
  )
}

export default User
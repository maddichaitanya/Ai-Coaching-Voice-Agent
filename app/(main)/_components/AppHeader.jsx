import Image from 'next/image'
import { UserButton } from '@stackframe/stack'
import React from 'react'

function AppHeader() {
  return (
    <div className='p-3 shadow-sm'>
        <Image src={'/logo.svg'} alt='logo'
         width={80} height={100}
        />

        <UserButton/>
      
    </div>
  )
}

export default AppHeader

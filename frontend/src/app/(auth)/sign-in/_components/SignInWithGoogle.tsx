import { Button } from '@nextui-org/react'
import React from 'react'

const SignInWithGoogle = () => {
  return (
    <Button
      type='button'
      tabIndex={-1}
      className='w-full mb-3 bg-black rounded-full flex items-center justify-center gap-4 '
    >
      <img
        src='/static/icons/google-logo.png'
        className='w-[20px] h-[20xp]'
      />
      <p className='font-bold text-md text-white'>
        Sign in with Google
      </p>
    </Button>
  )
}

export default SignInWithGoogle
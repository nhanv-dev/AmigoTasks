import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const SignInWithGithub = () => {
  return (
    <Button
      type='button'
      tabIndex={-1}
      className='w-full mb-3 bg-black rounded-full flex items-center justify-center gap-4 '
    >
      <Image
        alt='github'
        src='/static/icons/github-mark-white.png'
        className='w-[20px] h-[20xp] bg-[transparent]'
      />
      <p className='font-bold text-md text-white'>
        Sign in with Github
      </p>
    </Button>
  )
}

export default SignInWithGithub
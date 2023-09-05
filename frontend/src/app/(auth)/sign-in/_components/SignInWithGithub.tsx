import { Button } from '@nextui-org/react';
// import { signIn } from "next-auth/react";
import Image from 'next/image';

const SignInWithGithub = () => {

  const handleClick = (e: any) => {
    e.preventDefault();
    // signIn("google")
  }

  return (
    <Button
      type='button'
      onClick={handleClick}
      tabIndex={-1}
      className='w-full mb-3 bg-black rounded-full flex items-center justify-center gap-4 '
    >
      <Image
        width={20}
        height={20}
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
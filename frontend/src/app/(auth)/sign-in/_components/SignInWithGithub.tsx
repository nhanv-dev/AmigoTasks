
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import { Loading } from '../page';

const SignInWithGithub = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    await signIn("github", { callbackUrl: '/' })
    setLoading(false);
  }

  return (
    <Button
      type='button'
      onClick={handleClick}
      tabIndex={-1}
      className='w-full mb-3 bg-black rounded-full flex items-center justify-center gap-4 '
    >
      {loading ?
        <Loading /> :
        <Image
          width={20}
          height={20}
          alt='github'
          src='/static/icons/github-mark-white.png'
          className='w-[20px] h-[20xp] bg-[transparent]'
        />
      }
      <p className='font-bold text-md text-white'>
        Sign in with Github
      </p>
    </Button>
  )
}

export default SignInWithGithub;

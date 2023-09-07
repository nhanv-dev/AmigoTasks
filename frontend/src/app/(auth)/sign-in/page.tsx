"use client";

import Helmet from '@app/(protected)/_components/helmet';
import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import SignInWithGithub from './_components/SignInWithGithub';
import SignInWithGoogle from './_components/SignInWithGoogle';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    await signIn('credentials', { callbackUrl: '/home', username, password, provider: 'credentials' })
    setLoading(false);
  }

  return (
    <Helmet title='Sign in - AmigoTasks'>
      <div className='overflow-hidden w-[100vw] h-[100vh] relative'>
        <video
          autoPlay muted loop
          className='w-full h-full object-cover'
        >
          <source src='/static/videos/login-page.mp4' type='video/mp4' />
        </video>
        <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]' />
        <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-dark-background shadow-md flex items-start gap-3 rounded-lg min-w-[850px] max-w-[100vh]'>
          <div className='h-full w-[400px] p-4'>
            <div className='w-[400px] h-full relative'>
              <img
                alt='sign in'
                src='https://images.unsplash.com/photo-1493839523149-2864fca44919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80'
                className='w-full object-cover rounded-lg'
              />
              <div className='absolute flex gap-2 items-center justify-start top-3 left-3 text-md font-bold'>
                <p className='bg-background text-text rounded-full py-1 px-4'>
                  AmigoTasks
                </p>
              </div>
              <div className='absolute flex gap-2 items-center justify-start bottom-3 left-3 text-xs font-bold'>
                <p className='bg-background text-text rounded-full py-1 px-4 cursor-default'>
                  #AmigoTasks
                </p>
                <p className='bg-background text-text rounded-full py-1 px-4 cursor-default'>
                  #Best practices of me
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1 p-4 px-8'>
            <div className='mb-8 mt-1'>
              <h3 className='text-2xl text-dark-text font-extrabold'>
                Sign in to T
              </h3>
            </div>
            <form onSubmit={handleSubmit} className='mb-3'>
              <div className='mb-3 flex flex-col gap-2'>
                <label htmlFor='username' className='text-dark-text-50 font-bold text-md'>
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  className='rounded-md text-dark-text font-semibold text-md bg-dark-background-50 border-none outline-none py-2.5 px-3 shadow-sm border'
                />
              </div>
              <div className='mb-6 flex flex-col gap-2'>
                <label htmlFor='password' className='text-dark-text-50 font-bold text-md'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='rounded-md text-dark-text font-semibold text-md bg-dark-background-50 border-none outline-none py-2.5 px-3 shadow-sm border'
                />
              </div>
              <Button
                type='submit'
                isLoading={loading}
                className='font-bold text-[0.9rem] w-full rounded-full bg-primary text-dark-text'
                spinner={<Loading />}
              >
                Sign In
              </Button>
            </form>
            <div className='flex items-center gap-2 justify-between mt-8 mb-7 opacity-40'>
              <p className='flex-1 h-[1px] rounded-full border border-dark-text-50' />
              <p className='font-semibold text-xs text-dark-text-50'>
                OR
              </p>
              <p className='flex-1 h-[1px] rounded-full border border-dark-text-50' />
            </div>
            <div className='pb-2'>
              <SignInWithGoogle />
              <SignInWithGithub />
            </div>
            <div className='flex items-center justify-center'>
              <p className='flex items-center justify-center gap-1 font-semibold text-dark-text-50 text-md'>
                Don&apos;t have an account?
                <Link
                  href={"/sign-up"}
                  className='text-dark-text'
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Login;


export const Loading = () => {
  return (
    <svg
      className="animate-spin h-5 w-5 text-current"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  )
}
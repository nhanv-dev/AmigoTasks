"use client";

import { AuthThunks } from '@redux/features/auth/authThunks';
import { useAppDispatch } from '@redux/hook';
import authService from '@services/auth/auth.service';
import { SignUpType } from '@services/auth/types';
import userService from '@services/user/user.service';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import PageLoading from '../loading/PageLoading';

const AuthGuard = ({ children }) => {
    const dispatch = useAppDispatch();
    const { data, status } = useSession();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const _data: any = { ...data }
        const validate = async () => {
            console.log('authguard', _data)
            if (!_data.username) return;
            setLoading(true);
            try {
                const existUser = await userService.getByUsername(_data.username);
                if (!existUser) {
                    const payload: SignUpType = {
                        username: _data.username,
                        password: _data.password,
                        name: _data.name,
                        avatar: _data.avatar || '',
                        provider: _data.provider || 'basic',
                    };
                    await authService.signUp(payload);
                }
                dispatch(AuthThunks.signIn({ username: _data.username, password: null }))
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        validate();

    }, [status])

    if (status === 'loading' || loading) return <PageLoading />

    if (status === 'authenticated' && !loading) return <>{children}</>

    redirect('/sign-in')
}

export default AuthGuard;


"use client";

import { AuthThunks } from '@redux/features/auth/authThunks';
import { useAppDispatch } from '@redux/hook';
import authService from '@services/auth/auth.service';
import { SignUpType } from '@services/auth/types';
import userService from '@services/user/user.service';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import PageLoading from '../loading/PageLoading';
import { AuthActions } from '@redux/features/auth/authSlice';

const AuthGuard = ({ children }) => {
    const dispatch = useAppDispatch();
    const { data, status } = useSession();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const validate = async () => {
            setLoading(true)
            const _data: any = { ...data };
            console.log(_data)
            try {
                if (_data.provider === "credentials") {
                    await dispatch(AuthActions.setUser(_data))
                } else {
                    await signUp(_data);
                    await dispatch(AuthThunks.signIn({ username: _data.username, password: null, provider: _data.provider }))
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        validate();
    }, [status])

    if (status === 'loading' || loading) return <PageLoading />

    if (status === 'authenticated' && !loading) return <>{children}</>

    redirect('/sign-in')
}

export default AuthGuard;

const signUp = async (_data: any) => {
    const existUser = await userService.getByUsername(_data.username);
    if (!existUser) {
        const payload: SignUpType = {
            username: _data.username,
            password: _data.password,
            name: _data.name,
            avatar: _data.avatar || '',
            provider: _data.provider,
        };
        return await authService.signUp(payload);
    }
}
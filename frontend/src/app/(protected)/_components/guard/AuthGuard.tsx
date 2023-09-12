"use client";

import { AuthActions } from '@redux/features/auth/authSlice';
import { AuthThunks } from '@redux/features/auth/authThunks';
import { useAppDispatch } from '@redux/hook';
import authService from '@services/auth/auth.service';
import { SignUpType } from '@services/auth/types';
import userService from '@services/user/user.service';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import PageLoading from '../loading/PageLoading';

const AuthGuard = ({ authenticated, setAnthenticated, children }) => {
    const dispatch = useAppDispatch();
    const { data, status } = useSession();
    const [loading, setLoading] = useState<boolean>(false);

    const validateWithCredentials = async () => {
        setLoading(true)
        const _data: any = { ...data };
        if (!_data?.username) {
            return;
        }
        try {
            if (_data.provider === "credentials") {
                dispatch(AuthActions.setUser(_data))
            } else {
                const existUser = await userService.getByUsername(_data.username, _data.provider);
                if (!existUser) {
                    const payload: SignUpType = {
                        username: _data.username,
                        password: _data.password,
                        name: _data.name,
                        avatar: _data.avatar || '',
                        provider: _data.provider,
                    };
                    await authService.signUp(payload);
                }
                await dispatch(AuthThunks.signIn({ username: _data.username, password: null, provider: _data.provider }))
            }
            setAnthenticated(true)
        } catch (error) {
            console.log(error)
            setAnthenticated(false)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (status === 'authenticated')
            validateWithCredentials();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])


    if (status === 'loading') return <PageLoading />

    if (authenticated) return <>{children}</>

    if (status === 'unauthenticated' && !authenticated && !loading) redirect('/sign-in')
}

export default AuthGuard;

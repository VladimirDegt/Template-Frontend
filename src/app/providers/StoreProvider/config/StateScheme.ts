import { UserSchema } from '@/entities/User';
import { LoginSchema, RegisterSchema } from '@/features/AuthByUserEmail';
import { ProfileSchema } from '@/entities/Profile';
import { AxiosInstance } from 'axios';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router/dist/lib/context';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
    registerForm?: RegisterSchema;
    profile?: ProfileSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
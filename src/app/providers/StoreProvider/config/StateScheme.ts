import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserEmail';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserEmail';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
}
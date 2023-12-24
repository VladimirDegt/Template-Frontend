import { StateSchema } from "app/providers/StoreProvider"
import { LoginSchema } from "../../types/loginSchema"
import { getLoginState } from "./getLoginState"

describe('Test state LoginForm', () => {

    test(`should return state LoginForm`, () => {
        const expected: StateSchema = {
            user: { },
            loginForm: {
                email: '',
                password: '',
                isLoading: false
            }
        }
        expect(getLoginState(expected)).toEqual(expected.loginForm)
    })

    test(`should return with empty state `, () => {
        const expected = {}
        //@ts-ignore
         expect(getLoginState({})).toEqual(undefined)
})

})
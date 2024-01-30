import {StateSchema} from "@/app/providers/StoreProvider"
import {getLoginState} from "./getLoginState"

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
        //@ts-ignore
         expect(getLoginState({})).toEqual(undefined)
})

})
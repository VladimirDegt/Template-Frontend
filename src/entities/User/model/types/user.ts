// інтерфейс для об'єкта, що повертається з бекенду
export interface User {
    _id: string,
    username: string,
    email: string
}

// інтерфейс для стейта
export interface UserSchema {
    // якщо не має, то не авторизован
    authData?: User
}
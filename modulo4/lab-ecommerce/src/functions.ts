import { userData } from "./types/userTypes"

export const typeUser = (user:any) => {
    const createUser: userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
    }
    return createUser
}
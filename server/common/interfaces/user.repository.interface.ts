import User from "../../user/user.entity"

export default interface IUserRepository {
    addUser(user: User): Promise<User>

    getUserByEmail(email: string): Promise<User | null>
}

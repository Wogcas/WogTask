// import IUserRepository from "common/interfaces/user.repository.interface";
// import User from "./user.entity";
// import { connection } from "utils/connection";

// export default class UserRepository implements IUserRepository {

//     private userRepo = connection.getRepository(User);

//     async addUser(user: User): Promise<User> {
//         try {
//           return await this.userRepo.save(user);  
//         } catch (error) {
            
//         }
//         throw new Error("Method not implemented.");
//     }
//     getUserByEmail(email: string): Promise<User | null> {
//         throw new Error("Method not implemented.");
//     }

// }
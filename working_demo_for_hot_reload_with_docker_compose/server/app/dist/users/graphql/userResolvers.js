var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import UserInterface from "../interfaces/UserInterface";
// import {
//   getUsers as getUsersService,
//   register,
//   login as loginService,
// } from "../services/usersApiService";
// import UserLoginInterface from "../interfaces/UserLoginInterface";
const data = [
    {
        _id: "62f54a154a5454a554a5454a54454a54",
        email: "user1@example.com",
        password: "$2b$10$54a5454a54a54a544a544a544a544a544a544a544a544a544a544a54", // Securely hashed password
        name: "John Doe",
        fname: "John",
        image: "https://example.com/user1.jpg",
        city: "New York",
        availability: "morning",
    },
    {
        _id: "62f54a154a5454a554a5454a54454a55",
        email: "user2@gmail.com",
        password: "$2b$10$4a54a544a544a544a544a544a544a544a544a544a544a544a544a54a", // Securely hashed password
        name: "Jane Smith",
        fname: "Jane",
        image: "https://example.com/user2.jpg",
        city: "London",
        availability: "noon",
    },
];
export const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return data;
});
// export const login = async (_: never, { user }: { user: UserLoginInterface }) =>
//   console.log("hi");
// export const createUser = async (_: never, { user }: { user: UserInterface }) =>
//   await register(user);
//# sourceMappingURL=userResolvers.js.map
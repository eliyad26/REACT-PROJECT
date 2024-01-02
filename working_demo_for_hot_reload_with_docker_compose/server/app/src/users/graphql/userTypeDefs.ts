export const userTypes = `  
  type User {
    _id: String
    email: String
    password: String
    name: String
    fname: String
    image: String
    city: String
    availability: String
  }
  input UserInput {
    _id: String
    email: String
    password: String
    name: String
    fname: String
    image: String
    city: String
    availability: String
  }
  
  type ResInfoObj {
      user: User
      token: String
    } 
  type Response {
    message: String
    resInfoObj: ResInfoObj
  }
  input UserLoginInput {
    email: String
    password: String
  }
   `;

export const userQueries = `
    getUsers: [User]
`;

// export const userMutation = `
// createUser(user: UserInput): User
// login(user: UserLoginInput): Response
// `;

interface UserInterface {
  _id?: string;
  email: string;
  password: string;
  name: string;
  fname: string;
  image: string;
  city: string;
  availability: "morning" | "noon" | "evening";
}

export default UserInterface;

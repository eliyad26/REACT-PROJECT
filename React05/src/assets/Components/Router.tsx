import { usePage } from "../../Providers/RouterProvider";
import { Home } from "./Home";
import NewTripForm from "./NewTripForm";
import { Trips } from "./Trips";
import UpdateTripForm from "./UpdateTripForm";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";

const Router = () => {
  const { page } = usePage();
  if (page === "Home") return <Home />;
  if (page === "Trips") return <Trips />;
  if (page === "UserRegistration") return <UserRegistration />;
  if (page === "UserLogin") return <UserLogin />;
  if (page === "NewTripForm") return <NewTripForm />;
  if (page === "UpdateTripForm") return <UpdateTripForm />;
};

export default Router;

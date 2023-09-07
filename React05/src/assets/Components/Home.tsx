import { usePage } from "../../Providers/RouterProvider";

export const Home = () => {
  const { setPage } = usePage();
  return (
    <>
      <button
        onClick={() => {
          setPage("Trips");
        }}
      >
        -Trips-
      </button>
      <button
        onClick={() => {
          setPage("UserRegistration");
        }}
      >
        -Registration-
      </button>
      <button
        onClick={() => {
          setPage("UserLogin");
        }}
      >
        -Login-
      </button>
    </>
  );
};

// מעבר לכל הטיולים
// מעבר לרישום
// מעבר להתחברות

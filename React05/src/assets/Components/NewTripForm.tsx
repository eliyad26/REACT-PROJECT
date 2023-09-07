import { usePage } from "../../Providers/RouterProvider";
import { useState } from "react";
const NewTripForm = () => {
  const { setPage } = usePage();
  interface Trip {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string;
  }

  const [Trip, setTrip] = useState<Trip>({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "",
    activities: "",
  });
  const [name, setname] = useState<string>("");
  const [destination, setdestination] = useState<string>("");
  const [startDate, setstartDate] = useState<string>("");
  const [endDate, setendDate] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [price, setprice] = useState<number>(0);
  const [image, setimage] = useState<string>("");
  const [activities, setactivities] = useState<string>("");

  const updateTrip = () => {
    setTrip({
      ...Trip,
      name: name,
      destination: destination,
      startDate: startDate,
      endDate: endDate,
      description: description,
      price: price,
      image: image,
      activities: activities,
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          setPage("Trips");
          updateTrip();
        }}
      >
        Trips
      </button>
      <br />
      <br />
      <br />
      <form action="submit">
        <label htmlFor="name">name: </label>
        <input
          type="text"
          onChange={(name) => {
            setname(name.target.value);
            updateTrip();
          }}
        />
        <br />
        <label htmlFor="name">destination: </label>
        <input
          type="text"
          onChange={(name) => {
            setdestination(name.target.value);
            updateTrip();
          }}
        />
        <br />
        <label htmlFor="name">startDate: </label>
        <input
          type="text"
          onChange={(name) => {
            setstartDate(name.target.value);
            updateTrip();
          }}
        />
        <br />
        <label htmlFor="name">endDate: </label>
        <input
          type="text"
          onChange={(name) => {
            setendDate(name.target.value);
            updateTrip();
          }}
        />
        <br />
        <label htmlFor="name">description: </label>
        <input
          type="text"
          onChange={(name) => {
            setdescription(name.target.value);
            updateTrip();
          }}
        />
        <br />
        <label htmlFor="name">price: </label>
        <input
          type="text"
          onChange={(name) => {
            const s = name.target.value;
            const num = +s;
            setprice(num);
            updateTrip();
          }}
        />
        <br />
        <label htmlFor="name">image: </label>
        <input
          type="text"
          onChange={(name) => {
            setimage(name.target.value);
            updateTrip();
          }}
        />
        <br />
        <label htmlFor="activities">activities: </label>
        <input
          type="text"
          onChange={(name) => {
            setactivities(name.target.value);
            updateTrip();
          }}
        />
        <br />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            fetch("http://localhost:3000/api/trips", {
              method: "POST",
              headers: {
                Authorization: "test-token",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(Trip),
            });
          }}
        >
          Submit!
        </button>
      </form>
      <p></p>
    </div>
  );
};

export default NewTripForm;

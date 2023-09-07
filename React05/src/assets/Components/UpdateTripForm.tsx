import { useID } from "../../Providers/IdProvider";
import {useState} from "react";
const UpdateTripForm = () => {
    interface Trip {
        id: string;
        name: string;
        destination: string;
        startDate: string;
        endDate: string;
        description: string;
        price: number;
        image: string;
        activities: string;
      }
      const [trip, setTrip] = useState<Trip>({
        name: "",
        destination: "",
        startDate: "",
        endDate: "",
        description: "",
        price: 0,
        image: "",
        activities: "",
      });
  const { id } = useID();
  fetch(`http://localhost:3000/api/trips/${id}`)
  .then((response)=>response.json)
  .then((data)=>setTrip(data));




  return <div>

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
  </div>;
};

export default UpdateTripForm;

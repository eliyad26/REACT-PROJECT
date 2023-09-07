// Trips - יכיל כרטיסיות המציגות את כל המידע החוזר מבקשת ‘הבא את כל הטיולים’ מהשרת
// בקומפוננטה זו יש ליצור כפתור מעבר לעמוד הראשי
// בקומפוננטה זו יש ליצור כפתור מעבר לקומפוננטה ליצירת טיול חדש
// בלחיצה על אחד הכרטיסים נציג את קומפוננטה להצגת כל המידע עבור טיול ספציפי
// על כל כרטיס יש ליצור כפתור המבצע מחיקה
import { useID } from "../../Providers/IdProvider";
import { useEffect, useState } from "react";
import { usePage } from "../../Providers/RouterProvider";
export const Trips = () => {
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
  const [Trips, setTrips] = useState<Trip[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/trips")
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error(error));
  }, []);
  //   console.log(Trips);
  const { setPage } = usePage();
  const { setID } = useID();
  return (
    <>
      <button
        style={{ margin: "7px", backgroundColor: "blue" }}
        onClick={() => {
          setPage("NewTripForm");
        }}
      >
        -Create New Trip-
      </button>
      <button
        style={{ margin: "7px", backgroundColor: "blue" }}
        onClick={() => {
          setPage("Home");
        }}
      >
        -Home-
      </button>

      <div className="trip-cards">
        {Trips &&
          Trips?.map((trip) => (
            <div
              className="trip-card"
              key={trip.id}
              style={{ border: "black 2px solid", margin: "7px" }}
            >
              <img
                src={trip.image}
                alt={trip.name}
                className="trip-image"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
              <div className="trip-details">
                <h2>{trip.name}</h2>
                <p>Destination: {trip.destination}</p>
                <p>Start Date: {trip.startDate}</p>
                <p>End Date: {trip.endDate}</p>
                <p>Description: {trip.description}</p>
                <p>Price: {trip.price}</p>
                <p>Activities: {trip.activities}</p>
                <button
                  style={{ margin: "7px", backgroundColor: "cyan" }}
                  onClick={() => {
                    const str1 = trip.id;
                    const _id = str1;
                    fetch(`http://localhost:3000/api/trips/${_id}`, {
                      method: "DELETE",
                      headers: {
                        authorization: "test-token",
                        "Content-Type": "application/json",
                      },
                    })
                      .then((response) => {
                        if (response.ok) {
                          fetch("http://localhost:3000/api/trips")
                            .then((response) => response.json())
                            .then((data) => setTrips(data))
                            .catch((error) => console.error(error));
                        } else {
                          console.error("Failed to delete the item");
                        }
                      })
                      .catch((error) => {
                        console.error("Network error:", error);
                      });
                  }}
                >
                  -delete trip-
                </button>

                <button
                  onClick={() => {
                    setID(trip.id);
                    setPage("UpdateTripForm");
                  }}
                >
                  - Edit: -
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import GuestList from "../component/GuestList";
import { getGuests } from "../services/GuestsServices";

const MainContainer = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests().then((data) => {
      console.log(data);
      setGuests(data);
    });
  }, []);

  return (
    <>
      <Form />
      <GuestList allGuests={guests} />
    </>
  );
};

export default MainContainer;

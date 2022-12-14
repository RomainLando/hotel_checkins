import React, { useState, useEffect } from "react";
import Form from "../component/Form";
import GuestList from "../component/GuestList";
import { getGuests, postGuest, deleteGuest, putGuest } from "../services/GuestsServices";

const MainContainer = () => {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    let temp = guests.map(g => g);
    temp.push(guest);
    setGuests(temp);
  }
  const removeGuest = (id) => {
    let temp = guests.map(g => g);
    const returnedGuest = temp.find((guest) => guest._id ===id)
    temp.splice(temp.indexOf(returnedGuest),1);
    setGuests(temp);
  }
  const checkGuest = (payload ,id) => {
    let temp = guests.map(g => g);
    const tempGuest = temp.find((guest) => guest._id ===id)
    tempGuest["checkedInStatus"] = payload["checkedInStatus"];
    setGuests(temp);
  }




  useEffect(() => {
    getGuests().then((data) => {
      console.log(data);
      setGuests(data);
    });
  }, []);


  return (
    <>
      <Form addGuest={addGuest} postGuest={postGuest} />
      <GuestList allGuests={guests} 
      deleteGuest={deleteGuest} 
      removeGuest={removeGuest} 
      checkGuest={checkGuest} 
      putGuest={putGuest}
      />
    </>
  );
};

export default MainContainer;

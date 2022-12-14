import GuestCard from "./GuestCard";

const GuestList = ({allGuests, deleteGuest, removeGuest, checkGuest, putGuest}) => {

    const guestList = allGuests.map((guest) => {
        return (
            <GuestCard guest={guest} 
            key={guest._id} 
            deleteGuest={deleteGuest} 
            removeGuest={removeGuest} 
            checkGuest={checkGuest}
            putGuest={putGuest}
            />
        )
    })


    return (
    <>
    {guestList}
    </>
    );
}


export default GuestList;
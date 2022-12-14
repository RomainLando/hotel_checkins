import GuestCard from "./GuestCard";

const GuestList = ({allGuests, deleteGuest, removeGuest}) => {

    const guestList = allGuests.map((guest) => {
        return (
            <GuestCard guest={guest} key={guest._id} deleteGuest={deleteGuest} removeGuest={removeGuest} />
        )
    })


    return (
    <>
    {guestList}
    </>
    );
}


export default GuestList;
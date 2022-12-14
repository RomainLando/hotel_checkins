import GuestCard from "./GuestCard";

const GuestList = ({allGuests}) => {

    const guestList = allGuests.map((guest) => {
        return (
            <GuestCard guest={guest} key={guest._id} />
        )
    })


    return (
    <>
    {guestList}
    </>
    );
}


export default GuestList;
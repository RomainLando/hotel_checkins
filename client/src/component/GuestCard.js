
const GuestCard = ({guest, deleteGuest, removeGuest}) => {

    const checkedin = String(guest.checkedInStatus)

    const handleClick = function (e) {
        deleteGuest(e.target.value)
        removeGuest(e.target.value)
        
    }

    return (
    <div>
        <h4>{guest.name}</h4>
        <p>{guest.emailAddress}</p>
        <p>Checked in? {checkedin}</p>
        <button id='delete-button' value={guest._id} onClick={handleClick} >Delete</button>
    </div>
    )
}


export default GuestCard;
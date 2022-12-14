
const GuestCard = ({ guest, deleteGuest, removeGuest, checkGuest, putGuest}) => {

    const checkedin = String(guest.checkedInStatus)

    const handleDeleteClick = function (e) {
        deleteGuest(e.target.value);
        removeGuest(e.target.value);
        

    }
    const handleCheckedInClick = function (e) {
        const payload = {"checkedInStatus": ""}
        payload["checkedInStatus"] = guest.checkedInStatus ? false : true;
        const id = e.target.value;
        checkGuest(payload, id);
        putGuest(payload, id);

    }
    

    return (
        <div>
            <h4>{guest.name}</h4>
            <p>{guest.emailAddress}</p>
            <span>Checked in? {guest.checkedInStatus ? <div>✓</div> : <div>❌</div>}</span>
            <button id='delete-button' value={guest._id} onClick={handleDeleteClick} >Delete</button>
            <button id='update-button' value={guest._id} onClick={handleCheckedInClick} >Check In</button>
        </div>
    )
}


export default GuestCard;
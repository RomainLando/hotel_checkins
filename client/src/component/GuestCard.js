const GuestCard = ({guest}) => {

    const checkedin = String(guest.checkedInStatus)

    return (
    <div>
        <h4>{guest.name}</h4>
        <p>{guest.emailAddress}</p>
        <p>Checked in? {checkedin}</p>
    </div>
    )
}


export default GuestCard;
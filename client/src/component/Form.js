import React, {useState} from "react";


const Form = ({addGuest, postGuest}) => {

    // const [formData, setFormData] = useState({});
    const formData = {}

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        formData["name"] = e.target.name.value;
        formData["emailAddress"] = e.target.emailAddress.value;
        formData["checkedInStatus"] = false;
        console.log(formData);
        postGuest(formData).then((data) => {
            addGuest(data);
        });
    }

 
    return (

        <div>

            <form className="" onSubmit={handleSubmit} method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />

                <label htmlFor="emailAddress">Email Address:</label>
                <input type="email" id="emailAddress" required />

                <input type="submit" value="Save" id="save" />

            </form>
        </div>
    )
}


export default Form;


import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import TextField from "../../TextField/TextField";
import './CustomerForm.css'
import ImageUploadField from "../../ui/ImageUploadField/ImageUploadField";

const CustomerForm = (props) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [notes, setNotes] = useState('');
    const [customerImage, setCustomerImage] = useState(null);
    const [resetImageTrigger, setResetImageTrigger] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCustomer = {
            image: customerImage,
            
            name: fullName,
            email,
            phone: phoneNumber,
            company: companyName,
            id: customerId,
            notes
            
        };

        props.onSubmit(newCustomer);

        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setCompanyName('');
        setCustomerId('');
        setNotes('');
        setCustomerImage(null);
        setResetImageTrigger(true);
    };

    useEffect(() => {
        if (resetImageTrigger) {
            setResetImageTrigger(false);
        }
    }, [resetImageTrigger]);

    return (
        <div className='form'>
            <h3 className='name_form'>Customer Registration</h3>
            <form onSubmit={handleSubmit} className="form-grid">
                <TextField
                    label="Full Name"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={value => setFullName(value)}
                    mandatory={true}
                    type="text"
                />

                <TextField
                    label="Email Address"
                    placeholder="Enter email"
                    value={email}
                    onChange={value => setEmail(value)}
                    mandatory={true}
                    type="email"
                />

                <TextField
                    label="Phone Number"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={value => setPhoneNumber(value)}
                    mandatory={false}
                    type="tel"
                />

                <TextField
                    label="Company Name"
                    placeholder="Enter company"
                    value={companyName}
                    onChange={value => setCompanyName(value)}
                    mandatory={false}
                    type="text"
                />

                <TextField
                    label="Customer ID"
                    placeholder="Enter customer ID"
                    value={customerId}
                    onChange={value => setCustomerId(value)}
                    mandatory={false}
                />

                <TextField
                    label="Notes"
                    placeholder="Enter notes"
                    value={notes}
                    onChange={value => setNotes(value)}
                    mandatory={false}
                />

                <ImageUploadField
                    label="Customer Image"
                    onChange={setCustomerImage}
                    mandatory={false}
                    resetTrigger={resetImageTrigger}
                />

                <div className="form-button-container">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default CustomerForm;

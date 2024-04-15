import PropTypes from "prop-types";

const InitialForm = ({ onNext }) => {
    return (
        <div>
            <label htmlFor="fname" className="block mt-2">
                First Name
                <input
                    className="input-style"
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Enter First Name"
                />
            </label>
            <label htmlFor="lname" className="block mt-2">
                Last Name
                <input
                    className="input-style"
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Enter Last Name"
                />
            </label>
            <label htmlFor="mname" className="block mt-2">
                Middle Name
                <input
                    className="input-style"
                    type="text"
                    name="mname"
                    id="mname"
                    placeholder="Enter Middle Name"
                />
            </label>
            <label htmlFor="phoneNumber" className="block mt-2">
                Phone Number
                <input
                    className="input-style"
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter phone number"
                />
            </label>

            <button onClick={onNext} className="btn btn-primary mt-4">
                Continue
            </button>
        </div>
    );
};

InitialForm.propTypes = {
    onNext: PropTypes.func,
};

export default InitialForm;

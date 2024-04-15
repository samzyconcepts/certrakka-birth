const FinalForm = () => {
    return (
        <div>
            <label htmlFor="nin" className="block mt-2">
                NIN
                <input
                    className="input-style"
                    type="number"
                    name="nin"
                    id="nin"
                    placeholder="Enter NIN"
                />
            </label>
            <label htmlFor="email" className="block mt-2">
                Email address
                <input
                    className="input-style"
                    type="mail"
                    name="email"
                    id="email"
                    placeholder="Enter Email address"
                />
            </label>
            <label htmlFor="gender" className="block mt-2">
                Gender
                <select name="" id="" className="input-style">
                    <option value="" disabled selected hidden>
                        Choose your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <label htmlFor="password" className="block mt-2">
                Password
                <input
                    className="input-style"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                />
            </label>
            <label htmlFor="savepwd" className="flex gap-2 items-center mt-2">
                <input
                    className="rounded appearance-none w-6 h-6 border-2 border-gray-300 checked:bg-primary checked:border-transparent focus:outline-none focus:border-primary"
                    type="checkbox"
                    name="savepwd"
                    id="savepwd"
                />
                Save password
            </label>
            <button className="btn btn-primary mt-4">Sign Up</button>
        </div>
    );
};
export default FinalForm;

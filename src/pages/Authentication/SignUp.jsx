import { useState } from "react";
import { Link } from "react-router-dom";
import InitialForm from "./components/InitialForm";
import FinalForm from "./components/FinalForm";

// Image
import noise from "../../assets/noise.png";
import overlay_line from "../../assets/bg-line.png";

function SignUp() {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };
    // const prevStep = () => {
    //     setStep(step - 1);
    // };

    return (
        <main
            className={`bg-gradient-to-b from-[#7680B4] to-primary to-30% h-dvh relative z-10`}
        >
            {/* noise overlay */}
            <div
                className={`absolute bg-center bg-cover inset-0 z-0`}
                style={{ backgroundImage: `url(${noise})` }}
            ></div>
            {/* main signup content */}
            <div
                className="relative z-10 h-full bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${overlay_line})` }}
            >
                <h1 className="text-3xl font-bold text-white">CertTrakka</h1>
                <div className="bg-white w-[498px] mt-8 px-7 py-8 rounded-lg">
                    <h3 className="text-4xl font-bold">
                        Sign Up On CertTrakka
                    </h3>
                    <p>
                        Have an account already?{" "}
                        <Link to="/login" className="text-primary">
                            Login
                        </Link>
                    </p>

                    <div>
                        {step === 1 && <InitialForm onNext={nextStep} />}
                        {step === 2 && <FinalForm />}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignUp;

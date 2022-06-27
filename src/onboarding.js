import { useState } from "react"
import { ControlledOnboarding } from "./components/uncontrolledUnboarding"
import { UncontrolledOnboarding } from "./components/controlledUnboarding"
import { Link } from "react-router-dom"

const Step1 = ({ goToNext }) => (
    <div>
        <h2>Step1:</h2>
        <button className="btn btn-dark" onClick={() => goToNext({ name: "Victor" })}>Go to step2</button>
    </div>
)
const Step2 = ({ goToNext }) => (
    <div>
        <h2>Step2:</h2>
        <button className="btn btn-dark" onClick={() => goToNext({ age: 200 })}>Go to step3</button>
    </div>
)
const Step3 = ({ goToNext }) => (
    <div>
        <h2>Your age qualifies discount</h2>
        <button className="btn btn-dark" onClick={() => goToNext({ color: 'black' })}>
            {" "}
            Move to last step
        </button>
    </div>
)
const Step4 = ({ goToNext }) => (
    <div>
        <h2>Step3:</h2>
        <button className="btn btn-dark" onClick={() => goToNext({ color: 'black' })}>Finish</button>
    </div>
)

export default function Onboarding() {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToNext = (stepData) => {
        const updateData = {
            ...onboardingData,
            ...stepData
        }
        setOnboardingData(updateData)
        setCurrentIndex((c) => c + 1)
    }
    return (
        <div className="container mt-5">
            <UncontrolledOnboarding
                onFinished={(data) => { console.log("finished", data) }}
            >
                <Step1 />
                <Step2 />
                <Step3 />
                <Step4 />
            </UncontrolledOnboarding>

            <ControlledOnboarding
                currentIndex={currentIndex}
                goToNext={goToNext} 
                onFinished={(data) => {
                    console.log("controlled", data);
                }}
            >
                <Step1 />
                <Step2 />
                {onboardingData.age > 18 && <Step3 />}
                <Step4 />
            </ControlledOnboarding>
            <h1 className="ms-5 mt-4">Onboarding really helps in page formatting</h1>
            <p>"Easy navigation helps in the onboarding terms when the user <br />
            is not up to the expected age or has'nt met the expected requirement"</p>
            <div className="d-flex justify-content-between ms-5 l-div">
                <Link to="/docs/sPage" className="btn btn-outline-dark p-3"><i class="fa-solid fa-angles-left"></i> Previous</Link>
                <Link to="/docs/dPage" className="btn btn-outline-dark p-3">Next <i class="fa-solid fa-angles-right"></i></Link>
            </div>
        </div>
    )
}

;
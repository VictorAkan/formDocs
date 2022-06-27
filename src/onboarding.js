import { useState } from "react"
import { ControlledOnboarding } from "./components/uncontrolledUnboarding"
import { UncontrolledOnboarding } from "./components/controlledUnboarding"

const Step1 = ({ goToNext }) => (
    <div>
        <h2>Step1:</h2>
        <button onClick={() => goToNext({ name: "Victor" })}>Go to step2</button>
    </div>
)
const Step2 = ({ goToNext }) => (
    <div>
        <h2>Step2:</h2>
        <button onClick={() => goToNext({ age: 200 })}>Go to step3</button>
    </div>
)
const Step3 = ({ goToNext }) => (
    <div>
        <h2>Your age qualifies discount</h2>
        <button onClick={() => goToNext({ color: 'black' })}>
            {" "}
            Move to last step
        </button>
    </div>
)
const Step4 = ({ goToNext }) => (
    <div>
        <h2>Step3:</h2>
        <button onClick={() => goToNext({ color: 'black' })}>Finish</button>
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
        <div className="container">
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
        </div>
    )
}

;
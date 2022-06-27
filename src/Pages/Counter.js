import { useState } from "react"
import { printProps } from "../components/PrintProps"
import { addTwo } from "../components/addTwo"
import { withUser } from "../components/withUser"

const CounterButton = ({ increment, color, title }) => {
    const [counter, setCounter] = useState(0)
    return(
        <div>
            <h1>{title}</h1>
            <h4 style={{ color }}>Counter is : {counter}</h4>
            <button className="btn btn-outline-dark" onClick={() => setCounter(counter + increment)}>Increase Counter</button>
        </div>
    )
}
const UserService = ({user, loading, color}) => {
    return loading ? <h3>Loading...</h3> : <>
        <div style={{ color }}>
            <h2>Name: {user.name}</h2>
            <h4>Age: {user.age}</h4>
        </div>
    </>
}

const WrappedButton = printProps(CounterButton)
const AddTwo = addTwo(CounterButton)
const WrappedUser = withUser(UserService)



export default function Counter() {
    return(
        <div className="container mt-5">
            <WrappedButton increment={1} color="red" title="Counter" />
            <div className="mt-5 mb-4">
                <h5>The Counter above was set to increment only once</h5>
            </div>
            <AddTwo increment={2} color="red" title="CounterB"/>
            <div className="mt-5 mb-4">
                <h5>The Counter above was set to increment twice</h5>
            </div>
            <WrappedUser color="grey" />
            <div className="mt-5 mb-4">
                <h5>You can set an amount of time to load before showing<br />
                user's info</h5>
            </div>
        </div>
    )
}
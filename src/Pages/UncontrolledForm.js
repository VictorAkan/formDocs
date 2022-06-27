import { createRef } from "react";
import { Link } from "react-router-dom"

export default function UncontrolledForm() {
    const fNameRef = createRef()
    const lNameRef = createRef()
    const ageRef = createRef()
    const numRef = createRef()
    const dobRef = createRef()
    const qRef = createRef()
    const submitForm = (e) => {
        e.preventDefault();
        console.log(fNameRef.current.value);
        console.log(lNameRef.current.value);
        console.log(ageRef.current.value);
        console.log(numRef.current.value);
        console.log(dobRef.current.value);
        console.log(qRef.current.value);
        if (ageRef.current.value < 18) {
            alert('You cannot register here!')
        }
    }
    return(
        <div>
            <h1 className="text-center ms-5 mt-4">This is how the Uncontrolled form works</h1>
            <p className="text-center">"Uncontrolled forms are not easy to manage or change and mutate single fields of<br />
            the form. Most times they get triggered when they are submitted"</p>
            <h3 className="mt-5">This is an example of how it looks like:</h3>
            <div className="container ms-4 d-flex justify-content-center">
                <form className="container shadow p-3" onSubmit={submitForm}>
                <h2 style={{color:'grey'}}>VicHub</h2>
                    <div className="d-md-flex justify-content-between">
                        <div className="mt-3 me-3">First Name:<input type="text" className="form-control" ref={fNameRef} /></div>
                        <div className="mt-3">Last Name:<input type="text" className="form-control" ref={lNameRef} /></div>
                    </div>
                    <div className="d-md-flex justify-content-between">
                        <div className="mt-3 me-3">Age:<input type="number" className="form-control" ref={ageRef} /></div>
                        <div className="mt-3">Phone Number:<input type="text" className="form-control" ref={numRef} /></div>
                    </div>
                    <p className="text-left">Date Of Birth:</p>
                    <input type="date" className="form-control mt-3" ref={dobRef} />
                    Qualification:
                    <input type="text" className="form-control mt-3" ref={qRef} />
                    <div className="container d-flex justify-content-center">
                        <button type="submit" className="mt-4 btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-between ms-5 mt-4">
                <Link to="/docs" className="btn btn-outline-dark p-3"><i class="fa-solid fa-angles-left"></i> Previous</Link>
                <Link to="/docs/sPage" className="btn btn-outline-dark p-3">Next <i class="fa-solid fa-angles-right"></i></Link>
            </div>
        </div>
    )
}
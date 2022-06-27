import { Link } from "react-router-dom"

export default function ControlledForm({formValue, age, onSubmit}) {
    return(
        <div>
            <h1 className="mt-4 text-center ms-5">This is how the Controlled form works</h1>
            <p className="text-center">"Controlled forms are easy to manage or change and each field can be mutated anytime<br />
            in any hook and functions can be passed as well"</p>
            <h3 className="mt-5">An example of how it looks like:</h3>
            <div className="container d-flex ms-4 justify-content-center">
            <form className="container shadow p-3" onSubmit={onSubmit}>
                <h2 style={{color:'grey'}}>VicHub</h2>
                    <div className="d-md-flex justify-content-between">
                        <div className="mt-3 me-3">First Name:<input type="text" className="form-control"
                        value={formValue}
                        /></div>
                        <div className="mt-3">Last Name:<input type="text" className="form-control"
                        value={formValue}
                        /></div>
                    </div>
                    <div className="d-md-flex justify-content-between">
                        <div className="mt-3 me-3">Age:<input type="number" className="form-control"
                        value={age}
                        /></div>
                        <div className="mt-3">Phone Number:<input type="text" className="form-control"
                        value={formValue}
                        /></div>
                    </div>
                    <p className="text-left">Date Of Birth:</p>
                    <input type="date" className="form-control mt-3"
                    value={formValue}
                    />
                    Qualification:
                    <input type="text" className="form-control mt-3"
                    value={formValue}
                    />
                    <div className="container d-flex justify-content-center">
                        <button type="submit" disabled={age < 18} className="mt-4 btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-between ms-5 mt-4">
                <Link to="/docs/fPage" className="btn btn-outline-dark p-3"><i class="fa-solid fa-angles-left"></i> Previous</Link>
                <Link to="/docs/tPage" className="btn btn-outline-dark p-3">Next <i class="fa-solid fa-angles-right"></i></Link>
            </div>
        </div>
    )
}
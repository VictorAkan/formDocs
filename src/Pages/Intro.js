import { Link } from "react-router-dom"

export default function Introduction() {
    return(
        <div>
            <h1 className="text-center mt-3">Here is a guide to the docs to help developers solve their Form issues</h1>
            <p className="mt-5">"It's so good and important to know how to treat form validation, controlled and uncontrolled form<br />
            Form qualifications in cases where the user is not up to 18, and other age restriction cases."</p>
            <h3 className="display-4 mt-4">Here is the order of how the docs will go:</h3>
            <ul className="order__list">
                <li className="ms-5">First we'll talk about Uncontrolled form <span><Link to="/docs/fPage">here</Link></span></li>
                <li className="ms-5">Then we'll talk about Controlled forms <span><Link to="/docs/sPage">here</Link></span></li>
                <li className="ms-5">And we'll brush out with Qualifications <span><Link to="/docs/tPage">here</Link></span></li>
                <li className="ms-5">Then finally Validations <span><Link to="/docs/fPage">here</Link></span></li>
            </ul>
            <h5 className="mt-5"><b className="me-2">So what are you waiting for, Let's get </b><span>
                <Link to="/docs/fPage" className="btn btn-dark">Going <i className="fa-solid fa-angle-right"></i><i className="fa-solid fa-angle-right"></i></Link>
            </span></h5>
        </div>
    )
}
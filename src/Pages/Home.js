import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className="container d-flex justify-content-center mt-5">
            <div>
                <h1 className="head text-center">Welcome Home, you can click the docs link above to read the docs</h1>
                <h1 className="text-center mt-3">...Or go <span><Link to="/docs">here</Link></span></h1>
            </div>
        </div>
    )
}
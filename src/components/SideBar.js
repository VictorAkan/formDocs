import { Link,Outlet } from "react-router-dom"

export default function SideBar() {
    return(
        <>
            <div className="p-5 bg-dark sidebar">
                <ul className="me-5">
                    <li>
                        <Link to="/docs" className="btn text-white">Introduction</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/docs/fPage" className="btn text-white">Uncontrolled</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/docs/sPage" className="btn text-white">Controlled</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/docs/tPage" className="btn text-white">Onboarding</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/docs/dPage" className="btn text-white">Counter</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}
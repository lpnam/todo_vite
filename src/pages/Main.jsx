import { Outlet, Link } from "react-router-dom";

function Main() {
    return (
        <>
            <nav className="border border-red-500 rounded-md mb-8">
                <ul className="flex flex-row">
                    <li className="p-6">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="p-6">
                    <Link to="/todos">TodoList</Link>
                    </li>
                    <li className="p-6">
                    <Link to="/card-eth">Card-ETH</Link>
                    </li>
                </ul>
            </nav>
    
            <Outlet />
        </>
    )
}

export default Main
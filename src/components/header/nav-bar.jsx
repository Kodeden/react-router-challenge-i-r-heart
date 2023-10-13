import { Link } from "react-router-dom";
import AddContact from "./add-contact";

export default function NavBar() {
    return (
        <nav className="flex justify-evenly items-center mb-5 h-25 bg-gray-900 text-white p-5">
            <Link to="/" className="text-3xl font-bold text-white">Home</Link>
            <AddContact />
            </nav>
    );
}
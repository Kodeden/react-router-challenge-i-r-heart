import { Link } from "react-router-dom";

export default function AddContact() {
    return (
        <Link to="/add-edit" className="rounded-md p-5 bg-green-900 text-white hover:text-pink-500">
            Add Contact
        </Link>
    )
}
import { Link } from "react-router-dom";


// not functional yet, a placeholder for now
export default function AddContact() {
    return (
        <Link to="/add-edit" className="rounded-md p-2 bg-[#468486] font-semibold text-[#0c0c1d] hover:bg-[#a5ffd6] hover:text-[#1b1b42]  hover:font-bold">
            Add Contact
        </Link>
    )
}
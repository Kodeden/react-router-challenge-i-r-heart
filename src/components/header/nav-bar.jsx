import { Link } from "react-router-dom";
import AddContact from "./add-contact";

export default function NavBar() {
    return (
        <nav className="flex justify-evenly items-center  bg-[#12122b] p-7">
            <Link to="/" className="text-5xl font-bold text-[#a37c29]">Contacts</Link>
            <AddContact />
            </nav>
    );
}
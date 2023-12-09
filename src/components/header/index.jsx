import { Link } from "react-router-dom";
import AddContact from "./add-contact";

export default function NavBar() {
  return (
    <nav
      className="mt mb-6 flex items-center justify-evenly  bg-[#14213d]
        p-7"
    >
      <Link to={"/"} className="text-5xl font-bold text-[#a37c29]">
        Contacts
      </Link>
      <AddContact />
    </nav>
  );
}

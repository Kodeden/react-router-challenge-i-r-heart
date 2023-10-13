import { Link } from "react-router-dom";
import AddContact from "./add-contact";

export default function NavBar() {
  return (
    <nav
      className="mt mb-6 flex items-center justify-evenly bg-[#06060e]
        p-7"
    >
      <Link to="/" className="text-5xl font-bold text-[#5c9ead]">
        Contacts
      </Link>
      <AddContact />
    </nav>
  );
}

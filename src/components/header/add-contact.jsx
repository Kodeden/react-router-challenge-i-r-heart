import { Link } from "react-router-dom";

// not functional yet, a placeholder for now
export default function AddContact() {
  return (
    <Link
      to="/add-edit"
      className="rounded-md bg-[#000000] p-2 font-semibold text-[#a37c29] hover:bg-[#a37c29] hover:font-bold  hover:text-[#1b1b42]"
    >
      Add Contact
    </Link>
  );
}

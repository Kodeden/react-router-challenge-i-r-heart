import { Link } from "react-router-dom";

// not functional yet, a placeholder for now
export default function AddContact() {
  return (
    <Link
      to="/add-edit"
      className="rounded-md bg-[#5c9ead] p-2 font-semibold text-[#0c0c1d] hover:bg-[#eaac8b] hover:font-bold  hover:text-[#1b1b42]"
    >
      Add Contact
    </Link>
  );
}

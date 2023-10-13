import { Link } from "react-router-dom";

// not functional yet, a placeholder for now
export default function AddContact() {
  return (
    <Link
      to="/add-edit"
      className="rounded-md bg-[#a37c29] p-2 font-semibold text-[#14213d] hover:bg-[#b5bab5] hover:font-bold  hover:text-[#14213d]"
    >
      Add Contact
    </Link>
  );
}

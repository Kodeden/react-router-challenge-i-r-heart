import { Link } from "react-router-dom";

export default function EditButton({ contact }) {
  return (
    <Link to={"add-edit"} state={{ contact }} className="actionButton">
      Edit Contact
    </Link>
  );
}

import { Link } from "react-router-dom";

export default function ContactName({ contact }) {
  return (
    <li>
      <Link to={`contacts/${contact.id}`} key={contact.id}>
        {contact.name}
      </Link>
    </li>
  );
}

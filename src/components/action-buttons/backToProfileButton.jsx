import { Link, useNavigation } from "react-router-dom";

export default function BackToProfileButton({ contactId }) {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="actionButton" disabled>
        Back to Contact&apos;s Profile
      </div>
    );
  }
  return (
    <Link to={`/contacts/${contactId}`} className="actionButton">
      Back to Contact&apos;s Profile
    </Link>
  );
}

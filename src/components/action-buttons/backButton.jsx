import { Link, useNavigation } from "react-router-dom";

export default function BackButton() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div to={"/"} className="actionButton">
        Back to Main Contacts List
      </div>
    );
  }
  return (
    <Link to={"/"} className="actionButton">
      Back to Main Contacts List
    </Link>
  );
}

import { useNavigation, useSubmit } from "react-router-dom";

export default function DeleteButton({ contactId }) {
  const submit = useSubmit();
  const navigation = useNavigation();

  return (
    <>
      <button
        className="actionButton"
        onClick={() => {
          submit({ id: contactId }, { method: "DELETE" });
        }}
        disabled={navigation.state !== "idle"}
      >
        Delete Contact
      </button>
    </>
  );
}

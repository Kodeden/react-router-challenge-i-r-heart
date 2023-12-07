import { useNavigation, useSubmit } from "react-router-dom";

export default function DeleteButton({ contactId }) {
  const submit = useSubmit();
  const navigation = useNavigation();

  return (
    <>
      <button
        className="rounded-md bg-[#b5bab5] px-2 py-1 font-semibold text-[#14213d] hover:bg-[#a37c29] hover:font-bold  hover:text-[#14213d]"
        onClick={() => {
          submit({ id: contactId }, { method: "DELETE" });
        }}
        disabled={navigation.state !== "idle"}
      >
        {" "}
        Delete Contact
      </button>
    </>
  );
}

import { Form, useLocation, useNavigation } from "react-router-dom";

export default function ContactForm() {
  const { state } = useLocation();
  const stateOfButton = useNavigation();

  return (
    <Form
      className={"flex flex-col items-center justify-center"}
      method={state ? "PATCH" : "POST"}
      name="contactInformation"
    >
      <input
        type="hidden"
        name="id"
        id="id"
        value={state ? state.contact.id : ""}
      />
      <label htmlFor="contactName">Name</label>
      <input
        className="formsInput"
        type="text"
        name="name"
        id="contactName"
        placeholder="Enter Name"
        defaultValue={state ? state.contact.name : ""}
      />
      <label htmlFor="contactPhone">Phone number</label>
      <input
        className="formsInput"
        type="tel"
        name="tel"
        id="contactPhone"
        placeholder="Enter Phone Number"
        defaultValue={state ? state.contact.tel : ""}
      />
      <label htmlFor="contactEmail">Email</label>
      <input
        className="formsInput"
        type="email"
        name="email"
        id="contactEmail"
        placeholder="Enter Email Address"
        defaultValue={state ? state.contact.email : ""}
      />
      <button
        className="actionButton"
        disabled={stateOfButton.state !== "idle"}
      >
        Save Contact
      </button>
    </Form>
  );
}

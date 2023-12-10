import useForm from "@hooks/use-form.js";
import { Form, useLocation, useNavigation } from "react-router-dom";
import {
  BackButton,
  BackToProfileButton,
} from "../components/action-buttons/index.jsx";

export default function ContactForm() {
  const { state: formState } = useLocation();
  const stateOfButton = useNavigation();
  const { formData, handleChange, formRef, handleCancel } = useForm({
    img: formState?.contact.img || "",
    name: formState?.contact?.name || "",
    tel: formState?.contact?.tel || "",
    email: formState?.contact?.email || "",
  });

  const isEditMode = !!formState;
  const contactId = formState?.contact?.id || null;

  return (
    <Form
      className={"flex flex-col items-center justify-center"}
      method={formState ? "PATCH" : "POST"}
      name="contactInformation"
      ref={formRef}
    >
      <input
        type="hidden"
        name="id"
        id="id"
        value={formState?.contact?.id || ""}
      />
      <label htmlFor="contactImg">Image</label>
      <input
        className="formsInput"
        type="url"
        name="img"
        id="contactImg"
        placeholder="Enter Link to Image"
        value={formData.img}
        onChange={handleChange}
      />
      <label htmlFor="contactName">Name</label>
      <input
        className="formsInput"
        type="text"
        name="name"
        id="contactName"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="contactPhone">Phone number</label>
      <input
        className="formsInput"
        type="tel"
        name="tel"
        id="contactPhone"
        placeholder="Enter Phone Number"
        value={formData.tel}
        onChange={handleChange}
      />
      <label htmlFor="contactEmail">Email</label>
      <input
        className="formsInput"
        type="email"
        name="email"
        id="contactEmail"
        placeholder="Enter Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <button className="actionButton" onClick={handleCancel}>
        Clear Form Without Saving
      </button>
      <button
        className="actionButton"
        type="submit"
        disabled={stateOfButton.state !== "idle"}
      >
        {isEditMode ? "Save Edits to Contact" : "Save Contact"}
      </button>
      {isEditMode && <BackToProfileButton contactId={contactId} />}
      <BackButton />
    </Form>
  );
}

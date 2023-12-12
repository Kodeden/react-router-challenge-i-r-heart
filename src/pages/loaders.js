import { defer } from "react-router-dom";
import apiService from "../api.service";

async function loaders({ params }) {
  const contacts = apiService.index();
  const contact = apiService.show(params.id);

  return defer({ contacts, contact });
}

export default loaders;

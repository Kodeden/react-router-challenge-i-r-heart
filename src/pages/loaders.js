import { defer } from "react-router-dom";
import apiService from "../api.service";

async function loaders({ params }) {
  const contacts = apiService.index();
  const contact = params.id ? apiService.show(params.id) : apiService.index();

  return defer({ contacts, contact });
}

export default loaders;

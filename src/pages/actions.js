import { redirect } from "react-router-dom";
import apiService from "../api.service.js";

export const ButtonAction = async ({ request }) => {
  const fd = await request.formData();
  const data = Object.fromEntries(fd);

  switch (request.method) {
    case "DELETE": {
      apiService.delete(data.id);
      return redirect("/");
    }
    case "POST": {
      apiService.create(data);
      return redirect("/");
    }
  }

  return null;
};

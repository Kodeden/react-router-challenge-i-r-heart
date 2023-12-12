const BASE_URL = "http://localhost:3001/contacts";

export default {
  async index() {
    const response = await fetch(BASE_URL);
    return response.json();
  },

  async show(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
  },

  async create(newContact) {
    if (!newContact.img || newContact.img === "") {
      newContact.img = "https://picsum.photos/id/65/150/150";
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },

  async update(id, updatedContact) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedContact),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },

  async delete(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

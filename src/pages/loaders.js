import apiService from "../api.service";

const loaders = ({ params }) => {
    const { id } = params;
    const contacts = id ? apiService.show(id) : apiService.index();
    return contacts;
};

export default loaders;
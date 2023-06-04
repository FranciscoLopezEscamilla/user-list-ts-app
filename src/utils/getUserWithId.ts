import FormData from "../Interfaces/FormData";
const getUserWithId = (formData: FormData) => {
  return {
    id: crypto.randomUUID(),
    firstName: formData.firstName,
    lastName: formData.lastName,
    imageUrl: formData.imageUrl,
    email: formData.email,
    isActive: formData.isActive,
  };
};

export default getUserWithId;

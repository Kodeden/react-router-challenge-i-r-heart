import { useEffect, useRef, useState } from "react";

export default function useForm(initialState = {}) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    resetForm();
  };

  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    form.elements[0].focus();
  }, [formData]);

  return { formData, handleChange, resetForm, handleCancel, formRef };
}

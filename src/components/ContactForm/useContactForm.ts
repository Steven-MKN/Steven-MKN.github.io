import { useState } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  subject: yup.string().required(),
  message: yup.string().min(4),
});

const useContactForm = () => {
  const [form, setForm] = useState({
    name: {
      value: "",
      isError: false,
    },
    email: {
      value: "",
      isError: false,
    },
    subject: {
      value: "",
      isError: false,
    },
    message: {
      value: "",
      isError: false,
    },
    submitting: false,
  });

  const handleSubmit = async (e: any) => {
    return;
    try {
      // const isValid = await schema.validate({
      //     name: form.name.value,
      //     email: form.email.value,
      //     subject: form.subject.value,
      //     message: form.message.value
      // })
      //
      // console.log(isValid)
      setForm((prevState) => ({
        ...prevState,
        submitting: true,
      }));

      setTimeout(() => {
        setForm((prevState) => ({
          ...prevState,
          submitting: false,
        }));
      }, 3500);
    } catch (error: any) {
      console.log(error.errors);
    }
  };

  const handleTextChange = (e: any) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.id]: {
          // @ts-ignore
          ...prevState[e.target.id],
          value: e.target.value,
        },
      };
    });
  };

  return {
    handleSubmit,
    handleTextChange,
    form,
    formSchema,
  };
};

export default useContactForm;

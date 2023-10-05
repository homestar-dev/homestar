import React, { useState } from "react";
import {
  TextAreaInput,
  TextInput,
  Button,
  ContactSuccess,
  LoadingSpinner,
  ToastMessage,
} from "@/components";
import { FormDataType, sendContactForm, validateEmail } from "@/utils";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccessPage, setShowSuccessPage] = useState<boolean>(false);
  const [emailError, setEmailErrors] = useState<string>();
  const [nameError, setNameError] = useState<string>();
  const [messageError, setMessageError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (!formData.name) {
      setNameError("Kérjük adja meg teljes nevét");
      setEmailErrors(undefined);
      setMessageError(undefined);
      return;
    }

    if (!formData.email) {
      setEmailErrors("Kérjük adjon meg egy érvényes email címet!");
      setNameError(undefined);
      setMessageError(undefined);
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailErrors("Kérjük adjon meg egy érvényes email címet!");
      setNameError(undefined);
      setMessageError(undefined);
      return;
    }

    if (!formData.message) {
      setMessageError("Kérjük adjon meg egy üzenetet");
      setNameError(undefined);
      setEmailErrors(undefined);
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendContactForm(formData);
      if (result.success) {
        setShowSuccessPage(true);
        return;
      }
      setIsLoading(false);
      setResponseMessage(
        "Elnézést, valami nem sikerült. Kérjük írjon nekünk egy emailt az info@home-star.hu címre és 24 órán belül visszajelzünk!"
      );
    } catch (error) {
      console.error("An unexpected error occurred.", error);
      setShowSuccessPage(false);
      setIsLoading(false);
    }
  };

  return (
    <div
      className=" py-12 bg-blue-900 grid xl:px-48 px-4"
      id={ScrollToId.Contact}
    >
      {!showSuccessPage ? (
        <>
          <div className="text-3xl text-white font-semibold font-futura-bold text-center my-4">
            Érdekel a lehetőség?
          </div>
          <div className="justify-self-center font-futura-bold flex-wrap flex justify-center gap-x-2 font-semibold pb-12 text-center">
            <div className="text-white text-3xl">Jelentkezz és</div>
            <div className="text-yellow-500 text-3xl">vágjunk bele együtt!</div>
          </div>
          <div className="grid gap-y-4">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="hidden"
              name="subject"
              value={`You've got mail from ${formData.name}`}
            />
            <TextInput
              type="text"
              id="name"
              name="name"
              label="Teljes név"
              onChange={handleChange}
              errorMessage={nameError}
            />
            <TextInput
              type="email"
              id="email"
              name="email"
              label="Email"
              onChange={handleChange}
              errorMessage={emailError}
            />
            <TextAreaInput
              id="message"
              name="message"
              label="Üzenet"
              onChange={handleChange}
              errorMessage={messageError}
            />
            <div className="justify-self-center mt-8">
              <Button onClick={onSubmit}>
                <LoadingSpinner isLoading={isLoading} children="Jelentkezem" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <ContactSuccess />
      )}
      <ToastMessage message={responseMessage} />
    </div>
  );
};

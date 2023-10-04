import React, { useState } from "react";
import {
  Button,
  EvalutaionFormSuccess,
  ImageUploadInput,
  LoadingSpinner,
  TextAreaInput,
  TextInput,
  ToastMessage,
} from "@/components";
import {
  ImageUploadType,
  PropertyEvaluationFormDataType,
  sendEvaluationForm,
  validateEmail,
} from "@/utils";
import GoogleMaps from "@/components/google-maps/GoogleMaps";

interface EvalutationFormProps {
  closeForm: () => void;
  address: string;
  location: { lat: number; lng: number } | null;
}

export const EvalutationForm: React.FC<EvalutationFormProps> = ({
  closeForm,
  address,
  location,
}) => {
  const [formData, setFormData] = useState<PropertyEvaluationFormDataType>({
    address: address,
    name: "",
    email: "",
    phone: "",
    size: "",
    description: "",
    images: [],
  });

  const [showSuccessPage, setShowSuccessPage] = useState<boolean>(false);
  const [emailError, setEmailErrors] = useState<string>();
  const [nameError, setNameError] = useState<string>();
  const [phoneError, setPhoneError] = useState<string>();
  const [sizeError, setSizeError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (images: ImageUploadType[]) => {
    setFormData({
      ...formData,
      images,
    });
  };

  const onSubmit = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!formData.name) {
      setNameError("Kérjük, adja meg teljes nevét");
      setEmailErrors(undefined);
      setPhoneError(undefined);
      setSizeError(undefined);
      return;
    }

    if (!formData.email) {
      setEmailErrors("Kérjük, adjon meg egy érvényes email címet!");
      setNameError(undefined);
      setPhoneError(undefined);
      setSizeError(undefined);
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailErrors("Kérjük, adjon meg egy érvényes email címet!");
      setNameError(undefined);
      setPhoneError(undefined);
      setSizeError(undefined);
      return;
    }

    if (!formData.phone) {
      setPhoneError("Kérjük, adjon meg egy telefonszámot");
      setNameError(undefined);
      setEmailErrors(undefined);
      setSizeError(undefined);
      return;
    }

    if (!formData.size) {
      setSizeError("Kérjük, adja meg az ingatlan méretét");
      setNameError(undefined);
      setEmailErrors(undefined);
      setPhoneError(undefined);
      return;
    }

    setIsLoading(true);
    try {
      const result = await sendEvaluationForm(formData);
      if (result.success) {
        setShowSuccessPage(true);
        return;
      }
      setIsLoading(false);
      setResponseMessage(result.message as string);
    } catch (error) {
      console.error("An unexpected error occurred.", error);
      setShowSuccessPage(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="text-grey-100 xl:ml-32 xl:mt-32 mx-4 sm:py-0 py-12 ">
        {!showSuccessPage ? (
          <>
            <div className="xl:text-[50px] font-bold  text-left xl:mt-2 xl:pt-0 text-4xl mt-16 mb-8 font-futura-bold tracking-widest xl:leading-relaxed">
              Már csak egy apró lépésre vagy a bevételbecsléstől
            </div>
            <div className="grid md:grid-cols-2 flex-row flex-wrap gap-x-12 items-center">
              <div className="grow grid xl:grid-cols-[90%] gap-y-4">
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
                <TextInput
                  type="tel"
                  id="phone"
                  name="phone"
                  label="Telefonszám"
                  onChange={handleChange}
                  errorMessage={phoneError}
                />
                <TextInput
                  type="number"
                  id="size"
                  name="size"
                  label="Ingatlan mérete (m2)"
                  onChange={handleChange}
                  errorMessage={sizeError}
                />
                <TextAreaInput
                  id="description"
                  name="description"
                  label="Ingatlan leírása"
                  onChange={handleChange}
                />
                <ImageUploadInput onImageUpload={handleImageUpload} />
              </div>
              <div className="  sm:pt-0 pt-4">
                <GoogleMaps address={address} location={location}></GoogleMaps>
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <Button variant="secondary" onClick={closeForm}>
                Vissza
              </Button>
              <Button onClick={onSubmit}>
                <LoadingSpinner
                  isLoading={isLoading}
                  children="Kérem a becslést"
                />
              </Button>
            </div>
          </>
        ) : (
          <EvalutaionFormSuccess />
        )}
      </div>
      <ToastMessage message={responseMessage} />
    </>
  );
};

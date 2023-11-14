import React, { ReactElement, useState } from "react";
import {
  Button,
  EvalutaionFormSuccess,
  Icon,
  IconEnum,
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
  const defaultFormState = {
    address: address,
    name: "",
    email: "",
    phone: "",
    size: "",
    description: "",
    images: [],
  };

  const [formData, setFormData] =
    useState<PropertyEvaluationFormDataType>(defaultFormState);

  const [showSuccessPage, setShowSuccessPage] = useState<boolean>(false);
  const [emailError, setEmailErrors] = useState<string>();
  const [nameError, setNameError] = useState<string>();
  const [phoneError, setPhoneError] = useState<string>();
  const [sizeError, setSizeError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showMaps, setShowMaps] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (images: ImageUploadType[]) => {
    setFormData({
      ...formData,
      images,
    });
  };

  const validateFirstFormPart = () => {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep(1);
  };

  const validateSecondFormPart = () => {
    if (!formData.size) {
      setSizeError("Kérjük, adja meg az ingatlan méretét");
      setNameError(undefined);
      setEmailErrors(undefined);
      setPhoneError(undefined);
      return;
    }
  };

  const onSubmit = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    validateSecondFormPart();
    setIsLoading(true);
    try {
      const result = await sendEvaluationForm(formData);
      if (result.success) {
        setShowSuccessPage(true);
        return;
      }
      setIsLoading(false);
      setResponseMessage(result.message as string);
      setCurrentStep(0);
    } catch (error) {
      console.error("An unexpected error occurred.", error);
      setShowSuccessPage(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const FormButtons = () => {
    if (currentStep === 0) {
      return (
        <>
          <Button variant="secondary" onClick={closeForm}>
            Vissza
          </Button>
          <Button variant="secondary" onClick={validateFirstFormPart}>
            Következő
          </Button>
        </>
      );
    }
    return (
      <>
        <Button variant="secondary" onClick={() => setCurrentStep(0)}>
          Vissza
        </Button>
        <Button onClick={onSubmit}>
          <LoadingSpinner isLoading={isLoading} children="Kérem a becslést" />
        </Button>
      </>
    );
  };

  return (
    <>
      <div className="text-grey-100 ">
        {!showSuccessPage ? (
          <div className="grid sm:mx-12 mx-4 md:grid-cols-2 flex-row flex-wrap gap-x-12 items-center">
            <div className="grow grid gap-y-3">
              <div className="xl:text-[40px] text-3xl font-futura-bold text-left xl:mt-12 sm:mt-44 xl:pt-0 sm:pb-0 pb-2 mt-24 xl:leading-relaxed leading-none-">
                Már csak egy apró lépésre vagy a bevételbecsléstől!
              </div>
              <div className="flex flex-col justify-center sm:hidden font-futura-medium text-lg ">
                <div>{address}</div>
                <div
                  className="flex gap-1"
                  onClick={() => setShowMaps(!showMaps)}
                >
                  <div className="cursor-pointer underline">
                    {showMaps ? "Térkép elrejtése" : "Megnézem a Térképen"}
                  </div>
                  <Icon icon={IconEnum.Location} size={24} />
                </div>
                {showMaps && <GoogleMaps address={null} location={location} />}{" "}
              </div>
              {currentStep === 0 && (
                <>
                  <TextInput
                    type="text"
                    id="evaluation-name"
                    name="name"
                    label="Teljes név"
                    onChange={handleChange}
                    errorMessage={nameError}
                    value={formData.name}
                    onBlur={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                  <TextInput
                    type="email"
                    id="evaluation-email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    errorMessage={emailError}
                    value={formData.email}
                    onBlur={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                  <TextInput
                    type="tel"
                    id="phone"
                    name="phone"
                    label="Telefonszám"
                    onChange={handleChange}
                    errorMessage={phoneError}
                    value={formData.phone}
                    onBlur={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                </>
              )}
              {currentStep === 1 && (
                <>
                  <TextInput
                    type="number"
                    id="size"
                    name="size"
                    label="Ingatlan mérete (m2)"
                    onChange={handleChange}
                    errorMessage={sizeError}
                    value={formData.size}
                    onBlur={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                  <TextAreaInput
                    id="description"
                    name="description"
                    label="Ingatlan leírása"
                    onChange={handleChange}
                    value={formData.description}
                    onBlur={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                  <ImageUploadInput onImageUpload={handleImageUpload} />
                </>
              )}
              <div className="flex w-full justify-center gap-4">
                <Icon
                  icon={
                    currentStep === 0
                      ? IconEnum.DotFilled
                      : IconEnum.DotOutlined
                  }
                  size={10}
                  className="text-white"
                />
                <Icon
                  icon={
                    currentStep === 1
                      ? IconEnum.DotFilled
                      : IconEnum.DotOutlined
                  }
                  size={10}
                  className="text-white"
                />
              </div>

              <div className="flex justify-center gap-4">
                <FormButtons />
              </div>
            </div>
            <div className="sm:mt-24 mb-12 sm:pt-0 pt-4">
              <div className="sm:block hidden">
                <GoogleMaps address={address} location={location} />
              </div>
            </div>
          </div>
        ) : (
          <EvalutaionFormSuccess closeForm={closeForm} />
        )}
      </div>
      <ToastMessage message={responseMessage} />
    </>
  );
};

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
          <div className="grid mx-12 md:grid-cols-2 flex-row flex-wrap gap-x-12 items-center">
            <div className="grow grid gap-y-4">
              <div className="xl:text-[40px] font-futura-bold text-left xl:mt-12 xl:pt-0 text-4xl mt-16 xl:leading-relaxed leading-normal">
                Már csak egy apró lépésre vagy a bevételbecsléstől!
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
                  />
                  <TextInput
                    type="email"
                    id="evaluation-email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    errorMessage={emailError}
                    value={formData.email}
                  />
                  <TextInput
                    type="tel"
                    id="phone"
                    name="phone"
                    label="Telefonszám"
                    onChange={handleChange}
                    errorMessage={phoneError}
                    value={formData.phone}
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
                  />
                  <TextAreaInput
                    id="description"
                    name="description"
                    label="Ingatlan leírása"
                    onChange={handleChange}
                    value={formData.description}
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
            <div className="mt-24 mb-12 sm:pt-0 pt-4">
              <GoogleMaps address={address} location={location}></GoogleMaps>
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

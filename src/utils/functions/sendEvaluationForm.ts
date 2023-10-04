import { PropertyEvaluationFormDataType } from "@/utils";

export const sendEvaluationForm = async (
  data: PropertyEvaluationFormDataType
): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await fetch("api/evaluation", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return { success: true, message: "Form submitted successfully." };
    }

    const errorData = await response.json();
    const errorMessage = errorData.message || "Form submission failed.";
    return { success: false, message: errorMessage };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while submitting the form.",
    };
  }
};

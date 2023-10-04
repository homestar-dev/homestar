import { ImageUploadType } from "./imageUploadType";

export type PropertyEvaluationFormDataType = {
  address: string;
  name: string;
  email: string;
  phone: string;
  size: string;
  description?: string;
  images?: ImageUploadType[];
};

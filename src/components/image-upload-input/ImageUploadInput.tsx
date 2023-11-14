import { ChangeEvent, useState } from "react";
import { Icon, IconEnum } from "../icons/Icon";
import { ImageUploadType } from "@/utils";
import Compressor from "compressorjs";

interface IImageUploadInputProps {
  onImageUpload(data: ImageUploadType[]): void;
}

export const ImageUploadInput: React.FC<IImageUploadInputProps> = ({
  onImageUpload,
}) => {
  const [imagePreviews, setImagePreviews] = useState<ImageUploadType[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    const newPreviews: ImageUploadType[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      new Compressor(file, {
        quality: 0.6,
        maxHeight: 800,
        success(result) {
          const reader = new FileReader();

          reader.onloadend = () => {
            newPreviews.push({ id: file.name, url: reader.result as string });
            if (newPreviews.length === files.length) {
              setImagePreviews([...imagePreviews, ...newPreviews]);
              onImageUpload([...imagePreviews, ...newPreviews]);
            }
          };

          reader.readAsDataURL(result);
        },
        error(err) {
          console.error("Error compressing image:", err);
        },
      });
    }
  };

  const handleRemoveImage = (id: string) => {
    const updatedPreviews = imagePreviews.filter(
      (preview) => preview.id !== id
    );
    setImagePreviews(updatedPreviews);
    onImageUpload(updatedPreviews);
  };

  return (
    <div>
      <div className="flex border border-dashed w-full flex-col">
        <label className="flex justify-center items-center flex-col px-8 py-4 cursor-pointer">
          <Icon icon={IconEnum.Upload} size={64} />
          <div>Tölts fel képeket az ingatlanról</div>
          <input type="file" multiple onChange={handleImageChange} />
        </label>
        <div className="flex">
          {imagePreviews.map((preview) => (
            <div key={preview.id} className="relative">
              <img
                src={preview.url}
                alt={`Preview ${preview.id}`}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
              <div
                className="absolute top-0 right-0 cursor-pointer"
                onClick={() => handleRemoveImage(preview.id)}
              >
                <Icon icon={IconEnum.Close} size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

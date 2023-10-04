import { ImageAttachementType, PropertyEvaluationFormDataType } from "@/utils";
import nodemailer from "nodemailer";

const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data: PropertyEvaluationFormDataType = req.body;
    const imagePreviews = data.images;

    if (!data.email || !data.name || !data.phone || !data.size) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECIEVER,
      subject: "Új Homestar értékbecslés",
      html: `<div>
               <h4>Név: ${data.name}</h4>
               <h4>Email: ${data.email}</h4>
               <h4>Telefonszám: ${data.phone}</h4>
               <h4>Ingatlan mérete: ${data.size} m2</h4>
               <h4>Ingatlan elhelyezkedése: ${data.address}</h4>
               <h4>Ingatlan leírása: ${data.description}</h4>
            </div>`,
      attachments: [] as ImageAttachementType[],
    };

    if (!imagePreviews) {
      return;
    }

    for (const image of imagePreviews) {
      const base64Image = image.url.split(";base64,").pop();

      mailOptions.attachments.push({
        filename: image.id,
        content: base64Image || "",
        encoding: "base64",
      });
    }

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;

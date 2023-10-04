import { FormDataType } from "@/utils";
import nodemailer from "nodemailer";

const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data: FormDataType = req.body;

    if (!data.email || !data.message || !data.name) {
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
    };

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Új Homestar érdeklődő",
        html: `<div>
                 <h3>Név: ${data.name}</h3>
                 <h3>Email: ${data.email}</h3>
                 <div />
                 <p>${data.message}</p> 
              </div>`,
      });

      return res.status(200).json({ sucess: true });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;

import nodemailer from "npm:nodemailer";
import { AppContext } from "site/apps/site.ts";

export interface SendEmailDataRequest {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const action = async (
  props: SendEmailDataRequest,
  _req: Request,
  ctx: AppContext,
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false,
      auth: {
        user: ctx.sendEmailUser?.get(),
        pass: ctx.sendEmailPassword?.get(),
      },
    });

    const htmlEmail = `
      <p>Nome: <strong>${props.name ?? 'Não informado'}</strong></p>
      <p>Celular: <strong>${props.phone ?? 'Não informado'}</strong></p>
      <p>E-mail: <strong>${props.email ?? 'Não informado'}</strong></p>
      <p>Mensagem: <strong>${props.message ?? 'Não informado'}</strong></p>
    `;

    const info = await transporter.sendMail({
      from: 'admin@beepdigital.com.br',
      to: 'admin@beepdigital.com.br',
      subject: `Novo email enviado do site - ${props.name ?? ''}`,
      html: htmlEmail,
    });

    return new Response(JSON.stringify({ message: 'Email successfully sent', info }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error in sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default action;

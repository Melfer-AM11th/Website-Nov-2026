export class EmailFormError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export async function sendEmailForm(data, signal) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) throw new EmailFormError('EmailJS is not configured');

  data.set('service_id', serviceId);
  data.set('template_id', templateId);
  data.set('user_id', publicKey);
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: data,
    signal,
  });
  if (!response.ok) throw new EmailFormError('EmailJS request failed', response.status);
}

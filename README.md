# AMElleventh

Next.js with React, migrated from `index.html`. The original layout, CSS, fonts, SVG artwork, responsive behavior and gold Pi cursor are preserved. The enquiry form uses EmailJS.

The site switches between English and Arabic (right-to-left) and remembers the selected language. Links can also select a language with `?lang=en` or `?lang=ar`. The enquiry form offers email or WhatsApp. WhatsApp opens a prepared enquiry for the visitor to send; if email delivery fails, the fallback links include the same details.

## Run locally

Use Node.js 20.9 or newer. In this folder, run:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open the local URL shown in the terminal, normally `http://localhost:3000`.

## Connect EmailJS

1. Create an [EmailJS account](https://dashboard.emailjs.com/) and connect an email service under **Email Services**. Copy its Service ID.
2. Create an email template with these settings:
   - **To Email:** `itsupport.am11th@gmail.com`
   - **From Name:** `{{name}}`
   - **From Email:** keep **Use Default Email Address** checked
   - **Reply To:** `{{email}}`
   - **Subject:** `New pilot enquiry from amelleventh.com`
3. Use this template content, including the exact variable names:

```text
New pilot enquiry

Name: {{name}}
Company: {{company}}
Work email: {{email}}
WhatsApp number: {{whatsapp}}
Business location: {{location}}
Required service: {{function}}
Approximate team size: {{team_size}}
Target start: {{start}}
Site language: {{language}}

Additional details:
{{message}}
```

4. Save the template and copy its Template ID. Find your Public Key in your EmailJS account settings.
5. Fill in `.env.local`:

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Use the **Public Key**, not a private key. Restart `npm run dev` after changing these values. Production builds must be rebuilt after any change because these values are included at build time.

The form sends its named fields using [`emailjs.sendForm`](https://www.emailjs.com/docs/sdk/send-form/), following the [EmailJS React integration](https://www.emailjs.com/docs/examples/reactjs/). It retains validation, the hidden honeypot and sending/success/error messages. Without the three configuration values, it displays the existing email and WhatsApp contact options instead of claiming an enquiry was sent.

No live delivery has been verified without your EmailJS credentials. Once configured, submit a test enquiry and confirm it arrives at `engage@amelleventh.com`, including all fields and the correct reply address.

## Build and upload

```powershell
npm run build
```

Next.js exports the complete static site to `out/`. Upload the **contents of `out/`**, including `_next/`, to your hosting root. For Cloudflare Pages Direct Upload, upload `out/`. For a connected build, use `npm run build`, output directory `out`, and set the same three environment variables in the hosting project's build settings.

The root `index.html` is retained as the original reference; it is not the migrated site's deployment entry point. Do not upload the project source folder or `.env.local`.

## Files

- `app/page.jsx`: original page markup converted to React.
- `app/globals.css`: original stylesheet.
- `app/layout.jsx`: fonts, metadata and structured data.
- `components/SiteInteractions.jsx`: cursor, dialogs, menu, header and clocks.
- `components/Language.jsx`: language preference, translated content and page title/description.
- `components/EnquiryForm.jsx`: EmailJS enquiry form.
- `public/`: original icons, social preview image, robots.txt and sitemap.

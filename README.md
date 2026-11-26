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
2. Edit the existing pilot enquiry template (or create one for a new setup) with these settings:
   - **To Email:** `{{to_email}}`
   - **Cc:** `engage@amelleventh.com`
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

One template handles all seven service choices. The website supplies `to_email` as `client@amelleventh.com` for Customer operations, Sales & collections teams, Back office / finance, HR, payroll or recruitment, A mix of functions, and Consultancy, IT or R&D tax. For Partnership (BPO or agency), it supplies `partner@amelleventh.com`. Every enquiry copies `engage@amelleventh.com`; the fallback email link uses the same To and Cc routing.

For an existing setup, keep the same Template ID, Service ID, Public Key, template content, and Reply To. Apply the EmailJS To/Cc settings above and deploy the updated website together: the dynamic recipient requires the website to send `to_email`, so changing the EmailJS template alone is insufficient.

The form sends its named fields using the [EmailJS form API](https://www.emailjs.com/docs/rest-api/send-form/), without requiring browser storage. It retains validation and sending/success/error messages. Requests time out after 20 seconds so the buttons do not stay disabled indefinitely. Without the three configuration values, it displays the existing email and WhatsApp contact options instead of claiming an enquiry was sent.

Once configured and deployed, test an ordinary service and Partnership (BPO or agency). Confirm they arrive at `client@amelleventh.com` and `partner@amelleventh.com`, respectively, with `engage@amelleventh.com` copied in both cases, all form fields, and the correct reply address. Also check the fallback email link for both selections: the email draft must use the same To/Cc addresses.

The network registration form follows the v27 reference's recipient routing. Individual professionals go to `hr@amelleventh.com`. Referral agents, BPO companies, IT companies and accounting/tax firms go to `engage@amelleventh.com`. It posts multipart registration data and the selected document directly to the reference's FormSubmit endpoint for that recipient. Subjects use `[Candidate] Individual professional | Name` or `[Partner] Role | Name`.

Each recipient must activate its FormSubmit form through the verification email sent to that inbox. Until activation, automatic delivery is incomplete. FormSubmit does not retain uploaded files while activation is pending. Its AJAX endpoint does not send applicant autoresponses. See [FormSubmit documentation](https://formsubmit.co/documentation) and [activation help](https://formsubmit.co/help).

The reference's `api.amelleventh.com/lead` hostname currently has no DNS record, so the network form uses FormSubmit directly. On failure, it retains the fields and selected document and offers a prepared email to the appropriate recipient. The visitor must attach the document manually when using that email link.

## Deploy on Vercel

In your Vercel project, open **Settings → Environment Variables** and add these three variables using the corresponding values from your local `.env.local`:

```text
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Select **Production** for the live domain. Also select **Preview** if you want email available in preview deployments. Save the variables, then go to **Deployments → latest deployment → … → Redeploy** and select Production.

The local `.env.local` file is ignored by Git, so pushing the repository does not upload its values to Vercel. Next.js embeds these public values during the build; changing them requires a new deployment. A browser refresh alone cannot update them. See [Vercel's environment-variable guide](https://vercel.com/docs/environment-variables).

Use Vercel's **Next.js** framework preset and default output settings. The current `next.config.mjs` uses a normal Next.js build; it does not generate a new `out/` export. Any existing `out/` folder can be an older build and should not be uploaded for this Vercel deployment.

To check the build locally:

```powershell
npm run build
```

The root `index.html` is retained as the original reference; the migrated page is `app/page.jsx`. Keep `.env.local` out of Git.

## Files

- `app/page.jsx`: original page markup converted to React.
- `app/globals.css`: original stylesheet.
- `app/layout.jsx`: fonts, metadata and structured data.
- `components/SiteInteractions.jsx`: cursor, dialogs, menu, header and clocks.
- `components/Language.jsx`: language preference, translated content and page title/description.
- `components/EnquiryForm.jsx`: EmailJS enquiry form.
- `public/`: original icons, social preview image, robots.txt and sitemap.

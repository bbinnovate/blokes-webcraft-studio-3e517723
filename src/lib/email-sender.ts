type SendEmailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  fromName?: string | undefined;
  fromAddress?: string | undefined;
  replyTo?: string | undefined;
};

export async function sendEmail(options: SendEmailOptions) {
  const apiKey =
    process.env["ONESIGNAL_REST_API_KEY"] || process.env["ONE_SIGNAL_API_KEY"];
  const appId =
    process.env["NEXT_PUBLIC_ONESIGNAL_APP_ID"] || process.env["ONE_SIGNAL_APP_ID"];

  const toEmails = Array.isArray(options.to) ? options.to : [options.to];

  if (apiKey && appId) {
    try {
      const payload: Record<string, any> = {
        app_id: appId,
        email_subject: options.subject,
        email_body: options.html,
        email_from_name: options.fromName || "BB Forms",
        email_from_address: options.fromAddress || "hello@bombayblokes.com",
        include_email_tokens: toEmails,
      };

      if (options.replyTo) {
        payload["email_reply_to"] = options.replyTo;
      }

      const res = await fetch("https://onesignal.com/api/v1/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: apiKey.startsWith("Basic ") || apiKey.startsWith("Key ") ? apiKey : `Basic ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error(`Email sending to ${toEmails.join(", ")} failed:`, errorText);
      } else {
        console.log(`Email sent successfully to ${toEmails.join(", ")}`);
      }
    } catch (err) {
      console.error("sendEmail error:", err);
    }
  } else {
    console.warn("Email credentials not configured. Subject:", options.subject);
  }
}

import { NextResponse } from "next/server";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  website?: string;
  service?: string;
  budget?: string;
  date?: string;
  time?: string;
  source?: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };
    return entities[character] || character;
  });
}

function buildUserEmail(payload: EnquiryPayload) {
  const name = escapeHtml(payload.name || "there");

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bombay Blokes - Website Audit Request Received</title>
  </head>
  <body style="margin:0; padding:0; background:#f5f5f5; color:#222222; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f5; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:#ffffff; border:2px solid #fab31e; border-radius:20px 20px 0 0; overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 24px; background:#fff9eb;">
                <p style="margin:0 0 8px; color:#f7b21a; font-size:26px; font-weight:700; line-height:1.2;">Hey ${name},</p>
                <h1 style="margin:0; color:#111111; font-size:32px; line-height:1.2;">Bombay Blokes here...</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 12px;">
                <p style="margin:0; font-size:15px; line-height:23px;">Thanks for requesting your free website audit. Our team has received your details and will review your current website setup.</p>
                <p style="margin:16px 0 0; font-size:15px; line-height:23px;"><strong>A senior strategist will get in touch within 24 working hours.</strong></p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;">
                <div style="border-top:2px dotted #f4c882;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 8px;">
                <h2 style="margin:0; font-size:19px; line-height:1.3;">Here's what you submitted</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 20px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px; line-height:22px; color:#444444;">
                  <tr><td style="padding:5px 0; width:170px;"><strong>Name</strong></td><td style="padding:5px 0;">${name}</td></tr>
                  <tr><td style="padding:5px 0;"><strong>Email</strong></td><td style="padding:5px 0;">${escapeHtml(payload.email || "-")}</td></tr>
                  <tr><td style="padding:5px 0;"><strong>Phone</strong></td><td style="padding:5px 0;">${escapeHtml(payload.phone || "-")}</td></tr>
                  <tr><td style="padding:5px 0; vertical-align:top;"><strong>Website</strong></td><td style="padding:5px 0; word-break:break-word;">${escapeHtml(payload.website || "-")}</td></tr>
                  <tr><td style="padding:5px 0; vertical-align:top;"><strong>Service Needed</strong></td><td style="padding:5px 0; word-break:break-word;">${escapeHtml(payload.service || "-")}</td></tr>
                  <tr><td style="padding:5px 0;"><strong>Approximate Budget</strong></td><td style="padding:5px 0;">${escapeHtml(payload.budget || "-")}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;">
                <div style="border-top:2px dotted #f4c882;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;">
                <h2 style="margin:0 0 10px; font-size:19px; line-height:1.3;">What happens next?</h2>
                <p style="margin:0; font-size:14px; line-height:22px; color:#444444;">We'll review your enquiry, identify the biggest opportunities, and reach out to discuss the next steps. If we need anything else before the audit, we'll contact you directly.</p>
                <p style="margin:20px 0 0; font-size:14px; line-height:22px;"><strong>Need to speak sooner?</strong><br /><a href="tel:+919819167856" style="color:#222222; text-decoration:none;">+91 981-916-7856</a> &nbsp;|&nbsp; <a href="mailto:hello@bombayblokes.com" style="color:#222222; text-decoration:none;">hello@bombayblokes.com</a></p>
                <p style="margin:24px 0 0; font-size:14px; line-height:22px;">Warm regards,<br /><strong>Bombay Blokes</strong><br /><a href="https://www.bombayblokes.com" style="color:#222222;">bombayblokes.com</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding:0; margin:0;">
                <img src="https://firebasestorage.googleapis.com/v0/b/bombay-blokes-4c284.firebasestorage.app/o/blogimages%2Fbbsignature.png?alt=media&token=8bc93c2d-8a9c-4e1f-81dc-ef8d1cc90499" alt="Bombay Blokes" width="600" style="display:block; width:100%; max-width:600px; height:auto; border:0;" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

function buildAdminEmail(payload: EnquiryPayload) {
  return `
    <h3>New Website Audit Request</h3>
    <p><strong>Name:</strong> ${escapeHtml(payload.name || "-")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "-")}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email || "-")}</p>
    <p><strong>Website:</strong> ${escapeHtml(payload.website || "-")}</p>
    <p><strong>Service Needed:</strong> ${escapeHtml(payload.service || "-")}</p>
    <p><strong>Approximate Budget:</strong> ${escapeHtml(payload.budget || "-")}</p>
    <p><strong>Date:</strong> ${escapeHtml(payload.date || "-")}</p>
    <p><strong>Source:</strong> ${escapeHtml(payload.source || "website-audit")}</p>
  `;
}

async function saveToFirebase(payload: EnquiryPayload) {
  let saved = false;
  const serviceAccountStr = process.env['FIREBASE_SERVICE_ACCOUNT'];
  if (serviceAccountStr) {
    try {
      if (!getApps().length) {
        const serviceAccount = JSON.parse(serviceAccountStr);
        initializeApp({
          credential: cert(serviceAccount),
        });
      }
      const db = getFirestore();
      await db.collection("enquiries").add({
        ...payload,
        createdAt: new Date().toISOString(),
      });
      console.log("Saved enquiry to Firestore (admin SDK).");
      saved = true;
    } catch (err) {
      console.error("Firebase Admin SDK error:", err);
    }
  }

  if (!saved) {
    const projectId = process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'];
    const apiKey = process.env['NEXT_PUBLIC_FIREBASE_API_KEY'];
    if (projectId && apiKey) {
      try {
        const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/enquiries?key=${apiKey}`;
        const fields: Record<string, any> = {};
        for (const [k, v] of Object.entries(payload)) {
          fields[k] = { stringValue: String(v ?? "") };
        }
        fields["createdAt"] = { stringValue: new Date().toISOString() };

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fields }),
        });
        if (!res.ok) {
          console.error("Firestore REST save failed:", await res.text());
        } else {
          console.log("Saved enquiry to Firestore (REST API).");
        }
      } catch (err) {
        console.error("Firestore REST API error:", err);
      }
    }
  }
}

async function sendOneSignalEmail({
  apiKey,
  appId,
  toEmails,
  subject,
  html,
}: {
  apiKey: string;
  appId: string;
  toEmails: string[];
  subject: string;
  html: string;
}) {
  try {
    const res = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: apiKey.startsWith("Basic ") || apiKey.startsWith("Key ") ? apiKey : `Key ${apiKey}`,
      },
      body: JSON.stringify({
        app_id: appId,
        target_channel: "email",
        email_subject: subject,
        email_body: html,
        include_email_tokens: toEmails,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`OneSignal email to ${toEmails.join(", ")} failed:`, errorText);
    } else {
      console.log(`OneSignal email sent successfully to ${toEmails.join(", ")}`);
    }
  } catch (err) {
    console.error(`OneSignal email error for ${toEmails.join(", ")}:`, err);
  }
}

export async function POST(req: Request) {
  try {
    const body: EnquiryPayload = await req.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name, email and phone are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[\w-.+]+@[\w-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(body.email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
    }

    const now = new Date();
    const payload: EnquiryPayload = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email.trim(),
      website: body.website?.trim() || "",
      service: body.service?.trim() || "",
      budget: body.budget?.trim() || "",
      date: body.date || now.toLocaleDateString("en-IN", { dateStyle: "medium" }),
      time: body.time || now.toLocaleTimeString("en-IN", { timeStyle: "short" }),
      source: body.source || "website-audit",
    };

    // 1. Save form data in Firebase database
    await saveToFirebase(payload);

    // 2. Save enquiry to Google Sheet if Webhook URL is configured
    const googleSheetWebhook = process.env['GOOGLE_SHEET_WEBHOOK_URL'];
    if (googleSheetWebhook) {
      try {
        const sheetResponse = await fetch(googleSheetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!sheetResponse.ok) {
          console.error("Google Sheet save failed:", await sheetResponse.text());
        }
      } catch (sheetError) {
        console.error("Google Sheet error:", sheetError);
      }
    }

    // 3. Send email to both the user and the admin using OneSignal
    const ONE_SIGNAL_API_KEY = process.env['ONESIGNAL_REST_API_KEY'] || process.env['ONE_SIGNAL_API_KEY'];
    const ONE_SIGNAL_APP_ID = process.env['NEXT_PUBLIC_ONESIGNAL_APP_ID'] || process.env['ONE_SIGNAL_APP_ID'];

    if (ONE_SIGNAL_API_KEY && ONE_SIGNAL_APP_ID) {
      // Send User Email
      await sendOneSignalEmail({
        apiKey: ONE_SIGNAL_API_KEY,
        appId: ONE_SIGNAL_APP_ID,
        toEmails: [payload.email as string],
        subject: "Your free website audit request is received | Bombay Blokes",
        html: buildUserEmail(payload),
      });

      // Send Admin Email
      const adminEmails = [
        "hello@bombayblokes.com",
        "bdm@bombayblokes.com",
        "siddique@bombayblokes.com",
        "aryankuril09@gmail.com",
      ];
      await sendOneSignalEmail({
        apiKey: ONE_SIGNAL_API_KEY,
        appId: ONE_SIGNAL_APP_ID,
        toEmails: adminEmails,
        subject: `New Website Audit Request - ${payload.name}`,
        html: buildAdminEmail(payload),
      });
    } else {
      console.warn("OneSignal env vars not configured.");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("ads-enquiry error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}

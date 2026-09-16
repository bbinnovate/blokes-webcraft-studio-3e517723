module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/ads-enquiry/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2d$sender$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email-sender.ts [app-route] (ecmascript)");
;
;
function buildEmailBody(payload) {
    const lines = [
        "BB Forms — New Audit Request — Bombay Blokes",
        "",
        `Name: ${payload.name || "-"}`,
        `Phone: ${payload.phone || "-"}`,
        `Email: ${payload.email || "-"}`,
        `Brand: ${payload.brand || "-"}`,
        `Website: ${payload.website || "-"}`,
        `Instagram: ${payload.instagram || "-"}`,
        `Monthly ad budget: ${payload.budget || "-"}`,
        `Biggest marketing challenge: ${payload.challenge || "-"}`,
        `Growth goals: ${payload.goals || "-"}`,
        `Date: ${payload.date || "-"}`,
        `Time: ${payload.time || "-"}`,
        `Source: ${payload.source || "landing-page"}`
    ];
    if (payload.utm_source) lines.push(`UTM Source: ${payload.utm_source}`);
    if (payload.utm_medium) lines.push(`UTM Medium: ${payload.utm_medium}`);
    if (payload.utm_campaign) lines.push(`UTM Campaign: ${payload.utm_campaign}`);
    if (payload.utm_content) lines.push(`UTM Content: ${payload.utm_content}`);
    if (payload.utm_term) lines.push(`UTM Term: ${payload.utm_term}`);
    return lines.join("\n");
}
function escapeHtml(value) {
    return value.replace(/[&<>"]/g, (character)=>{
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        return entities[character] || character;
    });
}
function formatTitleCase(value) {
    return value.trim().toLowerCase().replace(/\b\w/g, (char)=>char.toUpperCase());
}
function capitalizeFirstLetter(value) {
    const trimmed = value.trim();
    return trimmed ? trimmed.charAt(0).toUpperCase() + trimmed.slice(1) : trimmed;
}
function buildUserEmail(payload) {
    const name = escapeHtml(formatTitleCase(payload.name || "there"));
    const brand = escapeHtml(payload.brand || payload.website || payload.instagram || "-");
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bombay Blokes - Ads Audit Request Received</title>
  </head>
<body style="margin:0; padding:0; background:#ffffff; color:#222222; font-family:Arial, Helvetica, sans-serif; text-align:center;">
<table
  role="presentation"
  width="600"
  cellpadding="0"
  cellspacing="0"
  border="0"
    align="center"
  style="
    width:600px;
    max-width:600px;
    background:#ffffff url('https://firebasestorage.googleapis.com/v0/b/bombay-blokes-4c284.firebasestorage.app/o/blogimages%2FEmail-Background.png?alt=media&token=01ed6e19-5b99-4969-bcb3-578c02786d26') top center / cover no-repeat;
    overflow:hidden;
  "
>
  <tr>
    <td align="center" >
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:transparent; border:2px solid #fab31e; border-radius:20px 20px 0 0; overflow:hidden;">            <tr>
<td style="padding:32px 32px 24px; background:transparent;">
                <p style="margin:0 0 8px; color:#f7b21a; font-size:26px; font-weight:700; line-height:1.2;">Hey ${name},</p>
                <h1 style="margin:0; color:#111111; font-size:32px; line-height:1.2;">Bombay Blokes here...</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0px 32px 12px;">
                <p style="margin:0; font-size:15px; line-height:23px;">Thanks for requesting your free ads audit. Our team has received your details and will review your current marketing setup.</p>
                <p style="margin:16px 0 0; font-size:15px; line-height:23px;"><strong>A strategist will get in touch within 24 working hours.</strong></p>
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
                  <tr><td style="padding:5px 0; vertical-align:top;"><strong>Brand / link</strong></td><td style="padding:5px 0; word-break:break-word;">${brand}</td></tr>
                  <tr><td style="padding:5px 0;"><strong>Monthly ad budget</strong></td><td style="padding:5px 0;">${escapeHtml(payload.budget || "-")}</td></tr>
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
                <p style="margin:20px 0 0; font-size:14px; line-height:22px;"><strong>Need to speak sooner?</strong><br /><a href="tel:+919833037816" style="color:#222222; text-decoration:none;">+91 9833037816</a> &nbsp;|&nbsp; <a href="mailto:hello@bombayblokes.com" style="color:#222222; text-decoration:none;">hello@bombayblokes.com</a></p>
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
function buildAdminEmail(payload) {
    const isSocialMediaEnquiry = payload.source === "social-media-hero";
    const profile = escapeHtml(payload.website || payload.instagram || "-");
    const utmTermLine = payload.utm_term ? `<p><strong>UTM Term:</strong> ${escapeHtml(payload.utm_term)}</p>` : "";
    return `
    <h3>BB Forms — New Ads Audit Request</h3>
    <p><strong>Name:</strong> ${formatTitleCase(payload.name || "-")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "-")}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email || "-")}</p>
    ${isSocialMediaEnquiry ? `<p><strong>Instagram / website:</strong> ${profile}</p>` : `<p><strong>Brand / website / Instagram:</strong> ${escapeHtml(payload.brand || payload.website || payload.instagram || "-")}</p>`}
    <p><strong>Monthly ad budget:</strong> ${escapeHtml(payload.budget || "-")}</p>
    <p><strong>Date:</strong> ${escapeHtml(payload.date || "-")}</p>
    <p><strong>Source:</strong> ${escapeHtml(payload.source || "website-audit")}</p>
    ${utmTermLine}
  `;
}
async function POST(req) {
    try {
        const body = await req.json();
        if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Name, email and phone are required."
            }, {
                status: 400
            });
        }
        const emailPattern = /^[\w-.+]+@[\w-]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(body.email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Invalid email address."
            }, {
                status: 400
            });
        }
        const now = new Date();
        const service = body.service?.trim() || (body.source?.toLowerCase().includes("social") ? "social media" : body.source?.toLowerCase().includes("paid") ? "paid marketing" : body.source?.toLowerCase().includes("performance") ? "performance marketing" : "");
        const utm_source = body.utm_source?.trim() || body.utmSource?.trim() || "";
        const utm_medium = body.utm_medium?.trim() || body.utmMedium?.trim() || "";
        const utm_campaign = body.utm_campaign?.trim() || body.utmCampaign?.trim() || "";
        const utm_content = body.utm_content?.trim() || body.utmContent?.trim() || "";
        const utm_term = body.utm_term?.trim() || body.utmTerm?.trim() || "";
        const payload = {
            name: body.name.trim(),
            phone: body.phone.trim(),
            email: body.email.trim(),
            brand: body.brand?.trim() || "",
            website: body.website?.trim() || "",
            instagram: body.instagram?.trim() || "",
            budget: body.budget?.trim() || "",
            challenge: body.challenge?.trim() || "",
            goals: body.goals?.trim() || "",
            date: body.date || now.toLocaleDateString("en-IN", {
                dateStyle: "medium"
            }),
            time: body.time || now.toLocaleTimeString("en-IN", {
                timeStyle: "short"
            }),
            source: body.source || "website-audit",
            service,
            utm_source,
            utm_medium,
            utm_campaign,
            utm_content,
            utm_term,
            utmSource: utm_source,
            utmMedium: utm_medium,
            utmCampaign: utm_campaign,
            utmContent: utm_content,
            utmTerm: utm_term
        };
        console.log("[ADS ENQUIRY PAYLOAD SENT TO WEBHOOK]:", JSON.stringify(payload, null, 2));
        // Save enquiry to Google Sheet
        const googleSheetWebhook = process.env["GOOGLE_SHEET_WEBHOOK_URL"];
        if (googleSheetWebhook) {
            try {
                const sheetResponse = await fetch(googleSheetWebhook, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (!sheetResponse.ok) {
                    console.error("Google Sheet save failed:", await sheetResponse.text());
                }
            } catch (sheetError) {
                // Do not break the existing enquiry flow
                console.error("Google Sheet error:", sheetError);
            }
        }
        const message = buildEmailBody(payload);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2d$sender$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
            to: payload.email,
            subject: `Request Received for a Free Website Development Audit | Bombay Blokes`,
            html: buildUserEmail(payload),
            fromName: "Bombay Blokes",
            fromAddress: "hello@bombayblokes.com"
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2d$sender$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
            to: "aryan@bombayblokes.com",
            // to: ["hello@bombayblokes.com", 
            //   "bdm@bombayblokes.com", 
            //   "siddique@bombayblokes.com", 
            //   "aryankuril09@gmail.com"],
            subject: `New Lead From - ${formatTitleCase(payload.name || "-")} for Website Development`,
            html: buildAdminEmail(payload),
            fromName: "BB Forms",
            fromAddress: "hello@bombayblokes.com",
            replyTo: payload.email
        });
        const ONE_SIGNAL_API_KEY = process.env["ONE_SIGNAL_API_KEY"];
        const ONE_SIGNAL_APP_ID = process.env["ONE_SIGNAL_APP_ID"];
        const ONE_SIGNAL_EMAIL_SEGMENT = process.env["ONE_SIGNAL_EMAIL_SEGMENT"] || "Employees";
        if (ONE_SIGNAL_API_KEY && ONE_SIGNAL_APP_ID) {
            const response = await fetch("https://onesignal.com/api/v1/notifications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: `Basic ${ONE_SIGNAL_API_KEY}`
                },
                body: JSON.stringify({
                    app_id: ONE_SIGNAL_APP_ID,
                    headings: {
                        en: "BB Forms — New Audit Request"
                    },
                    contents: {
                        en: message
                    },
                    included_segments: [
                        ONE_SIGNAL_EMAIL_SEGMENT
                    ],
                    data: payload
                })
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error("OneSignal notification failed:", errorText);
            }
        } else {
            console.warn("OneSignal env vars not configured — enquiry logged only.");
            console.info(message);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            data: payload
        });
    } catch (err) {
        console.error("ads-enquiry error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: err instanceof Error ? err.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/lib/email-sender.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
async function sendEmail(options) {
    const apiKey = process.env["ONESIGNAL_REST_API_KEY"] || process.env["ONE_SIGNAL_API_KEY"];
    const appId = ("TURBOPACK compile-time value", "74a72b7c-671b-46a4-adcf-28f1893c9d9a") || process.env["ONE_SIGNAL_APP_ID"];
    const toEmails = Array.isArray(options.to) ? options.to : [
        options.to
    ];
    if (apiKey && appId) {
        try {
            const payload = {
                app_id: appId,
                email_subject: options.subject,
                email_body: options.html,
                email_from_name: options.fromName || "BB Forms",
                email_from_address: options.fromAddress || "hello@bombayblokes.com",
                include_email_tokens: toEmails
            };
            if (options.replyTo) {
                payload["email_reply_to"] = options.replyTo;
            }
            const res = await fetch("https://onesignal.com/api/v1/notifications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: apiKey.startsWith("Basic ") || apiKey.startsWith("Key ") ? apiKey : `Basic ${apiKey}`
                },
                body: JSON.stringify(payload)
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0l2mbb1._.js.map
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <html>
      <head>
      <title>New message from your portfolio site</title>
      </head>
      <body style={{ backgroundColor: "#f7fafc", color: "#000000" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ backgroundColor: "#ffffff", border: "1px solid #000000", margin: "40px 0", padding: "20px", borderRadius: "8px" }}>
        <h1 style={{ lineHeight: "1.25" }}>
          You received the following message from the contact form
        </h1>
        <p>{message}</p>
        <hr />
        <p>The sender's email is: {senderEmail}</p>
        </div>
      </div>
      </body>
    </html>
  );
}

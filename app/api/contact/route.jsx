import nodemailer from 'nodemailer';

// Named export for POST method
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Setup your Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose the email
    const mailOptionsToSelf  = {
      from: email,
      to: 'akrongsylvester@gmail.com', // Your receiving email
      subject: `New contact form submission from ${name}`,
      text: `Message from ${name}: \n\n${message}\n\nContact Email: ${email}`,
    };

    // HTML template for the "Thank You" email
    const thankYouHtml = `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; background-color: white; padding: 20px; margin: 0 auto; border-radius: 10px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);">
        <img src="https://i.pinimg.com/564x/0c/f3/fd/0cf3fd31acae68c5111dd38230e86ab9.jpg" alt="Robot Image" style="display: block; margin: 0 auto; max-width: 150px;">
        <h2 style="text-align: center; color: #333;">
            Hi ${name}, <br>Thank you for contacting us!
        </h2>
        <p style="text-align: left; color: #777;">
        We have received your message. We'll reach out to you immediately!. Do have a lovely day!<br><br>
                Best Regards, <br>
                Sylvester Akrong
            </p>
        </p>
        <div style="text-align: center; margin-top: 40px;">
            <a href="https://sylvesterakrong.vercel.app/" style="background-color: #f8f8f8; border: 1px solid #d9d9d9; border-radius: 25px; padding: 10px 20px; text-decoration: none; color: #333;">
                Vist Homepage
            </a>
        </div>
        <p style="text-align: center; margin-top: 30px;">Let's connect!</p>
        <div style="text-align: center;">
        <a href="https://x.com/sen__sly" style="margin: 0 10px;">
        <img src="https://i.pinimg.com/564x/b2/68/83/b268838fe5a0c0ca504c2fc103843ae3.jpg" alt="x" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.linkedin.com/in/sylvester-akrong-44ab4a203" style="margin: 0 10px;">
        <img src="https://i.pinimg.com/564x/8a/15/b6/8a15b646a6856d20854c2ac22623d971.jpg" alt="linkedin" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.instagram.com/sen__sly/" style="margin: 0 10px;">
        <img src="https://i.pinimg.com/564x/75/51/fe/7551fe8d9b1252d9393b34de59cf6662.jpg" alt="instagram" style="width: 24px; height: 24px;">
        </a>
        <a href="https://github.com/sylvesterakrong" style="margin: 0 10px;">
        <img src="https://i.pinimg.com/236x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg" alt="github" style="width: 24px; height: 24px;">
        </a>
        </div>
    </div>
    </div>`;
    // Email to send to the person who filled the form
    const mailOptionsToUser = {
        from: process.env.EMAIL_USER, // Your email
        to: email, // The user's email
        subject: 'Thank you for contacting us!',
        html: thankYouHtml,
      };

    // Send the email
    
    await transporter.sendMail(mailOptionsToSelf); // Email to yourself
    await transporter.sendMail(mailOptionsToUser); // Confirmation email to the user

    // Respond with success
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email.', error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

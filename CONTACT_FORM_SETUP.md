# Contact Form Setup Instructions

## 📧 Making the Contact Form Functional on Vercel

### Step 1: Install Dependencies
Run this command in your project directory:
```bash
npm install nodemailer
```

### Step 2: Set Up Gmail App Password

1. **Enable 2-Step Verification** on your Gmail account:
   - Go to https://myaccount.google.com/security
   - Click on "2-Step Verification" and follow the setup

2. **Create an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - **Copy the 16-character password** (you'll need this for Vercel)

### Step 3: Configure Environment Variables in Vercel

1. **Go to your Vercel Dashboard**:
   - Navigate to your project
   - Click on "Settings"
   - Click on "Environment Variables"

2. **Add these variables**:
   - **Variable Name:** `EMAIL_USER`
     - **Value:** Your Gmail address (e.g., logeshwaranvelmurugan@gmail.com)
   
   - **Variable Name:** `EMAIL_PASS`
     - **Value:** The 16-character App Password you generated

3. **Save** the environment variables

### Step 4: Deploy to Vercel

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Add functional contact form"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Vercel will automatically detect the changes and deploy
   - Or manually deploy using: `vercel --prod`

### Step 5: Test Your Contact Form

1. Visit your deployed site
2. Fill out the contact form
3. Submit the form
4. Check your Gmail inbox for the message!

## 🔍 How It Works

- When someone submits the form, it sends a POST request to `/api/send-email`
- Vercel serverless function (`api/send-email.js`) processes the request
- Nodemailer sends the email using Gmail SMTP
- The email is sent TO your Gmail address
- The sender's email is set as the "Reply-To" so you can easily respond

## ✅ Success Indicators

- Form shows "Sending..." while processing
- Green success message appears when sent
- Email arrives in your inbox with formatted content
- Red error message appears if something fails

## 🐛 Troubleshooting

**If emails aren't being sent:**

1. **Check Environment Variables**:
   - Make sure EMAIL_USER and EMAIL_PASS are set in Vercel
   - Redeploy after adding environment variables

2. **Verify App Password**:
   - Make sure you're using an App Password, not your regular Gmail password
   - App Password should be 16 characters

3. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard > Your Project > Functions
   - Check the logs for any errors

4. **Gmail Security**:
   - Ensure 2-Step Verification is enabled
   - Check if Google blocked any sign-in attempts

## 🔐 Security Notes

- Environment variables are secure in Vercel
- Never commit `.env` files to Git
- The API endpoint validates all inputs
- Email addresses are validated before sending

## 📝 Alternative: Using Other Email Services

If you prefer not to use Gmail, you can modify `api/send-email.js` to use:
- **SendGrid**: More reliable for production
- **Mailgun**: Good for high volume
- **AWS SES**: Cost-effective for large scale

Just update the transporter configuration in the serverless function!

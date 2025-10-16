# 📧 Contact Form - Quick Setup Guide

## ✅ What's Been Done

1. ✨ Created serverless function at `/api/send-email.js`
2. 📦 Added `nodemailer` dependency to package.json
3. 🔄 Updated Contact.jsx with async form handling
4. 💬 Added loading states and success/error messages
5. 📝 Created setup documentation

## 🚀 Quick Deployment Steps

### 1. Set Up Gmail App Password (5 minutes)

**Enable 2-Step Verification:**
- Go to: https://myaccount.google.com/security
- Enable "2-Step Verification"

**Generate App Password:**
- Go to: https://myaccount.google.com/apppasswords
- Select "Mail" → "Generate"
- **Copy the 16-character password**

### 2. Configure Vercel Environment Variables

When deploying to Vercel, add these in **Settings → Environment Variables**:

```
EMAIL_USER = logeshwaranvelmurugan@gmail.com
EMAIL_PASS = your-16-character-app-password
```

### 3. Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Add functional contact form"
git push origin main

# Vercel will auto-deploy, or use:
vercel --prod
```

### 4. Test!

Visit your deployed site and send a test message!

## 📬 What Happens When Someone Contacts You

1. User fills out form and clicks "Send Message"
2. Form shows "Sending..." animation
3. Request goes to `/api/send-email` (Vercel serverless function)
4. Email is sent to: **logeshwaranvelmurugan@gmail.com**
5. Success message appears on form
6. **You receive a beautifully formatted email** with:
   - Sender's name and email
   - Subject line
   - Full message
   - Reply-To set to sender's email (click reply to respond directly!)

## 🎨 Email Template Preview

You'll receive emails formatted like this:

```
Subject: Portfolio Contact: [Their Subject]

New Portfolio Contact Message
━━━━━━━━━━━━━━━━━━━━━━━━━━

From: John Doe
Email: john@example.com
Subject: Interested in hiring you

Message:
Hi Logesh! I'm impressed with your portfolio...

━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent from your portfolio contact form.
Reply directly to this email to respond to John Doe.
```

## 🔥 Features Included

- ✅ Real-time form validation
- ✅ Loading state during submission
- ✅ Success/error message display
- ✅ Beautiful email formatting
- ✅ Direct reply capability
- ✅ Secure environment variables
- ✅ Input sanitization
- ✅ Mobile responsive
- ✅ Accessible form labels

## 🛡️ Security Features

- Email validation (regex)
- Required field validation
- Server-side validation
- Environment variables (never exposed)
- CORS protection via Vercel
- No sensitive data in client code

## 📱 User Experience

**Before Submission:**
- Clean, accessible form
- Clear labels and placeholders

**During Submission:**
- Button shows "Sending..."
- Button disabled to prevent double-submit
- Animated pulse on send icon

**After Success:**
- Green success message
- Form resets automatically
- Clear confirmation

**On Error:**
- Red error message
- Form data preserved
- User can retry

## 🎯 Your Contact Info in Email

When you receive messages, you'll see:
- **To:** logeshwaranvelmurugan@gmail.com
- **Reply-To:** [Sender's email]
- **Subject:** Portfolio Contact: [Their subject]

Just hit "Reply" in Gmail to respond directly!

## 🔍 Testing Locally (Optional)

If you want to test before deploying:

1. Create `.env` file:
```
EMAIL_USER=logeshwaranvelmurugan@gmail.com
EMAIL_PASS=your-app-password
```

2. Install Vercel CLI:
```bash
npm i -g vercel
```

3. Run locally:
```bash
vercel dev
```

4. Visit http://localhost:3000

## ✨ That's It!

Your contact form is now production-ready! Just:
1. Get Gmail App Password
2. Add to Vercel Environment Variables
3. Deploy
4. Start receiving messages! 🎉

---

**Need help?** Check CONTACT_FORM_SETUP.md for detailed troubleshooting.

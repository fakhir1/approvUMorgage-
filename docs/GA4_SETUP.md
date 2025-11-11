# Google Analytics 4 Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Google Analytics 4 Account
1. Go to https://analytics.google.com
2. Click "Start measuring" or "Admin" (gear icon)
3. Create an account if you don't have one
4. Create a property named "approvU Website"
5. Choose your timezone and currency

### Step 2: Get Your Measurement ID
1. In the Admin panel, go to **Data Streams**
2. Click **Add stream** → **Web**
3. Enter your website URL: `https://www.approvu.ca`
4. Click **Create stream**
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Your Project
1. Create or edit `.env.local` file in your project root
2. Add this line:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. Restart your Next.js dev server:
   ```bash
   npm run dev
   ```

### Step 4: Verify It's Working
1. Open your website in a browser
2. Open Developer Tools (F12)
3. Go to Network tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. In GA4 dashboard, go to **Reports** → **Realtime** to see live visitors

---

## What Gets Tracked Automatically

✅ **Page views** - Every page visit
✅ **Scroll depth** - How far users scroll
✅ **Outbound clicks** - Links to external sites
✅ **File downloads** - PDF, images, etc.
✅ **Video engagement** - Play, pause, complete
✅ **Site search** - If you have search functionality

---

## Custom Event Tracking (Already Implemented)

The following helper functions are available in `components/analytics/GoogleAnalytics.tsx`:

### Track Button Clicks
```tsx
import { trackButtonClick } from '@/components/analytics/GoogleAnalytics'

<Button onClick={() => {
  trackButtonClick('Get Started CTA')
  // your click handler
}}>
  Get Started
</Button>
```

### Track Form Submissions
```tsx
import { trackFormSubmit } from '@/components/analytics/GoogleAnalytics'

const handleSubmit = async (e) => {
  e.preventDefault()
  trackFormSubmit('Contact Form')
  // submit form
}
```

### Track Outbound Links
```tsx
import { trackOutboundLink } from '@/components/analytics/GoogleAnalytics'

<a 
  href="https://external-site.com"
  onClick={() => trackOutboundLink('https://external-site.com')}
>
  External Link
</a>
```

---

## Important Notes

- ⚠️ **GA4 is disabled in development mode** (`npm run dev`)
- ✅ **GA4 only loads in production** (after `npm run build` and `npm start`)
- 🚀 **Vercel deployment** automatically uses production mode
- 📊 **Data appears in 24-48 hours** (realtime shows immediately)

---

## Adding to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add:
   - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
4. Redeploy your site

---

## Testing in Production

### Option 1: Vercel Preview
```bash
git add .
git commit -m "Add GA4"
git push
```
Vercel will create a preview deployment with GA4 enabled.

### Option 2: Local Production Build
```bash
npm run build
npm start
```
Open http://localhost:3000 and GA4 will load.

---

## Troubleshooting

### GA4 Not Showing Data?
1. Check `.env.local` has the correct Measurement ID
2. Verify you're testing in production mode (not `npm run dev`)
3. Check browser console for errors
4. Ensure ad blockers are disabled
5. Wait 24-48 hours for historical data (use Realtime for immediate feedback)

### Can't Find Measurement ID?
1. Go to https://analytics.google.com
2. Click **Admin** (gear icon)
3. Select your property
4. Click **Data Streams**
5. Click your web stream
6. Copy the **Measurement ID** at the top

---

## Need Help?

- 📖 GA4 Documentation: https://support.google.com/analytics/answer/9304153
- 🎓 GA4 Training: https://skillshop.withgoogle.com/analytics
- 💬 Support: Contact your developer

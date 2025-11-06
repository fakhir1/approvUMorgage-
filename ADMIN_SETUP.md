# Admin Role Setup Guide

## How to Make Yourself Admin

You need to set your user role to 'admin' in the Supabase database. There are two ways:

### Method 1: Using Supabase SQL Editor (Recommended)

1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste this SQL:

```sql
-- Add role column if it doesn't exist
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'user';

-- Set your user as admin (replace with your email)
UPDATE profiles 
SET role = 'admin' 
WHERE user_id IN (
  SELECT id FROM auth.users WHERE email = 'fakhir9898@gmail.com'
);

-- If profile doesn't exist, create it
INSERT INTO profiles (user_id, role)
SELECT id, 'admin' FROM auth.users WHERE email = 'fakhir9898@gmail.com'
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';
```

5. Click **Run** (or press Ctrl/Cmd + Enter)
6. Done! You're now an admin.

### Method 2: Using Table Editor

1. Go to Supabase Dashboard → **Table Editor**
2. Select **profiles** table
3. Find your user row (or create one if it doesn't exist)
4. Add/Edit the **role** column value to: `admin`
5. Save

## Testing Admin Access

1. **Login** to your site with your email
2. Try accessing `/admin` - you should be able to access it
3. Enable **Maintenance Mode** in `/admin/settings`
4. Open an **incognito window** - regular users will see maintenance page
5. In your normal browser (logged in), you can still access everything
6. Go back to `/admin/settings` and turn off maintenance mode

## How It Works Now

✅ **No hardcoded emails needed!**
- Admin status is stored in the `profiles` table
- When you login, the system checks your `role` in the database
- If `role = 'admin'`, you bypass maintenance mode and can access admin panel
- Works on localhost AND in production (Vercel)

## Roles Available

- `admin` - Full access, bypasses maintenance mode
- `moderator` - (Future use)
- `user` - Default, regular user (blocked during maintenance)

## Maintenance Mode Behavior

| User Type | Maintenance ON | Can Login? | Can Access Site? | Can Access Admin? |
|-----------|----------------|------------|------------------|-------------------|
| Admin     | ✅ Yes         | ✅ Yes     | ✅ Yes           | ✅ Yes            |
| Regular User | ✅ Yes      | ✅ Yes     | ❌ No (sees maintenance) | ❌ No |

## Troubleshooting

**Problem:** "I'm logged in but still can't access admin"

**Solution:** 
1. Check your role in Supabase: `SELECT role FROM profiles WHERE user_id = 'your-user-id'`
2. Make sure it's exactly `'admin'` (lowercase)
3. Logout and login again

**Problem:** "Maintenance mode doesn't work"

**Solution:**
1. Make sure maintenance mode is enabled in settings (value should be 'true')
2. Test in an incognito window (not logged in)
3. Admins always bypass maintenance - that's the feature!

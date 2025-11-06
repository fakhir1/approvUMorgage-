-- Set admin role for a specific user
-- Replace 'your-email@example.com' with your actual email

-- First, check if profiles table has the role column
-- If not, add it
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'role'
  ) THEN
    ALTER TABLE profiles ADD COLUMN role VARCHAR(50) DEFAULT 'user';
  END IF;
END $$;

-- Create index on role for faster queries
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);

-- Update your user to admin (replace the email with yours)
-- Option 1: Update by email
UPDATE profiles 
SET role = 'admin' 
WHERE user_id IN (
  SELECT id FROM auth.users WHERE email = 'fakhir9898@gmail.com'
);

-- If the above doesn't work because profile doesn't exist yet, 
-- you can insert it manually:
-- INSERT INTO profiles (user_id, role)
-- SELECT id, 'admin' FROM auth.users WHERE email = 'fakhir9898@gmail.com'
-- ON CONFLICT (user_id) DO UPDATE SET role = 'admin';

-- Verify the change
SELECT 
  u.email,
  p.role,
  p.created_at
FROM profiles p
JOIN auth.users u ON p.user_id = u.id
WHERE p.role = 'admin';

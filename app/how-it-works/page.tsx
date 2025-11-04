import { redirect } from 'next/navigation';

// In the Lovable footer, "How It Works" links to /mortgage/approval/
// This matches their site structure where the approval page explains the process
export default function HowItWorksRedirect() {
  redirect('/mortgage/approval');
}

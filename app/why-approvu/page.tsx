import { redirect } from 'next/navigation';

// In the Lovable footer, "Why approvU" links to /about/#why-approvu
// This anchors to the "Why approvU" section on the about page
export default function WhyApprovuRedirect() {
  redirect('/about#why-approvu');
}

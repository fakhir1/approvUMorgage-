import { Metadata } from "next";
import { getMortgagePage } from '@/lib/strapi';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getMortgagePage('contact-details');
  
  return {
    title: pageData?.metaTitle || "Contact approvU | Mortgage Experts",
    description: pageData?.metaDescription || "Get in touch with approvU. Contact our mortgage experts for personalized assistance.",
  };
}

export default async function ContactPage() {
  let pageData = null;
  try {
    pageData = await getMortgagePage('contact-details');
  } catch (error) {
    console.error('Error fetching contact details page data:', error);
  }

  const pageTitle = pageData?.heroTitle || "Contact Us";
  const pageSubtitle = pageData?.heroSubtitle || "Get in touch with approvU. Contact our mortgage experts for personalized assistance.";
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">{pageTitle}</h1>
      {pageSubtitle && <p className="text-lg text-gray-700 mb-8">{pageSubtitle}</p>}
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-700">1-800-APPROU-1</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-700">info@approu.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9am - 6pm EST</p>
              <p className="text-gray-700">Saturday: 10am - 4pm EST</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border rounded-lg" required></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

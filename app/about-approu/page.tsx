import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About approvU",
  description: "Learn about approvU - Canada's trusted mortgage platform connecting homebuyers with expert brokers.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">About approvU</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          approvU is Canada's leading mortgage platform, connecting homebuyers with trusted mortgage professionals across the country.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p>
          To simplify the mortgage process and help Canadians make informed decisions about home financing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Comprehensive mortgage education and resources</li>
          <li>Free calculators and tools</li>
          <li>Access to experienced mortgage brokers</li>
          <li>Current rates and market insights</li>
          <li>Personalized mortgage solutions</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose approvU?</h2>
        <p>
          With years of experience in the Canadian mortgage industry, we've helped thousands of Canadians achieve their homeownership dreams.
        </p>
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
        <p className="mb-4">Connect with our team today</p>
        <a 
          href="/mortgage-appointment-online"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Book an Appointment
        </a>
      </div>
    </div>
  );
}

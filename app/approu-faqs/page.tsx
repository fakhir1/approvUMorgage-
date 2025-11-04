import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions",
  description: "Find answers to common questions about mortgages, the application process, and working with approvU.",
};

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is a mortgage broker?",
      answer: "A mortgage broker is a licensed professional who works with multiple lenders to find you the best mortgage rate and terms for your situation."
    },
    {
      question: "How much do I need for a down payment?",
      answer: "In Canada, the minimum down payment is 5% for homes under $500,000, with increasing requirements for higher-priced homes."
    },
    {
      question: "What credit score do I need?",
      answer: "Most lenders require a minimum credit score of 680, though some programs accept lower scores with additional requirements."
    },
    {
      question: "How long does mortgage approval take?",
      answer: "Pre-approval can be done in 24-48 hours. Full approval typically takes 2-3 weeks once you've found a property."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-700 mb-8">
        Find answers to common questions about mortgages and the home buying process.
      </p>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Still Have Questions?</h3>
        <p className="mb-4">Our mortgage experts are here to help</p>
        <a 
          href="/approu-contact-details"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

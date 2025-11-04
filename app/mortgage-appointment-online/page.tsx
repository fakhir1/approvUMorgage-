import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Mortgage Appointment",
  description: "Schedule your free mortgage consultation with an approvU expert. Get pre-approved online.",
};

export default function AppointmentPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Book Your Mortgage Appointment</h1>
      <p className="text-lg text-gray-700 mb-8">
        Schedule a free consultation with one of our mortgage experts. Get personalized advice and pre-approval.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Free 30-minute consultation</li>
            <li>✓ Review your financial situation</li>
            <li>✓ Discuss your home buying goals</li>
            <li>✓ Get pre-approval (if qualified)</li>
            <li>✓ Compare rates from multiple lenders</li>
            <li>✓ Understand your mortgage options</li>
          </ul>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Bring These Documents:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Government-issued ID</li>
              <li>• Recent pay stubs</li>
              <li>• Tax returns (last 2 years)</li>
              <li>• Bank statements</li>
              <li>• Employment letter</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Schedule Your Appointment</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Date</label>
              <input type="date" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Time</label>
              <select className="w-full px-4 py-2 border rounded-lg" required>
                <option>Morning (9am-12pm)</option>
                <option>Afternoon (12pm-3pm)</option>
                <option>Evening (3pm-6pm)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message (Optional)</label>
              <textarea rows={3} className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

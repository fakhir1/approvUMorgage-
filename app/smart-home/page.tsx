import { Metadata } from "next";
import { HubPageTemplate, ChildPage } from "@/components/templates/HubPageTemplate";

export const metadata: Metadata = {
  title: "Smart Home Technology Guide | Devices, Systems & Setup | approvU",
  description: "Complete guide to smart home technology including security systems, lighting, thermostats, speakers, and installation. Expert reviews and buying advice for Canadian homeowners.",
};

export default function SmartHomeOverview() {
  const childPages: ChildPage[] = [
    {
      id: "1",
      title: "Smart Home Basics",
      path: "/smart-home/basics/",
      excerpt: "Introduction to smart home technology, how it works, and essential concepts for beginners.",
      order_position: 1,
    },
    {
      id: "2",
      title: "Smart Security Systems",
      path: "/smart-home/security/",
      excerpt: "Explore smart locks, cameras, doorbells, and complete security systems for your home.",
      order_position: 2,
    },
    {
      id: "3",
      title: "Smart Lighting",
      path: "/smart-home/lighting/",
      excerpt: "Control your home's ambiance with smart bulbs, switches, and automated lighting systems.",
      order_position: 3,
    },
    {
      id: "4",
      title: "Smart Thermostats & Climate",
      path: "/smart-home/climate/",
      excerpt: "Save energy and stay comfortable with smart thermostats and climate control systems.",
      order_position: 4,
    },
    {
      id: "5",
      title: "Smart Speakers & Hubs",
      path: "/smart-home/hubs/",
      excerpt: "Compare Amazon Alexa, Google Home, Apple HomeKit, and other smart home control centers.",
      order_position: 5,
    },
    {
      id: "6",
      title: "Installation & Setup",
      path: "/smart-home/installation/",
      excerpt: "DIY installation guides and when to hire professional smart home installers.",
      order_position: 6,
    },
  ];

  const faqs = [
    {
      question: "What is a smart home and how does it work?",
      answer: "A smart home uses internet-connected devices to enable remote monitoring and control of appliances, lighting, security, climate, and entertainment systems. These devices communicate through your home WiFi network and can be controlled via smartphone apps or voice commands."
    },
    {
      question: "How much does it cost to make a home smart?",
      answer: "Smart home costs vary widely. You can start with a $30 smart bulb or invest $10,000+ in comprehensive automation. A typical starter package (hub, smart bulbs, thermostat, and door lock) costs $500-1,000. Professional installation adds $500-2,000+ depending on complexity."
    },
    {
      question: "Do I need a hub for my smart home?",
      answer: "Not always. Many modern devices connect directly to WiFi. However, hubs like SmartThings, Hubitat, or HomeKit enable better integration between different brands and more reliable local control. Consider a hub if you plan to add many devices."
    },
    {
      question: "Which smart home ecosystem is best: Alexa, Google, or Apple?",
      answer: "Each has strengths: Amazon Alexa offers the widest device compatibility and best value, Google Home excels at voice recognition and search, while Apple HomeKit prioritizes privacy and security. Your choice depends on existing tech investments and priorities."
    },
    {
      question: "Can smart home devices increase my home's value?",
      answer: "Yes, smart home features can increase home value by 3-5% according to some studies. Smart thermostats, security systems, and lighting are particularly attractive to buyers. However, overly complex or proprietary systems may deter some buyers."
    },
  ];

  return (
    <HubPageTemplate
      title="Smart Home Technology Guide | Devices, Systems & Setup | approvU"
      metaDescription="Complete guide to smart home technology including security systems, lighting, thermostats, speakers, and installation. Expert reviews and buying advice for Canadian homeowners."
      heroHeadline="Transform Your Home with Smart Technology"
      heroSubheadline="Discover intelligent devices that make your home safer, more comfortable, and energy-efficient"
      heroPrimaryCTA="Take the Smart Home Quiz"
      heroPrimaryCTALink="/smart-home/quiz/"
      heroSecondaryCTA="Explore Devices"
      heroSecondaryCTALink="#content"
      childPages={childPages}
      childPagesTitle="Explore Smart Home Categories"
      childPagesLayout="grid"
      introContent={
        <div>
          <h2 className="text-3xl font-bold mb-4">Welcome to the Future of Home Living</h2>
          <p className="text-lg mb-4">
            Smart home technology isn&apos;t just about convenience—it&apos;s about creating a living space that adapts 
            to your lifestyle, enhances security, reduces energy costs, and provides peace of mind whether 
            you&apos;re home or away.
          </p>
          <p className="text-lg mb-4">
            From simple smart bulbs to comprehensive whole-home automation, our guides help you understand, 
            compare, and implement the right smart home solutions for your needs and budget.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-xl mb-2">Enhanced Security</h3>
              <p className="text-sm">
                Smart locks, cameras, and sensors provide 24/7 monitoring and instant alerts, keeping your 
                home and family safe.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2">Energy Savings</h3>
              <p className="text-sm">
                Smart thermostats and lighting can reduce energy bills by 10-30%, paying for themselves 
                within 1-2 years.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-xl mb-2">Ultimate Convenience</h3>
              <p className="text-sm">
                Control everything with voice commands or smartphone apps. Automate routines to match 
                your lifestyle perfectly.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-xl mb-3">🏡 Getting Started with Smart Home</h3>
            <ol className="space-y-2 ml-4">
              <li><strong>1. Start small:</strong> Begin with 1-2 devices (smart bulb or plug) to test the waters</li>
              <li><strong>2. Choose your ecosystem:</strong> Pick Amazon, Google, or Apple based on your preferences</li>
              <li><strong>3. Plan your network:</strong> Ensure strong WiFi coverage throughout your home</li>
              <li><strong>4. Expand gradually:</strong> Add devices as you identify needs and build confidence</li>
              <li><strong>5. Automate routines:</strong> Create schedules and automations for maximum benefit</li>
            </ol>
          </div>
        </div>
      }
      faqs={faqs}
      contentBlocks={
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Popular Smart Home Devices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold text-lg mb-2">Smart Bulbs</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Change colors, dim remotely, and schedule lighting
              </p>
              <p className="text-xs font-medium text-primary">From $15/bulb</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🌡️</div>
              <h3 className="font-bold text-lg mb-2">Smart Thermostats</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Learn your schedule and optimize energy usage
              </p>
              <p className="text-xs font-medium text-primary">$150-400</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-lg mb-2">Smart Locks</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Keyless entry with remote locking/unlocking
              </p>
              <p className="text-xs font-medium text-primary">$150-350</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📹</div>
              <h3 className="font-bold text-lg mb-2">Security Cameras</h3>
              <p className="text-sm text-muted-foreground mb-3">
                24/7 monitoring with cloud storage and alerts
              </p>
              <p className="text-xs font-medium text-primary">$50-400/camera</p>
            </div>
          </div>
        </section>
      }
      bottomCTAHeadline="Ready to Build Your Smart Home?"
      bottomCTADescription="Take our quiz to get personalized device recommendations for your home"
      bottomCTAPrimaryText="Take the Smart Home Quiz"
      bottomCTAPrimaryLink="/smart-home/quiz/"
    />
  );
}

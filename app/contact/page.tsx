import { Metadata } from "next";
import { getContactPage } from "@/lib/strapi";
import ContactPageClient from "./ContactPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const contactData = await getContactPage();
  
  return {
    title: contactData?.metaTitle || "Contact Us | approvU Mortgage",
    description: contactData?.metaDescription || "Get in touch with our mortgage experts. We're here to help you navigate your home financing journey.",
  };
}

export default async function ContactPage() {
  let contactData = null;
  
  try {
    contactData = await getContactPage();
  } catch (error) {
    console.error('Error fetching contact page data:', error);
  }

  const heroTitle = contactData?.heroTitle || "Get in Touch";
  const heroSubtitle = contactData?.heroSubtitle || "Have questions? Our mortgage experts are here to help you navigate your home financing journey.";

  return <ContactPageClient heroTitle={heroTitle} heroSubtitle={heroSubtitle} />;
}

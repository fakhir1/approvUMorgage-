// TypeScript type definitions for the mortgage application

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  publishedDate: string;
  updatedDate?: string;
  author?: string;
  tags: string[];
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Calculator {
  id: string;
  slug: string;
  name: string;
  description: string;
  type: 'payment' | 'affordability' | 'down-payment' | 'refinance' | 'land-transfer-tax';
}

export interface MortgageRate {
  id: string;
  lender: string;
  term: string; // e.g., "1 Year", "5 Year"
  type: 'fixed' | 'variable';
  rate: number;
  province: string;
  lastUpdated: string;
}

export interface Lender {
  id: string;
  slug: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
  phoneNumber?: string;
  mortgageTypes: string[];
}

export interface Broker {
  id: string;
  name: string;
  province: string;
  city: string;
  phoneNumber: string;
  email: string;
  licenseNumber?: string;
  yearsOfExperience?: number;
  specialties: string[];
}

export interface Province {
  id: string;
  slug: string;
  name: string;
  shortCode: string; // ON, BC, AB, etc.
}

export interface City {
  id: string;
  slug: string;
  name: string;
  provinceId: string;
  province: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  preferredContactMethod?: 'email' | 'phone';
  formType: 'contact' | 'appointment' | 'preapproval';
}

// Additional Component Types
export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface Card {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface SidebarNavItem {
  label: string;
  href: string;
  children?: SidebarNavItem[];
}

// Specific Form Data Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  mortgageType: string;
  homePrice: string;
  message: string;
}

// Calculator Input Types
export interface MortgageCalculatorInputs {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  amortization: number;
  paymentFrequency: 'monthly' | 'biweekly' | 'weekly';
}

export interface AffordabilityCalculatorInputs {
  annualIncome: number;
  monthlyDebts: number;
  downPayment: number;
  interestRate: number;
  amortization: number;
}

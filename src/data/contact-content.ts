
export interface ContactInfoSectionData {
  title: string;
  iconName: 'Info';
  subtext: string;
  email: string;
  phone: string;
}

export interface ContactFormSectionData {
  title: string;
  iconName: 'MessageCircleMore';
  subtext: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButtonText: string;
  toastTitle: string;
  toastDescription: string;
}

export interface ContactPageData {
  contactInfo: ContactInfoSectionData;
  contactForm: ContactFormSectionData;
}

export const contactPageContent: ContactPageData = {
  contactInfo: {
    title: "Contact Information",
    iconName: 'Info',
    subtext: "You can reach me directly via email or phone.",
    email: "SumantKushwaha.dev@gmail.com",
    phone: "+91 9939824083",
  },
  contactForm: {
    title: "Send a Message",
    iconName: 'MessageCircleMore',
    subtext: "Or use the form below to send an inquiry.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Your Full Name",
    emailLabel: "Email Address",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    submitButtonText: "Send Message",
    toastTitle: "Message Sent!",
    toastDescription: "Thank you for your message. I'll get back to you soon.",
  },
};

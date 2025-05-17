
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, Send, User as UserIcon, MessageSquare, Info, MessageCircleMore, Loader2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// EmailJS configuration
emailjs.init("OBUIh5LK9yqQ3ido7");

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactPageContent } from "@/data/contact-content";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const iconMap: { [key: string]: LucideIcon } = {
  Info,
  MessageCircleMore,
};

const ContactPageContent: React.FC = () => {
  const { toast } = useToast();
  const { contactInfo, contactForm } = contactPageContent;
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (!publicKey) {
          console.error('EmailJS public key is missing');
          return;
        }
        emailjs.init(publicKey);
      } catch (error) {
        console.error('Error initializing EmailJS:', error);
      }
    };
    init();
  }, []);


  const ContactInfoIcon = iconMap[contactInfo.iconName];
  const ContactFormIcon = iconMap[contactForm.iconName];

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        message: data.message,
        to_name: "Sumant Kushwaha",
        reply_to: data.email
      };
      
      await emailjs.send("service_g7iwd3m", "template_v58a16a", templateParams);
      
      toast({
        title: contactForm.toastTitle,
        description: contactForm.toastDescription,
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col space-y-2.5">
      <Card>
        <CardHeader className="p-3 bg-muted/30">
          <CardTitle className="text-2xl font-bold text-foreground text-center flex flex-col items-center justify-center">
            {ContactInfoIcon && <ContactInfoIcon size={64} className="mb-2 text-accent" />}
            {contactInfo.title}
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground pt-0.5 text-center">
            {contactInfo.subtext}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1 text-base space-y-2">
          <Card className="p-0 shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center transition-colors w-full"
              >
                <Mail size={18} className="text-accent mr-2 flex-shrink-0" />
                <span className="text-sm text-foreground">{contactInfo.email}</span>
              </a>
            </CardContent>
          </Card>

          <Card className="p-0 shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center transition-colors w-full"
              >
                <Phone size={18} className="text-accent mr-2 flex-shrink-0" />
                <span className="text-sm text-foreground">{contactInfo.phone}</span>
              </a>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="p-3 bg-muted/30">
          <CardTitle className="text-2xl font-bold text-foreground text-center flex flex-col items-center justify-center">
             {ContactFormIcon && <ContactFormIcon size={64} className="mb-2 text-accent" />}
            {contactForm.title}
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground pt-0.5 text-center">
            {contactForm.subtext}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm flex items-center">
                      <UserIcon size={16} className="mr-1.5 text-accent" />
                      {contactForm.fullNameLabel}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={contactForm.fullNamePlaceholder} {...field} className="text-base p-2 h-9" />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm flex items-center">
                      <Mail size={16} className="mr-1.5 text-accent" />
                      {contactForm.emailLabel}
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={contactForm.emailPlaceholder} {...field} className="text-base p-2 h-9" />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm flex items-center">
                       <MessageSquare size={16} className="mr-1.5 text-accent" />
                      {contactForm.messageLabel}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={contactForm.messagePlaceholder}
                        {...field}
                        className="text-base p-2 min-h-[80px]"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-9 text-sm" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    {contactForm.submitButtonText}
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPageContent;

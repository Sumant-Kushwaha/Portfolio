
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, Send, User as UserIcon, MessageSquare, Info, MessageCircleMore } from "lucide-react";

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

const ContactPageContent: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col space-y-2.5">
      <Card className="shadow-lg">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-xl font-bold text-foreground text-center flex items-center justify-center">
            <Info size={20} className="mr-2 text-accent" />
            Contact Information
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground pt-0.5 text-center">
            You can reach me directly via email or phone.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1 text-base space-y-2">
          <Card className="p-0 shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-2">
              <a
                href="mailto:SumantKushwaha.dev@gmail.com"
                className="flex items-center transition-colors w-full"
              >
                <Mail size={18} className="text-accent mr-2 flex-shrink-0" />
                <span className="text-sm text-foreground">SumantKushwaha.dev@gmail.com</span>
              </a>
            </CardContent>
          </Card>

          <Card className="p-0 shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-2">
              <a
                href="tel:+919939824083"
                className="flex items-center transition-colors w-full"
              >
                <Phone size={18} className="text-accent mr-2 flex-shrink-0" />
                <span className="text-sm text-foreground">+91 9939824083</span>
              </a>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-xl font-bold text-foreground text-center flex items-center justify-center">
            <MessageCircleMore size={20} className="mr-2 text-accent" />
            Send a Message
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground pt-0.5 text-center">
            Or use the form below to send an inquiry.
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
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} className="text-sm p-2 h-9" />
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
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="text-sm p-2 h-9" />
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
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message..."
                        {...field}
                        className="text-sm p-2 min-h-[80px]"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-9 text-sm">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPageContent;

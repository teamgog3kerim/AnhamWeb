import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Mail, Phone, MapPin, Info, Clock, Send, CheckCircle } from "lucide-react";
import excavatorWarehouseImage from "@assets/image_1778839927864.png";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent Successfully!",
        description: data.message || "Thank you for your message. We'll get back to you soon!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact-submissions"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Sales",
      description: "Our friendly team is here to help.",
      contact: "sales@anhamatrading.com",
      href: "mailto:sales@anhamatrading.com",
      color: "primary"
    },
    {
      icon: Info,
      title: "Info",
      description: "Our support team is here to help.",
      contact: "Info@anhamatrading.com",
      href: "mailto:Info@anhamatrading.com",
      color: "accent"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+251911206102",
      secondaryContact: "+251116299861",
      shortCode: "6339",
      href: "tel:+251911206102",
      color: "green-600"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Come say hello at our office HQ.",
      contact: "Bole Atlas, Century Executive Tower, 9th floor",
      href: "https://maps.app.goo.gl/4gFtCPYqkigJ3XCg6",
      color: "purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our friendly team is always here to chat. Reach out for construction machinery, 
              mining partnerships, or agricultural export inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to start your project? Get in touch with our experts for personalized solutions.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="service-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`bg-${info.color}/10 p-3 rounded-lg`}>
                          <info.icon className={`text-${info.color} h-6 w-6`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-2">{info.title}</h4>
                          <p className="text-muted-foreground mb-3">{info.description}</p>
                          <div className="space-y-1">
                            <a
                              href={info.href}
                              target={info.title === "Office" ? "_blank" : undefined}
                              rel={info.title === "Office" ? "noopener noreferrer" : undefined}
                              className="text-primary hover:underline font-medium block"
                              data-testid={`contact-${info.title.toLowerCase()}`}
                            >
                              {info.contact}
                            </a>
                            {info.secondaryContact && (
                              <a
                                href={`tel:${info.secondaryContact}`}
                                className="text-primary hover:underline font-medium block"
                                data-testid="contact-phone-secondary"
                              >
                                {info.secondaryContact}
                              </a>
                            )}
                            {info.shortCode && (
                              <a
                                href={`tel:${info.shortCode}`}
                                className="text-primary hover:underline font-medium block"
                                data-testid="contact-phone-shortcode"
                              >
                                {info.shortCode} (Short Code)
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Business Hours */}
              <Card className="service-card bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="text-primary h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Business Hours</h4>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Weekend:</span> Closed</p>
                    <p className="text-sm italic">Emergency contacts available 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="service-card">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-600 h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="John"
                                      {...field}
                                      data-testid="input-first-name"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Doe"
                                      {...field}
                                      data-testid="input-last-name"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="john@company.com"
                                    type="email"
                                    {...field}
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Interest</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-service">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="construction">Construction Machinery</SelectItem>
                                    <SelectItem value="mining">Gold Mining</SelectItem>
                                    <SelectItem value="coffee">Coffee Export</SelectItem>
                                    <SelectItem value="sesame">Sesame Export</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your project..."
                                    className="min-h-[120px]"
                                    {...field}
                                    data-testid="textarea-message"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            className="w-full btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
                            disabled={contactMutation.isPending}
                            data-testid="button-submit-contact"
                          >
                            {contactMutation.isPending ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Overview */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Can We <span className="text-primary">Help You?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need construction equipment, mining partnerships, or agricultural exports, 
              we're here to provide expert solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Construction Machinery",
                description: "Premium excavators and construction equipment from trusted manufacturers",
                image: excavatorWarehouseImage,
                features: ["Equipment Rental", "Maintenance Services", "Hitachi Partnership", "24/7 Support"]
              },
              {
                title: "Gold Mining Operations",
                description: "Responsible mining practices with advanced technology and community partnership",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                features: ["Sustainable Practices", "Advanced Equipment", "Local Partnership", "Environmental Compliance"]
              },
              {
                title: "Agricultural Exports",
                description: "Premium Ethiopian coffee and sesame exports to global markets",
                image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                features: ["Coffee Export", "Sesame Export", "Quality Assurance", "Global Shipping"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card hover-lift h-full">
                  <CardContent className="p-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact ANHAMA Trading today and discover how we can support your business goals 
            with our comprehensive services and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              onClick={() => {
                const contactForm = document.querySelector('[data-testid="input-first-name"]');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                  (contactForm as HTMLInputElement).focus();
                }
              }}
              data-testid="button-start-conversation"
            >
              Start Conversation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg"
              onClick={() => window.open("tel:6339")}
              data-testid="button-call-now"
            >
              Call Now
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

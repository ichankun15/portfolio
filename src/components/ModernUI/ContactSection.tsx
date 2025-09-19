import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/useToast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="modern-section">
      <div className="modern-container px-4 sm:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Contact Info */}
            <div className="w-full mx-auto">
              <div className="modern-card p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary">
                  Let's Connect
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology. Feel free to
                  reach out through any of the channels below.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                      <Mail className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium">Email</p>
                      <a
                        href={`mailto:${portfolioData.email}`}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {portfolioData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent-glow rounded-lg flex items-center justify-center">
                      <Phone className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium">Phone</p>
                      <a
                        href={`tel:${portfolioData.phone}`}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {portfolioData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium">
                        Location
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {portfolioData.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-4 border-t border-border/30">
                  <h4 className="text-sm sm:text-base font-semibold mb-2">
                    Follow Me
                  </h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={portfolioData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                    >
                      <Github className="h-4 sm:h-6 w-4 sm:w-6" />
                    </a>
                    <a
                      href={portfolioData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 rounded-lg bg-secondary/50 hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="h-4 sm:h-6 w-4 sm:w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full mx-auto">
              <div className="modern-card p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-accent">
                  Send a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm px-3 py-2 sm:px-4 sm:py-3"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm px-3 py-2 sm:px-4 sm:py-3"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm px-3 py-2 sm:px-4 sm:py-3"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm px-3 py-2 sm:px-4 sm:py-3"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full modern-btn-primary text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

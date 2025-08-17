import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "avinashessarapu3124@gmail.com",
      href: "mailto:avinashessarapu3124@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6303867852",
      href: "tel:+916303867852"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Avinash Essarapu",
      href: "https://www.linkedin.com/in/avinash-essarapu-2a53a32a9"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "avinashessarapu",
      href: "https://github.com/avinashessarapu"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-text-heading mb-6">
                  Let's Connect
                </h3>
                <p className="text-text-body leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology and development. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 shadow-soft border-0 bg-card hover:shadow-medium transition-shadow">
                    <CardContent className="p-0">
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <info.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-light">
                            {info.label}
                          </p>
                          <p className="text-text-heading group-hover:text-accent transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-medium border-0 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-text-heading">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-body mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-border focus:border-accent focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-body mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-border focus:border-accent focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-body mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration, job opportunity, etc."
                      required
                      className="border-border focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-body mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={5}
                      required
                      className="border-border focus:border-accent focus:ring-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
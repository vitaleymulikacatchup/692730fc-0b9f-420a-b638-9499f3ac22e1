"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

const mockFooterProps = {
  companyName: "Your Company Name",
  copyrightText: "Copyright © 2023 Your Company Name. All rights reserved.",
  links: [
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Contact Us", href: "/contact-us" }
  ],
  socialLinks: [
    { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/YourCompanyName" },
    { name: "Twitter", icon: "twitter", href: "https://twitter.com/YourCompanyName" },
    { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/YourCompanyName" }
  ]
};

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div className="min-h-screen bg-background text-foreground">
        <div id="footer" data-section="footer" className="mt-16">
          <footer className="bg-zinc-900 text-white py-16">
            <div className="mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <h3 className="text-xl font-semibold mb-4">{mockFooterProps.companyName}</h3>
                  <p className="text-gray-400 text-sm">
                    Building the future of web development with innovative components and solutions.
                  </p>
                </div>
                
                <div className="col-span-1">
                  <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    {mockFooterProps.links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href} 
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="col-span-1">
                  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {mockFooterProps.socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-sm">{mockFooterProps.copyrightText}</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
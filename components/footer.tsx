import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-primary">
              <Heart className="w-5 h-5" />
              <span>MindCare</span>
            </div>
            <p className="text-xs md:text-sm text-foreground/60">
              Supporting mental health awareness and providing compassionate resources for everyone.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              {[
                { label: "About Us", href: "#" },
                { label: "Blog", href: "/blog" },
                { label: "Resources", href: "/resources" },
                { label: "Community", href: "/community" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/60 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm md:text-base">Support</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              {[
                { label: "Contact Us", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "Crisis Hotline", href: "#" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/60 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm md:text-base">Contact</h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex gap-3 text-foreground/60">
                <Mail className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0 text-primary" />
                <span>info@mindcare.org</span>
              </li>
              <li className="flex gap-3 text-foreground/60">
                <Phone className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0 text-primary" />
                <span>1-800-MENTAL-1</span>
              </li>
              <li className="flex gap-3 text-foreground/60">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0 text-primary" />
                <span>123 Health St, Wellness City, WC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-foreground/60">
            <p>&copy; {currentYear} MindCare. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

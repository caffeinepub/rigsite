import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube, SiX } from 'react-icons/si';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'rigsite');

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">RIG Institute</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Creating the next generation of leaders in hospitality management with 25+ years of excellence in education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiYoutube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/placement" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/international-courses"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  International Courses
                </Link>
              </li>
              <li>
                <Link to="/internship" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Internship
                </Link>
              </li>
              <li>
                <Link
                  to="/training-program"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Training Program
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Eligibility
                </Link>
              </li>
              <li>
                <Link
                  to="/scholarship-test"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Scholarship Test
                </Link>
              </li>
              <li>
                <Link
                  to="/education-loan"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Education Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>RIG Institute of Hospitality Management, Education District, City</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@riginstitute.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} RIG Institute. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Built with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

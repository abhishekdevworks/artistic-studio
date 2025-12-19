import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black px-10 py-20 text-sm font-sans text-gray-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-12 px-6">
        
        {/* Contact Column */}
        <div className="space-y-4">
          <h3 className="uppercase text-gray-400 tracking-wider font-medium">Contact</h3>
          <p>+91 9902213636</p>
          <p>hello@studio.com</p>
          <p>Bangalore 560039</p>
        </div>

        {/* Social Column */}
        <div className="space-y-4">
          <h3 className="uppercase text-gray-400 tracking-wider font-medium">Social</h3>
          <ul className="space-y-1">
            <li><a href="https://instagram.com/yourstudio" target="_blank" className="hover:text-white transition">Instagram</a></li>
            <li><a href="https://youtube.com/yourstudio" target="_blank" className="hover:text-white transition">YouTube</a></li>
            <li><a href="https://facebook.com/yourstudio" target="_blank" className="hover:text-white transition">Facebook</a></li>
            <li><a href="https://linkedin.com/yourstudio" target="_blank" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourstudio" target="_blank" className="hover:text-white transition">Twitter</a></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h3 className="uppercase text-gray-400 tracking-wider font-medium">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/photography" className="hover:text-white transition">Photography</a></li>
            <li><a href="/films" className="hover:text-white transition">Films</a></li>
            <li><a href="/international" className="hover:text-white transition">International</a></li>
            <li><a href="/connect" className="hover:text-white transition">Connect</a></li>
          </ul>
        </div>

        {/* Corporate Column */}
        <div className="space-y-4">
          <h3 className="uppercase text-gray-400 tracking-wider font-medium">Corporate</h3>
          <ul className="space-y-1">
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/refund" className="hover:text-white transition">Cancellation & Refund</a></li>
          </ul>
        </div>
      </div>

      {/* Floating Phone & WhatsApp */}
      <div className="fixed bottom-15 right-8 flex flex-col gap-6 z-50">
        <a href="tel:+919902213636" className="bg-black text-white p-3 rounded-full shadow hover:bg-gray-900 transition">
          <Phone size={20} />
        </a>
        <a href="https://wa.me/919902213636" target="_blank" className="bg-black text-white p-3 rounded-full shadow hover:bg-gray-900 transition">
          <FaWhatsapp size={20} />
        </a>
      </div>

     
    </footer>
  );
}

import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Composant principal                                                       */
/* -------------------------------------------------------------------------- */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#990F0F] text-white py-16">
      <div className="container mx-auto px-4">

        {/* ======================== Section principale ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* -------- À propos + réseaux sociaux -------- */}
          <div>
            <h3 className="text-2xl font-bold mb-4">لمسة<span className="text-white/80"> حرة</span></h3>
            <p className="text-white/80 mb-4">
              منصة رقمية تربط بين الحرفيات المبدعات والزبائن، نحافظ على التراث ونقدم الأصالة بلمسة عصرية.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="#" label="Facebook" icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon href="#" label="Instagram" icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon href="#" label="Youtube" icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>

          {/* -------- Liens rapides -------- */}
          <FooterLinks
            title="روابط سريعة"
            links={[
              { label: 'الرئيسية', href: '#' },
              { label: 'الكتالوج', href: '#products' },
              { label: 'الحرفيات', href: '#artisans' },
              { label: 'قصتي مع الخياطة', href: '#stories' },
          
            ]}
          />

          {/* -------- Services -------- */}
          <FooterLinks
            title="خدماتنا"
            links={[
              { label: 'تصميم مخصص', href: '#' },
              { label: 'طرز يدوي', href: '#' },
              { label: 'توصيل سريع', href: '#' },
              { label: 'دورات تدريبية', href: '#' },
              { label: 'استشارة مجانية', href: '#' },
            ]}
          />

          {/* -------- Contact -------- */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:meriemhaddou22@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  meriemhaddou22@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+213XXXXXXXX" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  +213 XX XX XX XX
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4" />
                  تلمسان، الجزائر
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ======================== Barre inférieure ======================== */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-white/80 text-sm">
            لمسة حرة جميع الحقوق محفوظة {currentYear} © .
          </p>
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*  Sous-composants réutilisables                                             */
/* -------------------------------------------------------------------------- */

// Liste de liens d'une section du footer
const FooterLinks = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map(({ label, href }, idx) => (
        <li key={idx}>
          <a href={href} className="text-white/80 hover:text-white transition-colors">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Icône sociale cliquable
const SocialIcon = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-md transition-colors"
  >
    {icon}
  </a>
);

export default Footer;


import All from "../../assets/NexorImg"
const footerColumns = [
  {
    title: "COMPANY",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Our Service", href: "#services" },
    ],
  },
  {
    title: "PAGES",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Blog Details", href: "#blog" },
      { label: "Case Study", href: "#projects" },
      { label: "Case Study Details", href: "#projects" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Terms & Condition", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "404", href: "#404" },
    ],
  },
];

const socialLinks = [
  { name: "X", href: "https://x.com", symbol: "𝕏" },
  { name: "Facebook", href: "https://facebook.com", symbol: "f" },
  { name: "Instagram", href: "https://instagram.com", symbol: "◎" },
  { name: "YouTube", href: "https://youtube.com", symbol: "▷" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f4ef] px-5 pb-8 pt-16 text-[#17201c] sm:px-8 sm:pt-20 lg:px-16 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand and contact */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-3xl font-semibold tracking-tight"
            >
             <img src={All.img1} alt="" />
              
            </a>

            <p className="mt-5 text-base">
              Modern Consultancy starts here.
            </p>

            <div className="mt-16 space-y-4 text-sm">
              <a
                href="tel:+48123421124"
                className="flex items-center gap-2 transition hover:text-gray-500"
              >
                <span aria-hidden="true">♧</span>
                +48 123 421 124
              </a>

              <a
                href="mailto:info@nexor.com"
                className="flex items-center gap-2 transition hover:text-gray-500"
              >
                <span aria-hidden="true">@</span>
                info@nexor.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-6 text-sm font-medium text-gray-500">
                {column.title}
              </h3>

              <ul className="space-y-5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition duration-200 hover:text-gray-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and social links */}
        <div className="mt-24 flex flex-col gap-6 border-b border-[#dcdad2] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            Copyright © 2026 Nexor. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-7 w-7 items-center justify-center rounded-md text-lg text-gray-600 transition hover:bg-[#17201c] hover:text-white"
              >
                {social.symbol}
              </a>
            ))}
          </div>
        </div>

        {/* Company information */}
        <div className="space-y-5 pt-6 text-xs leading-6 text-gray-500 sm:text-sm">
          <p>
            Nexor Business Consultation is a trusted consulting firm dedicated
            to helping businesses overcome challenges, improve performance,
            and achieve sustainable growth. We partner with small and
            medium-sized businesses, and established enterprises to develop
            practical strategies that drive measurable results.
          </p>

          <p>
            Our team combines industry expertise, market insights, and
            data-driven decision-making to provide customized solutions that
            align with each client's unique goals. Whether you're launching a
            new business, expanding into new markets, improving operations,
            or planning long-term growth, Nexor provides the guidance and
            support you need to move forward with confidence.
          </p>

          <p>
            Nexor implements appropriate security measures to protect your
            data from unauthorized access, disclosure, or misuse. By using
            our website and services, you agree to the collection and use of
            information in accordance with our privacy policy. For inquiries,
            contact info@nexor.com.
          </p>
        </div>
      </div>
    </footer>
  );
}
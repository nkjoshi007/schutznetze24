import React, { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  Plus,
  Minus,
  X,
  Mail,
  Phone,
  ChevronRight,
  Star,
  ShieldCheck,
  Hammer,
  Home,
  Truck,
  HelpCircle,
  PhoneCall,
  PackageSearch,
  Dumbbell,
  Shield,
} from "lucide-react";
import clsx from "clsx";
import i18n from "i18next";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ReactNode> = {
  "CUSTOM - MADE": <Hammer className="w-4 h-4" />,
  "BUILDING PROTECTION": <ShieldCheck className="w-4 h-4" />,
  INDUSTRY: <PackageSearch className="w-4 h-4" />,
  "LOAD SECURING": <Truck className="w-4 h-4" />,
  "HOME & GARDEN": <Home className="w-4 h-4" />,
  SPORT: <Dumbbell className="w-4 h-4" />,
  INFO: <HelpCircle className="w-4 h-4" />,
  CONTACT: <PhoneCall className="w-4 h-4" />,
};

const navItems = [
  {
    label: "CUSTOM - MADE",
    children: ["Net Customization", "Material Info", "Use Cases"],
  },
  {
    label: "BUILDING PROTECTION",
    children: ["Scaffolding Nets", "Debris Nets"],
  },
  {
    label: "INDUSTRY",
    children: ["Industrial Nets", "Machinery Safety"],
  },
  {
    label: "LOAD SECURING",
    children: ["Truck Nets", "Cargo Nets"],
  },
  {
    label: "HOME & GARDEN",
    children: ["Cat Nets", "Privacy Nets"],
  },
  {
    label: "SPORT",
    children: ["Goal Nets", "Rebound Nets"],
  },
  {
    label: "INFO",
    children: ["FAQ", "Support"],
  },
  {
    label: "CONTACT",
    children: ["Email Us", "Call Us"],
  },
];

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [language, setLanguage] = useState("de");

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleExpand = (idx: number) =>
    setExpanded(expanded === idx ? null : idx);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <header className="w-full shadow">
      <div className="flex items-center justify-between px-4 py-2 text-sm border-b">
        <div className="flex items-center gap-4">
          <Phone className="w-4 h-4" />
          <Mail className="w-4 h-4" />
          <User className="w-4 h-4" />
          <button>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="text-sm outline-none bg-transparent"
            >
              <option value="en">🇬🇧 EN</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="de">🇩🇪 DE</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">
              netzhelden24
            </span>
          </Link>

          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/24_Schutznetze_Logo.svg/2560px-24_Schutznetze_Logo.svg.png"
            alt="Logo"
            className="h-8"
          /> */}
        </div>
        {/* <div className="flex items-center gap-2 bg-gray-100 rounded overflow-hidden px-2 py-1 flex-grow mx-4">
          <input
            type="text"
            placeholder="Enter search term..."
            className="bg-transparent px-2 flex-grow outline-none text-sm"
          />
          <Search className="w-4 h-4 text-gray-600" />
        </div> */}
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white rounded-full px-1">
            0
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-blue-700 text-white hidden md:block">
        <ul className="flex flex-wrap items-center gap-4 px-6 py-2 text-sm font-semibold relative">
          {navItems.map((item, idx) => (
            <li key={idx} className="group relative cursor-pointer">
              <div className="flex items-center gap-1 hover:opacity-90 transition">
                {iconMap[item.label]} {item.label}{" "}
                <ChevronDown className="w-4 h-4" />
              </div>
              <ul className="absolute left-0 top-full bg-white text-black shadow-md rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out z-10 mt-1 min-w-[200px] pointer-events-none group-hover:pointer-events-auto">
                {item.children.map((child, cidx) => (
                  <li
                    key={cidx}
                    className="px-4 py-2 hover:bg-green-100 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {child}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={clsx("fixed inset-0 z-50", sidebarOpen ? "block" : "hidden")}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={toggleSidebar}
        />
        <div
          className={clsx(
            "absolute right-0 top-0 h-full w-72 bg-white p-4 overflow-y-auto shadow-xl transition-transform duration-300",
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button
            onClick={toggleSidebar}
            className="absolute right-4 top-4 rounded bg-gray-200 text-gray-700 p-1"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="font-bold text-lg mb-6">protectivenets24</div>
          <ul className="space-y-3">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <div
                  className="flex justify-between items-center cursor-pointer font-medium text-sm"
                  onClick={() => toggleExpand(idx)}
                >
                  <span className="flex items-center gap-2">
                    {iconMap[item.label]} {item.label}
                  </span>
                  {expanded === idx ? (
                    <Minus className="w-4 h-4 bg-gray-200 text-gray-700 p-[2px] rounded" />
                  ) : (
                    <Plus className="w-4 h-4 bg-gray-200 text-gray-700 p-[2px] rounded" />
                  )}
                </div>
                {expanded === idx && (
                  <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-600">
                    {item.children.map((child, cidx) => (
                      <li key={cidx} className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="mt-6 border-t pt-4 text-xs">
            <h3 className="font-semibold text-sm mb-2">CONTACT</h3>
            <p>
              Mon–Thu: 8:00–17:00
              <br />
              Fri: 8:00–12:00
              <br />
              Visits by appointment only.
            </p>
            <div className="mt-2 space-y-1 text-green-600">
              <p className="flex items-center gap-1">
                <Phone className="w-4 h-4" /> +49 (0) 6443 - 436 96 40
              </p>
              <p className="flex items-center gap-1">
                <Mail className="w-4 h-4" /> info@nets.de
              </p>
            </div>
            <div className="mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Trusted_Shops_Logo.png"
                alt="Trusted"
                className="h-10"
              />
              <p className="text-xs mt-1 font-semibold flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" /> 4.91 ★
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

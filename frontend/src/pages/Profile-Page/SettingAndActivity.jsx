import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../BottomNav";
import {
  ArrowLeft,
  Bell,
  Clock,
  LayoutList,
  Lock,
  Star,
  Bookmark,
  ActivitySquare,
  Archive,
  EyeOff,
  MessageSquare,
  AtSign,
  MessageCircle,
  Share2,
  Slash,
  AlertCircle,
  UserPlus,
  BellOff,
  ChevronRight,
  ArrowDownToLine,
  Languages,
  Accessibility,
  Facebook,
  Edit,
  TheaterIcon,
  HelpCircle,
  FaUserFriends,
  BadgeCheck,
  Shield,
  Info,
  User,
  CreditCard,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  MdContentPaste,
  MdOutlineBlock,
  MdOutlineFavoriteBorder,
  MdSubscriptions,
  MdOutlinePhoneIphone,
  MdSignalCellularAlt,
  MdOutlineOpenInBrowser,
  MdOutlineScience,
  MdOutlineFamilyRestroom,
  MdOutlineWorkOutline,
} from "react-icons/md";

const SaveArchiveTime = [
  {
    title: "Saved",
    icon: <Bookmark className="w-5 h-5" />,
  },
  {
    title: "Archive",
    icon: <Archive className="w-5 h-5" />,
  },
  {
    title: "Your activity",
    icon: <ActivitySquare className="w-5 h-5" />,
  },
  {
    title: "Notifications",
    icon: <Bell className="w-5 h-5" />,
  },
  {
    title: "Time management",
    icon: <Clock className="w-5 h-5" />,
  },
];

const PrivacySettings = [
  {
    title: "Account privacy",
    icon: <Lock className="w-5 h-5" />,
    count: "Private",
  },
  {
    title: "Close Friends",
    icon: <Star className="w-5 h-5" />,
    count: 4,
  },
  {
    title: "Crossposting",
    icon: <LayoutList className="w-5 h-5" />,
  },
  {
    title: "Blocked",
    icon: <MdOutlineBlock className="w-5 h-5" />,
    count: 8,
  },
  {
    title: "Hide story and live",
    icon: <EyeOff className="w-5 h-5" />,
  },
];

const interactionSettings = [
  {
    title: "Messages and story replies",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    title: "Tags and mentions",
    icon: <AtSign className="w-5 h-5" />,
  },
  {
    title: "Comments",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    title: "Sharing",
    icon: <Share2 className="w-5 h-5" />,
  },
  {
    title: "Avatar interactions",
    icon: <FaUserFriends className="w-5 h-5" />,
  },
  {
    title: "Restricted",
    icon: <Slash className="w-5 h-5" />,
    count: 0,
  },
  {
    title: "Limit interactions",
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    title: "Hidden Words",
    // icon: <Type className="w-5 h-5" />,

    icon: <span className="font-bold text-lg w-5 h-5">Aa</span>,
  },
  {
    title: "Follow and invite friends",
    icon: <UserPlus className="w-5 h-5" />,
  },
];

const visibilitySettings = [
  {
    title: "Favorites",
    icon: <Star className="w-5 h-5" />,
    count: 0,
  },
  {
    title: "Muted accounts",
    icon: <BellOff className="w-5 h-5" />,
    count: 1,
  },
  {
    title: "Content prefernces",
    icon: <MdContentPaste className="w-5 h-5" />,
  },
  {
    title: "Like and share counts",
    icon: <MdOutlineFavoriteBorder className="w-5 h-5" />,
  },
  {
    title: "Subscriptions",
    icon: <MdSubscriptions className="w-5 h-5" />,
  },
];

const AppMedia = [
  {
    title: "Device permission",
    icon: <MdOutlinePhoneIphone className="w-5 h-5" />,
  },
  {
    title: "Archiving and downloding",
    icon: <ArrowDownToLine className="w-5 h-5" />,
  },
  {
    title: "Accessibility and translations",
    icon: <Accessibility className="w-5 h-5" />,
  },
  {
    title: "Language",
    icon: <Languages className="w-5 h-5" />,
  },
  {
    title: "Data usage and media quality",
    icon: <MdSignalCellularAlt className="w-5 h-5" />,
  },
  {
    title: "App website permissions",
    icon: <MdOutlineOpenInBrowser className="w-5 h-5" />,
  },
  {
    title: "Early access to features",
    icon: <MdOutlineScience className="w-5 h-5" />,
  },
];

const Famlies = [
  {
    title: "Family Center",
    icon: <MdOutlineFamilyRestroom className="w-5 h-5" />,
  },
];

const Professionals = [
  {
    title: "Account type and tools",
    icon: <MdOutlineWorkOutline className="w-5 h-5" />,
  },
  {
    title: "Meta Verified",
    icon: <BadgeCheck className="w-5 h-5" />,
    count: "Not subscribed",
  },
];

const Fundraisers = [
  {
    title: "Orders and payments",
    icon: <CreditCard className="w-5 h-5" />,
  },
];

const AboutInfo = [
  {
    title: "Help",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    title: "Privacy Status",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Account Status",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "About",
    icon: <Info className="w-5 h-5" />,
  },
];

const AboutMeta = [
  {
    title: "WhatsApp",
    icon: <FaWhatsapp className="w-5 h-5" />,
  },
  {
    title: "Edits",
    icon: <Edit className="w-5 h-5 " />,
  },
  {
    title: "Threads",
    icon: <TheaterIcon className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
  },
];

const Login = [
  {
    count: "Add account",
  },
];

const SettingItem = ({ icon, title, count }) => (
  <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-200">
    <div className="flex items-center gap-3">
      <span className="text-gray-700">{icon}</span>
      <span className="text-sm">{title}</span>
    </div>
    <div className="flex items-center gap-2 text-gray-600 text-sm">
      {count !== undefined && <span>{count}</span>}
      <ChevronRight className="w-4 h-4" />
    </div>
  </div>
);
const SettingAndActivity = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4 space-y-6 font-sans">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/Profile">
          <ArrowLeft />
        </Link>
        <h1 className="text-xl font-semibold">Settings and activity</h1>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
      />

      {/* Accounts Center */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-medium text-sm mb-1">Your account</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Accounts Center</p>
            <p className="text-sm text-gray-500">
              Password, security, personal details, ad preferences
            </p>
          </div>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.svg"
            alt="Meta"
            className="w-10"
          />
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6">
        {/* Section 0 */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          How you use Instagram
        </div>
        {SaveArchiveTime.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Section 1 */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          Who can see your content
        </div>
        {PrivacySettings.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Divider */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          How others can interact with you
        </div>
        {interactionSettings.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Divider */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">What you see</div>
        {visibilitySettings.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Media */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          Yoyr app abd media
        </div>
        {AppMedia.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Families */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">For Families</div>
        {Famlies.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Professionals */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          For Professionals
        </div>
        {Professionals.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Fundraisers */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          Your orders and fundraisers
        </div>
        {Fundraisers.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* About Info */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          More info ans support
        </div>
        {AboutInfo.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Also From Meta */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">
          Also from Meta
        </div>
        {AboutMeta.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}

        {/* Login */}
        <div className="text-xs text-gray-400 px-4 pt-4 pb-1">Login</div>
        {Login.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}
      </div>
      <div>
        <BottomNav />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, subLabel }) => (
  <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2">
    <div className="flex items-center space-x-3">
      <div className="text-gray-600">{icon}</div>
      <p className="font-medium">{label}</p>
    </div>
    {subLabel && <p className="text-sm text-gray-500">{subLabel}</p>}
  </div>
);

export default SettingAndActivity;

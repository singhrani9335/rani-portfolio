import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
  color?: string;
}

export default function ContactInfoCard({
  icon,
  title,
  value,
  href,
  color = "from-cyan-500 to-blue-500",
}: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.log("Copy failed", err);
    }
  };

  const CardContent = (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10 bg-white/5 p-6
        backdrop-blur-xl cursor-pointer
        hover:border-cyan-400/40
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
      "
    >
      {/* Glow Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition duration-500`}
      />

      {/* Tooltip */}
      <div className="absolute right-4 top-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
        Click to copy
      </div>

      {/* Copied Toast */}
      {copied && (
        <div className="absolute right-4 top-10 text-xs text-green-400 animate-pulse">
          Copied!
        </div>
      )}

      <div className="relative flex items-center gap-5">

        {/* Icon */}
        <div
          className={`
            flex h-14 w-14 items-center justify-center rounded-2xl
            bg-gradient-to-br ${color} text-white shadow-lg
            group-hover:scale-110 group-hover:rotate-6
            transition duration-300
          `}
        >
          {icon}
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-base">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mt-1 break-all">
            {value}
          </p>
        </div>

      </div>
    </motion.div>
  );

  // If link exists → clickable link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  // If no link → copy on click
  return (
    <div onClick={handleCopy}>
      {CardContent}
    </div>
  );
}
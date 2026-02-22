import Link from "next/link";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ className = "", onClick }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className}`} onClick={onClick}>
      <div className="flex items-center">
        <div className="relative">
          <span className="text-3xl sm:text-4xl font-bold text-accent">N</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
        </div>
        <div className="ml-1">
          <span className="text-lg sm:text-xl font-bold text-white">Nirajan</span>
          <span className="block text-[9px] sm:text-[10px] text-white/50 tracking-widest -mt-1 uppercase">
            Dhungel
          </span>
        </div>
      </div>
    </Link>
  );
};
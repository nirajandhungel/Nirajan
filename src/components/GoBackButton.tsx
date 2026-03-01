"use client";

import { ArrowLeft } from "lucide-react";

export function GoBackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="px-8 py-4 rounded-xl font-bold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 min-w-[200px] justify-center bg-white/5 backdrop-blur-sm"
    >
      <ArrowLeft className="w-5 h-5" />
      Go Back
    </button>
  );
}

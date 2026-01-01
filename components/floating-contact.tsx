"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingContact() {
  const handleLineClick = () => {
    // Line 채널 링크 또는 ID를 여기에 추가
    window.open("https://line.me/R/ti/p/@yourlineid", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+66123456789";
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      <Button
        onClick={handleLineClick}
        className="h-12 md:h-14 px-4 md:px-6 rounded-xl shadow-lg bg-[#06C755] hover:bg-[#05B047] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm md:text-base"
        size="lg"
      >
        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
        <span className="hidden sm:inline">Line으로 문의하기</span>
        <span className="sm:hidden">Line 문의</span>
      </Button>
      <Button
        onClick={handlePhoneClick}
        className="h-12 md:h-14 px-4 md:px-6 rounded-xl shadow-lg bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm md:text-base"
        size="lg"
      >
        <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
        <span className="hidden sm:inline">전화 상담</span>
        <span className="sm:hidden">전화</span>
      </Button>
    </div>
  );
}


"use client";

import { Card } from "@/components/ui/card";

// 태국 주요 보험사 목록 (로고 대신 텍스트로 표시, 실제로는 이미지로 대체 가능)
const partners = [
  { name: "AIA", logo: "AIA" },
  { name: "Prudential", logo: "Prudential" },
  { name: "Bangkok Insurance", logo: "Bangkok Insurance" },
  { name: "Viriyah Insurance", logo: "Viriyah" },
  { name: "Dhipaya Insurance", logo: "Dhipaya" },
  { name: "AXA", logo: "AXA" },
  { name: "Krungthai-AXA", logo: "Krungthai-AXA" },
  { name: "MSIG", logo: "MSIG" },
  { name: "Tokio Marine", logo: "Tokio Marine" },
  { name: "Roojai", logo: "Roojai" },
];

export function PartnersSection() {
  // 무한 슬라이드를 위한 파트너 리스트 복제
  const displayPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-muted/30 border-t">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            신뢰받는 파트너사
          </h2>
          <p className="text-muted-foreground">
            태국 주요 보험사와 함께합니다
          </p>
        </div>

        <div className="relative overflow-hidden mask-gradient">
          <div className="flex animate-scroll gap-6 will-change-transform">
            {displayPartners.map((partner, index) => (
              <Card
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center border-2 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-bold text-muted-foreground text-center px-4">
                  {partner.logo}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 shadow-xl">
      {/* 샘플 이미지 - 실제 이미지로 교체 가능 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sample.jpeg"
          alt="Allianz Ayudhya ประกันสุขภาพ 태국인 가족과 의료진 상담 장면 - Allianz Ayudhya ประกันสุขภาพ 및 ประกันมะเร็ง 서비스"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>

      {/* 플레이스홀더는 SVG 이미지가 항상 표시되므로 숨김 */}
      <div
        className="placeholder-content absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20"
        style={{ display: "none" }}
      >
        <div className="text-center p-8 space-y-4">
          <div className="w-24 h-24 mx-auto mb-4">
            <svg
              className="w-full h-full text-primary/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Allianz Ayudhya ประกันสุขภาพ 태국인 가족 이미지"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <p className="text-lg md:text-xl font-semibold text-primary/80 font-heading">Allianz Ayudhya ประกันสุขภาพ</p>
          <p className="text-sm md:text-base text-muted-foreground">태국인 가족 또는 의료진 상담 이미지</p>
          <p className="text-xs md:text-sm text-muted-foreground/70 mt-2">고화질 이미지가 여기에 표시됩니다</p>
        </div>
      </div>
    </div>
  );
}

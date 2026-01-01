"use client";

import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
      {/* 실제 이미지 사용 시 주석 해제하고 아래 플레이스홀더를 교체하세요 */}
      {/*
      <Image
        src="/images/allianz-ayudhya-health-insurance-thai-family.jpg"
        alt="Allianz Ayudhya ประกันสุขภาพ 태국인 가족과 의료진 상담 장면 - Allianz Ayudhya ประกันสุขภาพ 및 ประกันมะเร็ง 서비스"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
      />
      */}

      {/* 플레이스홀더 - 실제 이미지로 대체 가능 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center min-h-[500px]">
            <div className="text-muted-foreground space-y-4">
              <svg
                className="w-24 h-24 mx-auto text-primary/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-label="Allianz Ayudhya ประกันสุขภาพ 태국인 가족 이미지"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="text-lg font-medium">Allianz Ayudhya ประกันสุขภาพ</p>
              <p className="text-sm">태국인 가족 또는 의료진 상담 이미지</p>
              <p className="text-xs text-muted-foreground/70 mt-4">
                고화질 이미지가 여기에 표시됩니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


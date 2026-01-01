"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Building2, Globe } from "lucide-react";
import { HeroImage } from "@/components/hero-image";

export function Hero() {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote-form");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full py-12 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* 좌측: 컨텐츠 */}
          <div className="flex flex-col space-y-6 md:space-y-8 z-10 order-2 lg:order-1">
            <div className="space-y-5">
              <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20 px-3 py-1.5 text-sm font-medium">
                My Health Plus Plus
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-heading">
                Allianz Ayudhya <span className="text-primary">ประกันสุขภาพ</span>
                <br className="hidden md:block" />
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">태국 내 400여 개 협력 병원 네트워크</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body">
                Allianz Ayudhya의 <span className="font-semibold text-foreground">ประกันสุขภาพ (건강 보험)</span>와
                <span className="font-semibold text-foreground"> ประกันมะเร็ง (암 보험)</span>으로
                <br className="hidden sm:block" />
                글로벌 수준의 의료 보장을 제공합니다
              </p>
            </div>

            {/* 주요 특징 */}
            <div className="space-y-4 py-2">
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base md:text-lg text-foreground mb-1">400여 개 협력 병원</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">태국 전역의 우수한 의료 시설 네트워크</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base md:text-lg text-foreground mb-1">글로벌 수준의 의료 보장</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">세계 어디서나 전문적인 의료 서비스</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <Building2 className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base md:text-lg text-foreground mb-1">전문 의료진 상담</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">경험 많은 의료 전문가의 24/7 상담 서비스</p>
                </div>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={scrollToQuote}
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-6 md:py-7 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                เช็คเบี้ยประกัน (보험료 확인)
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-6 md:py-7 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-semibold rounded-xl transition-all duration-300"
              >
                상품 자세히 보기
              </Button>
            </div>

            {/* 신뢰 지표 */}
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10 pt-6 border-t border-border/50">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-heading">400+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">협력 병원</div>
              </div>
              <div className="h-10 md:h-12 w-px bg-border" />
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-heading">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">의료 상담</div>
              </div>
              <div className="h-10 md:h-12 w-px bg-border" />
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-heading">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">글로벌 보장</div>
              </div>
            </div>
          </div>

          {/* 우측: 이미지 영역 */}
          <div className="order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}

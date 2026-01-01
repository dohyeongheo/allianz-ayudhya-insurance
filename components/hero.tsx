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
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 via-white to-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 좌측: 컨텐츠 */}
          <div className="flex flex-col space-y-6 md:space-y-8 z-10">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit bg-accent/10 text-accent border-accent/20 mb-2">
                My Health Plus Plus
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight font-heading">
                Allianz Ayudhya <span className="text-primary">ประกันสุขภาพ</span>
                <br />
                태국 내 400여 개 협력 병원 네트워크
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                Allianz Ayudhya의 <span className="font-semibold text-foreground">ประกันสุขภาพ (건강 보험)</span>와
                <span className="font-semibold text-foreground"> ประกันมะเร็ง (암 보험)</span>으로
                <br />
                글로벌 수준의 의료 보장을 제공합니다
              </p>
            </div>

            {/* 주요 특징 */}
            <div className="space-y-4 py-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">400여 개 협력 병원</p>
                  <p className="text-sm text-muted-foreground">태국 전역의 우수한 의료 시설 네트워크</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">글로벌 수준의 의료 보장</p>
                  <p className="text-sm text-muted-foreground">세계 어디서나 전문적인 의료 서비스</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">전문 의료진 상담</p>
                  <p className="text-sm text-muted-foreground">경험 많은 의료 전문가의 24/7 상담 서비스</p>
                </div>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToQuote}
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-7 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                เช็คเบี้ยประกัน (보험료 확인)
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-7 border-2 border-primary/20 hover:border-primary/40 font-semibold rounded-xl"
              >
                상품 자세히 보기
              </Button>
            </div>

            {/* 신뢰 지표 */}
            <div className="flex items-center gap-6 md:gap-8 pt-4 border-t">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">협력 병원</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">의료 상담</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">글로벌 보장</div>
              </div>
            </div>
          </div>

          {/* 우측: 이미지 영역 */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

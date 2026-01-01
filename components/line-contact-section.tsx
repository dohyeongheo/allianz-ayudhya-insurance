"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

export function LineContactSection() {
  const handleLineClick = () => {
    // Line 공식 계정 URL 또는 ID를 여기에 추가
    window.open("https://line.me/R/ti/p/@allianzayudhya", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#06C755]/5 via-white to-primary/5">
      <div className="container px-4 md:px-6">
        <Card className="rounded-2xl border-2 shadow-sm bg-white max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* 좌측: 컨텐츠 */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#06C755]/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#06C755]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading">
                      Line으로 문의하기
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    태국에서 가장 많이 사용하는 메신저로
                    <br />
                    <span className="font-semibold text-foreground">실시간 상담</span>을 받아보세요
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      태국인들이 가장 선호하는 문의 수단
                    </p>
                    <p className="text-sm text-muted-foreground">
                      80% 이상의 태국 고객이 Line을 통해 보험 상담을 받고 있습니다
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleLineClick}
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-7 bg-[#06C755] hover:bg-[#05B047] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Line 공식 계정으로 문의하기
                </Button>
              </div>

              {/* 우측: 장점 리스트 */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#06C755]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#06C755]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">24시간 즉시 응답</p>
                      <p className="text-sm text-muted-foreground">언제든지 빠른 답변을 받으실 수 있습니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#06C755]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#06C755]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">전문 상담사 상담</p>
                      <p className="text-sm text-muted-foreground">경험 많은 전문가가 1:1 맞춤 상담을 제공합니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#06C755]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#06C755]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">이미지/파일 공유 가능</p>
                      <p className="text-sm text-muted-foreground">문서나 증빙자료를 쉽게 전송할 수 있습니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#06C755]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#06C755]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">간편한 가입 프로세스</p>
                      <p className="text-sm text-muted-foreground">Line에서 바로 보험 가입까지 가능합니다</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


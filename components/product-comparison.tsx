import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, PiggyBank, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "health",
    name: "건강보험",
    description: "포괄적인 의료 보장으로 건강한 삶을 보장합니다",
    icon: Heart,
    color: "bg-blue-50 text-blue-600",
    badge: "인기",
    benefits: [
      {
        icon: CheckCircle2,
        text: "입원비 무제한 보장",
        description: "실제 병원비 기준 전액 보장"
      },
      {
        icon: CheckCircle2,
        text: "400여 개 협력 병원",
        description: "태국 전역 의료 시설 네트워크"
      },
      {
        icon: CheckCircle2,
        text: "외래 진료비 보장",
        description: "병원 방문 시 진료비 지원"
      },
      {
        icon: CheckCircle2,
        text: "글로벌 의료 보장",
        description: "해외 여행 중 의료비도 보장"
      },
      {
        icon: CheckCircle2,
        text: "24/7 의료 상담",
        description: "언제든 전문 의료진 상담 가능"
      }
    ],
    price: "월 3,000바트부터",
    href: "#health-detail"
  },
  {
    id: "cancer",
    name: "암보험",
    description: "암 진단 시 즉시 지급으로 경제적 부담을 덜어드립니다",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    badge: "추천",
    benefits: [
      {
        icon: CheckCircle2,
        text: "암 진단 시 100만 바트 즉시 지급",
        description: "초기 진단금 일시 지급"
      },
      {
        icon: CheckCircle2,
        text: "암 치료비 최대 500만 바트",
        description: "수술, 항암, 방사선 치료비 포함"
      },
      {
        icon: CheckCircle2,
        text: "암 재발 보장",
        description: "재발 시에도 계속 보장"
      },
      {
        icon: CheckCircle2,
        text: "생존자 생명연금",
        description: "치료 완료 후 생명연금 지급"
      },
      {
        icon: CheckCircle2,
        text: "건강검진 혜택",
        description: "정기 건강검진 비용 지원"
      }
    ],
    price: "월 2,500바트부터",
    href: "#cancer-detail"
  },
  {
    id: "savings",
    name: "저축성보험",
    description: "보장과 저축을 동시에, 미래를 위한 안전한 투자",
    icon: PiggyBank,
    color: "bg-green-50 text-green-600",
    badge: null,
    benefits: [
      {
        icon: CheckCircle2,
        text: "만기 환급금 지급",
        description: "계약 만기 시 보험료 반환"
      },
      {
        icon: CheckCircle2,
        text: "생명 보장 포함",
        description: "보장과 저축 동시 제공"
      },
      {
        icon: CheckCircle2,
        text: "세제 혜택",
        description: "소득공제 및 세액공제 혜택"
      },
      {
        icon: CheckCircle2,
        text: "유연한 납입 기간",
        description: "10년, 15년, 20년 선택 가능"
      },
      {
        icon: CheckCircle2,
        text: "배당금 지급",
        description: "보험회사 실적에 따른 배당"
      }
    ],
    price: "월 5,000바트부터",
    href: "#savings-detail"
  }
];

export function ProductComparison() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-heading">
            Allianz Ayudhya 핵심 <span className="text-primary">ประกันสุขภาพ</span> 상품 비교
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Allianz Ayudhya의 <span className="font-semibold">ประกันสุขภาพ (건강 보험)</span>,
            <span className="font-semibold"> ประกันมะเร็ง (암 보험)</span> 및 저축성보험 중
            <br />
            여러분의 필요에 맞는 최적의 보험 상품을 선택하세요
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className="relative flex flex-col rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                {product.badge && (
                  <div className="absolute -top-3 right-6 z-10">
                    <Badge className="bg-primary text-white border-0">
                      {product.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${product.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-heading mb-2">
                    {product.id === "health" && "ประกันสุขภาพ (건강보험)"}
                    {product.id === "cancer" && "ประกันมะเร็ง (암보험)"}
                    {product.id === "savings" && product.name}
                  </CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {product.price}
                  </div>

                  <div className="space-y-3">
                    {product.benefits.map((benefit, index) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <BenefitIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-foreground mb-0.5">
                              {benefit.text}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>

                <CardFooter className="pt-6 border-t">
                  <Link href={product.href} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-2 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      상세 보기
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


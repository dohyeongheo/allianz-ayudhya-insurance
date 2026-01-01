import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "간편한 온라인 가입",
    description: "복잡한 서류 없이 몇 분 안에 온라인으로 보험에 가입할 수 있습니다.",
    icon: "⚡",
  },
  {
    title: "투명한 가격",
    description: "숨겨진 비용 없이 모든 가격이 투명하게 공개되어 있습니다.",
    icon: "💰",
  },
  {
    title: "빠른 청구 처리",
    description: "간단한 온라인 청구 프로세스로 빠르고 편리하게 처리됩니다.",
    icon: "🚀",
  },
  {
    title: "전문 고객 지원",
    description: "언제든지 전문 상담사가 도와드립니다. 24/7 고객 지원 서비스를 제공합니다.",
    icon: "💬",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            왜 저희를 선택해야 할까요?
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            간편함과 신뢰성을 결합한 최고의 보험 경험을 제공합니다.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


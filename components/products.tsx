import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    title: "자동차 보험",
    description: "충돌, 도난, 자연재해까지 모든 위험을 보장하는 종합 자동차 보험",
    price: "월 50,000원부터",
    features: ["24/7 긴급출동", "온라인 청구", "할인 혜택"],
    popular: true,
  },
  {
    title: "건강 보험",
    description: "의료비를 걱정하지 않고 건강한 삶을 누리세요",
    price: "월 80,000원부터",
    features: ["전국 병원 네트워크", "무제한 상담", "예방접종 지원"],
    popular: false,
  },
  {
    title: "생명 보험",
    description: "가족의 미래를 안전하게 보장하는 종신 생명 보험",
    price: "월 100,000원부터",
    features: ["저축형 보험", "세제 혜택", "유연한 납입"],
    popular: false,
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            보험 상품
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            여러분의 필요에 맞는 최적의 보험 상품을 선택하세요
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className={`relative flex flex-col ${product.popular ? "border-primary border-2 shadow-lg" : ""}`}>
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary">인기 상품</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-6">{product.price}</div>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={product.popular ? "default" : "outline"}>
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


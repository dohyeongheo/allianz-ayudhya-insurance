import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <Card className="border-0 bg-transparent text-primary-foreground">
          <CardContent className="flex flex-col items-center justify-center space-y-6 text-center p-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              지금 바로 시작하세요
            </h2>
            <p className="max-w-[600px] text-lg md:text-xl opacity-90">
              무료 견적을 받아보고, 최적의 보험 상품을 찾아보세요.
              <br />
              몇 분 안에 비교하고 선택할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100 font-semibold">
                무료 견적 받기
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold">
                상담 신청하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


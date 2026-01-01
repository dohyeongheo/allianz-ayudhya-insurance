import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export function TrustpilotSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <Card className="p-8 md:p-12 rounded-xl border-2 bg-white shadow-lg max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Trustpilot 평점</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-primary">4.9</span>
                <span className="text-2xl md:text-3xl font-semibold text-muted-foreground">/5점</span>
              </div>
              <p className="text-lg font-semibold text-foreground mt-2">만족도</p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">500K+</div>
                <div className="text-muted-foreground">고객 리뷰</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">98%</div>
                <div className="text-muted-foreground">추천율</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}


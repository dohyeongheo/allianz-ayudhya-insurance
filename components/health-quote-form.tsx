"use client";

import { CarQuoteForm } from "@/components/car-quote-form";

export function HealthQuoteForm() {
  return (
    <section id="quote-form" className="py-20 bg-white scroll-mt-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Allianz Ayudhya <span className="text-primary">เช็คเบี้ยประกัน</span> (보험료 확인)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Allianz Ayudhya의 <span className="font-semibold">ประกันสุขภาพ (건강 보험)</span> 및
            <span className="font-semibold"> ประกันมะเร็ง (암 보험)</span> 보험료를
            <br />
            간단한 정보만 입력하시면 즉시 확인하실 수 있습니다.
          </p>
        </div>
        <CarQuoteForm />
      </div>
    </section>
  );
}


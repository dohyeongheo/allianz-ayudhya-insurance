import { Globe, Shield, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white mt-auto">
      <div className="container px-4 md:px-6">
        {/* 상단: OIC 인증 및 글로벌 네트워크 */}
        <div className="py-12 border-b">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* OIC 인증 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-lg text-foreground mb-2 font-heading">
                  태국 보험 위원회 (OIC) 인증
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Allianz Ayudhya는 태국 보험 위원회로부터 인증받은 신뢰할 수 있는 보험사입니다.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">정식 인증 보험사</span>
                </div>
              </div>
            </div>

            {/* 글로벌 네트워크 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-12 h-12 text-accent" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-lg text-foreground mb-2 font-heading">
                  글로벌 네트워크
                </h3>
                <div className="mb-3">
                  <div className="text-3xl font-bold text-primary mb-1">70개국 이상</div>
                  <p className="text-sm text-muted-foreground">
                    전 세계에 진출한 Allianz 그룹의 강력한 네트워크
                  </p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Globe className="w-4 h-4 text-accent" />
                  <span className="text-xs text-muted-foreground">세계 최대 보험 그룹 중 하나</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 링크 및 저작권 */}
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-6">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Allianz Ayudhya. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">이용약관</a>
            <a href="#" className="hover:text-primary transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-primary transition-colors">고객센터</a>
            <a href="#" className="hover:text-primary transition-colors">OIC 공지사항</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

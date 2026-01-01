# 보험 랜딩 페이지

Roojai.com 스타일의 현대적인 보험 랜딩 페이지 프로젝트입니다.

## 기술 스택

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Package Manager**: npm

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드가 완료되면 `npm start`로 프로덕션 서버를 실행할 수 있습니다.

## 프로젝트 구조

```
Insurance/
├── app/                    # Next.js App Router 디렉토리
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── globals.css         # 전역 스타일
├── components/             # 재사용 가능한 컴포넌트
│   ├── ui/                 # Shadcn UI 컴포넌트
│   ├── header.tsx          # 헤더 컴포넌트
│   ├── hero.tsx            # 히어로 섹션
│   ├── features.tsx        # 특징 섹션
│   ├── products.tsx        # 보험 상품 섹션
│   ├── cta-section.tsx     # CTA 섹션
│   └── footer.tsx          # 푸터 컴포넌트
├── lib/                    # 유틸리티 함수
├── public/                 # 정적 파일
└── ...                     # 설정 파일들
```

## 주요 기능

- **Roojai 스타일 디자인**: 깔끔하고 모던한 랜딩 페이지
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **Shadcn UI 컴포넌트**: 재사용 가능한 고품질 UI 컴포넌트
- **섹션 구성**:
  - 헤더 (네비게이션)
  - 히어로 섹션 (메인 메시지 + CTA)
  - 특징 섹션 (서비스 장점)
  - 보험 상품 섹션 (상품 카드)
  - CTA 섹션 (행동 유도)
  - 푸터

## 라이선스

이 프로젝트는 비공개 프로젝트입니다.


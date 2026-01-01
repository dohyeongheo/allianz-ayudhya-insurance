# Sentry 에러 트래킹 설정 가이드

이 프로젝트는 Sentry를 사용하여 에러 트래킹 및 모니터링을 수행합니다.

## 설정 단계

### 1. 환경 변수 설정

`.env.local.example` 파일을 참고하여 `.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```bash
# 필수 변수
NEXT_PUBLIC_SENTRY_DSN=https://08f5f33d6e11e7651f2c4d64fec4a9c3@o4510612747845633.ingest.us.sentry.io/4510632944599040
SENTRY_ORG=personal-4vx
SENTRY_PROJECT=allianz-ayudhya-insurance

# 선택 변수 (Source Maps 업로드용)
SENTRY_AUTH_TOKEN=your-auth-token-here
```

### 2. Sentry Auth Token 발급

Source Maps를 업로드하려면 Sentry Auth Token이 필요합니다:

1. [Sentry Auth Tokens 페이지](https://us.sentry.io/settings/account/api/auth-tokens/)로 이동
2. "Create New Token" 클릭
3. 다음 권한 선택:
   - `project:releases`
   - `org:read`
4. 생성된 토큰을 `.env.local`의 `SENTRY_AUTH_TOKEN`에 추가

### 3. Sentry 프로젝트 정보

- **Organization**: personal-4vx
- **Project**: allianz-ayudhya-insurance
- **DSN**: `https://08f5f33d6e11e7651f2c4d64fec4a9c3@o4510612747845633.ingest.us.sentry.io/4510632944599040`
- **Dashboard**: https://us.sentry.io/organizations/personal-4vx/projects/allianz-ayudhya-insurance/

## 개발 환경

개발 환경(`NODE_ENV=development`)에서는 Sentry 이벤트가 전송되지 않습니다.
프로덕션 빌드에서만 에러가 Sentry로 전송됩니다.

## 빌드 및 배포

### 로컬 빌드

```bash
npm run build
```

### 프로덕션 빌드

Source Maps를 업로드하려면 환경 변수가 올바르게 설정되어 있어야 합니다:

```bash
# 환경 변수 설정 확인
cat .env.local

# 빌드 (Source Maps 자동 업로드)
npm run build
```

## 에러 테스트

프로덕션 빌드에서 에러를 테스트하려면:

1. 프로덕션 빌드 실행:

   ```bash
   npm run build
   npm start
   ```

2. 테스트 에러 발생 페이지 생성 (예: `/test-error`):

   ```typescript
   // app/test-error/page.tsx
   export default function TestError() {
     throw new Error("Sentry 테스트 에러");
   }
   ```

3. Sentry 대시보드에서 에러 확인:
   https://us.sentry.io/organizations/personal-4vx/projects/allianz-ayudhya-insurance/issues/

## 주요 기능

### Client-side 에러 트래킹

- 브라우저에서 발생하는 JavaScript 에러 자동 캡처
- React 에러 경계(Error Boundary) 지원
- Session Replay 통합

### Server-side 에러 트래킹

- 서버 컴포넌트 및 API 라우트 에러 캡처
- Next.js Middleware 에러 캡처

### Performance Monitoring

- 트랜잭션 추적
- 성능 메트릭 수집

### Source Maps

- 프로덕션 빌드에서도 읽기 쉬운 스택 트레이스
- 자동 업로드 (Sentry Auth Token 필요)

## 설정 파일

- `sentry.client.config.ts`: 클라이언트 사이드 설정
- `sentry.server.config.ts`: 서버 사이드 설정
- `sentry.edge.config.ts`: Edge Runtime 설정 (Middleware 등)
- `next.config.js`: Sentry Webpack Plugin 설정

## 참고 자료

- [Sentry Next.js 문서](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Dashboard](https://us.sentry.io/organizations/personal-4vx/projects/allianz-ayudhya-insurance/)

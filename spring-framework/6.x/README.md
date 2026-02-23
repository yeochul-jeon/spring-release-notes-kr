# Spring Framework 6.x 시리즈

Spring Framework 6은 Jakarta EE로의 전환과 AOT(Ahead-of-Time) 컴파일 지원을 핵심으로 하는 대격변 버전입니다.

---

## 핵심 테마

- **Jakarta EE 전환**: `javax.*` → `jakarta.*` 패키지 네임스페이스 변경
- **Java 17 기반**: 최소 요구 Java 버전을 17로 상향
- **AOT 컴파일**: GraalVM 네이티브 이미지 지원을 위한 AOT 처리 엔진
- **HTTP Interface Client**: 선언적 HTTP 클라이언트 지원
- **관찰 가능성(Observability)**: Micrometer 기반 관찰 가능성 통합

---

## 버전 목록

| 버전 | 릴리즈 | 주요 내용 |
|------|--------|----------|
| [6.0](6.0.md) | 2022-11 | Jakarta EE 전환, AOT 컴파일, Java 17 기반 |
| [6.1](6.1.md) | 2023-11 | RestClient 도입, 관찰 가능성 강화 |
| [6.2](6.2.md) | 2024-11 | 가상 스레드 개선, 성능 최적화 |

---

## 요구사항

- **Java**: 17+
- **Jakarta EE**: 9+
- **Servlet API**: 5.0+ (Tomcat 10+, Jetty 11+)

> **이전 버전과의 차이:** Spring 5.x까지는 `javax.*` 패키지와 Java 8을 사용했지만,
> 6.x부터는 `jakarta.*` 패키지와 Java 17이 필수입니다. 이는 호환되지 않는 변경이므로
> [5.x → 6.x 마이그레이션 가이드](../../migration-guides/spring-framework-5to6.md)를 참고하세요.

---

## 관련 링크
- [Spring Framework 전체 버전 히스토리](../README.md)
- [5.x → 6.x 마이그레이션 가이드](../../migration-guides/spring-framework-5to6.md)
- [6.x → 7.x 마이그레이션 가이드](../../migration-guides/spring-framework-6to7.md)
- [Spring Boot 3.x](../../spring-boot/3.x/) (Spring Framework 6 기반)

# Spring Framework 5.x 시리즈

Spring Framework 5는 리액티브 프로그래밍(Reactive Programming)을 핵심으로 도입한 혁신적인 버전입니다.

---

## 핵심 테마

- **리액티브 프로그래밍**: Spring WebFlux를 통한 비동기/논블로킹 웹 프레임워크 도입
- **Kotlin 공식 지원**: Kotlin 언어를 일급 시민(first-class citizen)으로 지원
- **Java 8 기반**: 람다, 스트림, Optional 등 Java 8 API 적극 활용
- **JUnit 5 지원**: 최신 테스트 프레임워크 통합
- **함수형 엔드포인트**: WebFlux에서 함수형 스타일의 라우터 정의

---

## 버전 목록

| 버전 | 릴리즈 | 주요 내용 |
|------|--------|----------|
| [5.0](5.0.md) | 2017-09 | WebFlux, Kotlin 지원, Java 8 기반 |
| [5.1](5.1.md) | 2018-09 | 함수형 엔드포인트 개선, Bean 정의 DSL |
| [5.2](5.2.md) | 2019-09 | RSocket 지원, 코루틴(Coroutine) 지원 |
| [5.3](5.3.md) | 2020-10 | Java 15 지원, 성능 개선 (마지막 5.x) |

---

## 요구사항

- **Java**: 8+ (5.3은 Java 15까지 지원)
- **Servlet API**: 3.1+
- **Java EE**: 7+ (`javax.*` 패키지)

> **참고:** 5.x 시리즈는 2024년 8월 OSS 지원이 종료되었습니다(EOL).
> 새로운 프로젝트에서는 6.x 이상을 사용하세요.

---

## 관련 링크
- [Spring Framework 전체 버전 히스토리](../README.md)
- [4.x → 5.x 마이그레이션 가이드](../../migration-guides/spring-framework-4to5.md)
- [5.x → 6.x 마이그레이션 가이드](../../migration-guides/spring-framework-5to6.md)
- [Spring Boot 2.x](../../spring-boot/2.x/) (Spring Framework 5 기반)

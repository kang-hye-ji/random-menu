/**
 * https://bun.sh/docs/typescript
 * tsconfig에 bun-type을 위해 types 옵션을 지정하게 되면 글로벌 타입 정의를 무시하게 된다.
 * 이에 따라 DOM 글로벌 타입을 추가하기 위해 아래 triple-slash 지시어를 추가해줘야 한다.
 * */
/// <reference lib="dom" />
/// reference lib="dom.iterable" />
export * from './geolocation'
export * from './generator'

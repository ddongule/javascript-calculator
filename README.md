<h2 align="middle">level1 - 자바스크립트 계산기</h2>
<p align="middle">[복습] 자바스크립트 계산기로 익혀보는 프론트엔드 테스트</p>
<p align="middle"><a href="https://github.com/woowacourse/javascript-calculator/pull/9">👉 해당 PR 바로가기</a></p>
<p align="middle"><a href="https://github.surf/HyuuunjuKim/javascript-calculator/tree/HyuuunjuKim">👉 해당 Code Preview 바로가기</a></p>

<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 🎉 계산기 preview

### 전체 preview

- 사칙 연산: `10 + 3`
- All Clear: `AC`
- 연속 연산: `((7 * 8) - 6) / 5`
<div align="middle">
  <img src="https://user-images.githubusercontent.com/26598561/113540355-f6de1e00-961a-11eb-9af5-a13c5335bfe9.gif" width="300">
</div>

### 연속 연산

- `(12 + 3) * 2`
<div align="middle">
  <img src="https://user-images.githubusercontent.com/26598561/113540056-3f490c00-961a-11eb-8502-0e2c432fe695.gif" width="300">
</div>

### 예외 처리

- 0으로 나눌 때
<div align="middle">
  <img src="https://user-images.githubusercontent.com/26598561/113541666-a74d2180-961d-11eb-9202-a6d7a346e338.gif" width="300">
</div>

## 🧮 주어진 기능 요구사항

- [x] 2개의 숫자에 대해 덧셈이 가능하다.
- [x] 2개의 숫자에 대해 뺄셈이 가능하다.
- [x] 2개의 숫자에 대해 곱셈이 가능하다.
- [x] 2개의 숫자에 대해 나눗셈이 가능하다.
- [x] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [x] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.

## ✨ 추가한 기능

- [x] 2개의 숫자의 연속 사칙 연산이 가능하다.

## 🌊 코드의 흐름

1. 유저가 숫자를 누른다.
   1.1 숫자가 TemporaryNumbers에 저장된다.
   1.2 TemporaryNumbers에 저장된 숫자 중 마지막 3개의 숫자를 join한다.
   1.3 1.2의 숫자를 유저에게 보여준다.(displayNumber)

2. 유저가 연산자를 누른다.
   2.1 유저가 누른 연산자를 operator에 저장한다.
   2.2 1.2을 storedNumber에 저장한다. (첫 번째 숫자)
   2.3 TemporaryNumbers를 reset한다.

3. 유저가 숫자를 누른다.
   3.1 숫자가 TemporaryNumbers에 저장된다.
   3.2 TemporaryNumbers에 저장된 숫자 중 마지막 3개의 숫자를 join한다.
   3.3 3.2의 숫자를 유저에게 보여준다.(displayNumber)

   3.4 storedNumber와 operator, displayNumber를 연산한다.
   3.5 3.4에서 연산한 결과를 유저에게 보여준다.(displayNumber)
   3.5 displayNumber를 storedNumber에 저장한다.

번외) 예외처리

1. 0으로 나눌 때
2. 유저가 =을 연속적으로 누를 때

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-calculator/blob/master/LICENSE) licensed.

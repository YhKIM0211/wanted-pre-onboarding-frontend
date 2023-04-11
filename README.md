## wanted-pre-onboarding-frontend
원티드 프리온보딩 선발과제입니다.
#### [배포 링크](https://ornate-scone-594fec.netlify.app/)
## 구현 기능
* user input 유효성검사
* jwt token 기반 사용자 인증
* 로그인 여부에 따른  페이지 접근제한, 리다이렉트
* todoList의 CRUD (새로고침 후 내용과 토글 유지)
## 실행 방법
```
npm install 
npm start
```
## 사용한 라이브러리
##### react with CRA, react-router-dom, axios, styled-components

## 화면 구성, 폴더 구성
```
/  : start 화면
/signin : 로그인 화면
/signup : 회원가입 화면
/todo : todoList 화면
```
```
|-- public
|-- src
    |-- api
    |-- component
    |-- page
    파일 --Route.js, styles.js
```
## 과제구현 기준
>[가이드 라인](https://github.com/walking-sunset/selection-task)
## 데모
![React App - Chrome 2023-04-11 23-44-09 - Trim](https://user-images.githubusercontent.com/74903774/231228662-8202838a-2ba6-4b63-b7c9-dbbbd81f3d19.gif)

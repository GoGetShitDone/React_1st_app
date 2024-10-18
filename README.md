# 🐻 Ullala의 첫 React 앱 (feat, 영화)

빠르게 Java script와 React를 익히기 위해 시작한 이 프로젝트는 YTS API에서 영화 데이터를 가져와 표시하는 React 기반 웹 애플리케이션입니다. 
반응형 그리드 레이아웃, 개별 영화 카드에 상세 정보 표시, 깔끔한 UI 디자인을 특징으로 합니다.

## 주요 기능

- YTS API에서 영화 데이터 가져오기
- 반응형 그리드 레이아웃으로 영화 목록 표시
- 각 영화의 제목, 년도, 요약, 장르 등 상세 정보 표시
- React Router를 사용한 페이지 간 네비게이션
- 컴포넌트별 스타일링을 위한 CSS 모듈 사용
- 앱 전체 스타일을 위한 글로벌 CSS 파일 포함

## 배포 링크

https://gogetshitdone.github.io/React_1st_app/


## 프로젝트 구조

```
src/
├── components/
│   ├── Movie.js
│   └── Movie.module.css
├── routes/
│   ├── Detail.js
│   ├── Home.js
│   └── Home.module.css
├── App.js
├── global.css
└── index.js
```

- `components/`: 재사용 가능한 컴포넌트 포함
- `routes/`: 페이지 컴포넌트 포함
- `App.js`: 라우팅 설정을 담당하는 메인 컴포넌트
- `global.css`: 전체 애플리케이션에 적용되는 글로벌 스타일
- `index.js`: React 애플리케이션의 진입점

## 의존성

- React
- React Router DOM
- PropTypes

## API

이 프로젝트는 YTS API를 사용하여 영화 데이터를 가져옵니다. 사용된 API 엔드포인트는 다음과 같습니다:

```
https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
```
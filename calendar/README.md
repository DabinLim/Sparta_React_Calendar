# 일정관리 캘린더


> ### 일정 등록 및 완료 기능으로 일정관리를 할 수 있다.
>
> <br>

## Team

- **임다빈** : 개인 프로젝트

## Environment

- **React.js**
- **JavaScript**
- **Firebase**


## Description

- 모든 페이지는 반응형, 모바일, 태블릿, 웹에서 화면이 깨지지 않도록 구현하였다.
- 리덕스 활용을 연습하기 위한 첫 리액트 프로젝트이다.
- 일정 작성, 메인페이지 렌더링 시에는 스피너를 추가하여 데이터가 바뀌는 모습을 유저가 볼 수 없도록 처리하였다.
- moment.js를 이용한 달력 알고리즘을 활용하였다.(구글에 다양한 알고리즘이 있다.)


### 1. 메인 페이지

- 메인 페이지는 이번달 달력으로 렌더링 된다.
- 오늘 날짜는 파란색 동그라미로 표시된다.
- 상단의 화살표 버튼을 누르면 지난달, 다음달로 이동한다.
- 우측 상단의 홈버튼을 누르면 이번달로 돌아온다.
- 완료된 일정만 표시하기 버튼을 누르면 완료된 일정만 표시되며 버튼이 모든 일정 표시하기로 바뀐다.
- 우측 하단의 버튼은 플로팅 버튼이며 클릭하면 글 작성 페이지로 이동한다.
- 각 날짜마다 over-flow:auto 속성을 주어 내용이 넘치면 스크롤 할 수 있다.
- 각 날짜를 클릭하면 달력 아래에 오늘 일정이 렌더링 되며 자동으로 스크롤 된다.

 <img src="https://user-images.githubusercontent.com/77574867/113306882-821b9300-933f-11eb-81f3-c4f5d41e86ed.png" width="600" height="400">
 <img src="https://user-images.githubusercontent.com/77574867/113306820-729c4a00-933f-11eb-8d4e-0029d9a69a65.png" width="300" height="400">
 <img src="https://user-images.githubusercontent.com/77574867/113306959-95c6f980-933f-11eb-996b-7f9375132590.png" width="300" height="400">
 <img src="https://user-images.githubusercontent.com/77574867/113306837-74fea400-933f-11eb-8a8c-6a84d7cc29d4.png" width="300" height="400">

### 2. 일정 페이지

- 모든 일정 모아보기를 클릭하면 등록된 모든 일정이 시간순으로 정렬되어 표시된다.
- 특정 날짜를 클릭하면 해당하는 날짜에 등록된 일정이 시간순으로 정렬되어 표시된다.
- 일정이 표시된 카드에서는 완료,삭제를 할 수 있으며 완료를 하게 되면 카드의 색이 바뀐다.


<img src="https://user-images.githubusercontent.com/77574867/113306811-70d28680-933f-11eb-85d3-df5231bd6101.png" width="300" height="400">
<img src="https://user-images.githubusercontent.com/77574867/113306829-73cd7700-933f-11eb-9bec-b10eda612b21.png" width="300" height="400">

### 3. 일정 작성 페이지

- 오늘 일정 추가하기를 통해 일정을 작성하면 시간만 선택을 하여 일정을 작성할 수 있다.
- 플로팅 버튼을 통해 일정을 추가하면 일정의 날짜도 선택해야 한다.
- 일정을 추가하면 시간순으로 정렬되어 추가되며 데이터가 바뀌는 모습을 유저가 볼 수 없도록 스피너를 사용하였다.

<img src="https://user-images.githubusercontent.com/77574867/113306833-74660d80-933f-11eb-8ed3-a65f9ad203df.png" width="300" height="400">
<img src="https://user-images.githubusercontent.com/77574867/113306834-74fea400-933f-11eb-9119-cb15c61c1293.png" width="300" height="400">



### Firebase

- Calendar collection : 완료여부, 작성 날짜(년,월,일,시,분,초), 일정 제목, 일정 내용




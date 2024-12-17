# Steam-Daily-Curation

-모바일 앱 개발 기말과제 소스코드
-매일 무작위 스팀 게임 할인을 제공하는 리액트 네이티브로 구현된 가상의 서비스입니다.

<hr>

## 구조

src:
\│  App.js
\│  datas.js
\│  images.js
\│  theme.js
\│  
\├─Contents
\│      gameGainContainer.js
\│      genreSelectContainer.js
\│      resultContainer.js
\│      
\├─DayBox
\│      dayBox.js
\│      dayBoxList.js
\│      gainPopup.js
\│      resultPopUp.js
\│      
\└─Screen
        loginScreen.js
        mainScreen.js

## 기능

### [1] src/App.js

-Steam Daily Curation의 시작 지점
-사용하는 폰트 로딩
-저장된 데이터 로딩
-로그인 스크린으로 이동

### [2] src/datas.js

-로컬 플레이어 데이터 관리
-주간 게임 뽑기 결과 데이터 관리
-게임 장르 데이터 관리
-게임 타이틀 데이터 관리
-게임 타이틀 이미지 불러오기

### [3] src/images.js

-UI에서 사용되는 이미지 불러오기

### [4] src/theme.js

-UI에 사용되는 색 관리

### [5] src/Screen/loginScreen.js

-로그인 기능 제공, 로그인 성공 시 Navigation 기능으로 MainScreen으로 전환
-스팀 회원가입 사이트와 연결되는 Sign-up 버튼 제공
-스팀 고객센터 사이트와 연결되는 E-mail 버튼 제공

### [6] src/Screen/mainScreen.js

-현재 플레이어의 상태에 따라서, 장르 선택 / 게임 뽑기 / 결과 컴포넌트를 표시
-주간 뽑기 기록 컴포넌트인 dayBoxList를 표시

### [7] src/DayBox/dayBox.js

-주간 뽑기 기록의 한 날짜에 해당하는 컴포넌트
-날짜의 뽑기 정보를 받아 표시
-터치/클릭 상호작용을 통해 세부 내용 팝업창을 Modal을 통해 현재 화면 위에 표시

### [8] src/DayBox/dayBoxList.js

-map을 활용하여 주간 뽑기 기록들을 DayBox 컴포넌트로 생성 및 매핑 후 스크롤 뷰로 표시

### [9] src/DayBox/gainPopup.js

-게임 뽑기 화면 중 뽑기 버튼과 상호작용 후 표시되는 뽑기 애니메이션을 보여주는 팝업 화면
-gif 이미지를 가져와 화면에 표시

### [10] src/DayBox/resultPopup.js

-dayBox 컴포넌트와 상호작용 시 표시되는 팝업 화면
-게임 타이틀 이미지와 할인율을 확인 가능
-구매하러 가기 버튼을 통해 해당 게임의 스팀 구매 페이지로 이동

### [11] src/Contents/genreSelectContainer.js

-메인 화면에 표시되는 장르 선택 컴포넌트
-무작위로 3가지 장르 제시
-제시되는 3가지 장르 중 하나를 선택 시 게임 뽑기 컴포넌트 표시

### [12] src/Contents/gameGainContainer.js

-메인 화면에 표시되는 게임 뽑기 컴포넌트
-게임 뽑기 버튼을 통해 선택한 장르 중 무작위 하나의 게임 데이터 선택
-게임 뽑기 진행 시 게임을 뽑는 뽑기 기계의 GIF 이미지를 표시하는 gainPopup 표시
-일정 시간이 지난 후 뽑기 결과를 보여주는 resultContainer 컴포넌트를 표시

### [13] src/Contents/resultContainer.js

-메인 화면에 표시되는 결과 컴포넌트
-결과 화면 표시, 뽑기 결과 데이터를 받아 결과 팝업 및 결과 화면에 표시
-결과 화면에 제시되는 구매하러 가기 버튼을 통해 스팀 구매 페이지로 이동 가능

# 나만의 웹페이지 프로젝트 - 드라마 소개  
<img src="https://github.com/Happy-Lotus/webProject/blob/main/img/main.jpg" width="100%">
2022-1 웹프로그래밍 - HTML. CSS. JavaScript를 활용한 개인 프로젝트 

## 프로젝트 소개

드라마 "Sherlock"을 소개하는 웹페이지로 등장인물과 시리즈 별 추천하는 에피소드를 설명합니다. 

## 진행 기간
2022.05



## 기술
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat square&logo=HTML5&logoColor=white"/></a>  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/> 

문서 객체 모델, `jQuery` 라이브러리와 플러그인을 사용하고`HTML5`, `CSS3`, `JavaScript` 를 이용하여 반응형 웹을 구현하였습니다. 



## 기능 
- 전체 페이지 (Intro 페이지 제외)

	- CSS3 사용한 중앙정렬 : width 속성과 margin 속성을 활용하여 중앙정렬함
 	- CSS3 사용한 수평정렬 : float 속성과 width 속성을 활용
  	- 반응형 웹 구현 : 미디어쿼리를 사용. 상단 메뉴는 display를 none으로 설정하여 사라지게 하고 사이드메뉴는 맨 아래에 위치시킴 		 		 
 - Intro

	- jQuery 플러그인과 CSS3를 사용해 색 변경 : 12시간마다 Intro 페이지의 배경색과 버튼색이 변경되도록 설정
   	 0 ~ 12시에는 버튼과 배경색에 각각 파란색과 흰색으로 설정되고 12시 ~ 24시에는 빨간색 검정색으로 설정됨
   	- jQuery 라이브러리를 활용한 fadein, fadeout 구현 :  버튼의 fadein, fadeout 구현
 	- JavaScript를 이용해 프롬포트 사용 : 프롬포트를 이용해 답을 입력받도록 설정<br> 	 	 	
**<img src="https://github.com/Happy-Lotus/webProject/blob/main/img/intro.gif" width="80%">**
<br>

- Main

	- CSS3 hover 사용 : 이미지에 적용하여 동적인 효과를 줌
 	- 오디오 적용 : 배경음악을 위해 오디오 적용. autoplay, loop 요소를 적용하여 무한반복, 자동재생됨	 
**<img src="https://github.com/Happy-Lotus/webProject/blob/main/img/main2.gif" width="80%">**
<br>

- Series
 
	- jQuery 라이브러리를 사용하여 show, hide 구현. Season1,2,3,4 이미지를 클릭하면 추천 섹션의 글들이 보여짐. 이후 섹션 영역을 클릭하면 모든 글들이 숨겨짐
**<img src="https://github.com/Happy-Lotus/webProject/blob/main/img/series.gif" width="80%">**		
			

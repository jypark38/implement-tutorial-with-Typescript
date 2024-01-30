# implement-study

https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners/

HTML
CSS
TypeScript

## memo

- NodeListOf

  - DOM 요소의 목록을 나타내는 타입이다.
  - querySelectorAll 메서드로 얻은 NodeList의 타입으로 사용할 수 있다.

- DOMContentLoaded & load Event

  - The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets,
    images, and subframes to finish loading.

    - 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생합니다. 이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않습니다.

  - The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
    - HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 이미지, 스타일시트 같은 외부 자원도 모두 불러오는 것이 끝났을 때 발생합니다.

- pageYOffSet

  - 현재 문서가 수직방향으로 스크롤된 픽셀 수

- Element.getBoundingClientRect

  - Element의 크기와 뷰포트에 상대적인 위치를 제공하는 DOMRect 객체를 반환한다.

- offsetTop
  - 요소의 top 을 나타내는 숫자를 반환

# 어떤 서비스인가요?
Google Map API 를 활용해 현재 위치를 기반으로 주변 식당을 랜덤으로 추천해줍니다.

https://github.com/kang-hye-ji/random-menu/assets/57096771/fe9f7e18-5f99-4a86-8137-784b4342f507



<br/>
<br/>

# 기능 상세
### 1. 음식 카테고리 추천
한식, 일식, 중식 등 음식 카테고리를 랜덤으로 추천해줍니다.<br/>
나아가 해당 카테고리의 주변 식당 5군데를 추천하고 이 중에서도 1군데를 랜덤 뽑기 할 수 있습니다.
<br/><br/>
### 2. 식당 추천
주변 식당 5군데를 랜덤으로 추천해줍니다. 이 중에 1군데만 랜덤으로 뽑을 수 있습니다.

<br/>
<br/>

# API
### `Geolocation API`
navigator에 내장된 Geolocation API 를 활용해 현재 위치와 위치 권한 설정 여부를 조회합니다.
<br/><br/>
### `Google Map API`
Google Map API 의 PlaceService 를 통해 특정 위치 기준 반경 1km 이내의 주변 식당을 조회합니다.<br/>
현재 오픈된 식당을 조회할 수 있으며, 구글 평점, 주소, 식당 이름 등의 상세 내역을 확인할 수 있습니다.

<br/><br/>

# 모노레포 구성
- `random-menu` app과 `common-ui`, `common-utils` package 로 구성되어 있습니다.
- `common-ui`와 `common-utils`에는 다른 app 이 추가될 경우에도 공통으로 사용 가능한 UI 및 util 을 추가했습니다.
- `SWRProvider`나 `RecoilProvider`처럼 `random-menu` 앱에 한정된 컴포넌트는 `random-menu`의 `/component/common` 디렉토리 하위에 추가했습니다.
- 화면별 비즈니스 성격의 컴포넌트들은 `component` 내 해당 페이지 관련 디렉토리에 추가했습니다.

<br/><br/>

# 스토어 구성
- Map, Restaurant 등 성격별로 store 디렉토리 내부에 스토어를 추가했습니다.
- `RestaurantStore.selectedRestaurantsAtom` 처럼 스토어 전체를 import 하여 접근 하도록 공통화했습니다. 스토어가 많아질 경우 각 상태가 어떤 스토어로 부터 파생되었는지 헷갈리지 않도록 명시하기 위함입니다.

<br/><br/>
# 사용 기술
`Next.js`, `TypeScript`, `Recoil`, `SWR`, `TurboRepo`, `ESLint`, `Prettier`, `StyleLint`, `Husky`


title: "사이트 구현 과정 - 1편",
summary: "기본적으로 Github Page를 이용해 호스팅 되었으며, React를 이용해 개발하였다. 이 글에서는 Github Page 호스팅을 위해 해두었던 설정들, CRA를 통한 프로젝트 생성, gh-pages 설치와 브랜치 설정에 관해서...",
date: "2020-03-16 14:45",
category: "About",
series: "About",
thumbnail: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"

---

이전 포스트에서 말했듯이 이 사이트는 **Github Page**를 이용해서 호스팅 되었다. 단순히 포스팅 하는 용도이기 때문에 굳이 다른 호스팅 업체를 사용할 필요가 없어서 Github Page를 선택했다. Github Page에 대해서 먼저 기록 해본다.

## Github Page

y[2MsN8gpT6jY]

Github Page는 당신을 위한 웹 사이트를 **Github Repository**로 부터 호스팅 해준다. 따라서 편집하고, **Git**을 통해 버전 컨트롤과 동시에 `push`를 통한 실시간 수정이 장점이다. 도메인 또한 제공되며 커스텀 도메인도 설정할 수 있다.

```javascript
https://username.github.io
/*
위 도메인은 저장소 명을 "username.github.io"으로
설정시 지정된다. 단, 이 경우에는 master 브랜치를 이용해야 한다.
*/

https://username.github.io/repository
//위 도메인은 기타 저장소에 깃헙 페이지를 만들 때 제공된다.

CNAME 파일을 이용해서 커스텀 도메인을 이용할 수도 있다.
```

**Jekyll**을 제공하기 때문에 몇번의 클릭으로 금방 사이트를 제작할 수 있다. 하지만 커스터마이징을 위해서 [React](https://reactjs.org/)를 이용해 직접 구현하였다.

---

## 프로젝트 설정

이 프로젝트는 master 브랜치를 이용하는 경우에 해당하며, 커스텀 도메인을 이용한다.

#### CRA 이용한 프로젝트 생성

[Creat-React-App](https://create-react-app.dev)을 이용해 프로젝트를 만들어준다.

```batch
npx create-react-app my-app [OPTIONS]
```

#### gh-pages 설치

이후 **gh-pages**를 설치한다. 이것은 파일들을 Github의 **gh-pages 브랜치(혹은 다른 브랜치)**에 올린다.

```batch
npm install gh-pages --save-dev
```

원활한 사용을 위해서 `package.json`을 수정해준다.

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -b master -d build",
  "eject": "react-scripts eject"
}

위 deploy를 보면 -b master를 통해 브랜치를 마스터로 지정하는 것을 확인할 수 있다.
지정하지 않으면 gh-pages 브랜치에 올리게 된다.
```

이제 간단한 명령어를 통해서 빌드 후 `master` 브랜치에 **build** 폴더를 올릴 수 있다.

```batch
npm run deploy
```

#### 커스텀 도메인 설정

```
레코드 세트 추가

이름          유형  값
---------------------------------
example.com.  A   ***.***.***.***
                  ***.***.***.***
                  ***.***.***.***
                  ***.***.***.***
```

값은 [Github Page Help - 4번 참고](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)해서 설정해준다.

레코드를 추가했다면, 다시 CRA 프로젝트로 돌아온다. `public` 폴더에 `CNAME` 파일을 만든다. 파일의 내용은 다음과 같이 도메인을 적어준다.

```
example.com
```

#### React Router 설정

**React Router**를 사용해서 라우팅을 한다면, [spa-github-pages](https://github.com/rafrex/spa-github-pages) 페이지를 참고해서 `public/index.html`의 수정과 `public/404.html`를 추가 해준다.

#### 브랜치 분리

빌드 된 파일을 올리는 방식이기 때문에 소스 코드를 유지하기 위해 브랜치를 분리하여 관리한다. `master` 브랜치는 빌드 된 파일이 올라가므로 `develop` 브랜치를 따서 이용한다.

```batch
git switch -b develop
git add .
git commit -m "COMMIT MESSAGE"
git push
```

만약 `develop` 브랜치에 `build` 폴더가 올라간다면

```batch
git reset -- build
```

위 명령어를 통해 build가 포함되지 않도록 한다.

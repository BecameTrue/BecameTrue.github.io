title: "RESTful 하게 API를 디자인 한다는 것",
summary: "개발 상식에 관한 질문 중 'RESTful 하게 API를 디자인 한다는 것은 무엇인가?' 라는 질문에 대한 답을 개인적으로 생각해보았다. REST는 Representational State Transfer의 약자로, 해석해보면 '표현 상태 전송' 정도가 적절할 것 같다. API는 Application Programm...",
date: "2020-03-17 18:38",
category: "Development Common Sense",
series: "Development Common Sense"

---

## TL;DR

[REST//Representational State Transfer]​ [API//Application Programming Interface]는 특정 자원의 **순간** 상태를 잘 정제된 형식으로 네트워크를 통해 전송하여, 다른 프로그램이 잘 쓸 수 있게 하는 것이다. 따라서 **RESTful API**는 URI를 통해 자원을 잘 표현하고, HTTP Method를 적절히 사용하여 REST의 규칙을 잘 지켜, 이해하기 쉽고 사용하기 쉽게 디자인 하는 것을 말한다.

---

**REST**ful 하게 API를 디자인 한다는 것이 무엇인가 알아보기 위해서는 먼저 RESTful API가 무엇인지, 왜 나왔는지를 먼저 알아야 할 것이다. 그 다음
어떻게 디자인하는 해야하는 것인지 알아보고, 그것의 특징을 알아보고자 한다.

## REST API

REST는 **Representational State Transfer**의 약자로, 해석해보면 "표현 상태 전송" 정도가 적절할 것 같다. 즉 자원의 상태를 **표현**으로 보고 그것을 전송하는 것으로 볼 수 있는 것 같다. 예를 들어서 서버의 데이터베이스를 생각해보자. 사용자의 정보를 저장하고 있는 데이터베이스라면, 언제든 그 값은 변할 수 있다. 하지만 사용자의 정보에 대해 요청하는 그 순간의 값을 **"표현 상태"**라고 보면 될 것 같다.

참고로 [API//Application Programming Interface]란 무엇일까? API는 한 프로그램이 다른 프로그램을 이용할 때 쓰는 [인터페이스//연결시키기 위한 체계/디자인 정도로 보면 될 것 같다.]라고 보면 될 것 같다.

즉 REST[ful//REST를 REST 답게 사용하고 이해하기 쉽고 사용하기 쉬운] API는, 앞서 설명한 **표현 상태**를 잘 [정제된 형식//JSON 이나 XMl 등의 형식]으로 네트워크를 통해 전송하여, 다른 프로그램이 잘 쓸 수 있게 하는 것이다.

#### REST 구성요소

REST의 구성요소로는 **자원**(Resource)을 의미하는 [URI//통합 자원 식별자(Uniform Resource Identifier)], **행위**(Verb)를 의미하는 [HTTP Method//GET, POST, PUT, DELETE], **표현**[(Representation of Resource)//자원을 JSON, XML 등의 형태로 표현한 것], 이 3 가지가 있는 것 같다.

#### REST API 설계 규칙

**1. URI는 정보의 자원을 표현한다.** (행위가 아닌 자원을 표현하므로 동사보단 명사를 사용한다.)

```
GET /users/csh
```

**2. 자원에 대한 행위는 HTTP Method로 표현한다.** (GET, POST, PUT, DELETE)

```
DELETE /users/csh - delete user 'csh'
```

**3. 슬래시(/)는 계층 관계를 나타낼 때 사용한다.**

**4. URI 마지막에 슬래시(/)를 사용하지 않는다.**

**5. 하이픈 (-)은 URI의 가독성을 높이는데 사용한다.**

**6. 언더바(\_) 혹은 밑줄은 URI에 사용하지 않는다.**

**7. URI는 경로에는 소문자가 적합하다.**

**8. 파일 확장자는 URI에 포함하지 않는다.**

**9. 리소스 간의 관계를 표현하는 방법**

```
/리소스명/리소스 ID/관계가 있는 다른 리소스명
```

#### 특징

RESTful API는 통일된 인터페이스를 가지고, 상태 정보를 따로 저장하고 관리하지 않기 때문에 구현이 단순해진다. 또한 HTTP의 캐싱 기능을 이용할 수 있고, 클라이언트-서버의 의존성이 줄어들며 언어와 플랫폼에 독립적이게 된다.

---

## 참고

[REST API 제대로 알고 사용하기](https://meetup.toast.com/posts/92)

[REST API ?](https://medium.com/@dydrlaks/rest-api-3e424716bab)

[Network - REST란? REST API란? RESTful이란?](https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html)

[REST API와 RESTful API](https://velog.io/@stampid/REST-API%EC%99%80-RESTful-API)

[RESTful API](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/Development_common_sense)
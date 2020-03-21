title: "DevOps가 대체 뭘까",
summary: "조금만 프로그래밍 관련해서 검색을 하다보면 DevOps란 단어를 종종 볼 수 있는데, 대충 감으로만 이해하고 크게 신경쓰지 않다가 그래도 확실히 개념을 잡는 편이 나을 것 같아서 정리해본다. DevOps는 Dev(개발)과 Ops(운영)의 합성어로 ...",
date: "2020-03-18 15:26",
category: "Development Common Sense",
series: "Development Common Sense",
thumbnail: "https://www.mimul.com/static/f6954b1b807311621c3277e1169f542d/1e05d/devops.png"

---

## TL;DR

DevOps는 [Dev//개발 - Development]와 [Ops//운영 - Operations]의 합성어로, 개선 및 새롭고 안정적인 서비스를 빠르게 배포하기 위해 나타났다. [다양한 분야//개발, IT 운영, 품질 엔지니어링, 보안 등]의 전문가들이 서로 **협업**하여 소프트웨어 제품을 **빠른 속도**로 개발 및 배포를 할 수 있도록 지원하는 **개발 환경이나 문화**를 의미한다.

---

프로그래밍 관련해서 검색을 하다보면 종종 DevOps란 단어를 볼 수 있었다. 사실 DevOps를 잘 모르더라도 내용들이 대부분은 이해가 가지만, 그래도 확실히 하는 편이 더 나은 이해를 위해 필요하다 생각되어 정리해보게 되었다. 따라서 이 포스트에서는 DevOps는 무엇인지, 목적에 관해서 알아보려 한다.

## DevOps

![devops](https://www.mimul.com/static/f6954b1b807311621c3277e1169f542d/1e05d/devops.png)

DevOps는 **Dev(개발 - Development)**과 **Ops(운영 - Operations)**의 합성어로, [다양한 분야//개발, IT 운영, 품질 엔지니어링, 보안 등]의 전문가들이 서로 **협업**하여 소프트웨어 제품을 **빠른 속도**로 개발 및 배포를 할 수 있도록 지원하는 **개발 환경이나 문화**를 의미한다.

### 목적

고객들은 항상 새로운 것, 변화와 개선을 원한다. 또 그런게 빠르길 원한다. 빠른 와중에도 제품이 안정적이길 원한다. 그러므로 회사 입장에서는 안정적인 제품을 빠르게 새로운 것이나 개선 사항을 담아 배포해내는 것이 **경쟁력**이 된다. 이로인해 발생한 개념이 **DevOps**라고 할 수 있다.

기존의 개발과 운영이 분리된 구조가 아닌 소프트웨어 개발과 배포에 연관된 전문가들을 하나의 자동화 된 워크 플로우로 통합시켜 해결하고자 한 것이다.

### 어떻게?

DevOps는 어디까지나 문화와 개발 환경이기 때문에, 많은 형태가 존재하지만, 공통적인 것들을 뽑아보면

[협업//Collaboration], [자동화//Automation], [지속적인 통합//Continuous Integration], [지속적인 테스팅//Continuous Testing], [지속적인 전달?//Continuous Delivery], [지속적인 모니터링//Continuous Monitoring] 정도가 있는 것 같다.

`협업` : 소프트웨어 개발과 배포에 연관된 전문가들이 같이 협업

`자동화` : **자동화 툴을 사용**하여 개발과 배포

`지속적인 통합` : 애자일 문화처럼 **자주 작업물들을 통합**시켜나가면서 버그를 신속하게 찾고, 품질 개선

`지속적인 테스팅` : 지속적으로 성능 및 품질 검증

`지속적인 전달` : 프로덕션에 릴리스하기 위한 코드 변경이 **자동으로 빌드, 테스트 및 준비되는 소프트웨어 개발 방식**을 통해 즉시 배포할 수 있는 표준화 된 결과물을 가짐

`지속적인 모니터링` : 안정성을 높이기 위해 배포 후 소프트웨어의 성능 및 가용성을 모니터링

## 참고

[데브옵스 - 위키피디아](https://ko.wikipedia.org/wiki/%EB%8D%B0%EB%B8%8C%EC%98%B5%EC%8A%A4)

[DevOps란 무엇입니까?](https://aws.amazon.com/ko/devops/what-is-devops/)

[What Is DevOps?](https://newrelic.com/devops/what-is-devops)

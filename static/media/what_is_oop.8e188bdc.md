title: "객체 지향 프로그래밍이란 무엇인가",
summary: "개발 상식에 관한 질문 중 '객체 지향 프로그래밍이란 무엇인가' 라는 질문에 대한 답을 개인적으로 생각해보았다. 객체 지향 프로그래밍은 프로그램을, 상호작용 하는 상태와 행위를 가지는 객체들의 집합으로 보는 프로그래밍 패러다임...",
date: "2020-03-16 18:13",
category: "Development Common Sense",
series: "Programming Paradigm",
thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdYhnxCghYwzmLNJWtyk9Zk7tCQz9PIn6OUA&usqp=CAU"

---

## TL;DR

객체 지향 프로그래밍은 프로그램을 상호작용 하는 [객체//상태와 행위를 가지는]들의 집합으로 보는 프로그래밍 패러다임이다. 강한 응집력과 약한 결합력을 지향하며, [캡슐화//변수와 함수를 하나로 묶고 나아가 정보 은닉을 할 수 있는 특성], [추상화//복잡한 시스템을 분리해서 생각할 수 있도록 해주고 클래스의 사용자에게 편리하도록 불필요한 정보를 가리는 특성], [상속//부모 클래스에게서 특성과 기능을 물려 받아 재사용성을 높여주는 특성], [다형성//함수나 객체들이 상황에 따라 다르게 쓰일 수 있도록 하는 특성] - 4 가지의 특성을 가진다.

단, 처리 속도가 상대적으로 느리고 설계시 많은 노력을 필요로 한다.

---

![oop](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdYhnxCghYwzmLNJWtyk9Zk7tCQz9PIn6OUA&usqp=CAU)

**객체 지향 프로그래밍(Object Oriented Programming)**은 말 그대로 **객체**의 개념에 기반한 [프로그래밍 패러다임//프로그래밍 관점으로 볼 수 있다. 함수형 프로그래밍의 경우에는 프로그램을 상태값을 '가지지 않는 함수들의 연속'으로 보듯이]이다. 즉 OOP에서는 프로그램을 상호작용하는 객체들의 집합으로 본다.

정리하자면, [실제 세계//프로그램]를 [사물//객체]들의 상호작용으로 본다. 그렇다면 이런 패러다임은 왜 나왔는지, 특징이 뭐가 있는지, 그로인한 장·단점은 무엇인지 궁금해진다.

---

### 왜 나왔을까?

초기의 [절차적 프로그래밍//입력을 받아 명시된 순서대로 처리한 다음, 결과를 내는 것]의 경우, 조금만 알고리즘이 복잡해져도 [스파게티 코드//결과적으로 유지보수가 어려우며, 가독성이 떨어진다.]가 나오기 쉽다. 또한 중복되는 코드가 약간의 변화에도 중복되는 코드가 많아진다. 이러한 문제점을 해결하기 위해 `상태`와 `행위`를 가지는 **객체** 지향 프로그래밍이 나왔다.

---

### 특징

객체 지향 프로그래밍에는 4가지 특징이 있다. [강한 응집력(Strong Cohesion)//프로그램의 한 요소가 특정 목적을 위해 밀접하게 연관된 기능들이 모여서 구현되어 있고, 지나치게 많은 일을 하지 않으면 그것을 응집력이 높다고 표현한다.]과 [약한 결합력(Weak Coupling)//결합력이 낮다는 것은 한 요소가 다른 요소들과 관계를 크게 맺고 있지 않은 상태를 의미한다.]을 지향한다.

#### 캡슐화(Encapsulation)

**변수와 함수를** 클래스 같은 하나의 단위로 **묶는 것**을 의미한다. 그 단위 내에서 멤버 변수와 함수에 쉽게 접근할 수 있게 되는데, 이때 클래스 내 함수를 통해서만 변수에 접근 가능하게 하여 외부 접근을 막아 [정보 은닉 (Data hiding)//이를 통해 변수와 함수에 대한 접근이 클래스에 의해 통제된다.]이 가능하다.

#### 추상화(Abstraction)

어떤 객체를 사용할 때 고수준의 [메커니즘//사물의 작용 원리나 구조]만 보여주는 것이다. **불필요한 세부 내용은 가리고** 다른 객체와 관련있는 동작만을 보여주는 것이다. 즉 추상화는 클래스를 사용할 사람(개발자)을 위한 것이다.

`예시) 커피 머신은 내부적으로 되게 많은 일을 하지만, 사용자는 그저 버튼만 누르면 된다.`

또한 추상화는 복잡한 시스템을 한 단계, 한 단계 분리할 수 있다.

#### 상속(Inheritance)

자식 클래스가 부모 클래스로부터 **특성과 기능을 물려받는 것**을 말한다. 일부분만 변경하면 될 때나 단지 몇 가지의 기능만을 추가할 때, 상속을 통해 **재사용성을 높일 수 있다.**

또한 부모 클래스가 신뢰성이 충분하다면 물려받은 부분에 대해서는 신뢰성이 충분하다.

상속의 단점이라면, 상속받은 함수의 경우 일반 함수보다 [느리다//직접적이지 않기 때문]는 것, 부모 클래스와 자식 클래스들 간 **결합도**를 높여 부모 클래스의 변화가 자식 클래스들에 변화를 주는 것을 뽑을 수 있을 것 같다.

#### 다형성(Polymorphism)

**"Having multiple forms"**

함수나 객체들이 상황에 따라 다르게 쓰일 수 있는 특성을 말한다.

`의사, 헤어 스타일리스트, 배우에게 "컷!" 이라고 했을 때 일어나는 반응을 생각해본다.`

---

### 객체 지향적 설계 원칙

**SRP**(Single Responsibility Principle - 단일 책임 원칙) : 클래스는 단 하나의 책임을 가져야 하며 클래스를 변경하는 이유는 단 하나의 이유이어야 한다.

**OCP**(Open-Closed Principle - 개방·폐쇄 원칙) : 확장에는 열려 있어야 하고 변경에는 닫혀 있어야 한다.

**LSP**(Liskov Substitution Principle - 리스코프 치환 원칙) : 상위 타입의 객체를 하위 타입의 객체로 치환해도 상위 타입을 사용하는 프로그램은 정상적으로 동작해야 한다.

**ISP**(Interface Segregation Principle - 인터페이스 분리 원칙) : 인터페이스는 그 인터페이스를 사용하는 클라이언트를 기준으로 분리해야 한다.

**DIP**(Dependency Inversion Principle - 의존 역전 원칙) : 고수준 모듈은 저수준 모듈의 구현에 의존해서는 안된다.

---

#### 참고 자료

[OOP: Everything you need to know about Object Oriented Programming](https://medium.com/from-the-scratch/oop-everything-you-need-to-know-about-object-oriented-programming-aee3c18e281b)

[객체 지향 프로그래밍(OOP : Object Oriented Programming) 개념 및 활용 정리](https://velog.io/@cyranocoding/%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8DOOP-Object-Oriented-Programming-%EA%B0%9C%EB%85%90-%EB%B0%8F-%ED%99%9C%EC%9A%A9-%EC%A0%95%EB%A6%AC-igjyooyc6c#%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8Doop%EC%9D%B4%EB%9E%80)

[JaeYeopHan/Interview_Question_for_Beginner/Development_common_sense](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/Development_common_sense)

# 문제 47

### **문제**

> **_반지름으로 생성될 수 있는 Circle이라는 클래스를 정의하십시오. Circle 클래스에는 넓이를 계산할 수 있는 메소드가 있습니다._**

---

### 힌트

> **_메소드를 정의하려면 def methodName(self)를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
class Circle(object):
    def __init__(self, r): # 생성자, 반지름 r을 인스턴스 변수 self.radius에 저장
        self.radius = r

    def area(self): # 넓이를 계산하는 메소드
        return self.radius**2*3.14 # 반지름의 제곱 * 원주율 (3.14)

aCircle = Circle(2) # 반지름이 2인 Circle 객체 생성
print aCircle.area() # 넓이 출력
```

---

**내 솔루션: 파이썬 3**

```python
class Circle():
    def __init__(self,r):
        self.radius = r

    def area(self):
        return 3.1416*(self.radius**2) # 원주율로 3.1416 사용


circle = Circle(5)
print(circle.area())
```

---

# 문제 48

### **문제**

> **_길이와 너비로 생성될 수 있는 Rectangle이라는 클래스를 정의하십시오. Rectangle 클래스에는 넓이를 계산할 수 있는 메소드가 있습니다._**

---

### 힌트

> **_메소드를 정의하려면 def methodName(self)를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
class Rectangle(object):
    def __init__(self, l, w): # 생성자, 길이 l과 너비 w를 인스턴스 변수에 저장
        self.length = l
        self.width  = w

    def area(self): # 넓이를 계산하는 메소드
        return self.length*self.width # 길이 * 너비

aRectangle = Rectangle(2,10) # 길이 2, 너비 10인 Rectangle 객체 생성
print aRectangle.area() # 넓이 출력
```

---

**내 솔루션: 파이썬 3**

```python
class Rectangle():
    def __init__(self,l,w):
        self.length = l
        self.width = w

    def area(self):
        return self.length*self.width


rect = Rectangle(2,4)
print(rect.area())
```

---

# 문제 49

### **문제**

> **_Shape이라는 클래스와 그 하위 클래스 Square를 정의하십시오. Square 클래스에는 길이를 인수로 받는 init 함수가 있습니다. 두 클래스 모두 도형의 넓이를 인쇄할 수 있는 area 함수를 가지고 있으며, Shape의 넓이는 기본적으로 0입니다._**

---

### 힌트

> **_슈퍼 클래스의 메소드를 재정의하려면 슈퍼 클래스와 동일한 이름의 메소드를 정의할 수 있습니다._** (주: 하위 클래스에서 동일한 이름의 메소드를 정의하여 재정의합니다.)

---

**주요 저자 솔루션: 파이썬 2**

```python
class Shape(object):
    def __init__(self):
        pass

    def area(self): # Shape의 기본 넓이는 0
        return 0

class Square(Shape): # Shape 클래스를 상속
    def __init__(self, l):
        Shape.__init__(self) # 부모 클래스 Shape의 생성자 호출
        self.length = l # 길이 l을 인스턴스 변수에 저장

    def area(self): # Shape 클래스의 area 메소드를 재정의
        return self.length*self.length # 정사각형의 넓이: 한 변의 길이 * 한 변의 길이

aSquare= Square(3) # 한 변의 길이가 3인 Square 객체 생성
print aSquare.area() # 넓이 출력 (9)
```

---

**내 솔루션: 파이썬 3**

```python
class Shape():
    def __init__(self):
        pass

    def area(self):
        return 0

class Square(Shape):
    def __init__(self,length = 0): # length의 기본값을 0으로 설정
        Shape.__init__(self) # Python 3에서는 super().__init__()도 사용 가능
        self.length = length

    def area(self):
        return self.length*self.length

Asqr = Square(5) # 한 변의 길이가 5인 Square 객체 생성
print(Asqr.area())      # 주어진 인수로 25를 인쇄합니다.

print(Square().area())  # 기본 넓이로 0을 인쇄합니다 (length가 0으로 초기화됨).
```

---

# 문제 50

### **문제**

> **_RuntimeError 예외를 발생시키십시오._**

---

### 힌트

> **_예외를 발생시키려면 raise()를 사용하십시오._**

---

**솔루션:**

```python
raise RuntimeError('문제가 발생했습니다') # 'something wrong'을 '문제가 발생했습니다'로 번역
```

---

## 결론

**_음, 위의 문제들은 객체 지향 프로그래밍의 기본 개념과 구현에 매우 중점을 둔 것 같습니다. 개념이 기능적 문제를 해결하는 것이 아니라 구조를 설계하는 것이므로 두 코드 모두 구현 부분에서 매우 유사합니다._**

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_12.md "12일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_14.md "14일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

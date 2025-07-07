# 문제 44

### **문제:**

> **_map()을 사용하여 1과 20 사이(둘 다 포함) 숫자의 제곱으로 구성된 리스트를 만드는 프로그램을 작성하십시오._**

---

### 힌트:

> **_map()을 사용하여 리스트를 생성하십시오. 익명 함수를 정의하려면 lambda를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
squaredNumbers = map(lambda x: x**2, range(1,21)) # range(1,21)의 각 x에 대해 x의 제곱을 계산합니다. (Python 2에서는 map이 리스트를 반환)
print squaredNumbers
```

---

**내 솔루션: 파이썬 3**

```python
def sqr(x): # x의 제곱을 반환하는 함수
    return x*x

squaredNumbers = list(map(sqr, range(1,21))) # range(1,21)의 각 숫자에 sqr 함수를 적용하고 결과를 리스트로 변환합니다.
print (squaredNumbers)
```

---

# 문제 45

### **문제:**

> **_printNationality라는 정적 메소드를 가진 American이라는 클래스를 정의하십시오._**

---

### 힌트:

> **_클래스 정적 메소드를 정의하려면 @staticmethod 데코레이터를 사용하십시오. 두 가지 다른 메소드도 있습니다. 자세한 내용은 이 [링크](https://realpython.com/blog/python/instance-class-and-static-methods-demystified/)를 참조하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
class American(object): # object를 상속 (Python 2에서의 new-style 클래스)
    @staticmethod
    def printNationality():
        print "America"

anAmerican = American() # American 클래스의 인스턴스 생성
anAmerican.printNationality() # 인스턴스를 통해 정적 메소드 호출
American.printNationality() # 클래스 자체를 통해 정적 메소드 호출
```

---

**내 솔루션: 파이썬 3**

```python
class American():
    @staticmethod
    def printNationality():
        print("I am American")

american = American()
american.printNationality()   # @staticmethod가 함수를 데코레이트하지 않으면 이 코드는 실행되지 않습니다.
                              # 클래스에 인스턴스가 없기 때문입니다. (-> 이 주석은 약간 오해의 소지가 있습니다. @staticmethod가 없으면 인스턴스 메소드가 되어 self 인자가 필요하게 됩니다. 인스턴스가 없는 것이 아니라, self 없이 호출하려고 해서 문제가 됩니다.)
                              # 정확히는, @staticmethod가 없으면 printNationality는 인스턴스 메소드가 되고, american.printNationality() 호출 시 self 인자가 암묵적으로 전달됩니다.
                              # 하지만 printNationality() 정의에는 self가 없으므로 TypeError가 발생합니다.

American.printNationality()   # 이 코드는 @staticmethod가
                              # printNationality()를 데코레이트하지 않아도 실행됩니다. (-> 이 주석도 오해의 소지가 있습니다. @staticmethod가 없으면 American.printNationality() 호출 시 self 인자가 누락되어 TypeError가 발생합니다.)
                              # 정확히는, @staticmethod가 없으면 클래스를 통해 직접 호출 시에도 self 인자를 명시적으로 제공해야 합니다 (American.printNationality(american) 처럼).
                              # @staticmethod를 사용하면 self 없이 클래스나 인스턴스를 통해 호출 가능해집니다.
```
**참고:** `@staticmethod` 데코레이터는 메소드가 클래스 인스턴스(`self`)나 클래스(`cls`) 자체에 접근할 필요가 없을 때 사용됩니다. 이 데코레이터가 있으면 인스턴스나 클래스를 통해 호출할 때 특별한 첫 번째 인자(self 또는 cls)가 전달되지 않습니다.

---

# 문제 46

### **문제:**

> **_American이라는 클래스와 그 하위 클래스 NewYorker를 정의하십시오._**

---

### 힌트:

> **하위 클래스를 정의하려면 `class Subclass(ParentClass):`를 사용하십시오.\***

---

**주요 저자 솔루션: 파이썬 2**

```python
class American(object): # object 상속 (Python 2)
    pass # 아무것도 하지 않는 클래스 정의

class NewYorker(American): # American 클래스를 상속하는 NewYorker 클래스 정의
    pass

anAmerican = American()
aNewYorker = NewYorker()
print anAmerican # 객체의 문자열 표현 출력 (예: <__main__.American object at 0x...>)
print aNewYorker # 객체의 문자열 표현 출력 (예: <__main__.NewYorker object at 0x...>)
```

---

**내 솔루션: 파이썬 3**

```python
class American(): # Python 3에서는 기본적으로 object를 상속합니다.
    pass

class NewYorker(American): # American 클래스를 상속합니다.
    pass

american = American()
newyorker = NewYorker()

print(american) # 객체의 문자열 표현 출력
print(newyorker) # 객체의 문자열 표현 출력
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_11.md "11일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_13.md "13일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

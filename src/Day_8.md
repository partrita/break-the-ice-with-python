# 문제 22

### **문제:**

> **_입력으로부터 단어의 빈도를 계산하는 프로그램을 작성하십시오. 출력은 키를 영숫자순으로 정렬한 후 출력해야 합니다._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
2:2
3.:1
3?:1
New:1
Python:5
Read:1
and:1
between:1
choosing:1
or:2
to:1
```

---

### 힌트

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
freq = {}   # 텍스트 내 단어 빈도
line = raw_input()
for word in line.split():
    freq[word] = freq.get(word,0)+1

words = freq.keys()
words.sort()

for w in words:
    print "%s:%d" % (w,freq[w])
```

---

**내 솔루션: 파이썬 3**

```python
ss = input().split()
word = sorted(set(ss))     # 분리된 단어는 집합으로 저장되고 정렬됩니다.

for i in word:
    print("{0}:{1}".format(i,ss.count(i))) # i: 단어, ss.count(i): 단어의 빈도수
```

**또는**

```python
ss = input().split()
dict = {}
for i in ss:
    i = dict.setdefault(i,ss.count(i))    # setdefault() 함수는 키와 값을 받아 사전으로 설정합니다.

dict = sorted(dict.items())               # items() 함수는 사전의 키와 값을 모두 리스트로 반환한 다음 정렬합니다.
                                          # 정렬은 기본적으로 첫 번째 -> 두 번째 키 순서로 수행됩니다.
for i in dict:
    print("%s:%d"%(i[0],i[1]))
```

**또는**

```python
ss = input().split()
dict = {i:ss.count(i) for i in ss}     # i -> 분리된 단어, ss.count(i) -> ss에서 i의 총 등장 횟수로 사전을 설정합니다.
dict = sorted(dict.items())            # items() 함수는 사전의 키와 값을 모두 리스트로 반환한 다음 정렬합니다.
                                       # 정렬은 기본적으로 첫 번째 -> 두 번째 키 순서로 수행됩니다.
for i in dict:
    print("%s:%d"%(i[0],i[1]))
```

**또는**

```python
from collections import Counter

ss = input().split()
ss = Counter(ss)         # 키와 빈도를 사전으로 반환합니다.
ss = sorted(ss.items())  # 튜플 리스트로 반환합니다.

for i in ss:
    print("%s:%d"%(i[0],i[1]))
```

**솔루션 작성자: AnjanKumarG**

```python
from pprint import pprint # pprint는 "pretty print"의 약자로, 복잡한 자료구조를 사람이 읽기 쉽게 출력해줍니다.
p=input().split()
pprint({i:p.count(i) for i in p}) # 각 단어 i를 키로, p.count(i) (단어의 빈도)를 값으로 하는 딕셔너리를 생성하여 출력
```

---

# 문제 23

### **문제:**

> **_숫자의 제곱 값을 계산할 수 있는 메소드를 작성하십시오._**

---

### 힌트:

```
** 연산자를 사용하며, n**p는 n^p를 의미합니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def square(num):
    return num ** 2

print square(2)
print square(3)
```

---

**내 솔루션: 파이썬 3**

```python
n=int(input())
print(n**2)
```

---

# 문제 24

### **문제:**

> **_파이썬에는 많은 내장 함수가 있으며, 사용 방법을 모르는 경우 온라인 문서를 읽거나 책을 찾을 수 있습니다. 하지만 파이썬에는 모든 내장 함수에 대한 내장 문서 기능이 있습니다._**

> **_abs(), int(), raw_input()과 같은 일부 파이썬 내장 함수 문서를 인쇄하는 프로그램을 작성하십시오._**

> **_그리고 사용자 정의 함수에 대한 문서도 추가하십시오._**

### 힌트:

```
내장 문서 메소드는 __doc__입니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
print abs.__doc__
print int.__doc__
print raw_input.__doc__

def square(num):
    '''입력 숫자의 제곱 값을 반환합니다.

    입력 숫자는 정수여야 합니다.
    '''
    return num ** 2

print square(2)
print square.__doc__
```

---

**내 솔루션: 파이썬 3**

```python
print(str.__doc__)
print(sorted.__doc__)

def pow(n,p):
    '''
    매개변수 n: 임의의 정수입니다.
    매개변수 p: n에 대한 거듭제곱입니다.
    반환 값: n의 p 거듭제곱 = n^p
    '''

    return n**p

print(pow(3,4))
print(pow.__doc__)
```

---

# 문제 25

### **문제:**

> **_클래스 매개변수를 가지고 동일한 인스턴스 매개변수를 갖는 클래스를 정의하십시오._**

---

### 힌트:

```
인스턴스 매개변수를 정의하려면 __init__ 메소드에 추가해야 합니다. 생성자 매개변수로 객체를 초기화하거나 나중에 값을 설정할 수 있습니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
class Person:
    # 클래스 매개변수 "name" 정의
    name = "Person"

    def __init__(self, name = None):
        # self.name은 인스턴스 매개변수입니다.
        self.name = name

jeffrey = Person("Jeffrey")
print "%s name is %s" % (Person.name, jeffrey.name) # Person.name은 클래스 변수, jeffrey.name은 인스턴스 변수

nico = Person()
nico.name = "Nico" # 인스턴스 변수 설정
print "%s name is %s" % (Person.name, nico.name)
```

---

**내 솔루션: 파이썬 3**

```python
class Car:
    name = "Car" # 클래스 변수

    def __init__(self,name = None): # name의 기본값은 None
        self.name = name # 인스턴스 변수

honda=Car("Honda") # 인스턴스 생성 시 인스턴스 변수 name을 "Honda"로 설정
print("%s name is %s"%(Car.name,honda.name)) # Car.name은 "Car", honda.name은 "Honda"

toyota=Car() # 인스턴스 생성 시 name을 제공하지 않으면 self.name은 None이 됨
toyota.name="Toyota" # 인스턴스 변수 name을 "Toyota"로 설정
print("%s name is %s"%(Car.name,toyota.name)) # Car.name은 "Car", toyota.name은 "Toyota"
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%207.md "7일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%209.md "9일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

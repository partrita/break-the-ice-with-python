# 문제 4

### **문제:**

> **_콘솔에서 쉼표로 구분된 숫자 시퀀스를 입력받아 모든 숫자를 포함하는 리스트와 튜플을 생성하는 프로그램을 작성하십시오. 다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
34,67,55,33,12,98
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
['34', '67', '55', '33', '12', '98']
('34', '67', '55', '33', '12', '98')
```

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다. tuple() 메소드는 리스트를 튜플로 변환할 수 있습니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
values = raw_input()
l = values.split(",")
t = tuple(l)
print l
print t
```

---

**내 솔루션: 파이썬 3**

```python
lst = input().split(',')  # 입력은 문자열로 받아지고 문자열이므로 내장 메소드 split을 가집니다.
                          # split 함수 안의 ','는 ','를 찾을 때마다 분할하고
                          # 입력을 lst 변수에 리스트로 저장합니다.

tpl = tuple(lst)          # tuple 메소드는 리스트를 튜플로 변환합니다.

print(lst)
print(tpl)
```
---
```python 
'''솔루션 작성자: minnielahoti
'''
print(tuple(input("쉼표로 구분된 숫자 시리즈를 입력하세요:").split(',')))
```
---

# 문제 5

### **문제:**

> **_최소 두 개의 메소드를 가진 클래스를 정의하십시오:_**
>
> - **_getString: 콘솔 입력에서 문자열을 가져옵니다._**
> - **_printString: 문자열을 대문자로 인쇄합니다._**

> **_또한 클래스 메소드를 테스트하기 위한 간단한 테스트 함수를 포함하십시오._**

### 힌트:

> **_**init** 메소드를 사용하여 일부 매개변수를 생성하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
class InputOutString(object):
    def __init__(self):
        self.s = ""

    def get_string(self):
        self.s = raw_input()

    def print_string(self):
        print self.s.upper()

str_obj = InputOutString()
str_obj.get_string()
str_obj.print_string()
```

---

**내 솔루션: 파이썬 3**

```python
class IOstring():
    def get_string(self):
        self.s = input()

    def print_string(self):
        print(self.s.upper())

xx = IOstring()
xx.get_string()
xx.print_string()
```

---

# 문제 6

### **문제:**

> **_주어진 공식에 따라 값을 계산하고 인쇄하는 프로그램을 작성하십시오:_**

> **_Q = [(2 * C * D)/H]의 제곱근_**

> **_다음은 C와 H의 고정 값입니다:_**

> **_C는 50입니다. H는 30입니다._**

> **_D는 쉼표로 구분된 시퀀스로 프로그램에 입력해야 하는 변수입니다. 예를 들어_**
> **_다음과 같은 쉼표로 구분된 입력 시퀀스가 프로그램에 제공된다고 가정합니다:_**

```
100,150,180
```

> **_프로그램의 출력은 다음과 같아야 합니다:_**

```
18,22,24
```

---

### 힌트:

> **_받은 출력이 십진수 형태인 경우 가장 가까운 값으로 반올림해야 합니다 (예: 받은 출력이 26.0이면 26으로 인쇄해야 함). 질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import math
c = 50
h = 30
value = []
items = [x for x in raw_input().split(',')]
for d in items:
    value.append(str(int(round(math.sqrt(2*c*float(d)/h)))))

print ','.join(value)
```

---

**내 솔루션: 파이썬 3**

```python
from math import sqrt # *를 사용하여 모두 가져오는 것은 좋지 않으므로 특정 함수만 가져옵니다.
                      # 나쁜 습관입니다.

C,H = 50,30

def calc(D):
    return sqrt((2*C*D)/H)

D = [int(i) for i in input().split(',')] # 쉼표 위치에서 분할하고 리스트에 설정합니다.
D = [int(i) for i in D]   # 문자열을 정수로 변환합니다.
D = [calc(i) for i in D]  # D의 모든 항목에 대해 calc 메소드로 부동 소수점 값을 반환합니다.
D = [round(i) for i in D] # 모든 부동 소수점 값을 반올림합니다.
D = [str(i) for i in D]   # join 연산을 적용할 수 있도록 모든 정수를 문자열로 변환합니다.

print(",".join(D))
```

**또는**

```python
from math import sqrt

C,H = 50,30

def calc(D):
    return sqrt((2*C*D)/H)

D = input().split(',')                     # 쉼표 위치에서 분할하고 리스트에 설정합니다.
D = [str(round(calc(int(i)))) for i in D]  # 컴프리헨션 메소드를 사용합니다. 이전 코드의 순서대로 작동합니다.
print(",".join(D))
```

**또는**

```python
from math import sqrt
C,H = 50,30

def calc(D):
    return sqrt((2*C*D)/H)

print(",".join([str(int(calc(int(i)))) for i in input().split(',')]))
```

**또는**

```python
from math import * # 모든 수학 함수 가져오기
C,H = 50,30

def calc(D):
    D = int(D)
    return str(int(sqrt((2*C*D)/H)))

D = input().split(',')
D = list(map(calc,D))   # D에 calc 함수를 적용하고 리스트로 저장합니다.
print(",".join(D))
```
---
```python
'''솔루션 작성자: parian5
'''
from math import sqrt
C, H = 50, 30
mylist = input().split(',')
print(*(round(sqrt(2*C*int(D)/H)) for D in mylist), sep=",")
```
---
```python

'''솔루션 작성자: saxenaharsh24
'''

my_list = [int(x) for x in input('').split(',')]
C, H, x = 50, 30, []

for D in my_list:
    Q = ((2*C*D)/H)**(1/2)
    x.append(round(Q))

print(','.join(map(str, x)))
```
---

# 문제 7

### **문제:**

> **_2개의 숫자 X, Y를 입력받아 2차원 배열을 생성하는 프로그램을 작성하십시오. 배열의 i번째 행과 j번째 열의 요소 값은 i * j여야 합니다.\***

> **_참고: i=0,1.., X-1; j=0,1,¡­Y-1. 다음과 같은 입력이 프로그램에 제공된다고 가정합니다: 3,5_**

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
[[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8]]
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 쉼표로 구분된 형태로 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
input_str = raw_input()
dimensions = [int(x) for x in input_str.split(',')]
row_num = dimensions[0]
col_num = dimensions[1]
multilist = [[0 for col in range(col_num)] for row in range(row_num)]

for row in range(row_num):
    for col in range(col_num):
        multilist[row][col] = row * col

print multilist
```

---

**내 솔루션: 파이썬 3**

```python
x,y = map(int,input().split(','))
lst = []

for i in range(x):
    tmp = []
    for j in range(y):
        tmp.append(i*j)
    lst.append(tmp)

print(lst)
```

**또는**

```python
x,y = map(int,input().split(','))
lst = [[i*j for j in range(y)] for i in range(x)]
print(lst)
```

---

# 문제 8

### **문제:**

> **_쉼표로 구분된 단어 시퀀스를 입력받아 알파벳순으로 정렬한 후 쉼표로 구분된 시퀀스로 단어를 인쇄하는 프로그램을 작성하십시오._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
without,hello,bag,world
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
bag,hello,without,world
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
items = [x for x in raw_input().split(',')]
items.sort()
print ','.join(items)
```

---

**내 솔루션: 파이썬 3**

```python
lst = input().split(',')
lst.sort()
print(",".join(lst))
```
---
```python
'''솔루션 작성자: Poonam-glitch
'''
def my_func(e):
    return e[0]

my_list = input('쉼표로 구분된 문자열을 입력하세요: ').split(",")
my_list.sort(key=my_func)
print(",".join(my_list))
```

---

# 문제 9

### **문제:**

> **_여러 줄의 시퀀스를 입력받아 문장의 모든 문자를 대문자로 만든 후 줄을 인쇄하는 프로그램을 작성하십시오._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
Hello world
Practice makes perfect
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
HELLO WORLD
PRACTICE MAKES PERFECT
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
lines = []
while True:
    s = raw_input()
    if s:
        lines.append(s.upper())
    else:
        break

for sentence in lines:
    print sentence
```

---

**내 솔루션: 파이썬 3**

```python
lst = []

while True:
    x = input()
    if len(x)==0:
        break
    lst.append(x.upper())

for line in lst:
    print(line)
```

**또는**

```python
def user_input():
    while True:
        s = input()
        if not s:
            return
        yield s

for line in map(str.upper, user_input()):
    print(line)
```

```python
'''솔루션 작성자: hajimalung baba
'''
def inputs():
    while True:
        string = input()
        if not string:
            return
        yield string

print(*(line.upper() for line in inputs()),sep='\n')
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%201.md "1일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%203.md "3일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

# 문제 75

### **문제**

> **_7과 15 사이(경계값 포함)의 정수를 무작위로 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트

> **_주어진 범위 내에서 임의의 정수를 얻으려면 random.randrange()를 사용하십시오._**

---

**솔루션:**

```python
import random
# random.randrange(start, stop)는 start <= x < stop 범위의 정수를 반환합니다.
# 따라서 7과 15를 포함하려면 stop을 16으로 설정해야 합니다.
print random.randrange(7,16)
```

---

# 문제 76

### **문제**

> **_문자열 "hello world!hello world!hello world!hello world!"를 압축하고 압축 해제하는 프로그램을 작성하십시오._**

---

### 힌트

> **_문자열을 압축하고 압축 해제하려면 zlib.compress()와 zlib.decompress()를 사용하십시오._**

---

**솔루션: (Python 2 기준)**
```python
import zlib
s = 'hello world!hello world!hello world!hello world!'
t = zlib.compress(s) # 문자열 s를 압축합니다. (Python 2에서는 문자열을 직접 압축 가능)
print t # 압축된 바이트 시퀀스 출력
print zlib.decompress(t) # 압축 해제하여 원본 문자열 출력
```
---
```python
'''anas1434 솔루션: (Python 3 기준)
'''
s = 'hello world!hello world!hello world!hello world!'
# 파이썬 3에서 zlib.compress()는 <bytes> 데이터 유형만 허용합니다.
y = bytes(s, 'utf-8') # 문자열 s를 UTF-8 인코딩을 사용하여 바이트로 변환
x = zlib.compress(y) # 바이트 시퀀스 y를 압축
print(x) # 압축된 바이트 시퀀스 출력
print(zlib.decompress(x)) # 압축 해제하여 원본 바이트 시퀀스 출력 (출력 시 자동으로 문자열로 변환될 수 있음)
```
---

# 문제 77

### **문제**

> **_"1+1"을 100번 실행하는 데 걸리는 시간을 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트

> **_실행 시간을 측정하려면 timeit() 함수를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
from timeit import Timer
# Timer 객체 생성. 첫 번째 인자는 실행할 코드, 두 번째 인자는 설정 코드 (여기서는 없음)
t = Timer("for i in range(100):1+1")
# timeit() 메소드는 코드를 여러 번 실행하여 평균 실행 시간을 계산합니다. (기본값: 1,000,000번)
# 문제에서는 "1+1"을 100번 실행하는 것 자체의 시간을 측정하라는 의미로 해석될 수 있으나,
# timeit은 해당 코드 블록(여기서는 "for i in range(100):1+1")의 실행 시간을 측정합니다.
print t.timeit()
```

---

**내 솔루션: 파이썬 3** (datetime 사용)

```python
import datetime

before = datetime.datetime.now() # 실행 전 현재 시간
for i in range(100):
    x = 1 + 1
after = datetime.datetime.now() # 실행 후 현재 시간
execution_time = after - before # 실행 시간 계산 (timedelta 객체)
print(execution_time.microseconds) # 마이크로초 단위로 출력
```

**또는** (time 모듈 사용)

```python
import time

before = time.time() # 실행 전 현재 시간 (초 단위 타임스탬프)
for i in range(100):
    x = 1 + 1
after = time.time() # 실행 후 현재 시간
execution_time = after - before # 실행 시간 계산 (초 단위)
print(execution_time)
```

---

# 문제 78

### **문제**

> **_리스트 [3,6,7,8]을 섞어서(shuffle) 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트

> **_리스트를 섞으려면 shuffle() 함수를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
from random import shuffle # random 모듈에서 shuffle 함수 가져오기
li = [3,6,7,8]
shuffle(li) # 리스트 li를 직접 섞습니다 (in-place). 반환 값은 None입니다.
print li # 섞인 리스트 출력
```

---

**내 솔루션: 파이썬 3**

```python
import random

lst = [3,6,7,8]
random.shuffle(lst) # 리스트 lst를 직접 섞습니다.
print(lst)
```

**또는** (특정 시드 사용)

```python
import random

# 특정 시드로 섞기 (결과가 항상 동일하게 나옴)
lst = [3,6,7,8]
seed = 7
random.Random(seed).shuffle(lst) # 시드 값을 사용하여 Random 객체를 만들고 shuffle 호출
print(lst)
```

---

# 문제 79

### **문제**

> **_주어가 ["I", "You"] 중 하나이고, 동사가 ["Play", "Love"] 중 하나이며, 목적어가 ["Hockey","Football"] 중 하나인 모든 문장을 생성하는 프로그램을 작성하십시오._**

---

### 힌트

> **_리스트에서 요소를 가져오려면 list[index] 표기법을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
subjects=["I", "You"]
verbs=["Play", "Love"]
objects=["Hockey","Football"]
for i in range(len(subjects)):
    for j in range(len(verbs)):
        for k in range(len(objects)):
            sentence = "%s %s %s." % (subjects[i], verbs[j], objects[k]) # 문자열 포매팅
            print sentence
```

---

**내 솔루션: 파이썬 3**

```python
subjects=["I", "You"]
verbs=["Play", "Love"]
objects=["Hockey","Football"]

for sub in subjects:
    for verb in verbs:
        for obj in objects:
            print("{} {} {}.".format(sub,verb,obj)) # 마침표 추가
```
---
```python

'''popomaticbubble 솔루션:
'''
import itertools # itertools 모듈 가져오기
subject = ["I", "You"]
verb = ["Play", "Love"]
objects = ["Hockey","Football"]

sentence_parts = [subject, verb, objects] # 리스트들을 포함하는 리스트
# itertools.product는 여러 반복 가능한 객체들의 데카르트 곱을 반환합니다.
# *sentence_parts는 sentence_parts 리스트의 각 요소를 product 함수의 인자로 전달합니다.
n = list(itertools.product(*sentence_parts)) # 가능한 모든 조합을 튜플 형태로 생성
for i in n:
    print(i) # 각 조합 (튜플) 출력 (예: ('I', 'Play', 'Hockey'))
    # 문장 형태로 출력하려면: print("{} {} {}.".format(i[0], i[1], i[2]))
```
---
```python

'''lcastrooliveira 솔루션:
'''
from itertools import product # itertools에서 product 함수 가져오기

def question_79():
    subject = ["I", "You"]
    verb = ["Play", "Love"]
    object_list = ["Hockey", "Football"] # 변수명을 object에서 object_list로 변경 (object는 파이썬 내장 타입과 충돌)
    # product(range(2), repeat=3)는 (0,0,0)부터 (1,1,1)까지의 모든 조합을 생성 (각 리스트의 인덱스로 사용)
    prod = [p for p in product(range(2), repeat=3)] # 각 리스트의 크기가 2이므로 range(2) 사용
    for combination in prod:
        # f-string을 사용하여 문장 구성
        print(f'{subject[combination[0]]} {verb[combination[1]]} {object_list[combination[2]]}.') # 마침표 추가

question_79()
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_18.md "18일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_20.md "20일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

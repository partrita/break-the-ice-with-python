# 문제 90

### **문제**

> **_콘솔에서 입력받은 문자열의 각 문자 수를 세어 인쇄하는 프로그램을 작성하십시오._**

> **_예시:
> 다음 문자열이 프로그램에 입력으로 주어지면:_**

```
abcdefgabc
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_** (주: 출력 순서는 다를 수 있습니다)
```
a,2
c,2
b,2
e,1
d,1
g,1
f,1
```

### 힌트

> **_키/값 쌍을 저장하려면 dict를 사용하십시오.
> 기본값으로 키를 조회하려면 dict.get() 메소드를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
dic = {} # 빈 딕셔너리 생성
s=raw_input() # 사용자로부터 문자열 입력
for char_s in s: # 문자열 s의 각 문자에 대해 반복 (변수명을 s에서 char_s로 변경하여 명확성 증대)
    dic[char_s] = dic.get(char_s,0)+1 # char_s를 키로 하여, dic에 이미 있으면 값에 1을 더하고, 없으면 기본값 0에 1을 더하여 저장
# dic.items()는 (키, 값) 쌍의 리스트를 반환합니다.
# 각 (키, 값) 쌍에 대해 '%s,%s' 형식으로 문자열을 만들고, 이 문자열들을 개행문자('\n')로 연결하여 출력합니다.
print '\n'.join(['%s,%s' % (k, v) for k, v in dic.items()])
```

---

**내 솔루션: 파이썬 3** (알파벳 소문자만 카운트)

```python
import string

s = input()
for letter in string.ascii_lowercase: # string.ascii_lowercase는 'abcdefghijklmnopqrstuvwxyz'
    cnt = s.count(letter) # 문자열 s에서 letter의 등장 횟수를 셈
    if cnt > 0: # 등장 횟수가 0보다 크면
        print("{},{}".format(letter,cnt)) # "문자,횟수" 형식으로 출력
```

**또는** (알파벳 소문자만 카운트, ord/chr 사용)

```python
s = input()
for letter_code in range(ord('a'),ord('z')+1):    # ord()는 문자의 ASCII(유니코드) 값을 반환합니다. 'a'부터 'z'까지 반복
    letter = chr(letter_code)                     # chr()은 ASCII(유니코드) 값을 문자로 변환합니다.
    cnt = s.count(letter)
    if cnt > 0:
        print("{},{}".format(letter,cnt))
```
---
```python
'''Utkarsh4697 솔루션: (입력 문자열의 모든 문자 카운트, 정렬된 순서로 출력)
'''
s = 'abcdefgabc' # 예제 입력
# set(s)는 문자열 s에 포함된 고유한 문자들의 집합을 만듭니다.
# sorted(set(s))는 이 고유한 문자들을 알파벳순으로 정렬합니다.
for i in sorted(set(s)):
    print(f'{i}, {s.count(i)}') # 각 문자 i와 그 빈도수를 f-string을 사용하여 출력
```
---
```python
'''popomaticbubble 솔루션: (딕셔너리 사용, 모든 문자 카운트)
'''
def character_counter(text):
	characters_list = list(text) # 문자열을 문자 리스트로 변환
	char_count = {} # 빈 딕셔너리
	for x in characters_list:
		if x in char_count.keys(): # 문자가 이미 딕셔너리 키에 있으면
			char_count[x] += 1 # 카운트 증가
		else: # 없으면
			char_count[x] = 1 # 새로 추가하고 카운트를 1로 설정
	return char_count


def dict_viewer(dictionary): # 딕셔너리를 특정 형식으로 출력하는 함수
	for x, y in dictionary.items(): # 딕셔너리의 모든 (키, 값) 쌍에 대해 반복
		print(f"{x},{y}") # f-string을 사용하여 "키,값" 형식으로 출력


text = input("> ")
dict_viewer(character_counter(text))
```
---

# 문제 91

### **문제**

> **_콘솔에서 문자열을 입력받아 역순으로 인쇄하는 프로그램을 작성하십시오._**

> **예시:
> 다음 문자열이 프로그램에 입력으로 주어지면:\*** (주: 예시 입력의 마지막 '*'는 오타로 보입니다.)

```
rise to vote sir
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
ris etov ot esir
```

### 힌트

> **_리스트를 역순으로 반복하려면 list[::-1]을 사용하십시오._** (주: 문자열에도 적용 가능)

---

**주요 저자 솔루션: 파이썬 2**

```python
s=raw_input()
s = s[::-1] # 문자열 s를 처음부터 끝까지 -1 간격으로 슬라이싱 (즉, 역순)
print s
```

---

**내 솔루션: 파이썬 3**

```python
s = input()
s = ''.join(reversed(s)) # reversed(s)는 문자열 s의 문자들을 역순으로 가리키는 이터레이터 반환
                         # ''.join()은 이 이터레이터의 문자들을 빈 문자열을 구분자로 하여 합쳐 새 문자열 생성
print(s)
```

---

# 문제 92

### **문제**

> **_콘솔에서 문자열을 입력받아 짝수 인덱스의 문자들을 인쇄하는 프로그램을 작성하십시오._**

> **_예시:
> 다음 문자열이 프로그램에 입력으로 주어지면:_**

```
H1e2l3l4o5w6o7r8l9d
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
Helloworld
```

### 힌트

> **_리스트를 2단계씩 건너뛰며 반복하려면 list[::2]를 사용하십시오._** (주: 문자열에도 적용 가능)

---

**주요 저자 솔루션: 파이썬 2**

```python
s=raw_input()
s = s[::2] # 문자열 s를 처음부터 끝까지 2칸씩 건너뛰며 슬라이싱 (즉, 짝수 인덱스 문자들)
print s
```

---

**내 솔루션: 파이썬 3**

```python
s = "H1e2l3l4o5w6o7r8l9d" # 예제 입력
# range(len(s))로 0부터 문자열 길이 -1까지 인덱스 생성
# 인덱스 i가 짝수이면 s[i] (해당 인덱스의 문자)를 리스트에 포함
s_filtered = [ s[i] for i in range(len(s)) if i%2 ==0 ]
print(''.join(s_filtered)) # 리스트의 문자들을 합쳐 문자열로 출력
```

**또는**

```python
s = "H1e2l3l4o5w6o7r8l9d" # 예제 입력
ns ='' # 새 문자열 초기화
for i in range(len(s)):
    if i % 2 == 0: # 인덱스 i가 짝수이면
        ns+=s[i] # 해당 문자를 ns에 추가
print(ns)
```

---

# 문제 93

### **문제**

> **_[1,2,3]의 모든 순열을 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트

> **_리스트의 순열을 얻으려면 itertools.permutations()를 사용하십시오._**

---

**솔루션: (Python 2 기준, Python 3에서는 list()로 감싸야 함)**

```python
import itertools
# itertools.permutations([1,2,3])는 [1,2,3]의 모든 순열을 포함하는 이터레이터 반환
# Python 2에서는 print가 이터레이터의 내용을 바로 출력하려고 시도할 수 있으나,
# 명시적으로 list()로 변환하는 것이 일반적입니다.
print list(itertools.permutations([1,2,3])) # Python 3에서는 print(list(itertools.permutations([1,2,3])))
```
---
```python
"""popomaticbubble 솔루션:
"""
from itertools import permutations # itertools에서 permutations 함수 가져오기

def permuation_generator(iterable):
    p = permutations(iterable) # 주어진 iterable의 모든 순열을 생성하는 이터레이터 p
    for i in p: # 각 순열 i에 대해 반복
        print(i) # 순열 (튜플 형태) 출력


x = [1,2,3]
permuation_generator(x)
```
---

# 문제 94

### **문제**

> **_고전적인 중국 고대 퍼즐을 푸는 프로그램을 작성하십시오:
> 농장에 있는 닭과 토끼의 머리 수를 세니 35개이고 다리 수를 세니 94개입니다. 토끼와 닭은 각각 몇 마리입니까?_**

---

### 힌트

> **_모든 가능한 해를 반복하려면 for 루프를 사용하십시오._**

---

**솔루션:**

```python
def solve(numheads,numlegs):
    ns='해답 없음!' # 'No solutions!'를 번역
    for i in range(numheads+1): # i는 닭의 수 (0부터 numheads까지)
        j=numheads-i # j는 토끼의 수 (총 머리 수 - 닭의 수)
        if 2*i+4*j==numlegs: # 닭의 다리 수(2*i) + 토끼의 다리 수(4*j) == 총 다리 수
            return i,j # 닭의 수와 토끼의 수 반환
    return ns,ns # 해답을 찾지 못하면 ns, ns 반환

numheads = 35
numlegs = 94
solutions=solve(numheads,numlegs)
print(solutions) # Python 3에서는 print() 사용
# 결과: (23, 12) -> 닭 23마리, 토끼 12마리
```
---
```python
"""popomaticbubble 솔루션: (itertools 사용)
"""
import itertools

def animal_counter(lst): # 다리 수 리스트를 받아 닭과 토끼 수 계산
    chickens = 0
    rabbits = 0
    for i in lst: # 리스트의 각 요소 (다리 수)
        if i == 2: # 다리가 2개면 닭
            chickens += 1
        elif i == 4: # 다리가 4개면 토끼
            rabbits += 1
    print(f"닭의 수: {chickens}\n토끼의 수: {rabbits}") # "Number of chickens is" 등을 번역


def animal_calculator(total_legs, total_heads, legs_of_each_species):
    # combinations_with_replacement는 주어진 종의 다리 수 리스트에서 total_heads 만큼 중복을 허용하여 조합을 만듭니다.
    # 즉, 각 동물이 어떤 종인지 모든 가능한 경우의 수를 만듭니다.
    combinations = itertools.combinations_with_replacement(legs_of_each_species, total_heads)
    correct_combos = []
    for i in list(combinations): # 각 조합 (total_heads 만큼의 다리 수 튜플)
        if sum(i) == total_legs: # 조합된 다리 수의 합이 총 다리 수와 같으면
            correct_combos.append(i) # 올바른 조합 리스트에 추가
    print("가능한 다리 조합:", correct_combos) # "Correct combos" 번역
    for i in correct_combos:
        animal_counter(i) # 각 올바른 조합에 대해 동물 수 계산 및 출력

animal_calculator(94, 35, legs_of_each_species=[2,4])
```
---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_21.md "21일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_23.md "23일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

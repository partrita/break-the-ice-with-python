# 문제 10

### **문제**

> **_공백으로 구분된 단어 시퀀스를 입력받아 중복된 단어를 모두 제거하고 영숫자순으로 정렬한 후 단어를 인쇄하는 프로그램을 작성하십시오._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
hello world and practice makes perfect and hello world again
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
again and hello makes perfect practice world
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다. 중복된 데이터를 자동으로 제거하기 위해 set 컨테이너를 사용한 다음 sorted()를 사용하여 데이터를 정렬합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
s = raw_input()
words = [word for word in s.split(" ")]
print " ".join(sorted(list(set(words))))
```

---

**내 솔루션: 파이썬 3**

```python
word = input().split()

for i in word:
    if word.count(i) > 1:    # count 함수는 인수로 전달된 요소의 총 반복 횟수를 반환합니다.
        word.remove(i)     # 호출당 정확히 하나의 요소를 제거합니다.

word.sort()
print(" ".join(word))
```

**또는**

```python
word = input().split()
[word.remove(i) for i in word if word.count(i) > 1 ]   # 컴프리헨션 메소드를 사용한 제거 작업
word.sort()
print(" ".join(word))
```

**또는**

```python
word = sorted(list(set(input().split())))              # 입력 문자열 분할 -> 고유 요소를 저장하기 위해 set()으로 변환
                                                       # -> 정렬을 적용할 수 있도록 리스트로 변환
print(" ".join(word))
```

---
```python
'''솔루션 작성자: Sukanya-Mahapatra
'''
inp_string = input("문자열 입력: ").split()
out_string = []
for words in inp_string:
    if words not in out_string:
        out_string.append(words)
print(" ".join(sorted(out_string)))
```
---

# 문제 11

### **문제**

> **_쉼표로 구분된 4자리 이진수 시퀀스를 입력받아 5로 나누어지는지 확인하는 프로그램을 작성하십시오. 5로 나누어지는 숫자는 쉼표로 구분된 시퀀스로 인쇄해야 합니다._**

> **_예시:_**

```
0100,0011,1010,1001
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
1010
```

> **_참고: 데이터는 콘솔을 통해 입력된다고 가정합니다._**

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
value = []
items=[x for x in raw_input().split(',')]
for p in items:
    intp = int(p,2)
    if not intp % 5:
        value.append(p)

print ','.join(value)
```

---

**내 솔루션: 파이썬 3**

```python
def check(x):                       # 이진수를 정수로 변환하고 5로 나누어지면 0을 반환합니다.
    total,pw = 0,1
    reversed(x)

    for i in x:
        total+=pw * (ord(i) - 48)   # ord() 함수는 ASCII 값을 반환합니다.
        pw*=2
    return total % 5

data = input().split(",")           # 여기서 입력을 받고 ',' 위치에서 분할합니다.
lst = []

for i in data:
    if check(i) == 0:               # 0이 발견되면 0으로 나누어지고 리스트에 추가됩니다.
        lst.append(i)

print(",".join(lst))
```

**또는**

```python
def check(x):                   # check 함수는 5로 나누어지면 True를 반환합니다.
    return int(x,2)%5 == 0      # int(x,b)는 x를 문자열로, b를 밑으로 사용하여
                                # 십진수로 변환합니다.
data = input().split(',')

data = list(filter(check,data)) # filter(func,object) 함수에서 'check' 함수에 의해 True로 확인되면 'data'에서 요소를 선택합니다.
print(",".join(data))
```

**또는**

```python
data = input().split(',')
data = list(filter(lambda i:int(i,2)%5==0,data))    # 람다는 한 줄짜리 함수를 작성하는 데 도움이 되는 연산자입니다.
print(",".join(data))
```

---

```python
'''솔루션 작성자: nikitaMogilev
'''
data = input().split(',')
data = [num for num in data if int(num, 2) % 5 == 0]
print(','.join(data))
```

```python
'''솔루션 작성자: hajimalung baba
'''
print(*(binary for binary in input().split(',') if int(binary,base=2)%5==0))
```

---

# 문제 12

### **문제:**

> **_1000과 3000 사이(두 숫자 포함)의 모든 숫자 중에서 숫자의 각 자릿수가 짝수인 숫자를 찾는 프로그램을 작성하십시오. 얻은 숫자는 한 줄에 쉼표로 구분된 시퀀스로 인쇄해야 합니다._**

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
values = []
for i in range(1000, 3001):
    s = str(i)
    if (int(s[0])%2 == 0) and (int(s[1])%2 == 0) and (int(s[2])%2 == 0) and (int(s[3])%2 == 0):
        values.append(s)
print ",".join(values)
```

---

**내 솔루션: 파이썬 3**

```python
lst = []

for i in range(1000,3001):
    flag = 1
    for j in str(i):          # 모든 정수 i는 문자열로 변환됩니다.
        if ord(j)%2 != 0:     # ord는 ASCII 값을 반환하고 j는 i의 모든 자릿수입니다.
            flag = 0          # 홀수 자릿수가 발견되면 플래그는 0이 됩니다.
    if flag == 1:
        lst.append(str(i))    # i는 문자열로 리스트에 저장됩니다.

print(",".join(lst))
```

**또는**

```python
def check(element):
    return all(ord(i)%2 == 0 for i in element)  # all은 요소의 모든 자릿수 i가 짝수이면 True를 반환합니다.

lst = [str(i) for i in range(1000,3001)]        # 주어진 모든 숫자의 리스트를 문자열 데이터 유형으로 만듭니다.
lst = list(filter(check,lst))                   # filter는 check 조건이 실패하면 리스트에서 요소를 제거합니다.
print(",".join(lst))
```

**또는**

```python
lst = [str(i) for i in range(1000,3001)]
lst = list(filter(lambda i:all(ord(j)%2 == 0 for j in i), lst))   # 람다를 사용하여 filter 함수 내에 함수를 정의합니다.
print(",".join(lst))
```

---

```python
'''솔루션 작성자: nikitaMogilev
'''
# 각 숫자의 자릿수를 람다 함수로 매핑하고 모든 자릿수가 짝수인지 확인합니다.
# str(num)은 map() 및 join()을 통해 숫자를 반복할 수 있는 기회를 제공합니다.
print(','.join([str(num) for num in range(1000, 3001) if all(map(lambda num: int(num) % 2 == 0, str(num)))]))
```

```python
'''솔루션 작성자: hajimalung
'''
from functools import reduce 
# reduce를 사용하여 숫자에 짝수 자릿수만 있는지 확인합니다.
def is_even_and(bool_to_compare,num_as_char):
    return int(num_as_char)%2==0 and bool_to_compare

print(*(i for i in range(1000,3001) if reduce(is_even_and,str(i),True)),sep=',')
```

---

# 문제 13

### **문제:**

> **_문장을 입력받아 글자 수와 숫자 수를 계산하는 프로그램을 작성하십시오._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
hello world! 123
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
LETTERS 10
DIGITS 3
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
s = raw_input()
d = {"DIGITS":0, "LETTERS":0}
for c in s:
    if c.isdigit():
        d["DIGITS"]+=1
    elif c.isalpha():
        d["LETTERS"]+=1
    else:
        pass
print "LETTERS", d["LETTERS"]
print "DIGITS", d["DIGITS"]
```

---

**내 솔루션: 파이썬 3**

```python
word = input()
letter,digit = 0,0

for i in word:
    if ('a'<=i and i<='z') or ('A'<=i and i<='Z'):
        letter+=1
    if '0'<=i and i<='9':
        digit+=1

print("LETTERS {0}\nDIGITS {1}".format(letter,digit))
```

**또는**

```python
word = input()
letter, digit = 0,0

for i in word:
    if i.isalpha(): # 알파벳이면 True를 반환합니다.
        letter += 1
    elif i.isnumeric(): # 숫자이면 True를 반환합니다.
        digit += 1
print(f"LETTERS {letter}\n{digits}") # 두 가지 다른 유형의 형식 지정 방법이 두 솔루션 모두에 표시됩니다.
```
---
```python
''' 솔루션 작성자: popomaticbubble
'''
import re

input_string = input('> ')
print()
counter = {"LETTERS":len(re.findall("[a-zA-Z]", input_string)), "NUMBERS":len(re.findall("[0-9]", input_string))}

print(counter)
```
---
```python
'''솔루션 작성자: MarkisLandis
'''

sen = input("").split(" ")
alp, digit = 0, 0

for item in sen:
    lst = [char for char in item]
    for j in lst:
        if 64 < ord(j) < 123:
            alp += 1
        if j.isdigit():
            digit += 1
print(f"LETTERS : {alp} \n DIGITS : {digit}")
```
```python
'''솔루션 작성자: hajimalung
'''
# reduce를 사용하여 계산합니다.
from functools import reduce

def count_letters_digits(counters,char_to_check):
    counters[0] += char_to_check.isalpha()
    counters[1] += char_to_check.isnumeric()
    return counters

print('LETTERS {0}\nDIGITS {1}'.format(*reduce(count_letters_digits,input(),[0,0])))
```

---

## 결론

**_위의 모든 문제는 대부분 문자열 관련 문제입니다. 솔루션의 주요 부분에는 문자열 관련 함수와 코드를 더 짧은 형태로 작성하기 위한 컴프리헨션 메소드가 포함됩니다._**

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%202.md "2일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%204.md "4일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

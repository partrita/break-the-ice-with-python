# 문제 18

### **문제:**

> **_한 웹사이트에서 사용자에게 등록을 위해 사용자 이름과 비밀번호를 입력하도록 요구합니다. 사용자가 입력한 비밀번호의 유효성을 확인하는 프로그램을 작성하십시오._**

> **_다음은 비밀번호 확인 기준입니다:_**

- **_[a-z] 사이의 문자 최소 1개_**
- **_[0-9] 사이의 숫자 최소 1개_**
- **_[A-Z] 사이의 문자 최소 1개_**
- **_[$#@] 중 문자 최소 1개_**
- **_거래 비밀번호 최소 길이: 6_**
- **_거래 비밀번호 최대 길이: 12_**

> **_프로그램은 쉼표로 구분된 비밀번호 시퀀스를 입력받아 위의 기준에 따라 확인해야 합니다. 기준을 충족하는 비밀번호는 각각 쉼표로 구분하여 인쇄해야 합니다._**

> **_예시_**

> **_다음 비밀번호가 프로그램에 입력으로 주어지면:_**

```
ABd1234@1,a F1#,2w3E*,2We3345
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
ABd1234@1
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import re
value = []
items = [x for x in raw_input().split(',')]
for p in items:
    if len(p) < 6 or len(p) > 12:
        continue
    else:
        pass
    if not re.search("[a-z]",p):
        continue
    elif not re.search("[0-9]",p):
        continue
    elif not re.search("[A-Z]",p):
        continue
    elif not re.search("[$#@]",p):
        continue
    elif re.search("\s",p):
        continue
    else:
        pass
    value.append(p)
print ",".join(value)
```

---

**내 솔루션: 파이썬 3**

```python
def is_low(x):                  # 문자열에 소문자가 있으면 True를 반환합니다.
    for i in x:
        if 'a'<=i and i<='z':
            return True
    return  False

def is_up(x):                   # 문자열에 대문자가 있으면 True를 반환합니다.
    for i in x:
        if 'A'<= i and i<='Z':
            return True
    return  False

def is_num(x):                  # 문자열에 숫자가 있으면 True를 반환합니다.
    for i in x:
        if '0'<=i and i<='9':
            return True
    return  False

def is_other(x):                # 문자열에 "$#@" 중 하나라도 있으면 True를 반환합니다.
    for i in x:
        if i=='$' or i=='#' or i=='@':
            return True
    return False

s = input().split(',')
lst = []

for i in s:
    length = len(i)
    if 6 <= length and length <= 12 and is_low(i) and is_up(i) and is_num(i) and is_other(i):   # 모든 요구 사항이 충족되었는지 확인합니다.
        lst.append(i)

print(",".join(lst))
```

**또는**

```python
def check(x):
    cnt = (6<=len(x) and len(x)<=12) # cnt는 초기에 조건 (6<=len(x) and len(x)<=12)이 참이면 1, 거짓이면 0이 됩니다.
    for i in x:
        if i.isupper():
            cnt+=1 # 대문자가 있으면 cnt를 1 증가시킵니다.
            break
    for i in x:
        if i.islower():
            cnt+=1 # 소문자가 있으면 cnt를 1 증가시킵니다.
            break
    for i in x:
        if i.isnumeric():
            cnt+=1 # 숫자가 있으면 cnt를 1 증가시킵니다.
            break
    for i in x:
        if i=='@' or i=='#'or i=='$':
            cnt+=1 # 특수문자가 있으면 cnt를 1 증가시킵니다.
            break
    return cnt == 5               # 총 5가지 조건이 모두 충족되면 True를 반환합니다. (길이 조건 + 4가지 문자 유형 조건)

s = input().split(',')
lst = filter(check,s)             # filter 함수는 check() 함수에 의해 True를 반환하는 s의 단어를 선택합니다.
print(",".join(lst))
```

**또는**

```python
import  re

s = input().split(',')
lst = []

for i in s:
    cnt = 0
    cnt+=(6<=len(i) and len(i)<=12)
    cnt+=bool(re.search("[a-z]",i))      # 여기서 re 모듈에는 re.search() 함수가 포함되어 있으며, 이 함수는 패턴 문자열 i가 [a-z]/[A-Z]/[0-9]/[@#$] 문자 중 하나와 일치하는 위치의 객체 정보를 반환합니다.
    cnt+=bool(re.search("[A-Z]",i))      # 일치하는 항목이 하나도 없으면 NONE을 반환하며, 이는 부울 표현식에서 False로 변환됩니다. 일치하는 항목이 있으면 True입니다.
    cnt+=bool(re.search("[0-9]",i))
    cnt+=bool(re.search("[@#$]",i))
    if cnt == 5:
        lst.append(i)

print(",".join(lst))
```

---

```python
'''솔루션 작성자: pratikb0501
'''
import re
a = input('비밀번호 입력: ').split(',')
pass_pattern = re.compile(r"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$#@]).{6,12}$") # 정규 표현식: 숫자, 소문자, 대문자, 특수문자($#@)를 각각 하나 이상 포함하고 길이는 6~12자여야 함
for i in a:
    if pass_pattern.fullmatch(i): # fullmatch는 전체 문자열이 패턴과 일치하는지 확인
        print(i)
```

**또는**

```python
import re
def multiple (patterns, string):
  for i in patterns:
    if not re.search(i, string): # 각 패턴에 대해 문자열 검색
      return False
  
  if 6 <= len(string) <= 12: # 길이 확인
    return True
  else:
    return False
x = str(input("비밀번호 입력: "))
patterns = [r"[a-z]", r"[A-Z]", r"[0-9]", r"[$|#|@]"] # 패턴 리스트
print(multiple(patterns, x))
```

---

# 문제 19

### **문제:**

> **_(이름, 나이, 점수) 튜플을 오름차순으로 정렬하는 프로그램을 작성해야 합니다. 여기서 이름은 문자열이고 나이와 점수는 숫자입니다. 튜플은 콘솔을 통해 입력됩니다. 정렬 기준은 다음과 같습니다:_**

- **_1: 이름 기준 정렬_**
- **_2: 그런 다음 나이 기준 정렬_**
- **_3: 그런 다음 점수 기준 정렬_**

> **_우선순위는 이름 > 나이 > 점수입니다._**

> **_다음 튜플이 프로그램에 입력으로 주어지면:_**

```
Tom,19,80
John,20,90
Jony,17,91
Jony,17,93
Json,21,85
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
[('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다. 여러 정렬 키를 사용하려면 itemgetter를 사용합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
from operator import itemgetter, attrgetter

l = []
while True:
    s = raw_input()
    if not s:
        break
    l.append(tuple(s.split(",")))

print sorted(l, key=itemgetter(0,1,2))
```

---

**내 솔루션: 파이썬 3**

```python
lst = []
while True:
    s = input().split(',')
    if not s[0]:                          # 빈 입력이면 중단합니다.
        break
    lst.append(tuple(s))

lst.sort(key= lambda x:(x[0],int(x[1]),int(x[2])))  # 여기서 키는 람다로 정의되고 데이터는 요소 우선순위 0>1>2에 따라 오름차순으로 정렬됩니다.
print(lst)
```

---

## 결론

**_위의 문제를 풀기 전에는 re(정규 표현식) 모듈과 그 사용법에 대해 전혀 몰랐습니다. 여러 키로 정렬하는 방법도 몰랐습니다. 이러한 문제를 다양한 방식으로 해결하기 위해 해당 구문을 탐색하고 배워야 했습니다. re 모듈에는 흥미로운 내용이 많지만 그중 많은 것을 이해하는 데 약간의 어려움을 겪었습니다._**

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%205.md "5일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%207.md "7일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

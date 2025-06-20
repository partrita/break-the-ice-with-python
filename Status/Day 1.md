# 문제 1

### **문제:**

> **_7로 나누어지지만 5의 배수는 아닌 2000과 3200 사이의 모든 숫자를 찾는 프로그램을 작성하십시오 (두 숫자 포함). 얻은 숫자는 한 줄에 쉼표로 구분된 시퀀스로 인쇄해야 합니다._**

---

### 힌트:

> **_range(#시작, #끝) 메소드 사용을 고려하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
l=[]
for i in range(2000, 3201):
    if (i%7==0) and (i%5!=0):
        l.append(str(i))

print ','.join(l)
```

---

**내 솔루션: 파이썬 3**
- **for 루프 사용**

```python
for i in range(2000,3201):
    if i%7 == 0 and i%5!=0:
        print(i,end=',')
print("\b")
```

---
- **제너레이터 및 리스트 컴프리헨션 사용**

```python
print(*(i for i in range(2000, 3201) if i%7 == 0 and i%5 != 0), sep=",")
```
# 문제 2

### **문제:**

> **_주어진 숫자의 계승을 계산할 수 있는 프로그램을 작성하십시오. 결과는 한 줄에 쉼표로 구분된 시퀀스로 인쇄해야 합니다. 다음과 같은 입력이 프로그램에 제공된다고 가정합니다: 8_**
> **_그러면 출력은 다음과 같아야 합니다: 40320_**

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def fact(x):
    if x == 0:
        return 1
    return x * fact(x - 1)

x = int(raw_input())
print fact(x)
```

---

**내 솔루션: 파이썬 3**

- **While 루프 사용**
  ```python
  n = int(input()) # input() 함수는 입력을 문자열 유형으로 받습니다.
                   # int()는 정수 유형으로 변환합니다.
  fact = 1
  i = 1
  while i <= n:
      fact = fact * i;
      i = i + 1
  print(fact)
  ```
- **For 루프 사용**
  ```python
  n = int(input()) # input() 함수는 입력을 문자열 유형으로 받습니다.
                  # int()는 정수 유형으로 변환합니다.
  fact = 1
  for i in range(1,n+1):
      fact = fact * i
  print(fact)
  ```
- **람다 함수 사용**

  ```python
  # 솔루션 작성자: harshraj22

  n = int(input())
  def shortFact(x): return 1 if x <= 1 else x*shortFact(x-1)
  print(shortFact(n))

  ```
---
```python
'''솔루션 작성자: minnielahoti
'''

while True:
try:
    num = int(input("숫자를 입력하세요: "))
    break
except ValueError as err:
    print(err)

org = num
fact = 1
while num:
    fact = num * fact
    num = num - 1
print(f'{org}의 계승은 {fact}입니다.')
```
---
```python
'''솔루션 작성자: KruthikaSR
'''
from functools import reduce

def fun(acc, item):
	return acc*item

num = int(input())
print(reduce(fun,range(1, num+1), 1))
```
---

# 문제 3

### **문제:**

> **_주어진 정수 n을 사용하여 (i, i x i)를 포함하는 사전을 생성하는 프로그램을 작성하십시오. 여기서 i는 1과 n (두 숫자 포함) 사이의 정수입니다. 그런 다음 프로그램은 사전을 인쇄해야 합니다. 다음과 같은 입력이 프로그램에 제공된다고 가정합니다: 8_**

> **_그러면 출력은 다음과 같아야 합니다:_**

```
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다. dict() 사용을 고려하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
n = int(raw_input())
d = dict()
for i in range(1,n+1):
    d[i] = i * i
print d
```

**내 솔루션: 파이썬 3:**

- **for 루프 사용**

```python
n = int(input())
ans = {}
for i in range (1,n+1):
    ans[i] = i * i
print(ans)
```

- **사전 컴프리헨션 사용**

```python
n = int(input())
ans={i : i*i for i in range(1,n+1)}
print(ans)
```
---
```python
'''솔루션 작성자: minnielahoti
   수정자: TheNobleKnight
'''

try:
    num = int(input("숫자를 입력하세요: "))
except ValueError as err:
    print(err)

dictio = dict()
for item in range(num+1):
    if item == 0:
        continue
    else:
	dictio[item] = item * item
print(dictio)
```
---
```python
'''솔루션 작성자: yurbika
   수정자: developer-47
'''

num = int(input("숫자: "))
print(dict(enumerate([i*i for i in range(1, num+1)], 1)))
```
---
## 결론

**_이것은 1일차에 해결된 문제들입니다. 위의 문제들은 기본 구문 학습자에게 매우 쉽습니다. 제 솔루션에서 몇 가지 쉬운 코딩 방법을 보여주었습니다. 다음 날 새로운 문제에 어떻게 대처하고 공격하는지 봅시다._**

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%202.md "다음 날")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

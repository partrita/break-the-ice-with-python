# 문제 14

### **문제:**

> **_문장을 입력받아 대문자 수와 소문자 수를 계산하는 프로그램을 작성하십시오._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
Hello world!
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
UPPER CASE 1
LOWER CASE 9
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
s = raw_input()
d = {"UPPER CASE":0, "LOWER CASE":0}
for c in s:
    if c.isupper():
        d["UPPER CASE"]+=1
    elif c.islower():
        d["LOWER CASE"]+=1
    else:
        pass
print "UPPER CASE", d["UPPER CASE"]
print "LOWER CASE", d["LOWER CASE"]
```

---

**내 솔루션: 파이썬 3**

```python
word = input()
upper,lower = 0,0

for i in word:
    if 'a'<=i and i<='z' :
        lower+=1
    if 'A'<=i and i<='Z':
        upper+=1

print("UPPER CASE {0}\nLOWER CASE {1}".format(upper,lower))
```

**또는**

```python
word = input()
upper,lower = 0,0

for i in word:
        lower+=i.islower() # islower()는 소문자이면 1 (True)을, 아니면 0 (False)을 반환합니다. 파이썬에서 True는 1로, False는 0으로 처리됩니다.
        upper+=i.isupper() # isupper()는 대문자이면 1 (True)을, 아니면 0 (False)을 반환합니다.

print("UPPER CASE {0}\nLOWER CASE {1}".format(upper,lower))
```

**또는**

```python
word = input()
upper = sum(1 for i in word if i.isupper()) # sum 함수는 조건이 True이면 1을 누적하여 합산합니다.
lower = sum(1 for i in word if i.islower())

print("UPPER CASE {0}\nLOWER CASE {1}".format(upper,lower))
```

**또는**

```python
# 솔루션 작성자: Amitewu

string = input("문장을 입력하세요")
upper = 0
lower = 0
for x in string:
    if x.isupper() == True:
        upper += 1
    if x.islower() == True:
        lower += 1

print("UPPER CASE: ", upper)
print("LOWER CASE: ", lower)
```

---

# 문제 15

### **문제:**

> **_주어진 숫자를 a 값으로 사용하여 a+aa+aaa+aaaa 값을 계산하는 프로그램을 작성하십시오._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
9
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
11106
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
a = raw_input()
n1 = int( "%s" % a )
n2 = int( "%s%s" % (a,a) )
n3 = int( "%s%s%s" % (a,a,a) )
n4 = int( "%s%s%s%s" % (a,a,a,a) )
print n1+n2+n3+n4
```

---

**내 솔루션: 파이썬 3**

```python
a = input()
total,tmp = 0,str()        # 정수와 빈 문자열 초기화

for i in range(4):
    tmp+=a               # 'a'를 'tmp'에 연결합니다.
    total+=int(tmp)      # 문자열 유형을 정수 유형으로 변환합니다.

print(total)
```

**또는**

```python
a = input()
total = int(a) + int(2*a) + int(3*a) + int(4*a)  # N*a=Na, 예를 들어 a="23", 2*a="2323", 3*a="232323"
print(total)
```
---
```python
'''솔루션 작성자: ChichiLovesDonkeys
'''
from functools import reduce
x = input('숫자를 입력하세요:')
reduce(lambda x, y: int(x) + int(y), [x*i for i in range(1,5)])
```
---
```python
'''솔루션 작성자: lcastrooliveira
'''
def question_15(string_digit):
    return sum(int(string_digit * n) for n in range(1, 5))

inp = input()
print(question_15(inp))
```
---
```python
'''솔루션 작성자: apenam7
'''
a = input()
print(sum(int(i*a) for i in range(1,5)))
```
---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%203.md "3일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%205.md "5일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

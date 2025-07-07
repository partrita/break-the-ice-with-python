# 문제 38

### **문제:**

> **_주어진 튜플 (1,2,3,4,5,6,7,8,9,10)에 대해, 처음 절반의 값은 한 줄에, 마지막 절반의 값은 다른 한 줄에 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트:

> **_튜플에서 슬라이스를 가져오려면 [n1:n2] 표기법을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
tp = (1,2,3,4,5,6,7,8,9,10)
tp1 = tp[:5] # 튜플 tp의 처음부터 인덱스 5 이전까지 (즉, 처음 5개 요소)
tp2 = tp[5:] # 튜플 tp의 인덱스 5부터 끝까지 (즉, 나머지 5개 요소)
print tp1
print tp2
```

---

**내 솔루션: 파이썬 3**

```python
tpl = (1,2,3,4,5,6,7,8,9,10)

for i in range(0,5): # 0부터 4까지 반복
    print(tpl[i],end = ' ') # tpl[i]를 출력하고 공백으로 끝냅니다 (줄 바꿈 안 함).
print() # 줄 바꿈
for i in range(5,10): # 5부터 9까지 반복
    print(tpl[i],end = ' ') # tpl[i]를 출력하고 공백으로 끝냅니다.
```

**또는**

```python
tpl = (1,2,3,4,5,6,7,8,9,10)
lst1,lst2 = [],[] # 빈 리스트 두 개 생성

for i in range(0,5):
    lst1.append(tpl[i]) # 처음 5개 요소를 lst1에 추가

for i in range(5,10):
    lst2.append(tpl[i]) # 나머지 5개 요소를 lst2에 추가

print(lst1)
print(lst2)
```
----

```python

'''
솔루션 작성자: CoffeeBrakeInc
'''

tup = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
lt = int(len(tup)/2) # 튜플 길이의 절반을 정수로 계산
print(tup[:lt], tup[lt:]) # 처음 절반과 나머지 절반을 각각 출력
```

---

```python

'''
솔루션 작성자: AasaiAlangaram
'''

tp = (1,2,3,4,5,6,7,8,9,10)

print('원본 튜플:',tp)

# 리스트 컴프리헨션을 사용하여 5개 요소씩 분할하여 출력
[print('분할된 리스트 :{List}'.format(List = tp[x:x+5])) for x in range(0,len(tp),5)]
# range(0, len(tp), 5)는 0, 5를 생성합니다.
# x가 0일 때 tp[0:5] 출력
# x가 5일 때 tp[5:10] 출력
```

---
```python

'''
솔루션 작성자: saxenaharsh24
'''

tup = [i for i in range(1, 11)] # 1부터 10까지 숫자를 포함하는 리스트 생성
print(f'{tuple(tup[:5])} \n{tuple(tup[5:])}') # 리스트의 처음 5개 요소를 튜플로, 나머지 5개 요소를 튜플로 변환하여 각각 다른 줄에 출력
```

# 문제 39

### **문제:**

> **_주어진 튜플 (1,2,3,4,5,6,7,8,9,10)에서 짝수 값만 포함하는 다른 튜플을 생성하고 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트:

> **_튜플을 반복하려면 "for"를 사용하십시오. 리스트에서 튜플을 생성하려면 tuple()을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
tp = (1,2,3,4,5,6,7,8,9,10)
li = list()
for i in tp: # tp의 각 요소 i에 대해 반복
	if tp[i]%2 == 0: # 이 부분은 tp[i] 대신 i를 사용해야 합니다. tp의 인덱스가 아니라 요소 자체를 확인해야 합니다.
                     # 예를 들어 i가 1이면 tp[1]은 2입니다. i가 2이면 tp[2]는 3입니다.
                     # 올바른 조건: if i % 2 == 0:
		li.append(tp[i]) # 여기도 tp[i] 대신 i를 사용해야 합니다.

tp2 = tuple(li)
print tp2
```
**참고:** 위 주 저자 솔루션에는 `tp[i]`를 사용하는 부분에 오류가 있습니다. `i` 자체가 튜플의 요소이므로 `i % 2 == 0` 및 `li.append(i)`로 수정해야 합니다.

---

**내 솔루션: 파이썬 3**

```python
tpl = (1,2,3,4,5,6,7,8,9,10)
tpl1 = tuple(i for i in tpl if i%2 == 0) # 튜플 tpl의 각 요소 i에 대해 i가 짝수이면 해당 i를 포함하는 제너레이터를 튜플로 변환합니다.
print(tpl1)
```

**또는**

```python
tpl = (1,2,3,4,5,6,7,8,9,10)
tpl1 = tuple(filter(lambda x : x%2==0,tpl))  # 람다 함수는 짝수 요소를 찾으면 True를 반환합니다.
                                             # filter는 함수가 False를 반환하는 데이터를 제거합니다.
print(tpl1)
```

---

# 문제 40

### **문제:**

> **_문자열을 입력으로 받아 문자열이 "yes" 또는 "YES" 또는 "Yes"이면 "Yes"를 인쇄하고 그렇지 않으면 "No"를 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트:

> **_조건을 판단하려면 if 문을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
s= raw_input()
if s=="yes" or s=="YES" or s=="Yes":
    print "Yes"
else:
    print "No"
```

---

**솔루션: 파이썬 3**

```python
'''
솔루션 작성자: Seawolf159
'''
text = input("무언가를 입력하세요. --> ")
if text == "yes" or text == "YES" or text == "Yes":
    print("Yes")
else:
    print("No")
```

---

```python
'''
솔루션 작성자: AasaiAlangaram
'''
input_str = input('문자열 입력:') # 변수명을 input에서 input_str로 변경 (input은 내장 함수 이름과 충돌)
output = ''.join(['Yes' if input_str == 'yes' or input_str =='YES' or input_str =='Yes' else 'No' ]) # 조건부 표현식을 사용하여 'Yes' 또는 'No'를 리스트에 넣고 join으로 문자열화
print(str(output))
```
----------------
```python
'''
솔루션 작성자: Prashanth
'''
x = str(input().lower()) # 입력을 받아 소문자로 변환
if x == 'yes': # 소문자로 변환된 입력이 'yes'인지 비교
    print('Yes')
else:
    print('No')
```
--------

# 문제 41

### **문제:**

> **_map()을 사용하여 [1,2,3,4,5,6,7,8,9,10]의 요소 제곱 값으로 구성된 리스트를 만드는 프로그램을 작성하십시오._**

---

### 힌트:

> **_map()을 사용하여 리스트를 생성하십시오. 익명 함수를 정의하려면 lambda를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
li = [1,2,3,4,5,6,7,8,9,10]
squaredNumbers = map(lambda x: x**2, li) # li의 각 요소 x에 대해 x**2를 계산하여 map 객체 반환 (Python 2에서는 리스트 반환)
print squaredNumbers
```

---

**내 솔루션: 파이썬 3**

```python
# 문제 설명에서 요구 사항이 구체적으로 언급되었으므로 다른 방식의 코드는 작성하지 않았습니다.

li = [1,2,3,4,5,6,7,8,9,10]
squaredNumbers = map(lambda x: x**2, li)  # map 유형 객체 데이터를 반환합니다.
print(list(squaredNumbers))               # 객체를 리스트로 변환합니다.
```
---
```python
'''
솔루션 작성자: saxenaharsh24
'''
def sqrs(item): # 제곱을 계산하는 함수 정의
    return item ** 2


lst = [i for i in range(1, 11)] # 1부터 10까지의 리스트 생성
print(list(map(sqrs, lst))) # map을 사용하여 lst의 각 요소에 sqrs 함수 적용
```
---

# 문제 42

### **문제:**

> **_map()과 filter()를 사용하여 [1,2,3,4,5,6,7,8,9,10]에서 짝수의 제곱 값으로 구성된 리스트를 만드는 프로그램을 작성하십시오._**

---

### 힌트:

> **_map()을 사용하여 리스트를 생성하십시오. filter()를 사용하여 리스트의 요소를 필터링하십시오. 익명 함수를 정의하려면 lambda를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
li = [1,2,3,4,5,6,7,8,9,10]
evenNumbers = map(lambda x: x**2, filter(lambda x: x%2==0, li)) # 먼저 filter로 짝수만 거르고, 그 결과에 map으로 제곱 적용
print evenNumbers
```

---

**내 솔루션: 파이썬 3**

```python
def even(x): # 짝수인지 확인하는 함수
    return x%2==0

def squer(x): # 제곱하는 함수 (오타: squer -> square)
    return x*x

li = [1,2,3,4,5,6,7,8,9,10]
li = map(squer,filter(even,li))   # 먼저 even 함수로 숫자를 필터링한 다음 결과 요소에 map()을 적용합니다.
print(list(li))
```
---
```python
"""
솔루션 작성자: saxenaharsh24
"""
def even(item): # 짝수이면 제곱을 반환하고, 홀수이면 아무것도 반환하지 않는 (None을 반환하는) 함수
    if item % 2 == 0:
        return item**2


lst = [i for i in range(1, 11)]
# map(even, lst)의 결과는 [None, 4, None, 16, None, 36, None, 64, None, 100]과 유사합니다.
# filter(lambda j: j is not None, ...)는 None이 아닌 요소만 필터링합니다.
print(list(filter(lambda j: j is not None, list(map(even, lst)))))
```
---

# 문제 43

### **문제:**

> **_filter()를 사용하여 1과 20 사이(둘 다 포함)의 짝수로 구성된 리스트를 만드는 프로그램을 작성하십시오._**

---

### 힌트:

> **_filter()를 사용하여 리스트의 요소를 필터링하십시오. 익명 함수를 정의하려면 lambda를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
evenNumbers = filter(lambda x: x%2==0, range(1,21)) # range(1,21)의 각 요소 x에 대해 x가 짝수인지 확인하여 필터링
print evenNumbers
```

---

**내 솔루션: 파이썬 3**

```python
def even(x): # 짝수인지 확인하는 함수
    return x%2==0

evenNumbers = filter(even, range(1,21)) # range(1,21)의 각 요소에 대해 even 함수를 적용하여 필터링
print(list(evenNumbers)) # filter 객체를 리스트로 변환하여 출력
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_10.md "10일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_12.md "12일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

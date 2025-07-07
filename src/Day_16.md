# 문제 60

### **문제**

> **_다음을 계산하는 프로그램을 작성하십시오:_**

```
f(n)=f(n-1)+100 (n>0 일 때)
f(0)=0
```

> **_콘솔에서 주어진 n(n>0)을 사용합니다._**

> **_예시:
> 다음 n이 프로그램에 입력으로 주어지면:_**

```
5
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
500
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_파이썬에서 재귀 함수를 정의할 수 있습니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def f(n):
    if n==0:
        return 0
    else:
        return f(n-1)+100 # n이 0이 아니면 f(n-1) + 100을 반환 (재귀 호출)

n=int(raw_input()) # 사용자로부터 n 입력
print f(n)
```

---

**내 솔루션: 파이썬 3**

```python
def f(n):
    if n == 0:
        return 0
    return f(n-1) + 100

n = int(input())
print(f(n))
```
---
```python

'''솔루션 작성자: NikolayEm
'''

n = int(input())
f = lambda x: f(x-1)+100 if x > 0 else 0 # 람다를 사용한 재귀 함수 정의
print(f(n))

```

---

# 문제 61

### **문제**

> **_피보나치 수열은 다음 공식에 따라 계산됩니다:_**

```
f(n)=0 (n=0 일 때)
f(n)=1 (n=1 일 때)
f(n)=f(n-1)+f(n-2) (n>1 일 때)
```

> **_콘솔에서 주어진 n에 대해 f(n) 값을 계산하는 프로그램을 작성하십시오._**

> **_예시:
> 다음 n이 프로그램에 입력으로 주어지면:_**

```
7
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
13
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_파이썬에서 재귀 함수를 정의할 수 있습니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def f(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return f(n-1)+f(n-2) # n이 0 또는 1이 아니면 f(n-1) + f(n-2) 반환 (재귀 호출)

n=int(raw_input())
print f(n)
```

---

**내 솔루션: 파이썬 3**

```python
def f(n):
    if n < 2: # n이 0 또는 1이면 n을 반환
        return n
    return f(n-1) + f(n-2) # 그렇지 않으면 f(n-1) + f(n-2) 반환

n = int(input())
print(f(n))
```

---
```python

'''솔루션 작성자: NikolayEm
'''

n = int(input())
# 람다를 사용하여 피보나치 함수 정의
f = lambda x: 0 if x == 0 else 1 if x == 1 else f(x-1)+f(x-2)
# 0부터 n까지의 피보나치 수열을 쉼표로 구분하여 출력 (문제에서는 f(n)만 요구했지만, 이 솔루션은 전체 수열을 출력)
print(','.join([str(f(x)) for x in range(0, n+1)]))

```
---

# 문제 62

### **문제**

> **_피보나치 수열은 다음 공식에 따라 계산됩니다:_**

```
f(n)=0 (n=0 일 때)
f(n)=1 (n=1 일 때)
f(n)=f(n-1)+f(n-2) (n>1 일 때)
```

> **_콘솔에서 주어진 n에 대해 f(n) 값을 계산하는 프로그램을 작성하십시오._** (주: 문제 설명은 f(n)을 요구하지만, 예제 출력은 0부터 n까지의 피보나치 수열입니다. 예제 출력에 맞추겠습니다.)

> **_예시:
> 다음 n이 프로그램에 입력으로 주어지면:_**

```
7
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
0,1,1,2,3,5,8,13
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_파이썬에서 재귀 함수를 정의할 수 있습니다.
> 기존 리스트에서 리스트를 생성하려면 리스트 컴프리헨션을 사용하십시오.
> 문자열 리스트를 결합하려면 string.join()을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def f(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return f(n-1)+f(n-2)

n=int(raw_input())
values = [str(f(x)) for x in range(0, n+1)] # 0부터 n까지 각 x에 대해 f(x)를 계산하고 문자열로 변환하여 리스트 생성
print ",".join(values) # 리스트의 요소들을 쉼표로 구분하여 출력
```

---

**내 솔루션: 파이썬 3** (메모이제이션 사용)

```python
def f(n):
    if n < 2:
        fibo[n] = n
        return fibo[n]
    # fibo[n]이 이미 계산되었다면 해당 값을 사용 (메모이제이션)
    if fibo[n] == 0 and n != 0 : # 0번째 값은 0이므로, n이 0이 아닐 때만 fibo[n]이 0인지 확인
        fibo[n] = f(n-1) + f(n-2)
    elif n==0 : # fibo[0]은 0으로 초기화 되어 있으므로 그대로 반환
        return fibo[n]
    # 이미 계산된 값이 있다면 바로 반환 (이 부분은 위의 if 조건과 중복될 수 있으므로 로직 수정 필요)
    # 아래와 같이 수정하는 것이 더 명확합니다.
    # if fibo[n] != -1: # -1 등으로 초기화했다고 가정
    #    return fibo[n]
    # if n < 2: etc.

    # 현재 로직은 fibo 리스트를 외부에서 접근하고 수정합니다.
    # 더 나은 방법은 fibo 리스트를 f 함수의 인자로 전달하거나 클래스 멤버로 만드는 것입니다.
    # 아래는 주어진 코드 구조를 최대한 유지한 수정입니다.
    if fibo[n] == 0 and n!=0 : # 아직 계산되지 않았고, n이 0이 아니면 계산
        fibo[n] = f(n-1) + f(n-2)
    # n이 0이거나 n=1인 경우는 이미 위에서 처리됨 (fibo[0]=0, fibo[1]=1)
    # 또는 이미 계산된 경우 (fibo[n]이 0이 아닌 값을 가짐)
    return fibo[n]


n = int(input())
fibo = [0]*(n+1)  # (n+1) 크기의 리스트를 0으로 초기화
# 초기 조건 설정 (f(0)=0, f(1)=1인 경우)
if n>=0:
    fibo[0] = 0
if n>=1:
    fibo[1] = 1 # 이 부분을 f 함수 내부에서 처리하거나, f 함수 호출 전에 명시적으로 설정해야 함.
                # 현재 f 함수는 fibo[1]을 설정하지만, f(n) 호출 시 n<2 조건에서 fibo[n]=n으로 설정.

# f(n)을 호출하여 fibo 리스트를 채웁니다.
# 가장 큰 값부터 계산하도록 f(n)을 호출하면 작은 값들이 재귀적으로 계산됩니다.
# 하지만, 현재 f 함수는 fibo 리스트를 직접 수정하므로,
# 단순히 f(n)을 호출하는 것만으로는 fibo 리스트 전체가 올바르게 채워지지 않을 수 있습니다.
# 예: f(7) 호출 시 f(0)부터 f(7)까지 채워지도록 의도된 것으로 보입니다.

# 보다 일반적인 메모이제이션 접근 방식:
# fibo = [-1]*(n+1) # -1로 초기화하여 계산 여부 확인
# def f_memo(k):
#   if k < 2: return k
#   if fibo[k] != -1: return fibo[k]
#   fibo[k] = f_memo(k-1) + f_memo(k-2)
#   return fibo[k]
# result_list = [str(f_memo(i)) for i in range(n + 1)]
# print(",".join(result_list))

# 주어진 솔루션의 의도를 따라가겠습니다.
# f(n)을 호출하면 fibo[0]부터 fibo[n]까지 채워진다고 가정.
# (실제로는 f 함수 내부에서 n<2일 때 fibo[n]=n으로 할당하고, 그 외에는 fibo[n] = f(n-1)+f(n-2)로 할당)
# 이 방식은 fibo 리스트가 f 함수 외부 스코프에 정의되어 있고, f가 이를 직접 수정하는 방식입니다.

# fibo 리스트를 f 함수가 올바르게 채우도록 하려면, f 함수가 호출될 때마다
# 해당 인덱스의 값이 이미 채워져 있는지 확인하고, 아니라면 계산해야 합니다.
# 현재 코드는 f(n)을 한 번 호출합니다.

# 명확성을 위해, 각 f(i)를 호출하여 fibo 리스트를 채우는 방식으로 변경하거나,
# f 함수가 정확히 메모이제이션을 수행하도록 수정합니다.
# 여기서는 문제의 원래 의도(f(n) 호출로 전체 리스트 생성)를 따르기 어렵지만,
# 각 요소를 순서대로 계산하는 방식으로 수정하여 제시합니다.
for i in range(n + 1):
    if i < 2:
        fibo[i] = i
    else:
        fibo[i] = fibo[i-1] + fibo[i-2]

fibo_str = [str(i) for i in fibo]   # 정수 데이터를 문자열 유형으로 변환
ans = ",".join(fibo_str)    # fibo의 모든 문자열 요소를 ',' 문자로 결합
print(ans)

```
---
```python

'''솔루션 작성자: popomaticbubble
'''
def fibo(n): # 단순 재귀 피보나치 함수
    if n < 2: return n
    return fibo(n-1)+fibo(n-2)

def print_fiblist(n):
    # 0부터 n까지 각 i에 대해 fibo(i)를 호출하고 문자열로 변환하여 리스트 생성
    fib_list = [(str(fibo(i))) for i in range(0, n+1)]
    return print(",".join(fib_list)) # 리스트를 쉼표로 구분하여 출력
n = int(input())
print_fiblist(n)

```
---
```python
'''솔루션 작성자: lcastrooliveira
'''
# 반복적 피보나치 수열 생성 함수
def question_62(n):
    if n == 0:
        return [0]
    if n == 1:
        return [0, 1]
    sequence = [0, 1] # 초기값 설정
    a, b = 0, 1 # 이전 두 값
    for x in range(2, n+1): # 2부터 n까지 반복
        c = a + b # 다음 피보나치 수 계산
        sequence.append(c) # 수열에 추가
        a = b # 값 업데이트
        b = c
    return sequence

print(question_62(10)) # 예시로 10까지의 피보나치 수열 출력
```
---

# 문제 63

### **문제**

> **_제너레이터를 사용하여 0과 n 사이의 짝수를 쉼표로 구분된 형태로 인쇄하는 프로그램을 작성하십시오. n은 콘솔을 통해 입력됩니다._**

> **_예시:
> 다음 n이 프로그램에 입력으로 주어지면:_**

```
10
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
0,2,4,6,8,10
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_제너레이터에서 다음 값을 생성하려면 yield를 사용하십시오._**

---

**솔루션: (Python 2 기준)**

```python
def EvenGenerator(n): # 0부터 n까지 짝수를 생성하는 제너레이터
    i=0
    while i<=n:
        if i%2==0:
            yield i # i가 짝수이면 반환
        i+=1


n=int(raw_input()) # Python 2 입력 방식
values = []
for i in EvenGenerator(n):
    values.append(str(i)) # 생성된 짝수를 문자열로 변환하여 리스트에 추가

print ",".join(values) # 쉼표로 구분하여 출력
```

**또는 (Python 3 기준)**

```python
# 솔루션 작성자: StartZer0
n = int(input()) # Python 3 입력 방식

for i in range(0, n+1, 2): # 0부터 n까지 2씩 증가하며 반복 (즉, 짝수만)
  if i < n -1 and i != n : # 현재 짝수가 n-1보다 작고 n이 아니면 (즉, 마지막 짝수가 아니면)
    print(i, end = ',' )   # 쉼표와 함께 출력
  else: # 마지막 짝수이면
    print(i)               # 숫자만 출력 (쉼표 없음)
# 위 StartZer0 솔루션의 조건 i < n - 1은 마지막 두 짝수에 대해 다르게 동작할 수 있습니다.
# 예를 들어 n=10일 때, i=8이면 8 < 9 참, 8 출력. i=10일 때 10 < 9 거짓, 10 출력.
# n=9일 때, i=8이면 8 < 8 거짓, 8 출력.
# 좀 더 간단한 방법:
# values = []
# for i in EvenGenerator(n):
#   values.append(str(i))
# print(",".join(values))
# 또는 제너레이터 직접 사용:
# print(",".join(str(i) for i in EvenGenerator(n)))
```

---

# 문제 64

### **문제**

> **_제너레이터를 사용하여 0과 n 사이에서 5와 7로 모두 나누어지는 숫자를 쉼표로 구분된 형태로 인쇄하는 프로그램을 작성하십시오. n은 콘솔을 통해 입력됩니다._**

> **_예시:
> 다음 n이 프로그램에 입력으로 주어지면:_**

```
100
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
0,35,70
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_제너레이터에서 다음 값을 생성하려면 yield를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def NumGenerator(n): # 0부터 n까지 5와 7로 모두 나누어지는 숫자를 생성하는 제너레이터
    for i in range(n+1):
        if i%5==0 and i%7==0: # 5와 7로 모두 나누어지면
            yield i # 반환

n=int(raw_input())
values = []
for i in NumGenerator(n):
    values.append(str(i))

print ",".join(values)
```

---

**내 솔루션: 파이썬 3**

```python
def generate(n):
    for i in range(n+1):
        if i % 35 == 0:    # 5*7 = 35, 숫자가 a와 b로 나누어지면 a*b로도 나누어집니다 (a, b가 서로소일 때).
            yield i

n = int(input())
resp = [str(i) for i in generate(n)] # 제너레이터에서 생성된 각 숫자를 문자열로 변환하여 리스트 생성
print(",".join(resp)) # 쉼표로 구분하여 출력
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_15.md "15일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_17.md "17일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

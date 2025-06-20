# 문제 70

### **문제**

> **_random 모듈과 리스트 컴프리헨션을 사용하여 0과 10 사이(경계값 포함)의 임의의 짝수를 출력하는 프로그램을 작성하십시오._**

---

### 힌트

> **_리스트에서 임의의 요소를 선택하려면 random.choice()를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
li = [2,4,6,8] # 이 리스트는 사용되지 않습니다.
import random
# 0부터 10까지 숫자 중 짝수인 i로 리스트를 만들고, 그 중에서 무작위로 하나 선택
print random.choice([i for i in range(11) if i%2==0])
```

---

**내 솔루션: 파이썬 3**

```python
import random
resp = [i for i in range(0,11,2)] # 0부터 10까지 2씩 증가하는 숫자(짝수)로 리스트 생성
print(random.choice(resp)) # 리스트에서 무작위로 하나 선택하여 출력
```

---

# 문제 71

### **문제**

> **_random 모듈과 리스트 컴프리헨션을 사용하여 10과 150 사이(경계값 포함)에서 5와 7로 모두 나누어지는 임의의 숫자를 출력하는 프로그램을 작성하십시오._**

---

### 힌트

> **_리스트에서 임의의 요소를 선택하려면 random.choice()를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import random
# 10부터 150까지 숫자 중 5와 7로 모두 나누어지는 i로 리스트를 만들고, 그 중에서 무작위로 하나 선택
print random.choice([i for i in range(10,151) if i%5==0 and i%7==0])
```

---

**내 솔루션: 파이썬 3**

```python
import random
# 10부터 150까지 숫자 중 35 (5*7)로 나누어지는 i로 리스트 생성
resp = [i for i in range(10,151) if i % 35 == 0 ]
print(random.choice(resp)) # 리스트에서 무작위로 하나 선택하여 출력
```

---

# 문제 72

### **문제**

> **_100과 200 사이(경계값 포함)의 임의의 숫자 5개로 구성된 리스트를 생성하는 프로그램을 작성하십시오._**

---

### 힌트

> **_임의의 값으로 구성된 리스트를 생성하려면 random.sample()을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python

import random
# range(100,201) (100부터 200까지)에서 중복 없이 5개의 숫자를 무작위로 선택하여 리스트 생성
print random.sample(range(100,201), 5)
```

---

**내 솔루션: 파이썬 3**

```python
import random
resp = random.sample(range(100,201),5) # range(100,201)에서 5개의 샘플 추출
print(resp)
```

---

# 문제 73

### **문제**

> **_100과 200 사이(경계값 포함)의 임의의 짝수 5개로 구성된 리스트를 무작위로 생성하는 프로그램을 작성하십시오._**

---

### 힌트

> **_임의의 값으로 구성된 리스트를 생성하려면 random.sample()을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python

import random
# 100부터 200까지 숫자 중 짝수인 i로 리스트를 만들고, 그 중에서 중복 없이 5개의 숫자를 무작위로 선택
print random.sample([i for i in range(100,201) if i%2==0], 5)

```

---

**내 솔루션: 파이썬 3**

```python
import random
# range(100,201,2)는 100부터 200까지 짝수만 생성
resp = random.sample(range(100,201,2),5)
print(resp)
```

---

# 문제 74

### **문제**

> **_1과 1000 사이(경계값 포함)에서 5와 7로 모두 나누어지는 임의의 숫자 5개로 구성된 리스트를 무작위로 생성하는 프로그램을 작성하십시오._**

---

### 힌트

> **_임의의 값으로 구성된 리스트를 생성하려면 random.sample()을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python

import random
# 1부터 1000까지 숫자 중 5와 7로 모두 나누어지는 i로 리스트를 만들고, 그 중에서 중복 없이 5개의 숫자를 무작위로 선택
print random.sample([i for i in range(1,1001) if i%5==0 and i%7==0], 5)
```

---

**내 솔루션: 파이썬 3**

```python
import random
# 1부터 1000까지 숫자 중 35로 나누어지는 i로 리스트 생성
lst = [i for i in range(1,1001) if i%35 == 0]
resp = random.sample(lst,5) # 위 리스트에서 5개의 샘플 추출
print(resp)
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_17.md "17일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_19.md "19일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

# 문제 31

### **문제:**

> **_키가 1과 20 사이의 숫자(둘 다 포함)이고 값이 키의 제곱인 사전을 인쇄할 수 있는 함수를 정의하십시오._**

---

### 힌트:

```
dict[key]=value 패턴을 사용하여 사전에 항목을 넣습니다. 숫자의 거듭제곱을 얻으려면 ** 연산자를 사용합니다. 루프에는 range()를 사용합니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def printDict():
	d=dict()
	for i in range(1,21):
		d[i]=i**2
	print d

printDict()
```

---

**내 솔루션: 파이썬 3**

```python
def printDict():
    dict={i:i**2 for i in range(1,21)}   # 컴프리헨션 메소드 사용
    print(dict)

printDict()
```

---

# 문제 32

### **문제:**

> **_키가 1과 20 사이의 숫자(둘 다 포함)이고 값이 키의 제곱인 사전을 생성할 수 있는 함수를 정의하십시오. 함수는 키만 인쇄해야 합니다._**

---

### 힌트:

```
dict[key]=value 패턴을 사용하여 사전에 항목을 넣습니다. 숫자의 거듭제곱을 얻으려면 ** 연산자를 사용합니다. 루프에는 range()를 사용합니다. 사전의 키를 반복하려면 keys()를 사용합니다. 또한 item()을 사용하여 키/값 쌍을 가져올 수 있습니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def printDict():
	d=dict()
	for i in range(1,21):
		d[i]=i**2
	for k in d.keys(): # d.keys()는 딕셔너리 d의 모든 키를 리스트로 반환합니다.
		print k
printDict()
```

---

**내 솔루션: 파이썬 3**

```python
def printDict():
    dict = {i: i**2 for i in range(1, 21)}
    print(dict.keys())      # 사전의 키를 인쇄합니다.
                            # Python 3에서 dict.keys()는 dict_keys 객체를 반환합니다. 리스트로 보려면 list(dict.keys())를 사용합니다.

printDict()
```

---

# 문제 33

### **문제:**

> **_값이 1과 20 사이의 숫자(둘 다 포함)의 제곱인 리스트를 생성하고 인쇄할 수 있는 함수를 정의하십시오._**

---

### 힌트:

```
숫자의 거듭제곱을 얻으려면 ** 연산자를 사용합니다. 루프에는 range()를 사용합니다. 리스트에 값을 추가하려면 list.append()를 사용합니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def printList():
	li=list()
	for i in range(1,21):
		li.append(i**2)
	print li

printList()
```

---

**내 솔루션: 파이썬 3**

```python
def printList():
    lst = [i ** 2 for i in range(1, 21)] # 리스트 컴프리헨션을 사용하여 1부터 20까지 각 숫자 i의 제곱을 포함하는 리스트 lst를 생성합니다.
    print(lst)

printList()
```

---

# 문제 34

### **문제:**

> **_값이 1과 20 사이의 숫자(둘 다 포함)의 제곱인 리스트를 생성할 수 있는 함수를 정의하십시오. 그런 다음 함수는 리스트의 처음 5개 요소를 인쇄해야 합니다._**

---

### 힌트:

```
숫자의 거듭제곱을 얻으려면 ** 연산자를 사용합니다. 루프에는 range()를 사용합니다. 리스트에 값을 추가하려면 list.append()를 사용합니다. 리스트를 슬라이스하려면 [n1:n2]를 사용합니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def printList():
	li=list()
	for i in range(1,21):
		li.append(i**2)
	print li[:5] # 리스트 li의 처음부터 인덱스 5 이전까지의 요소 (즉, 처음 5개 요소)를 출력합니다.

printList()
```

---

**내 솔루션: 파이썬 3**

```python
def printList():
    lst = [i ** 2 for i in range(1, 21)] # 1부터 20까지 각 숫자의 제곱을 포함하는 리스트를 생성합니다.

    for i in range(5): # 0부터 4까지 반복합니다.
        print(lst[i]) # 리스트 lst의 i번째 요소를 출력합니다. 즉, 처음 5개 요소를 각각 다른 줄에 출력합니다.

printList()
```
---
```python
'''솔루션 작성자: popomaticbubble
'''
def squares(n):
    squares_list = [i**2 for i in range(1,n+1)] # 1부터 n까지 각 숫자의 제곱을 포함하는 리스트를 생성합니다.
    print(squares_list[0:5]) # 리스트의 처음 5개 요소를 출력합니다.
squares(20)
```
---

```python
'''솔루션 작성자: yuan1z'''
func = lambda :print([i**2 for i in range(1,21)][:5]) # 람다 함수 func: 1부터 20까지 각 숫자의 제곱을 포함하는 리스트를 생성하고, 그 리스트의 처음 5개 요소를 출력합니다.
```

---

# 문제 35

### **문제:**

> **_값이 1과 20 사이의 숫자(둘 다 포함)의 제곱인 리스트를 생성할 수 있는 함수를 정의하십시오. 그런 다음 함수는 리스트의 마지막 5개 요소를 인쇄해야 합니다._**

---

### 힌트:

```
숫자의 거듭제곱을 얻으려면 ** 연산자를 사용합니다. 루프에는 range()를 사용합니다. 리스트에 값을 추가하려면 list.append()를 사용합니다. 리스트를 슬라이스하려면 [n1:n2]를 사용합니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def printList():
	li=list()
	for i in range(1,21):
		li.append(i**2)
	print li[-5:] # 리스트 li의 뒤에서 5번째 요소부터 끝까지의 요소 (즉, 마지막 5개 요소)를 출력합니다.

printList()
```

---

**내 솔루션: 파이썬 3**

```python
def printList():
    lst = [i ** 2 for i in range(1, 21)] # 1부터 20까지 각 숫자의 제곱을 포함하는 리스트를 생성합니다.
    for i in range(19,14,-1): # 19부터 15까지 역순으로 반복합니다 (인덱스 19, 18, 17, 16, 15).
        print(lst[i]) # 리스트 lst의 i번째 요소를 출력합니다. 즉, 마지막 5개 요소를 역순으로 각각 다른 줄에 출력합니다.
                      # 만약 순서대로 출력하려면 print(lst[-5:]) 또는 print(lst[15:]) 와 같이 슬라이싱을 사용하거나,
                      # for i in range(15, 20): print(lst[i]) 와 같이 반복합니다.

printList()
```
---
```python
'''솔루션 작성자: popomaticbubble
'''
def squares(n):
    squares_list = [i**2 for i in range(1,n+1)] # 1부터 n까지 각 숫자의 제곱을 포함하는 리스트를 생성합니다.
    print(squares_list[-5:]) # 리스트의 마지막 5개 요소를 출력합니다.
squares(20)
```

---

# 문제 36

### **문제:**

> **_값이 1과 20 사이의 숫자(둘 다 포함)의 제곱인 리스트를 생성할 수 있는 함수를 정의하십시오. 그런 다음 함수는 리스트에서 처음 5개 요소를 제외한 모든 값을 인쇄해야 합니다._**

---

```
힌트: 숫자의 거듭제곱을 얻으려면 ** 연산자를 사용합니다. 루프에는 range()를 사용합니다. 리스트에 값을 추가하려면 list.append()를 사용합니다. 리스트를 슬라이스하려면 [n1:n2]를 사용합니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def printList():
	li=list()
	for i in range(1,21):
		li.append(i**2)
	print li[5:] # 리스트 li의 인덱스 5부터 끝까지의 요소 (즉, 처음 5개 요소를 제외한 나머지)를 출력합니다.

printList()
```

---

**내 솔루션: 파이썬 3**

```python
def printList():
    lst = [i ** 2 for i in range(1, 21)] # 1부터 20까지 각 숫자의 제곱을 포함하는 리스트를 생성합니다.
    for i in range(5,20): # 5부터 19까지 반복합니다.
        print(lst[i]) # 리스트 lst의 i번째 요소를 출력합니다. 즉, 인덱스 5부터 19까지의 요소를 각각 다른 줄에 출력합니다.

printList()
```

---

# 문제 37

### **문제:**

> **_값이 1과 20 사이의 숫자(둘 다 포함)의 제곱인 튜플을 생성하고 인쇄할 수 있는 함수를 정의하십시오._**

---

### 힌트:

```
숫자의 거듭제곱을 얻으려면 ** 연산자를 사용합니다. 루프에는 range()를 사용합니다. 리스트에 값을 추가하려면 list.append()를 사용합니다. 리스트에서 튜플을 얻으려면 tuple()을 사용합니다.
```

---

**주요 저자 솔루션: 파이썬 2**

```python
def printTuple():
	li=list()
	for i in range(1,21):
		li.append(i**2)
	print tuple(li) # 리스트 li를 튜플로 변환하여 출력합니다.

printTuple()
```

---

**내 솔루션: 파이썬 3**

```python
def printTupple(): # 함수 이름 오타 수정: printTuple
    lst = [i ** 2 for i in range(1, 21)] # 1부터 20까지 각 숫자의 제곱을 포함하는 리스트를 생성합니다.
    print(tuple(lst)) # 리스트 lst를 튜플로 변환하여 출력합니다.

printTupple() # 함수 이름 오타 수정: printTuple()
```

---

```python
'''
솔루션 작성자: Seawolf159
'''
def square_of_numbers():
    return tuple(i ** 2 for i in range(1, 21)) # 제너레이터 표현식을 사용하여 1부터 20까지 각 숫자 i의 제곱을 포함하는 튜플을 직접 생성하여 반환합니다.

print(square_of_numbers())
```

---

### 코멘트

**_이 섹션의 문제들은 매우 쉽고 모두 동일한 유형의 문제를 약간 변형한 것입니다. 주로 리스트, 사전, 튜플과 함께 사용되는 일반적으로 사용되는 일부 함수 작업을 사용하는 데 중점을 두었습니다. 전체 솔루션에서 효율적인 방식으로 문제를 해결하려고 시도하지 않았습니다. 오히려 제가 할 수 있는 다른 방식으로 해결하려고 노력했습니다. 이것은 초보자가 가장 간단한 문제를 다양한 방식으로 해결할 수 있는 방법을 아는 데 도움이 될 것입니다._**

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%209.md "9일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_11.md "11일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

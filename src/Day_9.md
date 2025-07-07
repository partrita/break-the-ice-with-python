# 문제 26

### **문제:**

> **_두 숫자의 합을 계산할 수 있는 함수를 정의하십시오._**

---

### 힌트:

> **_두 숫자를 인수로 사용하는 함수를 정의하십시오. 함수 내에서 합계를 계산하고 값을 반환할 수 있습니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def SumFunction(number1, number2):
	return number1 + number2

print SumFunction(1,2)
```

---

**내 솔루션: 파이썬 3**

```python
sum = lambda n1,n2 : n1 + n2      # 여기서 람다는 합계와 같은 작은 함수를 정의하는 데 사용됩니다.
print(sum(1,2))
```

---

# 문제 27

### **문제:**

> **_정수를 문자열로 변환하여 콘솔에 인쇄할 수 있는 함수를 정의하십시오._**

---

### 힌트:

> **_str()을 사용하여 숫자를 문자열로 변환하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def printValue(n):
	print str(n)

printValue(3)
```

---

**내 솔루션: 파이썬 3**

```python
conv = lambda x : str(x) # 람다 함수 conv는 입력 x를 문자열로 변환합니다.
n = conv(10)
print(n)
print(type(n))            # 변수의 유형을 확인합니다.
```

---

# 문제 28

### **문제:**

> **_문자열 형태로 두 개의 정수를 받아 합계를 계산한 다음 콘솔에 인쇄할 수 있는 함수를 정의하십시오._**

---

### 힌트:

> **_int()를 사용하여 문자열을 정수로 변환하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def printValue(s1,s2):
	print int(s1) + int(s2)
printValue("3","4") #7
```

---

**내 솔루션: 파이썬 3**

```python
sum = lambda s1,s2 : int(s1) + int(s2) # 람다 함수 sum은 문자열 s1, s2를 정수로 변환하여 더합니다.
print(sum("10","45"))      # 55
```

---

# 문제 29

### **문제:**

> **_두 개의 문자열을 입력으로 받아 연결한 다음 콘솔에 인쇄할 수 있는 함수를 정의하십시오._**

---

### 힌트:

> **_+ 기호를 사용하여 문자열을 연결하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def printValue(s1,s2):
	print s1 + s2

printValue("3","4") #34
```

---

**내 솔루션: 파이썬 3**

```python
sum = lambda s1,s2 : s1 + s2 # 람다 함수 sum은 문자열 s1과 s2를 연결합니다.
print(sum("10","45"))        # 1045
```

---

# 문제 30

### **문제:**

> **_두 개의 문자열을 입력으로 받아 콘솔에 최대 길이의 문자열을 인쇄할 수 있는 함수를 정의하십시오. 두 문자열의 길이가 같으면 함수는 모든 문자열을 한 줄씩 인쇄해야 합니다._**

---

### 힌트:

> **_len() 함수를 사용하여 문자열의 길이를 가져옵니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
def printValue(s1,s2):
	len1 = len(s1)
	len2 = len(s2)
	if len1 > len2:
		print s1
	elif len2 > len1:
		print s2
	else:
		print s1
		print s2

printValue("one","three")

```

---

**내 솔루션: 파이썬 3**

```python
def printVal(s1,s2):
    len1 = len(s1)
    len2 = len(s2)
    if len1 > len2:
        print(s1)
    elif len1 < len2:
        print(s2)
    else:
        print(s1)
        print(s2)

s1,s2=input().split() # 사용자로부터 공백으로 구분된 두 문자열을 입력받습니다.
printVal(s1,s2)
```

---

```python
'''솔루션 작성자: yuan1z'''
func = lambda a,b: print(max((a,b),key=len)) if len(a)!=len(b) else print(a+'\n'+b)
# 람다 함수 func:
# len(a)와 len(b)가 다르면, key=len을 사용하여 길이가 더 긴 문자열을 찾아 출력합니다.
# 길이가 같으면 a와 b를 각각 다른 줄에 출력합니다.
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%208.md "8일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_10.md "10일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

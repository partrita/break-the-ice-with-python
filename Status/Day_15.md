# 문제 54

### **문제**

> **_"username@companyname.com" 형식의 이메일 주소가 있다고 가정하고, 주어진 이메일 주소의 회사 이름을 인쇄하는 프로그램을 작성하십시오. 사용자 이름과 회사 이름은 모두 문자로만 구성됩니다._**

> **_예시:
> 다음 이메일 주소가 프로그램에 입력으로 주어지면:_**

```
john@google.com
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
google
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_\w를 사용하여 문자와 일치시킵니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import re
emailAddress = raw_input()
pat2 = "(\w+)@(\w+)\.(com)" # 패턴: 사용자이름@회사이름.com. 그룹 2가 회사이름 (\w+)
r2 = re.match(pat2,emailAddress)
print r2.group(2) # 두 번째 그룹 (회사 이름) 출력
```

---

**내 솔루션: 파이썬 3**

```python
import re

email = "john@google.com elise@python.com"
pattern = "\w+@(\w+)\.com" # 패턴: 사용자이름@회사이름.com. 회사이름을 그룹으로 지정. \.은 실제 점(.) 문자와 일치
ans = re.findall(pattern,email) # 패턴에 맞는 모든 회사 이름을 찾아 리스트로 반환
print(ans) # 예: ['google', 'python']
```

---

# 문제 55

### **문제**

> **_공백으로 구분된 단어 시퀀스를 입력으로 받아 숫자만으로 구성된 단어를 인쇄하는 프로그램을 작성하십시오._**

> **_예시:
> 다음 단어가 프로그램에 입력으로 주어지면:_**

```
2 cats and 3 dogs.
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
['2', '3']
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_정규식을 사용하여 모든 하위 문자열을 찾으려면 re.findall()을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import re
s = raw_input()
print re.findall("\d+",s) # \d+는 하나 이상의 숫자로 이루어진 시퀀스와 일치
```

---

**내 솔루션: 파이썬 3**

```python
import re

text_input = input() # 변수명을 email에서 text_input으로 변경하여 명확성 증대
pattern = "\d+"
ans = re.findall(pattern,text_input)
print(ans)
```

**또는**

```python
text_input = input().split() # 공백으로 단어 분리
ans = []
for word in text_input:
    if word.isdigit():     # isdigit()는 문자열이 모두 숫자로만 이루어져 있고 하나 이상의 문자가 있을 때 True 반환
       ans.append(word)    # isnumeric() / isdecimal() 함수도 유사하게 사용 가능
print(ans)
```

**또는**

```python
text_input = input().split()
ans = [word for word in text_input if word.isdigit()]  # 리스트 컴프리헨션 사용
print(ans)
```

---

# 문제 56

### **문제**

> **_유니코드 문자열 "hello world"를 인쇄하십시오._**

---

### 힌트

> **_유니코드 문자열을 정의하려면 u'문자열' 형식을 사용하십시오._** (주: 파이썬 3에서는 모든 문자열이 기본적으로 유니코드입니다.)

---

**주요 저자 솔루션: 파이썬 2**

```python
unicodeString = u"hello world!" # 파이썬 2에서 유니코드 문자열 명시
print unicodeString
```
**파이썬 3 참고:** 파이썬 3에서는 문자열 리터럴 앞에 `u`를 붙일 필요가 없습니다. `my_string = "hello world!"`와 같이 작성하면 `my_string`은 이미 유니코드 문자열입니다.

---

# 문제 57

### **문제**

> **_ASCII 문자열을 읽어 utf-8로 인코딩된 유니코드 문자열로 변환하는 프로그램을 작성하십시오._**

---

### 힌트

> **_변환하려면 unicode()/encode() 함수를 사용하십시오._** (주: 파이썬 2에서는 `unicode()`, 파이썬 3에서는 문자열의 `.encode()` 메소드)

---

**주요 저자 솔루션: 파이썬 2**

```python
s = raw_input() # ASCII 문자열 입력
u = unicode( s ,"utf-8") # 입력 문자열 s를 "utf-8" 인코딩을 사용하여 유니코드 문자열로 디코딩
print u
```

---

**내 솔루션: 파이썬 3**

```python
s = input() # 파이썬 3에서 input()은 유니코드 문자열을 반환합니다.
# 만약 s가 이미 유니코드 문자열이고 이를 UTF-8 바이트 시퀀스로 "인코딩"하려면 .encode()를 사용합니다.
# 문제의 의도가 "ASCII 문자열을 읽어" -> "UTF-8 바이트로 변환"이라면 아래가 맞습니다.
u = s.encode('utf-8') # 문자열 s를 UTF-8 바이트 시퀀스로 인코딩
print(u) # 바이트 시퀀스 출력 (예: b'hello')

# 만약 문제의 의도가 "바이트 시퀀스(ASCII로 가정)를 읽어" -> "유니코드 문자열로 변환(디코딩)"이라면,
# 예를 들어 바이트 문자열을 입력받는 상황을 가정해야 합니다.
# s_bytes = b"some ascii string"
# u_string = s_bytes.decode('ascii').encode('utf-8') # ASCII 바이트 -> 유니코드 문자열 -> UTF-8 바이트
# print(u_string)
# 하지만 일반적인 input()은 이미 유니코드 문자열을 다룹니다.
```

---

# 문제 58

### **문제**

> **_파이썬 소스 코드 파일이 유니코드임을 나타내는 특수 주석을 작성하십시오._**

---

### 힌트

> **_변환하려면 unicode() 함수를 사용하십시오._** (주: 이 힌트는 문제와 직접 관련이 없어 보입니다. 인코딩 선언 주석에 대한 문제입니다.)

---

**솔루션:**

```python
# -*- coding: utf-8 -*-
```

---

# 문제 59

### **문제**

> **_콘솔에서 주어진 n(n>0)에 대해 1/2+2/3+3/4+...+n/(n+1)을 계산하는 프로그램을 작성하십시오._**

> **_예시:
> 다음 n이 프로그램에 입력으로 주어지면:_**

```
5
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
3.55
```

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

### 힌트

> **_정수를 부동 소수점으로 변환하려면 float()를 사용하십시오. 변환하지 않아도 파이썬은 기본적으로 값의 데이터 유형을 이해하므로 문제가 발생하지 않습니다._** (주: 파이썬 2에서는 정수 나누기 정수는 정수 결과를 반환하므로 float() 변환이 중요합니다. 파이썬 3에서는 정수 나누기 정수가 부동 소수점 결과를 반환합니다.)

---

**주요 저자 솔루션: 파이썬 2**

```python
n=int(raw_input())
sum=0.0
for i in range(1,n+1):
    sum += float(float(i)/(i+1)) # i 또는 (i+1) 중 하나 이상을 float으로 변환하여 부동 소수점 나누기 수행
print sum
```

---

**내 솔루션: 파이썬 3**

```python
n = int(input())
sum_val = 0 # 변수명을 sum에서 sum_val로 변경 (sum은 내장 함수)
for i in range(1, n+1):
    sum_val += i/(i+1) # 파이썬 3에서는 i/(i+1)이 자동으로 부동 소수점 나누기 수행
print(round(sum_val, 2))  # 소수점 이하 2자리로 반올림
```
---
```python
'''솔루션 작성자: lcastrooliveira
'''
def question_59(n):
    # map과 람다를 사용하여 각 i에 대해 i/(i+1) 계산 후 합계, 결과를 소수점 2자리로 반올림
    print(round(sum(map(lambda x: x/(x+1), range(1, n+1))), 2))

question_59(5)
```
---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_14.md "14일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_16.md "16일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

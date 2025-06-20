# 문제 100

### **문제**

> **_단어들이 주어집니다. 일부 단어는 반복될 수 있습니다. 각 단어에 대해 발생 횟수를 출력하십시오. 출력 순서는 단어가 입력에 나타난 순서와 일치해야 합니다. 명확성을 위해 샘플 입출력을 참조하십시오._**

> **_다음 문자열이 프로그램에 입력으로 주어지면:_**
>
> ```
> 4
> bcdef
> abcdefg
> bcde
> bcdef
> ```
>
> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**
>
> ```
> 3
> 2 1 1
> ```

### 힌트

> **_입력 순서를 얻기 위해 리스트를 만들고 단어 빈도를 계산하기 위해 사전을 만드십시오._**

---

**내 솔루션: 파이썬 3**

```python
n = int(input()) # 입력될 단어의 총 개수

word_list = [] # 입력된 단어의 순서를 유지하기 위한 리스트
word_dict = {} # 각 단어의 빈도수를 저장하기 위한 딕셔너리

for i in range(n):
    word = input()
    if word not in word_dict: # 단어가 딕셔너리에 처음 등장하면
        word_list.append(word) # 순서 리스트에 추가
    word_dict[word] = word_dict.get(word, 0) + 1 # 해당 단어의 빈도수 증가

print(len(word_list)) # 고유한 단어의 개수 출력
for word in word_list: # 입력된 순서대로 각 단어에 대해
    print(word_dict[word], end=' ') # 해당 단어의 빈도수 출력 (공백으로 구분)
```

---

# 문제 101

### **문제**

> **_문자열이 주어집니다. 문자열의 문자 빈도를 계산하고 빈도수의 내림차순으로 문자를 인쇄하는 것이 당신의 과제입니다._** (주: 빈도수가 같을 경우 문자 순서에 대한 언급이 없으므로, 일반적인 정렬 순서(예: 알파벳 순)를 따르거나 입력 순서를 고려할 수 있습니다. 아래 솔루션은 빈도수 내림차순 후 문자 오름차순으로 정렬합니다.)

> **_다음 문자열이 프로그램에 입력으로 주어지면:_**
>
> ```
> aabbbccde
> ```
>
> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**
>
> ```
> b 3
> a 2
> c 2
> d 1
> e 1
> ```

### 힌트

> **_딕셔너리로 빈도를 계산하고 딕셔너리 아이템에서 값으로 정렬하십시오._**

---

**내 솔루션: 파이썬 3**

```python
word = input()
dct = {} # 문자 빈도를 저장할 딕셔너리
for i in word: # 문자열의 각 문자에 대해
    dct[i] = dct.get(i,0) + 1 # 해당 문자의 빈도수 증가

# dct.items()는 (키, 값) 쌍의 리스트를 반환합니다.
# sorted() 함수의 key 인자에 람다 함수를 사용하여 정렬 기준을 지정합니다.
# -x[1]은 빈도수(값)의 내림차순으로 정렬하고,
# x[0]은 빈도수가 같을 경우 문자(키)의 오름차순(알파벳 순)으로 정렬합니다.
dct_sorted = sorted(dct.items(),key=lambda x: (-x[1],x[0]))
for i in dct_sorted:
    print(i[0],i[1]) # 문자(키)와 빈도수(값) 출력
```

---

```python
'''yuan1z 솔루션:'''

X = input()
my_set = set(X) # 문자열에 포함된 고유한 문자 집합
arr = []
for item in my_set:
    arr.append([item,X.count(item)]) # 각 고유 문자와 해당 빈도수를 리스트로 만들어 arr에 추가
# arr를 정렬합니다. 정렬 기준은 위와 동일 (빈도수 내림차순, 문자 오름차순)
tmp = sorted(arr,key = lambda x: (-x[1],x[0]))

for i in tmp:
    print(i[0]+' '+str(i[1])) # 결과 출력
```

---

```python
'''StartZer0 솔루션:'''

s = list(input()) # 입력 문자열을 문자 리스트로 변환

# 각 문자를 키로, 해당 문자의 빈도수를 값으로 하는 딕셔너리 생성 (리스트 컴프리헨션 사용)
dict_count_ = {k:s.count(k) for k in s}
# 딕셔너리의 (키, 값) 쌍을 튜플 리스트로 변환
list_of_tuples = [(k,v) for k,v in dict_count_.items()]
# 튜플 리스트를 빈도수(x[1])의 내림차순으로 정렬
list_of_tuples.sort(key = lambda x: x[1], reverse = True)
# (주: 빈도수가 같을 경우 원래 순서 또는 예측 불가능한 순서가 될 수 있습니다.
#  안정적인 정렬을 원하면 추가 정렬 기준 필요)

for item in list_of_tuples:
  print(item[0], item[1])
```

---

# 문제 102

### **문제**

> **_문자열을 입력받아 숫자와 문자의 개수를 계산하는 파이썬 프로그램을 작성하십시오._**

**입력**

> ```
> Hello321Bye360
> ```

**출력**

> ```
> Digit - 6
> Letter - 8
> ```

---

### 힌트

> **_isdigit() 및 isalpha() 함수를 사용하십시오._**

---

**솔루션:**

```python
word = input()
digit_count = 0 # 변수명 digit을 digit_count로 변경 (가독성)
letter_count = 0 # 변수명 letter를 letter_count로 변경
for char in word:
    digit_count += char.isdigit() # char.isdigit()는 문자가 숫자이면 True(1), 아니면 False(0) 반환
    letter_count += char.isalpha() # char.isalpha()는 문자가 알파벳이면 True(1), 아니면 False(0) 반환

print('Digit -',digit_count)
print('Letter -',letter_count)
```

---

# 문제 103

### **문제**

> **_숫자 N이 주어집니다. 재귀를 사용하여 1부터 N까지의 합을 찾으십시오._**

**입력**

> ```
> 5
> ```

**출력**

> ```
> 15
> ```

---

### 힌트

> **_합계를 얻기 위해 재귀 함수를 만드십시오._**

---

**솔루션:**

```python
def rec(n): # 재귀 함수 정의
    if n == 0: # 기본 케이스: n이 0이면 0 반환
        return n
    return rec(n-1) + n # 재귀 단계: rec(n-1)의 결과에 n을 더하여 반환


n = int(input())
sum_val = rec(n) # 변수명 sum을 sum_val로 변경 (sum은 내장 함수와 충돌 방지)
print(sum_val)
```
---
```python
"""popomaticbubble 솔루션: (꼬리 재귀 형태는 아님, current를 누적)
"""
def summer(counter, n, current_sum): # 변수명 current를 current_sum으로 변경
    if n == 0: # N이 0이면 합계는 0
        return 0
    if counter == n: # 카운터가 N에 도달하면
        return current_sum + n # 현재 합계에 N을 더하여 반환
    else: # 카운터가 N보다 작으면
        current_sum = current_sum + counter # 현재 합계에 카운터 값을 더함
        counter += 1 # 카운터 증가
        return summer(counter, n, current_sum) # 재귀 호출


N = int(input("> "))
print(summer(1, N, 0)) # counter=1, n=N, current_sum=0으로 시작
```
---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_22.md "23일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

# 계속됩니다...

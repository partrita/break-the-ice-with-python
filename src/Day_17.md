# 문제 65

### **문제**

> **_리스트 [2,4,6,8]의 모든 숫자가 짝수인지 확인하는 assert 문을 작성하십시오._**

---

### 힌트

> **_단언문을 만들려면 "assert 표현식"을 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
li = [2,4,6,8]
for i in li:
    assert i%2==0 # i를 2로 나눈 나머지가 0인지 확인합니다. 0이 아니면 AssertionError 발생
```

---

**내 솔루션: 파이썬 3**

```python
data = [2,4,5,6] # 리스트에 홀수 5를 포함하여 assert가 실패하도록 함
for i in data:
    assert i%2 == 0, "{}는 짝수가 아닙니다".format(i) # 조건이 거짓이면 메시지와 함께 AssertionError 발생
```

---

# 문제 66

### **문제**

> **_콘솔에서 기본 수학 표현식을 입력받아 평가 결과를 인쇄하는 프로그램을 작성하십시오._**

> **_예시:
> 다음 n이 프로그램에 입력으로 주어지면:_** (주: n이 아니라 표현식)

```
35 + 3
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
38
```

---

### 힌트

> **_표현식을 평가하려면 eval()을 사용하십시오._** (주의: eval()은 안전하지 않은 입력을 평가할 수 있으므로 신뢰할 수 없는 소스의 입력에는 사용하지 않는 것이 좋습니다.)

---

**주요 저자 솔루션: 파이썬 2**

```python
expression = raw_input() # 사용자로부터 표현식 입력
print eval(expression) # 표현식 평가 및 결과 출력
```

---

**내 솔루션: 파이썬 3**

```python
expression = input()
ans = eval(expression)
print(ans)
```

---

# 문제 67

### **문제**

> **_정렬된 리스트에서 항목을 검색하는 이진 검색 함수를 작성하십시오. 함수는 리스트에서 검색할 요소의 인덱스를 반환해야 합니다._**

---

### 힌트

> **_조건을 처리하려면 if/elif를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import math
def bin_search(li, element):
    bottom = 0
    top = len(li)-1
    index = -1 # 요소를 찾지 못한 경우 -1 반환
    while top>=bottom and index==-1: # 검색 범위가 유효하고 아직 찾지 못했다면 반복
        mid = int(math.floor((top+bottom)/2.0)) # 중간 인덱스 계산 (내림)
        if li[mid]==element: # 중간 요소가 찾는 요소와 같으면
            index = mid # 인덱스 저장
        elif li[mid]>element: # 중간 요소가 더 크면
            top = mid-1 # 검색 범위를 왼쪽 절반으로 줄임
        else: # 중간 요소가 더 작으면
            bottom = mid+1 # 검색 범위를 오른쪽 절반으로 줄임

    return index

li=[2,5,7,9,11,17,222]
print bin_search(li,11) # 11 검색 (결과: 4)
print bin_search(li,12) # 12 검색 (결과: -1)

```

---

**내 솔루션: 파이썬 3**

```python
# 작성 예정 (아래 다른 사람들의 솔루션 참고)
```
**ulmasovjafarbek 솔루션: 파이썬 3**
```python
def binary_search(lst, item):
    low = 0
    high = len(lst) - 1
    
    while low <= high: # low가 high보다 작거나 같을 동안 반복
        mid = round((low + high) / 2) # 중간 인덱스 (반올림, Python 3에서는 // (정수 나누기)가 더 일반적)
                                      # mid = (low + high) // 2 로 수정하는 것이 좋음
        
        if lst[mid] == item: # 찾았으면 인덱스 반환
            return mid
        elif lst[mid] > item: # 찾는 값이 더 작으면 high를 줄임
            high = mid - 1
        else: # 찾는 값이 더 크면 low를 늘림
            low = mid + 1
    return None # 찾지 못하면 None 반환
    
lst = [1,3,5,7,]
print(binary_search(lst, 9)) # 9는 리스트에 없으므로 None 출력
```
---

**AasaiAlangaram 솔루션: 파이썬 3** (이진 검색 변형)

```python
def binary_search_Ascending(array, target): # 오름차순 정렬된 배열 대상
    lower = 0
    upper = len(array) # upper를 len(array) - 1이 아닌 len(array)로 설정
    print('배열 길이:',upper)
    while lower < upper: # lower가 upper보다 작을 동안 반복 (일반적으로는 lower <= upper)
        x = (lower + upper) // 2 # 중간 인덱스
        print('중간 값 인덱스:',x) # 'Middle Value'를 '중간 값 인덱스'로 번역
        value = array[x]
        if target == value:
            return x
        elif target > value:
            lower = x + 1 # target이 더 크면 lower를 x + 1로 (AasaiAlangaram 솔루션에서는 lower = x)
                          # 일반적인 이진 검색에서는 검색 범위를 확실히 줄이기 위해 x + 1 또는 x - 1 사용
        elif target < value:
            upper = x # target이 더 작으면 upper를 x로 (AasaiAlangaram 솔루션에서는 upper = x)
                      # 일반적인 이진 검색에서는 upper = x - 1
                      # 현재 로직은 특정 상황에서 무한 루프나 잘못된 결과를 초래할 수 있음.
                      # 예를 들어 target이 value보다 클 때 lower = x로 설정하면, x가 계속 같은 값일 경우 무한 루프 가능성.
                      # 표준 이진 검색 로직을 따르는 것이 좋음.

Array = [1,5,8,10,12,13,55,66,73,78,82,85,88,99]
print('값을 찾은 인덱스:',binary_search_Ascending(Array, 82)) # 'The Value Found at Index:'를 번역

```
**참고:** AasaiAlangaram의 솔루션은 표준 이진 검색과 약간 다른 업데이트 로직(lower = x, upper = x)을 사용하고 있어, 특정 케이스에서 문제가 발생할 수 있습니다. 표준적인 방식은 `lower = mid + 1`과 `upper = mid - 1`을 사용하는 것입니다.

---

**yuan1z 솔루션: 파이썬 3** (재귀적 이진 검색)

```python
idx = 0 # 전역 변수 idx를 사용하여 최종 인덱스 추적 (재귀 호출 시 인덱스 보정용)
def bs(num,num_list):
    global idx # 전역 변수 idx 사용 선언
    if (len(num_list) == 1): # 리스트에 요소가 하나만 남았을 때
        if num_list[0] == num: # 그 요소가 찾는 숫자이면
            return idx # 현재까지 누적된 idx 반환
        else: # 아니면
            return "리스트에 없음" # "No exit in the list"를 번역
    elif num_list[len(num_list)//2 -1] >= num : # 찾는 숫자가 왼쪽 절반의 마지막 요소보다 작거나 같으면 (num in num_list[:len(num_list)//2] 와 유사한 로직)
                                              # (수정 제안: num <= num_list[len(num_list)//2 -1] 또는 num < num_list[len(num_list)//2] )
        return bs(num,num_list[:len(num_list)//2]) # 왼쪽 절반으로 재귀 호출
    else: # 찾는 숫자가 오른쪽 절반에 있다면
        idx += len(num_list)//2 # 오른쪽 절반으로 이동했으므로 idx에 왼쪽 절반의 길이를 더함
    return bs(num,num_list[len(num_list)//2:]) # 오른쪽 절반으로 재귀 호출

print(bs(66,[1,5,8,10,12,13,55,66,73,78,82,85,88,99,100]))

```
**참고:** yuan1z의 솔루션은 전역 변수를 사용하여 인덱스를 관리하며, 재귀적으로 리스트를 슬라이싱합니다. 리스트 슬라이싱은 새 리스트를 생성하므로 매우 큰 리스트에서는 비효율적일 수 있습니다. 인덱스를 직접 전달하는 방식이 더 효율적입니다. 조건 `num_list[len(num_list)//2 -1] >= num` 부분도 주의 깊게 검토 필요.

---

# 문제 68

### **문제**

> **_파이썬 모듈을 사용하여 10과 100 사이의 임의의 부동 소수점 숫자를 생성하십시오._**

---

### 힌트

> **_random.random()을 사용하여 [0,1] 범위의 임의의 부동 소수점 숫자를 생성하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import random
print random.random()*100 # random.random()은 0.0 <= x < 1.0 범위의 부동 소수점 반환. 여기에 100을 곱하면 0.0 <= x < 100.0.
                           # 10과 100 사이를 정확히 맞추려면 조정 필요: random.random() * 90 + 10
```

---

**내 솔루션: 파이썬 3**

```python
import random
rand_num = random.uniform(10,100) # uniform(a, b)는 a <= x <= b (또는 a <= x < b, 문서 확인 필요) 범위의 부동 소수점 반환
                                  # random.uniform(a,b)는 a <= N <= b 를 만족하는 임의의 부동소수점 숫자를 반환합니다.
print(rand_num)
```

---

# 문제 69

### **문제**

> **_파이썬 모듈을 사용하여 5와 95 사이의 임의의 부동 소수점 숫자를 생성하십시오._**

---

### 힌트

> **_random.random()을 사용하여 [0,1] 범위의 임의의 부동 소수점 숫자를 생성하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import random
print random.random()*100-5 # 0.0 <= x < 1.0  =>  0.0 <= x*100 < 100.0  => -5.0 <= x*100-5 < 95.0
                            # 이 방식은 5와 95 사이를 정확히 보장하지 않음. (최솟값 -5 가능)
                            # 올바른 방식: random.random() * 90 + 5
```

---

**내 솔루션: 파이썬 3**

```python
import random
rand_num = random.uniform(5,95) # 5 <= N <= 95 범위의 부동 소수점 반환
print(rand_num)
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_16.md "16일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_18.md "18일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

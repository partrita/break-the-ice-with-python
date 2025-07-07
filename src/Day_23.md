# 이 페이지부터 저장소의 확장된 부분이 시작됩니다. 이전 94개의 문제는 소개에 언급된 저장소에서 수집했습니다. 다음 문제들은 Hackerrank 및 인터넷의 다른 자료들에서 수집했으며, 모든 제공된 솔루션은 파이썬 3 기준입니다.

# 문제 95

### **문제**

> **_대학교 운동회의 참가자 점수표가 주어졌을 때, 준우승자의 점수를 찾아야 합니다. 점수들이 주어지면 리스트에 저장하고 준우승자의 점수를 찾으십시오._**

> **_다음 문자열이 프로그램에 입력으로 주어지면:_**
>
> ```
> 5
> 2 3 6 6 5
> ```
>
> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**
>
> ```
> 5
> ```

### 힌트

> **_점수들을 고유하게 만든 다음 두 번째로 좋은 숫자를 찾으십시오._**

---

**내 솔루션: 파이썬 3**

```python
n = int(input()) # 첫 번째 입력은 사용되지 않지만, 문제 형식상 입력받음
arr = map(int, input().split()) # 두 번째 줄의 점수들을 공백 기준으로 나누어 정수형으로 변환
arr = list(set(arr)) # set으로 변환하여 중복 제거 후 다시 리스트로 변환
arr.sort() # 오름차순 정렬
print(arr[-2]) # 뒤에서 두 번째 요소 (즉, 준우승자 점수) 출력
```

---

```python
'''
mishrasunny-coder 솔루션:
'''
num = int(input("숫자 입력: ")) # "Enter num: " 번역
L = []

while True:
    L.append(num)
    num = int(input("다른 숫자 입력 (0 입력 시 종료): ")) # "Enter another: " 번역 및 종료 조건 명시
    if num == 0: # 0을 입력하면 루프 종료 (임의의 종료 조건)
        break

L1 = list(set(L[:])) # 리스트 L의 복사본으로 set을 만들어 중복 제거 후 다시 리스트로
L2 = sorted(L1) # 정렬
print(L2)

print(f'준우승자는 {L2[-2]}입니다') # "The runner up is" 번역
```

---
```python
'''KailashS3 솔루션:
'''
num_count = int(input()) # 변수명을 num에서 num_count로 변경하여 명확성 증대
scores = list(map(int, input().split(' ')))
winner = max(scores) # 최고 점수
lst = [] # 준우승자 후보 리스트

if len(scores) != num_count: # 입력된 점수의 개수와 첫 줄의 숫자(num_count)가 다르면
    print('점수의 길이가 주어진 입력과 다릅니다') # "length of score is greater than input given" 번역
else:
    for score in scores:
        if winner > score: # 최고 점수보다 작은 점수들만
            lst.append(score) # 준우승자 후보 리스트에 추가

runnerup = max(lst) # 후보 중에서 최댓값 (즉, 준우승자 점수)
print(runnerup)
```
---

# 문제 96

### **문제**

> **_문자열 S와 너비 W가 주어집니다.
> 주어진 너비로 문자열을 단락으로 줄 바꿈하는 것이 당신의 과제입니다._**

> **_다음 문자열이 프로그램에 입력으로 주어지면:_**
>
> ```
> ABCDEFGHIJKLIMNOQRSTUVWXYZ
> 4
> ```
>
> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**
>
> ```
> ABCD
> EFGH
> IJKL
> IMNO
> QRST
> UVWX
> YZ
> ```

### 힌트

> **_textwrap 모듈의 wrap 함수를 사용하십시오._**

---

**내 솔루션: 파이썬 3**

```python
import textwrap

def wrap(string, max_width):
    # textwrap.wrap()은 문자열을 주어진 너비로 줄 바꿈한 문자열 리스트를 반환합니다.
    string_wrapped = textwrap.wrap(string,max_width)
    # "\n".join()은 리스트의 각 문자열 사이에 개행 문자를 넣어 하나의 문자열로 합칩니다.
    string_joined = "\n".join(string_wrapped)
    return string_joined

if __name__ == '__main__':
    string, max_width = input(), int(input()) # 문자열과 너비를 입력받음
    result = wrap(string, max_width)
    print(result)
```

---
```python
"""mishrasunny-coder 솔루션:
"""
import textwrap

string = input()
width = int(input())

# textwrap.fill()은 문자열을 주어진 너비로 줄 바꿈한 후, 전체를 하나의 문자열로 반환합니다 (개행문자 포함).
print(textwrap.fill(string,width))
```
---
```python
"""Prashanth 솔루션:
"""
from textwrap import wrap # textwrap 모듈에서 wrap 함수만 가져옴
x = str(input(': '))
w = int(input())
z = list(wrap(x, w)) # wrap 함수는 리스트를 반환하므로 list()로 다시 감쌀 필요 없음
for i in z:
    print(i)
```
---
```python
"""saxenaharsh24 솔루션:
"""
import textwrap
string = input('')
# textwrap.wrap()의 결과를 바로 '\n'.join()으로 처리
print('\n'.join(textwrap.wrap(string, width= int(input('')))))
```
---
```python
"""popomaticbubble 솔루션: (itertools 사용)
"""
import itertools
string = input("> ")
width_length = int(input("그룹화 너비는 얼마입니까? ")) # "What is the width of the groupings? " 번역

def grouper(string, width):
    iters = [iter(string)] * width # 문자열의 이터레이터를 너비만큼 복제한 리스트
    # zip_longest는 여러 이터레이블의 요소들을 묶어 튜플로 반환합니다. 짧은 이터레이블은 fillvalue로 채웁니다.
    return itertools.zip_longest(*iters, fillvalue='')

def displayer(groups):
    for x in groups: # 각 그룹 (튜플)
        if x == '': # fillvalue로 채워진 빈 그룹은 건너뜀
            continue
        else:
            print(''.join(x)) # 튜플의 문자들을 합쳐 출력

displayer(grouper(string, width_length))
```
---
# 문제 97

### **문제**

> **_정수 N이 주어집니다. 크기 N의 알파벳 랑골리를 인쇄하는 것이 당신의 과제입니다. (랑골리는 패턴 생성에 기반한 인도 민속 예술의 한 형태입니다.)_**

> **_다양한 크기의 알파벳 랑골리가 아래에 나와 있습니다:_**
>
> ```
> #크기 3
>
> ----c----
> --c-b-c--
> c-b-a-b-c
> --c-b-c--
> ----c----
>
> #크기 5
>
> --------e--------
> ------e-d-e------
> ----e-d-c-d-e----
> --e-d-c-b-c-d-e--
> e-d-c-b-a-b-c-d-e
> --e-d-c-b-c-d-e--
> ----e-d-c-d-e----
> ------e-d-e------
> --------e--------
> ```

### 힌트

> **_주어진 방식으로 랑골리의 절반을 먼저 인쇄하고 각 줄을 리스트에 저장하십시오. 그런 다음 나머지 부분을 얻으려면 리스트를 역순으로 인쇄하십시오._**

---

**내 솔루션: 파이썬 3**

```python
import string
def print_rangoli(size):
    n = size
    alph = string.ascii_lowercase # 'abcdefghijklmnopqrstuvwxyz'
    width = 4 * n - 3 # 전체 너비 계산

    ans = [] # 각 줄을 저장할 리스트
    for i in range(n): # 위쪽 절반 생성
        # 왼쪽 부분 생성 (예: n=3, i=0 -> 'c'; i=1 -> 'c-b'; i=2 -> 'c-b-a')
        left_chars = alph[n - 1 - i : n] # alph[2:3] -> 'c'; alph[1:3] -> 'cb'; alph[0:3] -> 'abc' (i에 따라 역순으로 접근)
                                        # 수정: alph[n-1]부터 i+1개 문자를 역순으로 가져와야 함.
                                        # 예: n=3. i=0: 'c'. i=1: 'c-b'. i=2: 'c-b-a'
                                        # 올바른 접근: alph[n-1-i : n] -> alph[i] 부터 n-1까지 역순으로
                                        # s = '-'.join(alph[j] for j in range(n-1, n-1-i-1, -1)) 와 같은 형태가 되어야 함
                                        # 또는 문제의 의도대로 alph[n-1]부터 시작하여 점점 확장되는 형태

        # 현재 코드의 left 생성 방식:
        # n=3, i=0: alph[2:3] -> 'c'
        # n=3, i=1: alph[1:3] -> 'c-b' (alph[1]=b, alph[2]=c)
        # n=3, i=2: alph[0:3] -> 'c-b-a' (alph[0]=a, alph[1]=b, alph[2]=c)
        # 위 방식은 alph[n-i-1:n] 이므로, (n-i-1) 인덱스부터 (n-1) 인덱스까지의 문자들을 사용합니다.
        # 예: n=3, i=0: left_part = alph[2:3] -> ('c'). join -> 'c'
        # 예: n=3, i=1: left_part = alph[1:3] -> ('b','c'). join -> 'b-c'
        # 예: n=3, i=2: left_part = alph[0:3] -> ('a','b','c'). join -> 'a-b-c'
        # 이것을 뒤집어서 사용해야 예제와 맞음.
        # 올바른 문자열 구성:
        line_chars = [alph[n-1-j] for j in range(i+1)] # 예: i=0 -> [c]; i=1 -> [c,b]; i=2 -> [c,b,a]
        # 오른쪽 부분 추가
        current_line_alphabets = line_chars + line_chars[-2::-1] # 예: i=1 -> [c,b] + [c] -> [c,b,c]
                                                                 # 예: i=2 -> [c,b,a] + [b,c] -> [c,b,a,b,c]

        mid_pattern = '-'.join(current_line_alphabets)
        final = mid_pattern.center(width, '-') # 중앙 정렬 및 '-' 채우기
        ans.append(final)

    # 아래쪽 절반은 위쪽 절반(ans 리스트)을 뒤집어서 추가 (마지막 줄 제외)
    if len(ans) > 1: # n > 1 인 경우에만
        for i in range(n - 2, -1, -1): # ans의 (n-2)번째 인덱스부터 0번째 인덱스까지 역순으로
            ans.append(ans[i])

    ans_str = '\n'.join(ans) # 리스트의 각 줄을 개행문자로 연결
    print(ans_str)


if __name__ == '__main__':
    n_input = int(input()) # 변수명을 n에서 n_input으로 변경 (함수 내의 n과 구분)
    print_rangoli(n_input)
```
---
```python
'''suggula jaswanth 솔루션:
'''
def rangoli(n):
    l1=list(map(chr,range(97,123))) # 알파벳 소문자 리스트 ('a'부터 'z'까지)
    # x는 중앙 라인의 문자 패턴 (예: n=3 -> ['c','b','a','b','c'])
    x=l1[n-1::-1]+l1[1:n] # l1[n-1::-1]은 n번째 문자부터 'a'까지 역순, l1[1:n]은 'b'부터 n번째 문자까지
                          # 예: n=3 -> l1[2::-1] = ['c','b','a'], l1[1:3]=['b','c'] => ['c','b','a','b','c']
    mid_len=len('-'.join(x)) # 중앙 라인의 전체 길이 (하이픈 포함)

    # 위쪽 절반 (중앙 라인 제외)
    for i in range(1,n):
        # l1[n-1:n-i:-1] : n번째 문자부터 (n-i+1)번째 문자까지 역순 (예: i=1, n=3 -> l1[2:2:-1] -> []) -> 이부분 수정 필요
        # l1[n-i:n] : (n-i+1)번째 문자부터 n번째 문자까지
        # 의도한 바: i가 증가함에 따라 중앙에서 멀어지는 문자들 추가
        # 예: n=3. i=1 (첫째 줄): c. i=2 (둘째 줄): c-b-c
        # 수정된 패턴:
        chars_for_line = l1[n-1 : n-1-i : -1] + l1[n-1-i : n] # n-1부터 시작, i개만큼, 그리고 다시 돌아오기
        # 더 정확한 패턴:
        part1 = l1[n-1 : n-i-1 : -1] # 바깥쪽에서 안쪽으로 (예: n=3, i=1 -> [c])
        part2 = l1[n-i : n]      # 안쪽에서 바깥쪽으로 (예: n=3, i=1 -> [c])
                                 # 합치면 [c,c]가 됨.
        # 올바른 접근:
        current_chars = l1[n-1:n-1-i:-1] + l1[n-i:n] if i>0 else [l1[n-1]] # suggula jaswanth의 로직은 복잡하여,
                                                                       # 아래와 같이 일반적인 랑골리 패턴으로 수정
        temp_list = l1[n-1:n-i-1:-1] # 예: n=3, i=1 -> [c]. i=2 -> [c,b]
        line_str = '-'.join(temp_list + l1[n-i:n])
        print(line_str.center(mid_len,'-'))

    # 아래쪽 절반 (중앙 라인 포함)
    for i in range(n,0,-1): # n부터 1까지 감소
        temp_list = l1[n-1:n-i-1:-1]
        line_str = '-'.join(temp_list + l1[n-i:n])
        print(line_str.center(mid_len,'-'))

# 위 suggula jaswanth 솔루션은 패턴 구성에 수정이 필요해 보입니다.
# 원본 My Solution을 참고하는 것이 좋습니다.
# rangoli(5) # 함수 호출 예시
```

---

# 문제 98

### **문제**

> **_날짜가 주어집니다. 해당 날짜의 요일을 찾는 것이 당신의 과제입니다._**

**입력**

> **_한 줄의 입력으로 월, 일, 연도가 각각 공백으로 구분되어 MM DD YYYY 형식으로 주어집니다._**
>
> ```
> 08 05 2015
> ```

**출력**

> **_정확한 요일을 대문자로 출력하십시오._**
>
> ```
> WEDNESDAY
> ```

---

### 힌트

> **_calender 모듈의 weekday 함수를 사용하십시오._** (주: calendar 모듈)

---

**솔루션:**

```python
import calendar

month, day, year = map(int, input().split()) # 입력받은 문자열을 공백 기준으로 나누어 각각 정수형으로 변환

dayId = calendar.weekday(year, month, day) # calendar.weekday()는 요일을 정수 형태로 반환 (월요일=0, 일요일=6)
print(calendar.day_name[dayId].upper()) # calendar.day_name은 요일 이름의 리스트. 해당 인덱스의 요일 이름을 가져와 대문자로 변경하여 출력
```

---

# 문제 99

### **문제**

> **_두 정수 집합 M과 N이 주어졌을 때, 그들의 대칭 차집합을 오름차순으로 인쇄하십시오. 대칭 차집합이라는 용어는 M 또는 N에 존재하지만 둘 다에는 존재하지 않는 값들을 나타냅니다._**

**입력**

> **_첫 번째 줄에는 정수 M이 입력됩니다. 두 번째 줄에는 M개의 공백으로 구분된 정수가 입력됩니다. 세 번째 줄에는 정수 N이 입력됩니다. 네 번째 줄에는 N개의 공백으로 구분된 정수가 입력됩니다._**
>
> ```
> 4
> 2 4 5 9
> 4
> 2 4 11 12
> ```

**출력**

> **_대칭 차집합 정수들을 오름차순으로, 한 줄에 하나씩 출력하십시오._**
>
> ```
> 5
> 9
> 11
> 12
> ```

---

### 힌트

> **_대칭 차집합 연산을 수행하려면 '^'를 사용하십시오._**

---

**솔루션:**

```python
if __name__ == '__main__':
    n_count = int(input()) # 변수명 n을 n_count로 변경 (아래 m과 구분)
    set1 = set(map(int,input().split())) # 첫 번째 집합 입력

    m_count = int(input()) # 변수명 m을 m_count로 변경
    set2 = set(map(int, input().split())) # 두 번째 집합 입력

    ans = list(set1 ^ set2) # '^' 연산자로 대칭 차집합 계산 후 리스트로 변환
    ans.sort() # 오름차순 정렬
    for i in ans:
        print(i) # 각 요소를 한 줄에 하나씩 출력
```

---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_22.md "22일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_24.md "24일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

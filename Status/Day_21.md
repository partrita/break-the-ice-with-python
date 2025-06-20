# 문제 85

### **문제**

> **_리스트 컴프리헨션을 사용하여 [12,24,35,70,88,120,155]에서 0번째, 4번째, 5번째 숫자를 제거한 후 리스트를 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트

> **_리스트에서 여러 요소를 삭제하려면 리스트 컴프리헨션을 사용하십시오. (인덱스, 값) 튜플을 얻으려면 enumerate()를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
li = [12,24,35,70,88,120,155]
# enumerate(li)는 (인덱스, 값) 튜플을 생성합니다.
# 인덱스 i가 (0, 4, 5)에 포함되지 않은 요소 x만 리스트에 포함합니다.
li = [x for (i,x) in enumerate(li) if i not in (0,4,5)]
print li
```
---

**내 솔루션: 파이썬 3**

```python
li = [12,24,35,70,88,120,155]
# range(len(li))로 인덱스를 생성하고, 인덱스 i가 (0, 4, 5)에 포함되지 않은 요소 li[i]를 리스트에 포함합니다.
li = [li[i] for i in range(len(li)) if i not in (0,4,5)]
print(li)
```
---
```python
'''pratikb0501 솔루션:
'''
li = [12, 24, 35, 70, 88, 120, 155]
# enumerate를 사용하여 (인덱스 i, 값 j) 쌍을 가져옵니다.
# 인덱스 i가 0이 아니고, 4도 아니고, 5도 아니면 값 j를 리스트에 포함합니다.
print(list(j for i, j in enumerate(li) if i != 0 and i != 4 and i != 5))

```

---

# 문제 86

### **문제**

> **_리스트 컴프리헨션을 사용하여 [12,24,35,24,88,120,155]에서 값 24를 제거한 후 리스트를 인쇄하는 프로그램을 작성하십시오._** (주: 리스트 컴프리헨션을 사용하라는 것은 모든 24를 제거하라는 의미로 해석됩니다. `list.remove()`는 첫 번째 발생만 제거합니다.)

---

### 힌트

> **_값을 삭제하려면 리스트의 remove 메소드를 사용하십시오._** (주: 이 힌트는 리스트 컴프리헨션 요구사항과 약간 상충됩니다. `remove`는 한 번에 하나만 제거합니다.)

---

**주요 저자 솔루션: 파이썬 2**

```python
li = [12,24,35,24,88,120,155]
li = [x for x in li if x!=24] # x가 24가 아니면 리스트에 포함 (모든 24 제거)
print li
```

---

**내 솔루션: 파이썬 3**

```python
li = [12,24,35,24,88,120,155]
# li.remove(24)  # 이 코드는 첫 번째로 나오는 24만 제거합니다.
# 문제에서 리스트 컴프리헨션을 사용하라고 했고, 모든 24를 제거하는 것이 일반적인 의도이므로 아래와 같이 수정합니다.
li_filtered = [x for x in li if x != 24]
print(li_filtered)
```

---

# 문제 87

### **문제**

> **_주어진 두 리스트 [1,3,6,78,35,55]와 [12,24,35,24,88,120,155]에 대해, 위 두 리스트의 교집합 요소를 포함하는 리스트를 만드는 프로그램을 작성하십시오._**

---

### 힌트

> **_집합 교집합 연산을 수행하려면 set()과 "&=" (또는 &)를 사용하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

```python
set1=set([1,3,6,78,35,55])
set2=set([12,24,35,24,88,120,155])
set1 &= set2 # set1을 set1과 set2의 교집합으로 업데이트합니다.
li=list(set1) # 교집합 결과를 리스트로 변환
print li
```

---

**내 솔루션: 파이썬 3**

```python
list1 = [1,3,6,78,35,55]
list2 = [12,24,35,24,88,120,155]
set1 = set(list1)
set2 = set(list2)
intersection = set1 & set2 # & 연산자로 교집합을 구합니다.
print(list(intersection)) # 결과를 리스트로 변환하여 출력 (순서는 보장되지 않음)
```

**또는**

```python
list1 = [1,3,6,78,35,55]
list2 = [12,24,35,24,88,120,155]
set1 = set(list1)
set2 = set(list2)
intersection = set.intersection(set1,set2) # intersection() 메소드 사용
print(list(intersection)) # 결과를 리스트로 변환하여 출력
```

---

# 문제 88

### **문제**

> **_주어진 리스트 [12,24,35,24,88,120,155,88,120,155]에 대해, 원래 순서를 유지하면서 모든 중복 값을 제거한 후 이 리스트를 인쇄하는 프로그램을 작성하십시오._**

---

### 힌트

> **_중복 없이 여러 값을 저장하려면 set()을 사용하십시오._** (주: set()만 사용하면 순서가 유지되지 않습니다. 순서 유지를 위해서는 다른 방법이 필요합니다.)

---

**주요 저자 솔루션: 파이썬 2** (순서 유지)

```python
def removeDuplicate( li ):
    newli=[]
    seen = set() # 이미 본 항목을 추적하기 위한 집합
    for item in li:
        if item not in seen: # 아직 보지 못한 항목이면
            seen.add( item ) # seen 집합에 추가
            newli.append(item) # 새 리스트에 추가
    return newli

li=[12,24,35,24,88,120,155,88,120,155]
print removeDuplicate(li)
```

---

**내 솔루션: 파이썬 3**
(주: 아래 첫 번째 솔루션은 `li.remove(i)`가 루프 중 리스트를 변경하여 일부 중복이 제대로 제거되지 않을 수 있습니다. 예를 들어 `[1, 2, 2, 2]`에서 첫 번째 `2`가 제거되면 다음 `2`는 건너뛰게 됩니다. 저자의 솔루션이나 아래 두 번째 솔루션이 더 정확합니다.)
```python
li = [12,24,35,24,88,120,155,88,120,155]
# 이 방법은 리스트를 반복하면서 제거할 때 문제를 일으킬 수 있습니다.
# for i in li:
#     if li.count(i) > 1:
#         li.remove(i) # 첫 번째 발생만 제거하고, 리스트 크기가 변경되어 반복에 영향
# print(li)

# 순서를 유지하면서 중복을 제거하는 올바른 방법 중 하나:
result = []
seen = set()
for item in li:
    if item not in seen:
        result.append(item)
        seen.add(item)
print(result)
```

**또는** (제너레이터 사용, 순서 유지)

```python
def removeDuplicate( li ):
    seen = {}  # 사전을 사용하여 순서 유지 (Python 3.7+에서는 기본적으로 삽입 순서 유지, 이전 버전에서는 OrderedDict 사용 가능)
               # 여기서는 단순히 'in' 연산의 효율성을 위해 사용 (set과 유사)
    for item in li:
        if item not in seen: # 아직 보지 못한 항목이면
            seen[item] = True # 봤다고 표시
            yield item # 제너레이터로 반환

li = [12, 24, 35, 24, 88, 120, 155, 88, 120, 155]
ans = list(removeDuplicate(li)) # 제너레이터 결과를 리스트로 변환
print(ans)
```

---

# 문제 89

### **문제**

> **_Person 클래스와 그 두 하위 클래스인 Male과 Female을 정의하십시오. 모든 클래스에는 "getGender" 메소드가 있으며, Male 클래스는 "Male"을, Female 클래스는 "Female"을 인쇄(반환)할 수 있어야 합니다._** (주: 인쇄가 아니라 값을 반환하도록 수정하는 것이 일반적입니다.)

---

### 힌트

> **_하위 클래스를 정의하려면 Subclass(Parentclass)를 사용하십시오._**

---

**솔루션: (Python 2 기준, Python 3에서도 유사하게 동작)**

```python
class Person(object): # Python 2에서는 object 명시적 상속
    def getGender( self ):
        return "Unknown" # 기본 성별

class Male( Person ): # Person 클래스 상속
    def getGender( self ):
        return "Male" # Male 클래스의 getGender 메소드 재정의

class Female( Person ): # Person 클래스 상속
    def getGender( self ):
        return "Female" # Female 클래스의 getGender 메소드 재정의

aMale = Male()
aFemale= Female()
print aMale.getGender()
print aFemale.getGender()
```
---
```python
'''popomaticbubble 솔루션:
'''
class Person(object):
    def __init__(self): # 각 인스턴스가 gender 속성을 갖도록 함
        self.gender = "unknown"

    def getGender(self): # 인스턴스의 gender 속성을 인쇄
        print(self.gender)

class Male(Person):
    def __init__(self):
        super(Male, self).__init__() # 부모 클래스의 __init__ 호출 (선택 사항, 여기서는 Person의 __init__이 gender를 unknown으로 설정)
        self.gender = "Male" # Male 인스턴스의 gender를 "Male"로 설정

class Female(Person):
    def __init__(self):
        super(Female, self).__init__() # 부모 클래스의 __init__ 호출
        self.gender = "Female" # Female 인스턴스의 gender를 "Female"로 설정

sharon = Female()
doug = Male()
sharon.getGender()
doug.getGender()

```
---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_20.md "20일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_22.md "22일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

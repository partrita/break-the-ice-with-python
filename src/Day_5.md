# 문제 16

### **문제:**

> **_리스트 컴프리헨션을 사용하여 리스트의 각 홀수를 제곱하십시오. 리스트는 쉼표로 구분된 숫자 시퀀스로 입력됩니다._** >**_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
1,2,3,4,5,6,7,8,9
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
1,9,25,49,81
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
## 저자의 솔루션이 정확하지 않아 여기에 포함하지 않았습니다.
```

---

**내 솔루션: 파이썬 3**

```python
lst = [str(int(i)**2) for i in input().split(',') if int(i) % 2]
print(",".join(lst))
```

---

```python
'''솔루션 작성자: shagun'''
# 홀수 제곱

lst = input().split(',')     # 쉼표 위치에서 분할하고 리스트에 설정합니다.

seq = []
lst = [int(i) for i in lst]  # 문자열을 정수로 변환합니다.
for i in lst:
        if i%2 != 0:
                i = i*i
                seq.append(i)


seq = [str(i) for i in seq]   # join 연산을 적용할 수 있도록 모든 정수를 문자열로 변환합니다.
print(",".join(seq))
```


```python
'''솔루션 작성자: Jack'''
seq = input().split(',') 
lst = [int(i) for i in seq]
def flt(i):                                           # 필터 함수 정의
    return i % 2 != 0
result_l = [str(i * i) for i in filter(flt,lst)]      
print(",".join(result_l))
```
---

**_테스트 케이스와 솔루션에 실수가 있었는데 @dwedigital의 도움으로 알림을 받고 수정했습니다. 그에게 진심으로 감사합니다._**

# 문제 17

### **문제:**

> **_콘솔 입력에서 트랜잭션 로그를 기반으로 은행 계좌의 순 금액을 계산하는 프로그램을 작성하십시오. 트랜잭션 로그 형식은 다음과 같습니다:_**

```
D 100
W 200
```

- D는 입금을 의미하고 W는 출금을 의미합니다.

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
D 300
D 300
W 200
D 100
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
500
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import sys
netAmount = 0
while True:
    s = raw_input()
    if not s:
        break
    values = s.split(" ")
    operation = values[0]
    amount = int(values[1])
    if operation=="D":
        netAmount+=amount
    elif operation=="W":
        netAmount-=amount
    else:
        pass
print netAmount
```

---

**내 솔루션: 파이썬 3**

```python
total = 0
while True:
    s = input().split()
    if not s:            # 문자열이 비어 있으면 중단합니다.
        break
    cm,num = map(str,s)    # 두 개의 입력이 문자열 데이터 유형으로 cm과 num에 분배됩니다.

    if cm=='D':
        total+=int(num)
    if cm=='W':
        total-=int(num)

print(total)
```

---

```python
'''솔루션 작성자: leonedott'''

lst = []
while True:
  x = input()
  if len(x)==0:
    break
  lst.append(x)

balance = 0
for item in lst:
  if 'D' in item:
    balance += int(item.strip('D '))
  if 'W' in item:
    balance -= int(item.strip('W '))
print(balance)
```

---

```python
'''솔루션 작성자: AlexanderSro'''

account = 0
while True:
    action = input("입금/출금/잔액/종료? D/W/B/Q: ").lower()
    if action == "d":
        deposit = input("얼마나 입금하시겠습니까? ")
        account = account + int(deposit)
    elif action == "w":
        withdrow = input("얼마나 출금하시겠습니까? ")
        account = account - int(withdrow)
    elif action == "b":
        print(account)
    else:
        quit()
```

---

```python
'''솔루션 작성자: ShalomPrinz
'''
lines = []
while True:
	loopInput = input()
	if loopInput == "done": # "done" 입력 시 종료
		break
	else:
		lines.append(loopInput)

lst = list(int(i[2:]) if i[0] == 'D' else -int(i[2:]) for i in lines)
print(sum(lst))
```
---
```python
'''솔루션 작성자: popomaticbubble
'''
transactions = []

while True:
    text = input("> ")
    if text:
    	text = text.strip('D ')
    	text = text.replace('W ', '-')
    	transactions.append(text)
    else: 
		break	
		
transactions = (int(i) for i in transactions)
balance = sum(transactions)
print(f"잔액은 {balance}입니다.")
```
---
```python
'''솔루션 작성자: ChichiLovesDonkeys
'''

money = 0
while 1:
    trans = input().split(' ')
    if trans[0] == 'D':
        money = money + int(trans[1])
    elif trans[0] == 'W':
        money = money - int(trans[1])
    elif input() == '': # 빈 입력 시 종료
        break
    print(f'현재 잔액은: {money}입니다.')
```
---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%204.md "4일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%206.md "6일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)

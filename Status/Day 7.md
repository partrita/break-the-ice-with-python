# 문제 20

### **문제:**

> **_주어진 범위 0과 n 사이에서 7로 나누어지는 숫자를 반복할 수 있는 제너레이터가 있는 클래스를 정의하십시오._**

> **_다음과 같은 입력이 프로그램에 제공된다고 가정합니다:_**

```
7
```

> **_그러면 출력은 다음과 같아야 합니다:_**

```
0
7
14
```
---

### 힌트:

> **_클래스, 함수 및 컴프리헨션 사용을 고려하십시오._**

---

**주요 저자 솔루션: 파이썬 2**

#### **_이 문제에 대한 솔루션 코드는 언급된 문제와 관련이 없었고 함수를 호출하는 동안 입력 오류가 있었습니다._**

---

**솔루션: 파이썬 3**

```python
'''솔루션 작성자: ShalomPrinz
'''
class MyGen():
    def by_seven(self, n): # n까지 7의 배수를 생성하는 제너레이터
        for i in range(0, int(n/7) + 1): # 0부터 n/7까지 반복 (n/7은 n까지 7의 배수 개수)
            yield i * 7 # 현재 숫자에 7을 곱한 값을 반환

for i in MyGen().by_seven( int(input('숫자를 입력하세요... ')) ): # MyGen 클래스의 인스턴스를 만들고 by_seven 메소드 호출
    print(i)
```

---

```python
'''솔루션 작성자: Seawolf159
'''
class Divisible:

    def by_seven(self, n): # n까지 7의 배수를 생성하는 제너레이터
        for number in range(1,n + 1): # 1부터 n까지 반복
            if number % 7 == 0: yield number # 7로 나누어지면 반환


divisible = Divisible() # Divisible 클래스의 인스턴스 생성
generator = divisible.by_seven(int(input("숫자를 입력하세요. --> "))) # by_seven 메소드 호출하여 제너레이터 얻기
for number in generator: # 제너레이터 반복
    print(number)

```

---

# 문제 21

### **문제:**

> **_로봇이 원점 (0,0)에서 시작하여 평면에서 움직입니다. 로봇은 주어진 단계만큼 UP, DOWN, LEFT, RIGHT 방향으로 움직일 수 있습니다. 로봇 이동의 흔적은 다음과 같습니다:_**

```
UP 5
DOWN 3
LEFT 3
RIGHT 2
```

> **_방향 뒤의 숫자는 단계입니다. 일련의 이동 후 현재 위치와 원점 사이의 거리를 계산하는 프로그램을 작성하십시오. 거리가 부동 소수점이면 가장 가까운 정수를 인쇄하십시오._**
> **_예시:_**
> **_다음 튜플이 프로그램에 입력으로 주어지면:_**

```
UP 5
DOWN 3
LEFT 3
RIGHT 2
```

> **_그러면 프로그램의 출력은 다음과 같아야 합니다:_**

```
2
```

---

### 힌트:

> **_질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다. 여기서 거리는 유클리드 거리를 나타냅니다. sqrt 함수를 사용하려면 math 모듈을 가져옵니다._**

---

**주요 저자 솔루션: 파이썬 2**

```python
import math
pos = [0,0]
while True:
    s = raw_input()
    if not s:
        break
    movement = s.split(" ")
    direction = movement[0]
    steps = int(movement[1])
    if direction=="UP":
        pos[0]+=steps
    elif direction=="DOWN":
        pos[0]-=steps
    elif direction=="LEFT":
        pos[1]-=steps
    elif direction=="RIGHT":
        pos[1]+=steps
    else:
        pass

print int(round(math.sqrt(pos[1]**2+pos[0]**2)))
```

---

**내 솔루션: 파이썬 3**

```python
import  math

x,y = 0,0
while True:
    s = input().split()
    if not s: # 입력이 없으면 루프 종료
        break
    if s[0]=='UP':                  # s[0]은 명령을 나타냅니다.
        x-=int(s[1])                # s[1]은 이동 단위를 나타냅니다. (y 좌표 변경으로 수정해야 함)
    if s[0]=='DOWN':
        x+=int(s[1])                # (y 좌표 변경으로 수정해야 함)
    if s[0]=='LEFT':
        y-=int(s[1])                # (x 좌표 변경으로 수정해야 함)
    if s[0]=='RIGHT':
        y+=int(s[1])                # (x 좌표 변경으로 수정해야 함)
                                    # N**P는 N^P를 의미합니다.
# 원점에서 현재 위치 (y, x)까지의 유클리드 거리 계산 (일반적으로 (x,y)로 사용되지만, 위 코드에서는 y가 x축, x가 y축 역할을 함)
# 문제의 의도에 맞게 수정: UP/DOWN은 y좌표, LEFT/RIGHT는 x좌표 변경
# x -> y_coord, y -> x_coord
# UP: y_coord += steps
# DOWN: y_coord -= steps
# LEFT: x_coord -= steps
# RIGHT: x_coord += steps

# 수정된 로직 (변수명은 그대로 사용하되, 좌표계의 의미를 바로잡음):
# x는 y축 이동량, y는 x축 이동량으로 간주

# 초기 위치 (0,0)
# UP 5: y_pos = 0 + 5 = 5.  (0, 5)
# DOWN 3: y_pos = 5 - 3 = 2. (0, 2)
# LEFT 3: x_pos = 0 - 3 = -3. (-3, 2)
# RIGHT 2: x_pos = -3 + 2 = -1. (-1, 2)
# 거리 = sqrt((-1)^2 + 2^2) = sqrt(1 + 4) = sqrt(5) approx 2.23
# 가장 가까운 정수는 2

# 위 코드의 변수 할당을 수정하여 표준 좌표계처럼 동작하게 하거나,
# 현재 변수 사용을 유지하되 주석을 명확히 하여 x가 수직, y가 수평 이동을 나타냄을 밝힘.
# 여기서는 기존 코드의 로직을 최대한 따르되, 최종 거리 계산 시 변수의 의미를 명확히 함.
# pos[0] -> y좌표, pos[1] -> x좌표 (주요 저자 솔루션 기준)
# 내 솔루션 기준: x -> y축 변화량 (부호 반대), y -> x축 변화량

# 내 솔루션의 좌표계 해석:
# (0,0)에서 시작
# UP 5 -> x = 0 - 5 = -5. 현재: (y=0, x=-5) -> (0, -5)로 해석 (y가 x축, x가 y축 역할)
# DOWN 3 -> x = -5 + 3 = -2. 현재: (y=0, x=-2) -> (0, -2)
# LEFT 3 -> y = 0 - 3 = -3. 현재: (y=-3, x=-2) -> (-3, -2)
# RIGHT 2 -> y = -3 + 2 = -1. 현재: (y=-1, x=-2) -> (-1, -2)
# 거리 = sqrt((-1)^2 + (-2)^2) = sqrt(1+4) = sqrt(5) -> 2

# 만약 표준 좌표계를 따른다면:
# pos_x, pos_y = 0,0
# UP 5: pos_y += 5
# DOWN 3: pos_y -=3
# LEFT 3: pos_x -=3
# RIGHT 2: pos_x +=2
# 최종 위치: (-1, 2). 거리 = sqrt((-1)^2 + 2^2) = sqrt(5) -> 2

# 현재 내 솔루션의 변수 x, y는 최종적인 x,y 좌표가 아니라 누적된 이동량을 나타내는 것으로 보임.
# UP 5 -> x = -5 (y축 방향으로 -5만큼 이동했다고 해석, 즉 아래로 5) - 이는 UP의 일반적인 의미와 반대.
# 코드를 문제 설명에 맞게 수정하는 것이 좋음.
# UP -> y 증가, DOWN -> y 감소, LEFT -> x 감소, RIGHT -> x 증가

# 수정된 내 솔루션 (표준 좌표계):
pos_x, pos_y = 0,0
while True:
    s = input().split()
    if not s:
        break
    direction = s[0]
    steps = int(s[1])
    if direction == 'UP':
        pos_y += steps
    elif direction == 'DOWN':
        pos_y -= steps
    elif direction == 'LEFT':
        pos_x -= steps
    elif direction == 'RIGHT':
        pos_x += steps

dist = round(math.sqrt(pos_x**2 + pos_y**2))
print(dist)

```
---
```python
'''솔루션 작성자: pratikb0501
'''

from math import sqrt
lst = []
position = [0,0] # position[0]은 y좌표, position[1]은 x좌표로 사용
while True:
    a = input()
    if not a:
        break
    lst.append(a)
for i in lst:
    if 'UP' in i:
        position[0] += int(i.strip('UP ')) # UP이면 y좌표 증가
    if 'DOWN' in i:
        position[0] -= int(i.strip('DOWN ')) # DOWN이면 y좌표 감소
    if 'LEFT' in i:
        position[1] -= int(i.strip('LEFT ')) # LEFT면 x좌표 감소
    if 'RIGHT' in i:
        position[1] += int(i.strip('RIGHT ')) # RIGHT면 x좌표 증가
# 최종 위치는 (position[1], position[0])
print(round(sqrt(position[1] ** 2 + position[0] ** 2))) # 유클리드 거리
```
---

[**_이전 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%206.md "6일차")

[**_다음 날로 가기_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day%208.md "8일차")

[**_토론_**](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)


# 문제 51

### **문제**

> ***5/0을 계산하는 함수를 작성하고 try/except를 사용하여 예외를 처리하십시오.***

----------------------
### 힌트
> ***try/except를 사용하여 예외를 처리하십시오.***

----------------------

**주요 저자 솔루션: 파이썬 2**
```python
def throws():
    return 5/0

try:
    throws()
except ZeroDivisionError: # 0으로 나누려고 할 때 발생하는 예외
    print "0으로 나누었습니다!"
except Exception, err: # 다른 모든 예외 처리 (Python 2 구문)
    print '예외가 발생했습니다'
finally: # 예외 발생 여부와 관계없이 항상 실행
    print '정리를 위한 finally 블록입니다'
```
----------------
**내 솔루션: 파이썬 3**
```python
def divide():
    return 5/0

try:
    divide()
except ZeroDivisionError as ze: # ZeroDivisionError 예외를 잡아 변수 ze에 할당
    print("왜 숫자를 0으로 나누려고 하십니까!!")
except: # 다른 모든 예외 처리
    print("기타 예외")

```
---------------------


# 문제 52

### **문제**

> ***문자열 메시지를 속성으로 사용하는 사용자 정의 예외 클래스를 정의하십시오.***

----------------------
### 힌트
> ***사용자 정의 예외를 정의하려면 Exception에서 상속받은 클래스를 정의해야 합니다.***

----------------------

**주요 저자 솔루션: 파이썬 2**
```python
class MyError(Exception): # Exception 클래스를 상속
    """나만의 예외 클래스

    속성:
        msg  -- 오류 설명
    """

    def __init__(self, msg):
        self.msg = msg # 오류 메시지를 인스턴스 변수 msg에 저장

error = MyError("문제가 발생했습니다") # MyError 예외 객체 생성

```
----------------
**내 솔루션: 파이썬 3**
```python

class CustomException(Exception): # Exception 클래스를 상속
    """사용자 정의 목적을 위해 발생하는 예외

    속성:
        message -- 오류 설명
    """

    def __init__(self, message):
        self.message = message # 오류 메시지를 인스턴스 변수 message에 저장


num = int(input()) # 사용자로부터 정수 입력

try:
    if num < 10:
        raise CustomException("입력값이 10보다 작습니다") # num이 10보다 작으면 CustomException 발생
    elif num > 10:
        raise CustomException("입력값이 10보다 큽니다") # num이 10보다 크면 CustomException 발생
except CustomException as ce: # CustomException 예외를 잡아 변수 ce에 할당
    print("발생한 오류: " + ce.message) # 예외 메시지 출력

```
---------------------


# 문제 53

### **문제**

> ***"username@companyname.com" 형식의 이메일 주소가 있다고 가정하고, 주어진 이메일 주소의 사용자 이름을 인쇄하는 프로그램을 작성하십시오. 사용자 이름과 회사 이름은 모두 문자로만 구성됩니다.***

> ***예시:
다음 이메일 주소가 프로그램에 입력으로 주어지면:***
```
john@google.com
```
> ***그러면 프로그램의 출력은 다음과 같아야 합니다:***
```
john
```
> ***질문에 입력 데이터가 제공되는 경우 콘솔 입력으로 간주해야 합니다.***

----------------------
### 힌트
> ***\w를 사용하여 문자와 일치시킵니다.*** (정규 표현식에서 \w는 영숫자 문자 + 밑줄을 의미합니다.)

----------------------

**주요 저자 솔루션: 파이썬 2**
```python
import re # 정규 표현식 모듈 가져오기
emailAddress = raw_input() # 사용자로부터 이메일 주소 입력
pat2 = "(\w+)@((\w+\.)+(com))" # 정규 표현식 패턴: (\w+)는 사용자 이름, ((\w+\.)+(com))은 회사 도메인 부분
r2 = re.match(pat2,emailAddress) # 패턴이 문자열 시작 부분과 일치하는지 확인
print r2.group(1) # 첫 번째 괄호 그룹 (사용자 이름) 출력
```
----------------
**내 솔루션: 파이썬 3**
```python
email = "john@google.com"
email = email.split('@') # '@' 문자를 기준으로 문자열을 분리하여 리스트 생성
print(email[0]) # 리스트의 첫 번째 요소 (사용자 이름) 출력
```
---------------------
**또는**
```python
import re

email = "john@google.com elise@python.com" # 여러 이메일 주소가 있는 문자열
pattern = "(\w+)@\w+\.com" # 정규 표현식 패턴: (\w+)는 사용자 이름, \w+\.com은 @ 뒤의 회사 이름과 .com (닷을 이스케이프 처리)
ans = re.findall(pattern,email) # 패턴과 일치하는 모든 부분을 찾아 리스트로 반환 (사용자 이름만)
print(ans) # 결과 리스트 출력 (예: ['john', 'elise'])
```


[***이전 날로 가기***](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_13.md "13일차")

[***다음 날로 가기***](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/blob/master/Status/Day_15.md "15일차")

[***토론***](https://github.com/darkprinx/100-plus-Python-programming-exercises-extended/issues/3)
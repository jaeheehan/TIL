# XHOST 이해 


xhost 는 XServer 가 되는 쪽에서 들어오는 아이피를 승인해주는 것이다. 

window일 경우 xming 설치했으면 설치경로에  X0.hosts 파일이 있다. 

거기에 아이피를 넣어주면 된다.  (변경시 xming을 다시 실행한다.)

```
localhost
192.168.0.44
192.168.0.16
192.168.0.45
```

## xming 으로 테스트 하기 

window 일 경우 xming으로 테스트 한다. 

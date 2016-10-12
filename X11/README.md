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

윈도우 서버(192.168.0.29) 

window 일 경우 xming으로 테스트 한다.  

![xming1](https://github.com/jaeheehan/TIL/blob/master/X11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202016-10-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.50.50.png?raw=true)

![xming2]
(https://github.com/jaeheehan/TIL/blob/master/X11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202016-10-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.50.58.png?raw=true)

특별한 것 없이 다음 연타로 설치 

putty 로 x11 Forwarding 설정

![putty1](https://github.com/jaeheehan/TIL/blob/master/X11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202016-10-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.48.08.png?raw=true)

export 로 display를 지정하고 xterm을 실행한다 (xterm은 apt-get 이나 yum으로 설치)

![putty2](https://github.com/jaeheehan/TIL/blob/master/X11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202016-10-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.49.43.png?raw=true)

다음과 같은 그림이 나오면 성공

![good](https://github.com/jaeheehan/TIL/blob/master/X11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202016-10-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.50.12.png?raw=true)



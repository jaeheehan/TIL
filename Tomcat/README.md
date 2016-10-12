# catalina.out 날짜별 저장 안되고 로그 안 찍게하기

```
언제 부터인가 위의 설정이 >> "$CATALINA_OUT" 2>&1 &와 같이 바뀌었습니다.
/etc/profile에 다음을 추가하셔도 한방에 해결됩니다.
export CATALINA_OUT="/dev/null"
```
> 쓸모없는 짓 그냥 log4j로 daily로 찍고 console 을 안 찍으면 된다. 

```
<root>
    <priority value="WARN" />
   <!-- <appender-ref ref="console" /> -->
    <appender-ref ref="dailyout" />
</root>
```

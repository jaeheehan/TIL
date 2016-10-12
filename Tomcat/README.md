# catalina.out 날짜별 저장 

```
언제 부터인가 위의 설정이 >> "$CATALINA_OUT" 2>&1 &와 같이 바뀌었습니다.
/etc/profile에 다음을 추가하셔도 한방에 해결됩니다.
export CATALINA_OUT="/dev/null"

> 될지 지켜봐야... 

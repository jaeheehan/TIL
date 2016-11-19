# 프로젝트 실행 

npm run dev-sever

# 프로젝트 소스

https://github.com/velopert/react-codelab-fundamentals/tree/contact


# immutablility helper

배열을 처리를 위한 라이브러리 (페이스북에서 만듬)
```
npm install --save react-addons-update
import update from 'react-addons-update'
```

# 자바스크립트 테스트

http://jsbin.com


# spread 

Atom 에디터에서 jshint 패키지를 사용하는경우엔 spread 연산자를 지원하지 않습니다.

/* jshint ignore: start */

를 코드 맨 윗줄에 넣으면 해당 파일은 검사하지 않습니다.

새로운 문법인데 기본적으로 바벨안에 안 들어 있어서 설치해줘야 한다

```
npm install --save babel-preset-stage-0
```

> webpack.config.js 파일 안에서 module -> loaders -> query -> presets 배열안에 
> 추가해줘야 한다 

```
presets: ['es2015', 'stage-0' ,'react']
```

# ref

ReactJS 에 id 와 비슷한 것

# Component LifeCycle API

```
컴포넌트를 생성 할 때는 
constructor -> componentWillMount 
-> render -> componentDidMount 
순으로 진행됩니다.

컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

컴포넌트의 prop이 변경될 때엔 
componentWillReceiveProps -> shouldComponentUpdate -> 
componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 
shouldComponentUpdate 부터 시작됩니다.
```

> componentWillMount

컴포넌트가 DOM 위에 만들어지기 전에 실행됩니다.


> render 

컴포넌트 렌더링을 담당합니다.


> componentDidMount

컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
이 안에서 다른 JavaScript 프레임워크를 연동하거나,
setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

> componentWillReceiveProps

컴포넌트가 prop 을 새로 받았을 때 실행됩니다.

prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.

> shouldComponentUpdate

prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.

위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 

하고 값을 반환하도록 하시길 바랍니다.

예: return nextProps.id !== this.props.id;

JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.

> componentWillUpdate

컴포넌트가 업데이트 되기 전에 실행됩니다.

이 메소드 안에서는 this.setState() 를 사용하지 마세요 – 무한루프에 빠져들게 됩니다.

> componentDidUpdate

컴포넌트가 리렌더링을 마친 후 실행됩니다.

> componentWillUnmount

컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.

# localStorage 

2.5MB ~ 5MB 최고 용량이 틀리다 서버로 전송되지 않음

setItem , getItem

localStorage.clear();

하면 지워진다 




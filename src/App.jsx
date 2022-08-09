import React from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
    const onClickButton = () => {
        alert();
    };
    const [num, setNum] = useState(0);


    return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  )
};

export default App;
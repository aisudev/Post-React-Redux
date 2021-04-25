
import './style.css'
import CreatePost from "./components/CreatePost";
import AllPost from './components/AllPost'


function App() {

  return (
    <>
      <h1
        style={{
          textAlign:'center',
          fontSize:48
        }}
      >POST {}</h1>
      <CreatePost/>
      <AllPost/>
    </>
  );
}

export default App

import './style.css'
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Post from "./components/Post";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign:'center',
          fontSize:48
        }}
      >POST</h1>
      <CreatePost/>
    </>
  );
}

export default App;

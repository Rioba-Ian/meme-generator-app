import Header from "./components/Header"
import Meme from "./components/Meme"

function App() {
  // const [thingsArr, setThings] = useState(["thing 1", "thing 2"])
  // function addThings() {
  //   const newThingsText = `Thing ${thingsArr.length + 1}`
  //   setThings(prevState => [...prevState, newThingsText])
  // }
  // const elemArr = thingsArr.map(item => (<p key={item}>{item}</p>)
  // )

  return (
    <div className="App">
      <Header />
      <Meme />


    </div>
  );
}

export default App;

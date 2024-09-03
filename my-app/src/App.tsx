import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

// function App() {
//   const handleSelectItem = (item: string) => {
//     console.log(item)
//   }
//   let items = ["Apple", "Mango", "Banana", "Guava", "Pear"];
//   return <div><ListGroup items = {items} heading="Fruits" onSelectItem={handleSelectItem}/></div>
// }

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
      <Buttons color="success" onClick={() => console.log("I was clicked")}>
        Click Me
      </Buttons>
    </div>
  );
}
export default App;

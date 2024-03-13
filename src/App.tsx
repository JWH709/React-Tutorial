import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New york", "San Francisco", "Paris", "Tokyo", "London"];
  return (
    <div>
      <ListGroup
        items={items}
        heading={"CTRL + Shift + P: Wrap with abbreviation"}
      />
    </div>
  );
}

export default App;

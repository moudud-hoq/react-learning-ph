import "./App.css";

function App() {
  return (
    <>
      <h1>Vite+React</h1>
      <Person></Person>
      <Person></Person>
      <Developer></Developer>
    </>
  );
}
function Person() {
  const age = 25;
  const name = "Masud";
  const address = { country: "Bangladesh", City: "DHaka" };

  return (
    <h4 className="Person">
      I am a {name} address is {address.country} age:{age}
    </h4>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid red",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>This is inline css adding</h5>
      <p>This is inline css adding</p>
    </div>
  );
}

export default App;

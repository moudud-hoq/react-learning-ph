function App2(props) {
  // By Normall Function
  function normallFunction() {
    alert("Button Clicked");
  }

  // By Arrow Function
  const arrowFunction = () => {
    alert("Button Clicked2");
  };

  
  return (   
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        textAlign: "center",
      }}
    >
      <h3>React Core Concepts:2</h3>
      <button onClick={normallFunction}>Normall Functione</button>
      <button onClick={arrowFunction}>Arrow Function</button>
      {/* We can define by above 2 way but also we can do it by inline arrow function for single purpose */}
      <button
        onClick={() => {
          alert("arrowFuncInline");
        }}
      >
        Arrow Function Inline
      </button>
    </div>
  );
}

export default App2;

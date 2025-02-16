import { useEffect, useState } from "react";

function App() {
  const [apiMessage, setApiMessage] = useState("");
  const currentPath = window.location.pathname; // Get the current path from the root

  useEffect(() => {
    fetch("./backend/index.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setApiMessage(data.message); // Save the API message to state
      })
      .catch((error) => console.error("Error fetching API:", error));
  }, []);

  return (
    <div>
      <h1>Check the console for the API response</h1>
      <p>Current Path: {currentPath}</p>
      {apiMessage && <p>API Message: {apiMessage}</p>}
    </div>
  );
}

export default App;

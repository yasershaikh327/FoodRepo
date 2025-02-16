import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost/backend/hello.php")
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Error fetching API:", error));
  }, []);

  return <h1>Check the console for the API response</h1>;
}

export default App;

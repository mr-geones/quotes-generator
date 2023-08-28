import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const fetchUserData = () => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => setUsers(data));
  };

  useEffect(() => fetchUserData(), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      count === 0 || count < users.length - 1 ? setCount(count + 1) : setCount(0);
    }, 3000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <h1>{users.length > 0 && users[count].text}</h1>
    </>
  );
}

export default App;

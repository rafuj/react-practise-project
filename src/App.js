import React, { useEffect, useState } from "react";
import "./App.sass";

const url = "https://randomuser.me/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchRandomUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Searcing For Random User</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="App">
        {data.length !== 0 && (
          <div className="author">
            <div className="authorAvatar">
              <img
                src={data.results[0].picture.medium}
                alt={data.results[0].name.first}
              />
            </div>
            <div className="authorContent">
              <h4 className="authorContentTitle">
                <span>{data.results[0].name.title}</span>
                <span>{data.results[0].name.first}</span>
                <span>{data.results[0].name.last}</span>
              </h4>
            </div>
          </div>
        )}
        <div className="buttonContainer">
          <button onClick={fetchRandomUser}>Click Here</button>
        </div>
      </div>
    </main>
  );
}

export default App;

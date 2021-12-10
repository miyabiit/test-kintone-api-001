import "./styles.css";

import axios from "axios";

export default function App() {
  const body = { app: 9, id: 1 };
  const params = new URLSearchParams(body);
  //console.log(params);
  const url = "https://0vnjl1ng82s3.cybozu.com/k/v1/record.json";
  const apitoken = "Wz8X2arEcgJQ7UrLarYhEU9YvyLlytBGKx7f2RSL";
  //console.log(url + '?' + params);
  const config = {
    headers: {
      //"Content-Type": "application/json",
      "X-Cybozu-API-Token": apitoken
    }
  };

  const getReserv = () => {
    fetch(url + "?" + params, {
      method: "GET",
      mode: "cors",
      headers: config.headers
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log("E:", error));
  };

  const getReservations = () => {
    axios
      .get({
        url: url,
        headers: {
          "Content-Type": "application/json",
          "X-Cybozu-API-Token": apitoken
        },
        params: body,
        method: "GET",
        responseType: "json"
      })
      .then((res) => {
        if (!res.ok) {
          console.log("RESOPONSE ERROR", res.data);
        } else {
          console.log("out", res.data);
        }
      })
      .catch((error) => console.log("error:", error));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={getReservations}>TEST fetch()</button>
      <button onClick={getReserv}>TEST axios()</button>
    </div>
  );
}

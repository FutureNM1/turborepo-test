import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "@repo/ui/card";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api");
      const data = res.data;
      setData(data.res);
    })();
  }, []);
  return (
    <>
      <Card title="qewqew" href="asdf">
        {data}
      </Card>
    </>
  );
}

export default App;

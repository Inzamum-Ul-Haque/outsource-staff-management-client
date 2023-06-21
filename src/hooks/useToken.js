import { useEffect, useState } from "react";

const useToken = (id) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (id) {
      fetch("")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [id]);

  return [token];
};

export default useToken;

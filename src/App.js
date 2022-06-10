import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";
import Text from "./components/Text";
// import "./app.css";

const override = css`
  position: fixed;
  top: 20%;
  margin: auto;
  justify-content: center;
  margin: 2;
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mx-auto text-center justify-center">
      {loading ? (
        <PulseLoader
          color={"#00df9a"}
          loading={loading}
          size={20}
          css={override}
        />
      ) : (
        <Text />
      )}
    </div>
  );
};

export default App;

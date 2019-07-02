import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App(props) {
  return (
    <>
      <Header />
      <main>
        <Form uniqid={props.uniqid} />
      </main>
    </>
  );
}

export default App;

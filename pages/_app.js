import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

const App = ({ Component }) => {
  return (
    <>
      <Layout>
        <Header />
        <Component />
      </Layout>
    </>
  );
};

// Component props는 Next에서 넣어주는 Props이다.
// about.js / post.js 등 component 자체를 넣어준다.
// _app.js는 최상위 부모 component

export default App;

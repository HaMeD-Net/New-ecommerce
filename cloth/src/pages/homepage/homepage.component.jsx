import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
import React from "react";

const Home = ({ history }) => {
  return (
    <div className="homepage">
      <Directory history={history} />
    </div>
  );
};
export default Home;

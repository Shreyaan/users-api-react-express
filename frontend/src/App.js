import React, { useEffect } from "react";
import CardsContainer from "./cardsContainer.js";

var axios = require("axios");

function App() {
  const [personsState, setpersonsState] = React.useState([]);
  const [pageNumber, setpageNumber] = React.useState(1);

  var config = {
    method: "get",
    url: `https://backend-api-test-expre.herokuapp.com/api/users?page=${pageNumber}`,
    // too do url ko https://backend-api-test-expre.herokuapp.com/api/users?page=1 karna hai
    // taaki sirf first 20 aye backend mein bhi query parameters daalne hai
    // 1 kko pagenumber state bana na hai
    headers: {},
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setpersonsState(response.data);
      })
      .catch(function (error) {
        console.log(error.response.status);
        //returs 404
        // todo - add error dialogue
      });
  }, [pageNumber]);

  function nextPage() {
    setpageNumber((prevPage) => prevPage + 1);
  }
  function prevPage() {
    setpageNumber((prevPage) => prevPage - 1);
  }

  return (
    <div className="App">
      <h1 className="heading">Users</h1>
      {personsState[1] != undefined && (
        <CardsContainer personsState={personsState} />
      )}

      <br />
      {pageNumber < 100 && <button onClick={nextPage}>Next Page</button>}
      {pageNumber > 1 && <button onClick={prevPage}>prev page</button>}
    </div>
  );
}

export default App;

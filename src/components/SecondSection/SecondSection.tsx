import React from "react";


const getVotes = async () => {
  const api_call = await fetch(`https://api.thecatapi.com/v1/votes`, {
    method: "GET",
    headers: {
      "x-api-key": `${process.env.REACT_APP_API_KEY}`,
    },
  });
  const data = await api_call.json();
};

function SecondSection() {
  return (
    <div>
      <button onClick={getVotes}>SecondSection - Get votes</button>
    </div>
  );
}

export default SecondSection;

import "./App.css";
import ContractorCard from "./components/Card/Card";
import React, { useState } from "react";
function App() {
  const [contractor, setContractor] = useState([
    {
      contractor: "Steven",
      service: "videography",
      completion: "4 jobs completed",
      location: "Boston",
    },
    {
      contractor: "Tryon",
      service: "twilight photography & editing",
      completion: "2 jobs completed",
      location: "",
    },
    {
      contractor: "Mike",
      service: "portraits",
      completion: "44 jobs completed",
      location: "",
    },
  ]);
  return (
    <div className="App">
      {contractor.map((contractor) => (
        <ContractorCard
          contractor={contractor.contractor}
          service={contractor.service}
          completion={contractor.completion}
          location={contractor.location}
        />
      ))}
    </div>
  );
}

export default App;

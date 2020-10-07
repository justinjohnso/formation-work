import React, { useState, useEffect } from "react";
import "./App.css";

const url =
  "https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv";

function App() {
  const [schools, setSchools] = useState({ cats: [], schools: [] });
  // const getData = () => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        let lines = data.split("\n");
        let schools = lines.slice(1);
        let categories = lines[0].split(",");

        let dataList = schools.map((school) => {
          let schoolCat = school.split(",");
          let schoolObj = {};
          schoolCat.map((schoolCat, i) => {
            schoolObj[categories[i]] = schoolCat;
          });
          return schoolObj;
        });

        setSchools({
          cats: categories,
          schools: dataList,
        });
      });
  }, []);

  return (
    <div className="App">
      <h1>Notion Live Coding</h1>
      <table>
        <tbody>
          <tr>
            {schools.cats.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
          {schools.schools.map((item) => (
            <tr key={item.UNITID}>
              <td>{item.UNITID}</td>
              <td>{item.INSTNM}</td>
              <td>{item.CITY}</td>
              <td>{item.STABBR}</td>
              <td>
                <a href={item.INSTURL}>{item.INSTURL}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

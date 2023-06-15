import { useState, useEffect } from 'react';
import Data from '../publications_DATA/SisodiaSir.csv';
import Papa from 'papaparse';
import './show.css';

const ShowData=()=> {

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">


      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Link</th>
              <th>Contributors</th>
              <th>Year</th>
              <th>About</th>
              <th>Cited</th>

            </tr>
          </thead>
          <tbody>

            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.article}</td>
                <td>{row.link}</td>
                <td>{row.contributors}</td>
                  <td>{row.year}</td>
                    <td>{row.about}</td>
                    <td>{row.cited}</td>

              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <br /><br />
      ~ webstylepress ~

    </div>
  );
}

export default ShowData;

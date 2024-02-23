import React from "react";
import Page from "../Page";
import { Table } from "react-bootstrap";

function Scores({ scores }) {
  return (
    <>
      {scores && scores.length > 0 ? (
        <Page className="pt-2">
          <Table responsive="sm" hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date - Time</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((scored, idx) => (
                <tr key={`${scored.email}-${idx+1}`}>
                  <td>{idx + 1}</td>
                  <td>{scored.saveDate}</td>
                  <td>{scored.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Page>
      ) : (
        <></>
      )}
    </>
  );
}

export default Scores;

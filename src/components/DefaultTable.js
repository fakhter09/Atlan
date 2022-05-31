import { customers } from "../data/customers";

import React from 'react'

function DefaultTable() {
  return (
    <>
    <h1 className="mt-5 p-2 text-center">Customers Dataset</h1>
    <div className="overflow-scroll">
   
    <table className="table table-primary table-striped mt-3">
      <thead>
        <tr>
          <th scope="col">Customer ID</th>
          <th scope="col">Company Name</th>
          <th scope="col">Contact Name</th>
          <th scope="col">Contact Title</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">Region</th>
          <th scope="col">Postal Code</th>
          <th scope="col">Country</th>
          <th scope="col">Phone</th>
          <th scope="col">Fax</th>
        </tr>
      </thead>
      <tbody>
      {customers.map(row => (
          <tr key={row.customerID}>
              <td>{row.customerID}</td>
              <td>{row.companyName}</td>
              <td>{row.contactName}</td>
              <td>{row.contactTitle}</td>
              <td>{row.address}</td>
              <td>{row.city}</td>
              <td>{row.region}</td>
              <td>{row.postalCode}</td>
              <td>{row.country}</td>
              <td>{row.phone}</td>
              <td>{row.fax}</td>
          </tr>
      ))}
      </tbody>
    </table>
  </div>
  </>
  )
}

export default DefaultTable


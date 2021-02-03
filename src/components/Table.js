import React from 'react';
import MUIDataTable from "mui-datatables";

function Table({patients}) {
  const columns = ["Name", "Gender", "Birthdate"];

  let data = [];

  for (let patient of patients) {
      data.push(
        [
          patient.resource.name 
          ? `${patient.resource.name[0].family} ${patient.resource.name[0].given[0]}` 
          : "N/A", 
          patient.resource.gender
          ? patient.resource.gender
          : "N/A", 
          patient.resource.birthDate
          ? patient.resource.birthDate
          : "N/A"
        ]);
  }

  const options = {
    filterType: 'checkbox'
  };
  
  const date = new Date();

  return (
    
    <MUIDataTable 
      title={`Results as of ${date}`}
      columns={columns}
      data={data}
      options={options}
    />
  )
}

export default Table;
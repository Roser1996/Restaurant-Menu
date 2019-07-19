import React from 'react';

const Deatil = ({ menuDetail, errMessage, isLoading }) => {
  return (
    <div>
      {
        errMessage ?
        <div>{errMessage}</div> :
        menuDetail === null ?
        isLoading && <div>...Loading</div> :
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                menuDetail.map((elem, index) => {
                  return (
                    <tr key={index} >
                      <td>{elem.name}</td>
                      <td>{elem.description}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

export default Deatil;
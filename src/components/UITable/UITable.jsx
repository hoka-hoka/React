import React from 'react';

import './UITable.scss';

const UITable = ({ about }) => (
  <table className="table">
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__coll">Имя</th>
        <th className="table__coll">Тип</th>
        <th className="table__coll">Описание</th>
      </tr>
    </thead>
    <tbody className="table__body">
      {about.map((item) => (
        <tr className="table__row" key={item.id}>
          <td className="table__coll">{item.name}</td>
          <td className="table__coll">{item.type}</td>
          <td className="table__coll">{item.text}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

UITable.defaultProps = {
  about: [],
};

export default UITable;

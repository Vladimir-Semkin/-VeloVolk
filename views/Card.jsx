const React = require('react');

module.exports = function Card({ map }) {
  return (
    <div
      id={`map${map.id}`}
      data-id={map.id}
      style={{ width: '300px', height: '100px' }}
    >
      <p>{map.name}</p>
    </div>
  );
};

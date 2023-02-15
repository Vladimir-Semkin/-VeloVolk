const React = require('react');

module.exports = function Card({ map }) {
  return (
    <div
      id={`map${map.id}`}
      data-id={map.id}
      className="Flex-item"
      style={{ width: '300px', height: '400px' }}
    >
      <p>{map.name}</p>
    </div>
  );
};

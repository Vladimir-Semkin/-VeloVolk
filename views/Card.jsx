const React = require("react");

module.exports = function Card({ map }) {
  return (
    <div>
      <div
        id={`map${map.id}`}
        data-id={map.id}
        className="Flex-item"
        style={{ width: "300px", height: "400px" }}
      >
        <p>{map.name}</p>
      </div>
      <div
        style={{
          display: "flex",
          margin: "40px 0px",
          fontSize: "14px",

          justifyContent: "space-between",
        }}
      >
        <div>
          <btn>Удалить</btn>
        </div>
        <div>
          <btn>Добавить себе</btn>
        </div>
        <div>
          <btn>Изменить маршрут</btn>
        </div>
      </div>
    </div>
  );
};

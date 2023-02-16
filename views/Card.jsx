const React = require("react");

module.exports = function Card({ map }) {
  return (
    <div data-cardId={map.id} className="cardMap">
      <div
        id={`map${map.id}`}
        data-id={map.id}
        className="Flex-item"
        style={{ width: "320px", height: "400px" }}
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
        <button data-id={map.id} type="button" className="delete">
          Удалить
        </button>

        <button type="button">Добавить себе</button>

        <button type="button">Изменить маршрут</button>
      </div>
    </div>
  );
};

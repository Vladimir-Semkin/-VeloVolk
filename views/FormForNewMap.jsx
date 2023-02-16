const React = require("react");

module.exports = function FormForNewMap() {
  return (
    <div
      style={{
        display: "flex",
        margin: "100px 0px",
        fontSize: "14px",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Добавить маршрут</p>
      <form id="form" className="container-sm w-50 mt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Откуда
          </label>
          <input
            name="pA"
            type="text"
            autoFocus
            className="form-control"
            id="pA"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Куда
          </label>
          <input name="pB" type="text" className="form-control" id="pB" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Название маршрута
          </label>
          <input name="name" type="text" className="form-control" id="name" />
        </div>
        <button id="btn" type="submit" className="btn btn-primary">
          Создать маршрут!
        </button>
      </form>
    </div>
  );
};

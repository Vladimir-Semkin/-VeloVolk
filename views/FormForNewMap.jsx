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
      <form
        id="form1"
        method="post"
        action="/api/map"
        className="container-sm w-50 mt-5"
      >
        <div className="mb-3">
          <p>Добавить маршрут</p>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Откуда
          </label>
          <input
            name="pA"
            type="text"
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
          <input name="nameNewMap" type="text" className="form-control" id="name" />
        </div>
        <p className="mapAddUra"></p>
        <button id="btn1" type="submit" className="btn btn-primary">
          Создать маршрут!
        </button>
        
      </form>
    </div>
  );
};

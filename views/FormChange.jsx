const React = require('react');
const Layout = require('./Layout');

module.exports = function FormChange() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          margin: '100px 0px',
          fontSize: '14px',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <form
          id="formChange"
          // method="post"
          // action="/api/map/:id"
          className="container-sm w-50 mt-5"
        >
          <div className="mb-3">
            <p className="pChange"></p>
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            >
              Откуда
            </label>
            <input
              name="pA"
              type="text"
              className="form-control"
              id="changePA"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            >
              Куда
            </label>
            <input
              name="pB"
              type="text"
              className="form-control"
              id="changePB"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            >
              Название маршрута
            </label>
            <input
              name="nameChange"
              type="text"
              className="form-control"
              id="changeName"
            />
          </div>
          <button
            id="btnChange"
            type="submit"
            className="btn btn-primary"
          >
            Изменить маршрут!
          </button>
        </form>
      </div>
    </Layout>
  );
};

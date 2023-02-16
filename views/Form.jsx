const React = require("react");
const Layout = require("./Layout");

module.exports = function Form() {
  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <form id="form" className="container-sm w-50 mt-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Емаил
            </label>
            <input
              name="email"
              type="email"
              autoFocus
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Пасворд
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
            />
            <p className="errorMessage"></p>
          </div>
          <button id="btn" type="submit" className="btn btn-primary">
            Сабмит
          </button>
        </form>
      </div>
    </Layout>
  );
};

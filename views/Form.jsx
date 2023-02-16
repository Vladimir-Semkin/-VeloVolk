const React = require("react");
const Layout = require("./Layout");

module.exports = function Form() {
  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <form id="form" className="container-sm w-50 mt-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              name="email"
              etype="email"
              autoFocus
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              class="form-control"
              id="password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

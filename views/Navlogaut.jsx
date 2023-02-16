const React = require("react");

module.exports = function Navlogaut({ authUser }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="/home">
            Velovolk!🚲🐺
          </a>
        </div>

        {authUser && (
          <div>
            <a className="navbar-brand" href="#">
              {authUser.email}
            </a>
          </div>
        )}
        <div>
          <a className="navbar-brand" href="/myTravel">
            Мои поездки
          </a>
        </div>

        <div>
          <a className="nav-link active" href="/logout">
            Выход в окно
          </a>
        </div>
      </div>
    </nav>
  );
};

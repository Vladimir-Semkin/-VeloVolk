const React = require('react');

module.exports = function Navreg() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="#">
            Velovolk!
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

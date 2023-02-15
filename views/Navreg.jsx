const React = require('react');

module.exports = function Navreg() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Velovolk!
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/login">
              Регистрация
            </a>
            <a className="nav-link" href="/login">
              Вход
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

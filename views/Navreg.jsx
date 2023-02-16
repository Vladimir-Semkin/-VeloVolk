const React = require('react');

module.exports = function Navreg() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="/home">
            Velovolk! 🚲🐺
          </a>
        </div>

        <div>
          <a  className="nav-link active" aria-current="page" href="/registration">
            Регистрация
          </a>

          <a  className="nav-link active" href="/login">
            Вход
          </a>
        </div>
      </div>
    </nav>
  );
};

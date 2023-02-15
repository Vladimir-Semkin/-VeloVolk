const React = require('react');

module.exports = function Navreg() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
        >
          Navbar
        </a>

        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a
              class="nav-link active"
              aria-current="page"
              href="/login"
            >
              Регистрация
            </a>
            <a
              class="nav-link"
              href="/login"
            >
              Вход
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

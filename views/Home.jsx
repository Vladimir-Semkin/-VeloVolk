/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Navreg = require('./Navreg');
const Card = require('./Card');

module.exports = function Home({ arrMaps }) {
  return (
    <Layout>
      <Navreg />
      <div className="d-flex justify-content-around homePage">
        {arrMaps.length ? (
          arrMaps.map((el) => <Card key={el.id} map={el} />)
        ) : (
          <div>No maps</div>
        )}
      </div>
    </Layout>
  );
};

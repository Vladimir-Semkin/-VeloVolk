const React = require('react');

module.exports = function Card({ map, authUser }) {
  return (
    <div
      data-cardId={map.id}
      className="cardMap"
    >
      <div
        id={`map${map.id}`}
        data-id={map.id}
        className="Flex-item"
        style={{ width: '320px', height: '400px'}}
      >
        <h2 style={{ fontFamily: "cursive", textAlign:'center', color:'white', textShadow:'darkblue 1px 0 10px' }}>{map.name}</h2>
      </div>
      <div
        style={{
          display: 'flex',
          margin: '40px 0px',
          fontSize: '14px',

          justifyContent: 'space-around',
        }}
      >
        {authUser?.id === map.user_id && (
          <>
            <button
            id='deleteBtn'
              data-id={map.id}
              type="button"
              className="delete btn "
            >
              Удалить
            </button>

            <button
              id="changeBtn"
              data-id={map.id}
              className="change btn "
              type="button"
            >
              Изменить
            </button>
          </>
        )}
      </div>
    </div>
  );
};

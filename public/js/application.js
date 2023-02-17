const homePage = document.querySelector('.homePage');

const formChange = document.querySelector('#formChange');
const mapAddUra = document.querySelector('.mapAddUra');

const changePA = document.querySelector('#changePA');
const changePB = document.querySelector('#changePB');
const changeName = document.querySelector('#changeName');
const backHome=document.getElementById('backHome')

function addMap(a, b, id) {
  function init() {
    // Задаём точки мультимаршрута.
    // const pointA = [55.749, 37.524];
    const pointA = a;
    const pointB = b;
    /**
     * Создаем мультимаршрут.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
     */
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          // Тип маршрутизации - пешеходная маршрутизация.
          routingMode: 'pedestrian',
        },
      },
      {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true,
      }
    );
    // Создаем кнопку.
    const changePointsButton = new ymaps.control.Button({
      data: { content: 'Поменять местами точки А и В' },
      options: { selectOnClick: true },
    });
    // Объявляем обработчики для кнопки.
    changePointsButton.events.add('select', () => {
      multiRoute.model.setReferencePoints([pointB, pointA]);
    });
    changePointsButton.events.add('deselect', () => {
      multiRoute.model.setReferencePoints([pointA, pointB]);
    });
    // Создаем карту с добавленной на нее кнопкой.
    const myMap = new ymaps.Map(
      id,
      {
        center: [55.739625, 37.5412],
        zoom: 12,
        controls: [changePointsButton],
      },
      {
        buttonMaxWidth: 300,
      }
    );
    // Добавляем мультимаршрут на карту.
    myMap.geoObjects.add(multiRoute);
  }
  ymaps.ready(init);
}

window.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/coordinats');
  const responseJSON = await response.json();

  responseJSON.map((el) => addMap(el.pA, el.pB, `map${el.id}`));
});

// async function addMap1() {
//   const response = await fetch("/coordinats");
//   const responseJSON = await response.json();
//   console.log(responseJSON);
//   responseJSON.map((el) => addMap(el.pA, el.pB, `map${el.id}`));
// }
// addMap1();

const form1 = document.querySelector('#form1');

if (form1) {
  form1.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { nameNewMap, pA, pB } = event.target;

    const response = await fetch('/api/map', {
      method: 'post',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: nameNewMap.value,
        pA: pA.value,
        pB: pB.value,
      }),
    });

    const data = await response.json();

    addMap(pA.value, pB.value, `map${data.id}`);
    homePage.insertAdjacentHTML('beforeend', data.html);
    mapAddUra.innerText = 'Маршрут добавлен';

    
  });
}

if (homePage) {
  homePage.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete')) {
      //   console.log(event.target.dataset.id);
      const response = await fetch(`/api/map/${event.target.dataset.id}`, {
        method: 'delete',
      });
      const responseJSON = await response.json();
      if (responseJSON.deleted) {
        event.target.closest('.cardMap').remove();
        // window.location.href = "http://localhost:3000/home";
      }
    }
  });
}

if (homePage) {
  homePage.addEventListener('click', (event) => {
    homePage.addEventListener('click', async (event) => {
      if (event.target.classList.contains('change')) {
        console.log(event.target);
        window.location.assign(`/changemap/${event.target.dataset.id}`);
      }
    });
  });
}

if (formChange) {
  formChange.addEventListener('submit', async (event) => {
    event.preventDefault();
    const smotriVova = window.location.href.split('/');
    console.log(smotriVova[smotriVova.length - 1]);

    const response = await fetch(
      `/api/map/${smotriVova[smotriVova.length - 1]}`,
      {
        method: 'put',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify({
          name: changeName.value,
          pA: changePA.value,
          pB: changePB.value,
        }),
      }
    );
    const data = await response.json();
    if (data.map) {
      window.location.assign('/home');
      console.log(data);
    }
  });
}
if(backHome){
  backHome.addEventListener('click', (event)=>{
    window.location.assign('/home')
  })
}
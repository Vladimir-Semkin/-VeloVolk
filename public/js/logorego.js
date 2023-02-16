const btn = document.querySelector("#btn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMessage = document.querySelector(".errorMessage");

if (btn) {
  btn.addEventListener("click", async (event) => {
    event.preventDefault();
    const response = await fetch("/login", {
      method: "post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const responseJson = await response.json();
    console.log(responseJson.message);

    if (responseJson.message === "true") {
      window.location.assign("/home");
    } else errorMessage.innerText = responseJson.message;
  });
}

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
          routingMode: "pedestrian",
        },
      },
      {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true,
      }
    );
    // Создаем кнопку.
    const changePointsButton = new ymaps.control.Button({
      data: { content: "Поменять местами точки А и В" },
      options: { selectOnClick: true },
    });
    // Объявляем обработчики для кнопки.
    changePointsButton.events.add("select", () => {
      multiRoute.model.setReferencePoints([pointB, pointA]);
    });
    changePointsButton.events.add("deselect", () => {
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

window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/coordinats");
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
const homePage=document.querySelector('.homePage');

if (form1) {
  form1.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, pA, pB } = event.target;

    const response = await fetch('/api/map', {
      method: 'post',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        pA: pA.value,
        pB: pB.value,
      }),
    });

    const { html } = await response.json();
    const { dataId } = await response.json()

    homePage.insertAdjacentHTML('beforeend', html);

    addMap(pA, pB, `map${dataId}` )

    event.target.reset();
  });
}
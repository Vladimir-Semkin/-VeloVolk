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

// addMap('Ставрополь', 'Невинномысск', 'map3');

window.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/coordinats');
  const responseJSON = await response.json();
  console.log(responseJSON);

  responseJSON.map((el) => addMap(el.pA, el.pB, `map${el.id}`));
});


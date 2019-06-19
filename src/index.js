
// --- APP ---
window.addEventListener('load', loadApp);

function loadApp() {
  // render orders list
  const ordersRootElement = document.getElementById('order-list');
  renderOrderList(ordersRootElement);

  // render user's data
  const userDataRootElement = document.getElementById('user-data');
  renderUserData(userDataRootElement);
}

function renderOrderList(rootElement) {
  const orders = getOrdersList();
  const orderListHTML = getOrdersListHtml(orders);

  rootElement.innerHTML = orderListHTML;
}

function renderUserData(rootElement) {
  const user = getUserData();
  const userDataHTML = getUserDataHtml(user);

  rootElement.innerHTML = userDataHTML;
}
// -----------------



// --- MODELS ---
function getOrdersList() {
  return [
    {
      items: [
        { name: 'IPhone X', params: 'silver, 64Gb', quantity: 10, price: 999 },
        { name: 'Macbook Pro', params: '13", 8Gb RAM, 128Gb SSD', quantity: 1, price: 1299 },
      ]
    },
    {
      items: [
        { name: 'Samsung Galaxy S10+', params: 'midnight black, 64Gb', quantity: 2, price: 1199 },
        { name: 'Samsung Galaxy Note 9', params: 'saphire blue, 128Gb', quantity: 4, price: 899 },
      ]
    }
  ]
}

function getUserData() {
  return { 
    name: "John Doe",
    mail: "johnsemail@gmail.com",
    phone: "+380123456789",
    address: "Mechnikova 2, Kiev, Ukraine",
  }
}
// -----------------



/// --- USER DATA MARKUP ---
function getUserDataHtml(userData) {
  const { name, phone, mail, address } = userData;
  return `<ul class="demo-user-block mdl-list mdl-shadow--2dp mdl-color--white">
  <li class="mdl-list__item demo-user-block__name mdl-color--primary">
    <span class="mdl-list__item-primary-content mdl-typography--headline mdl-color-text--white">${name}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${mail}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${phone}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${address}</span>
  </li>
</ul>`
}
// -----------------



/// --- ORDERS MARKUP ---

// render whole orders list
function getOrdersListHtml(orders) {
  return orders.map(renderOrderTable).join("\n");
}

// render single order as a table
function renderOrderTable(order) {
  const tableBody = renderTableBody(order);
  return `<table class="demo-content--full demo-content--separated mdl-data-table mdl-shadow--2dp mdl-color--white">
    ${TABLE_HEAD}
    ${tableBody}
  </table>`;
}

// table HEAD as constant
const TABLE_HEAD = `<thead>
  <tr>
    <th class="mdl-data-table__cell--non-numeric">Name</th>
    <th class="mdl-data-table__cell--non-numeric">Params</th>
    <th>Quantity</th>
    <th>Unit price</th>
    <th>Total price</th>
  </tr>
</thead>`;

// table body
function renderTableBody(order) {
  const itemsHTML = order.items.map(renderItemRow).join('');
  return `<tbody>${itemsHTML}</tbody>`;
}

// render single item row within table
function renderItemRow(item) {
  const {
    name, params, quantity, price,
  } = item;
  const total = price * quantity;

  return `<tr>
    <td class="mdl-data-table__cell--non-numeric"> ${name}</td>
    <td class="mdl-data-table__cell--non-numeric">${params}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td>${total}</td>
  </tr>`;
}
// -----------------
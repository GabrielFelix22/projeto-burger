const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')
const filterTwoAll = document.querySelector('.filter-two-all')

/* Formatando moeda */
function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });

    return newValue
}

/* Usando ForEach, para aparecer com todos os itens assim que clicar no botãom*/
function showAll(productsArray) {
    myLi = ''

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
    `
    })

    list.innerHTML = myLi

}

/* Usando .map para aplicar desconto em todos os produtos */
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,     // Spread operator
        price: product.price * 0.9,   // aplicando 10% de desconto
    }))

    showAll(newPrices)
}

/* Usando o .reduce, para mostrar a soma total de todos os produtos */

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `        
    <li>
        <p>O valor total é de R$ ${formatCurrency(totalValue)}</p>
     </li>
    `
}

/* Usando o .filter, para filtrar lanches vegan */

function filterAllItems() {
    const filterVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterVegan)
}

/* Usando o .filter, para filtrar lanches de bacon*/
function filterTwoAllItems() {
    const filterBacon = menuOptionsTwo.filter((product) => product.vegan)

    showAll(filterBacon)
}

/* Chamando as funções */

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)
filterTwoAll.addEventListener('click', filterTwoAllItems)
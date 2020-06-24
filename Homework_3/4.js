    "use strict"

    const products = [{
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    function compareNumbers(a, b) {
        return a - b;
    }

    let productWithPhotos = products.filter(item => "photos" in item && item.photos.length > 0);
    let productPrice = [products[0].price, products[1].price, products[2].price, products[3].price];

    productPrice.sort(function (a, b) {
        return a - b;
    });
    console.log(productPrice + " отсортировано от меньшего к большему.");
    document.write("Отсортировано от наименьшей цены: " + productPrice[0] + "<br>");
    document.write("Отсортировано от наименьшей цены: " + productPrice[1] + "<br>");
    document.write("Отсортировано от наименьшей цены: " + productPrice[2] + "<br>");
    document.write("Отсортировано от наименьшей цены: " + productPrice[3] + "<br>");
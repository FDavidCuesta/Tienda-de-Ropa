function apiFake(){
  fetch('https://fakestoreapi.com/products')
  .then((res) => {
    if (!res.ok){
      alert("not found");
      throw new Error ("no clothes found")
    }
    return res.json();
  })
  .then((data) => {
    let newArray = data.slice(0 , 18);
     let properties = newArray.map((item) =>
      ({id:item.id ,price:item.price , category:item.category , title:item.title , image:item.image }))
      const prices = Array.from(document.querySelectorAll('.precio'));
        prices.map((prices, index) => {
        prices.innerHTML = properties[index].price + "$";});

      const titles = Array.from(document.querySelectorAll(".title"));
       titles.map((titles , index) =>{
        titles.innerHTML = properties[index].title;})
      
        function addCart(index){
          const icons = document.querySelectorAll(".material-symbols-outlined");
          icons.forEach((icon, i)  => {
            if (i === index) { 
              icon.addEventListener("click", () => {
                const product = {
                  id: properties[i].id,
                  titulo: properties[i].title,
                  precio: properties[i].price
                };
                sessionStorage.setItem(`product_${product.id}`, JSON.stringify(product));
                console.log(JSON.parse(sessionStorage.getItem(`product_${product.id}`))) 
              });
            }
          });
        };
        const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        items.forEach(item => addCart(item));
        function checkCart() {
          if (sessionStorage.length > 2) {
            alert("Tenes un producto en el carrito, no salgas o perderas tus datos");
          };
        };
        checkCart() 
        function updateMenu() {
          if (document.getElementById('responsive-menu').checked == true) {
            document.getElementById('menu').style.borderBottomRightRadius = '0';
            document.getElementById('menu').style.borderBottomLeftRadius = '0';
          }else{
            document.getElementById('menu').style.borderRadius = '10px';
          }
        }
        updateMenu()

  })
}
apiFake()
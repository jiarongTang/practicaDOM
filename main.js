const products = [
    {
      name: 'Vulpix Soda Pop',
      price: 19.99,
      type: 'Peluche',
      image: './assets/vulpix_peluche.jpg'
    },
    {
      name: 'Celebi Pumpkin Parade',
      price: 21.99,
      type: 'Peluche',
      image: './assets/celebi_pumpkin_peluche.jpg'
    },
    {
      name: 'Pikachu Celebracion',
      price: 24.99,
      type: 'Peluche',
      image: './assets/pikachu-celebracion-peluche.jpg'
    },
    {
      name: 'Vulpix Alola',
      price: 22.99,
      type: 'Peluche',
      image: './assets/vulpix_alola_peluche.jpg'
    },
    {
      name: 'Mimikyu',
      price: 49.99,
      type: 'Peluche',
      image: './assets/mimikyu-peluche.jpg'
    },
    {
      name: 'Oshawott',
      price: 59.99,
      type: 'Peluche',
      image: './assets/oshawott-peluche.jpg'
    },
    {
      name: 'Sprigatito',
      price: 22.99,
      type: 'Peluche',
      image: './assets/sprigatito-peluche.jpg'
    },
    {
      name: 'Munchlax Soda Pop',
      price: 19.99,
      type: 'Peluche',
      image: './assets/munchlax_peluche.jpg'
    },
    {
      name: 'Eevee Comfy Friends',
      price: 44.99,
      type: 'Peluche',
      image: './assets/eevee_peluche.jpg'
    },
    {
      name: 'Umbreon',
      price: 29.99,
      type: 'Peluche',
      image: './assets/umbreon-peluche.jpg'
    },
    {
      name: 'Sylveon',
      price: 34.99,
      type: 'Peluche',
      image: './assets/sylveon-peluche.jpg'
    },
    {
        name: 'HP 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        type: 'Cartas',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
      },
      {
        name: 'HP Essentials 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        type: 'Videojuego',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
      },
      {
        name: 'HP 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        type: 'Libro',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
      },
      {
        name: 'HP 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        type: 'Libro',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
      }
    // Añade aquí al menos 9 productos más para tener un total de 10 productos
    // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  ];

  //funciones necesarias
  //funcion para mostrar info de productos
  function mostrar(object,caja){
    let div = document.createElement("div");
    div.className = "producto";
    let img = document.createElement("img");
    img.src = object.image;
    img.alt = "";
    div.appendChild(img);
    let p = document.createElement("p");
    p.innerText = object.name;
    div.appendChild(p);
    p = document.createElement("p");
    p.className = "price";
    p.innerText = `${object.price} €`;
    div.appendChild(p);
    caja.appendChild(div);
  }

  //funcion para recorrer lista para mostrar objetos
  function recorre(lista,caja){
    for(let i = 0; i < lista.length; i++){
        mostrar(lista[i],caja);
    }
  }

  //funcion para comprobar si hay checkbox activo
  function checkboxActivo(lista){
    let cantidad = [];
    for(let i = 0; i < lista.length; i++){
        if(lista[i].checked){
            cantidad.push(i);
        }
    }
    return cantidad;
  }

  // funcion para comprobar si hay productos con el tipo indicado
  function filtroTipo(tipo,lista){
    for(let i = 0; i < products.length; i++){
        if(products[i].type == tipo){
            lista.push(products[i]);
        }
    }
  }

  //recopilacion de tipos de articulos
  let tipo = [];
  let incluido;
  let producto;
  for(let i = 0; i < products.length;i++){
    producto = products[i];
    for(let key in producto){
        if(key == "type"){
            if(tipo.length == 0){
                tipo.push(producto[key]);
            }else{
                incluido = false;
                for(let j = 0; j < tipo.length; j++){
                    if(tipo[j] == producto[key]){
                        incluido = true;
                    }
                }
                if(!incluido){
                    tipo.push(producto[key]);
                }
            }
        }
    }
  }

  //display lista de tipos de articulos para filtro
  const filtro = document.querySelector('#filtro');
  let input;
  let label;
  let texto;
  for(let i = 0; i < tipo.length; i++){
    input = document.createElement("input");
    input.type = "checkbox";
    label = document.createElement("label");
    texto = document.createTextNode(tipo[i]);
    label.appendChild(input);
    label.appendChild(texto);
    filtro.appendChild(label);
  }

  // display productos
  const mainProducto = document.querySelector('#main');
  const footer = document.querySelector("footer");
  recorre(products,mainProducto);

  //filtro por nombre de producto (buscar)
  const buscar = document.getElementById("buscar");
  const click = document.querySelector('.click');
  buscar.addEventListener('click',function (){
    let listaCheck = document.querySelectorAll('[type="checkbox"]');
    let valor = click.value;
    let busqueda = []
    for(let i = 0; i < products.length;i++){
        if(products[i].name.toLowerCase().includes(valor.trim().toLowerCase())){
            busqueda.push(products[i]);
        }
    }
    for(let i = 0; i < listaCheck.length;i++){
      if(listaCheck[i].checked){
        listaCheck[i].checked = false;
      }
    }
    mainProducto.innerHTML = "";
    if(busqueda.length == 0){
        div = document.createElement("div");
        div.className = "producto";
        div.id = "alert";
        div.innerText = "No hay ningun producto con la palabra buscada";
        mainProducto.appendChild(div);
        mainProducto.style.display = "block";
    }else{
        mainProducto.style.display = "grid";
        recorre(busqueda,mainProducto);
    }
  })

//filtro por tipo de articulo
const checkboxList = document.querySelectorAll('[type="checkbox"]');
const busqueda = document.getElementsByClassName("click");
checkboxList.forEach(element => {
    element.addEventListener('click',() =>{
        let filtrado = [];
        let cant;
        let busqueda = document.querySelector('.click');
        mainProducto.innerHTML = "";
        if(busqueda.value != ""){
          busqueda.innerText = "";
          busqueda.value = "";
        }
        if(element.checked){ // comprobar si activo
            cant = checkboxActivo(checkboxList); // comprobar cuantos hay activo
            // sabemos siempre que habra minimo un activo
            for(let i = 0; i < cant.length; i++){
                filtroTipo(checkboxList[cant[i]].parentNode.innerText,filtrado);
            }
            // como la lista de los tipos de filtro esta creada segun los tipos que hay en la lista
            // no es posible seleccionar un filtro que no tenga productos por entonces no apareceria en la lista
            recorre(filtrado,mainProducto);
        }else{
            cant = checkboxActivo(checkboxList);
            if(cant.length == 0){
                recorre(products, mainProducto);
            }else{
                for(let i = 0; i < cant.length; i++){
                    filtroTipo(checkboxList[cant[i]].parentNode.innerText,filtrado);
                }
                recorre(filtrado,mainProducto);
            }
        }
    })
});

const products = [
    {
      name: 'HP Essentials 255 G8 AMD',
      price: 289,
      stars: 4,
      reviews: 250,
      type: 'Peluche',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
        name: 'HP Essentials 255 G8 AMD',
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
        name: 'HP Essentials 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        type: 'Libro',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
      },
      {
        name: 'HP Essentials 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        type: 'Libro',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
      }
    // Añade aquí al menos 9 productos más para tener un total de 10 productos
    // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  ];

  // filtro por tipo de elementos
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

  const filtro = document.querySelector('#filtro');
  console.log(tipo);
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
  let div;
  let img;
  let p;

  const mainProducto = document.querySelector('#main');
  for(let i = 0; i < products.length; i++){
    div = document.createElement("div");
    div.className = "producto";
    img = document.createElement("img");
    img.src = products[i].image;
    img.alt = "";
    div.appendChild(img);
    p = document.createElement("p");
    p.innerText = products[i].name;
    div.appendChild(p);
    p = document.createElement("p");
    p.className = "price";
    p.innerText = `${products[i].price} €`;
    div.appendChild(p);
    mainProducto.appendChild(div);
  }

  //filtro por tipo de producto (checkbox)
  




async function fetchProducts() {
    try {
        // Faz a solicitação à API
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        console.log('Dados brutos da API:', data);

        // Filtrar os produtos para remover eletrônicos e acessórios
        const filteredData = data.filter(product => {
            const category = product.category.toLowerCase(); // Certifique-se de comparar em letras minúsculas
            return category !== "electronics" && category !== "jewelery";
        });

        console.log('Dados filtrados:', filteredData);

        // Elemento HTML onde você deseja exibir os produtos
        const productsContainer = document.getElementById('products-container');

        // Limpa o conteúdo atual do contêiner
        productsContainer.innerHTML = '';

        // Array de objetos com informações personalizadas para cada card
        const cardInfo = [{
                title: "Título Personalizado 1",
                description: "Descrição Personalizada 1",
            },
            {
                title: "Título Personalizado 2",
                description: "Descrição Personalizada 2",
            },
            {
                title: "Título Personalizado 3",
                description: "Descrição Personalizada 3",
            },
        ];

        // Loop pelos dados filtrados e cria os cards do Bootstrap
        filteredData.forEach(product => {
            const card = document.createElement('div');
            card.className = 'col mb-4 text-center'; // Alteramos as classes aqui
            card.innerHTML = `
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">$${product.price}</p>
              <button type="button" class="btn btn-dark bg-black" data-bs-toggle="modal"
              data-bs-target="#janelamodal2">
              info</button>
              <button type="button" class="btn btn-black bg-black" style="color: white;">Add</button>
              <button type="button" class="btn btn-black bg-black" style="color: white;">Com</button>
            </div>
          </div>
          <div id="janelamodal2" class="modal">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-header">
                <h5 class="modal-title">Salto Alto Verde de Couro</h5>
                <button type="button" class="btn btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <p>O material de um salto alto de couro é notavelmente distintivo e oferece
                  uma combinação de elegância, durabilidade e sofisticação. O couro é
                  extraído da pele de animais, como bois, cabras ou cordeiros, e passa por
                  um processo de tratamento para ser transformado em um material versátil
                  e de alta qualidade. Aqui estão algumas características que definem o
                  material de um salto alto de couro.
                </p>
              </div>
            </div>
          </div>
        </div>
          
        `;
            productsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// Chama a função para buscar e exibir os produtos
fetchProducts();



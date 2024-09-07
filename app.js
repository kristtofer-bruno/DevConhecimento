function criarCard(titulo, imagem, descricao, link) {
    const cardContainer = document.querySelector('.card-container');


    
    // Criando os elementos do card
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');  
  
  
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');  
  
    const lin = document.createElement('p');
    lin.innerHTML = descricao + ' <a href="' + link + '">Saiba mais</a>';

    setTimeout(() => {
        cardContainer.classList.add('show');
      }, 100);

      const cards = document.querySelectorAll('.card');
      let currentIndex = 0;
      
      cards.forEach((card, index) => {
        card.addEventListener('click', () => {
          currentIndex = (index + 1) % cards.length;
          cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === currentIndex) {
              card.classList.add('active');
            }
          });
        });
      });
      
      window.onload = function() {
        setTimeout(function() {
          document.getElementById("palavra").style.color =  '#11A1FF';
        }, 2000); // 3000 milissegundos = 3 segundos
      };

    // Adicionando conteúdo aos elementos
    const h2 = document.createElement('h2');
    h2.textContent = titulo;
  
    const img = document.createElement('img');
    img.src = imagem;
    img.alt = titulo;
  
    const p = document.createElement('p');
  p.innerHTML = descricao + ` <a href="${link}" target="_blank">Saiba mais</a>`;

  const frase = document.querySelector('.esse');

// Função para mostrar a frase com atraso
function mostrarFrase() {
  frase.style.opacity = 1;
}

// Aguarda 1 segundo antes de mostrar a frase
setTimeout(mostrarFrase, 2000);


  
    // Adicionando elementos ao card
    cardFront.appendChild(h2);
    cardFront.appendChild(img);
    cardBack.appendChild(p);
    card.appendChild(cardFront);
    card.appendChild(cardBack);
  
    // Adicionando o card ao container
    cardContainer.appendChild(card);
  }

  // Chamando a função para criar um novo card
criarCard('HTML5', 'imagens/html.jpg', 'A base, responsável por definir a estrutura da página, como títulos, parágrafos, listas, etc.', 'https://www.w3schools.com/html/');
criarCard('CSS3', 'imagens/css2.jpg', 'Cascading Style Sheets (ou simplesmente CSS)A camada de estilo, que cuida da aparência visual, definindo cores, fontes, layout e responsividade.', 'https://www.w3schools.com/css/');
criarCard('JavaScript', 'imagens/b.png', 'A linguagem de programação que adiciona interatividade, permitindo criar elementos dinâmicos como menus suspensos, animações, formulários interativos e muito mais.', 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript');
criarCard('Pyhton', 'imagens/python.png', 'Com PyScript, essa ferramenta permite que você escreva código Python diretamente no seu HTML, abrindo um leque de possibilidades para desenvolvedores Python que desejam explorar o mundo front-end', 'https://www.python.org/community/logos/');
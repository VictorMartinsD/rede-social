function renderPosts() {
    const dialogElementPost1 = document.querySelector("#modalController__post1");
    const divDialogPost1 = document.createElement("div");
    const buttonPost1 = document.createElement("button");
    const articlePost1 = document.createElement("article");
    const divArticlePost1 = document.createElement("div");
    const imgPost1 = document.createElement("img");
    const divImgPost1 = document.createElement("div");
    const titleDivPost1 = document.createElement("h2");
    const paragraphDivPost1 = document.createElement("p");
    const titlePost1 = document.createElement("h2");
    const paragraphPost1 = document.createElement("p");
  
    articlePost1.classList.add("post__list");
    articlePost1.classList.add("post__gap")
    divDialogPost1.classList.add("modal__container")
    divDialogPost1.classList.add("post__modal")
    divArticlePost1.classList.add("post__name");
    divImgPost1.classList.add("post__title");
  
    buttonPost1.innerText = "X";
    buttonPost1.classList.add("close__button")
    buttonPost1.setAttribute("id", "closeModal__post1");

    imgPost1.src = "./src/assets/img/user5.svg";
    imgPost1.alt = "Iris Silva";
    imgPost1.classList.add("img__profile");

    titleDivPost1.innerText = "Iris Silva";
    titleDivPost1.classList.add("font-title2");

    paragraphDivPost1.innerText = "Front end Engineer";
    paragraphDivPost1.classList.add("font-text2");
  
    titlePost1.innerText = "Empresa de Tecnologia da Informação abre vagas para programa de estágio";
    titlePost1.classList.add("font-title1");

    paragraphPost1.innerText = "A Framework Digital, empresa mineira especializada em Tecnologia da  Informação, irá iniciar o seu sexto programa de estágio, com o prazo  de inscrições entre os dias 08 e 28 de agosto. O programa é  conhecido como Framework Padawans, com inspiração nos filmes Star  Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar  cavaleiros Jedi, que compõem o lado bom da força.";
    paragraphPost1.classList.add("font-text1");
  
    divImgPost1.append(titleDivPost1, paragraphDivPost1);
    divArticlePost1.append(imgPost1, divImgPost1);
    articlePost1.append(divArticlePost1, titlePost1, paragraphPost1);
    divDialogPost1.append(buttonPost1, articlePost1);
    dialogElementPost1.append(divDialogPost1);
  
    const dialogElementPost2 = document.querySelector("#modalController__post2");
    const divDialogPost2 = document.createElement("div");
    const buttonPost2 = document.createElement("button");
    const articlePost2 = document.createElement("article");
    const divArticlePost2 = document.createElement("div");
    const imgPost2 = document.createElement("img");
    const divImgPost2 = document.createElement("div");
    const titleDivPost2 = document.createElement("h2");
    const paragraphDivPost2 = document.createElement("p");
    const titlePost2 = document.createElement("h2");
    const paragraphPost2 = document.createElement("p");
  
    divDialogPost2.classList.add("modal__container")
    divDialogPost2.classList.add("post__modal")
    articlePost2.classList.add("post__list");
    articlePost2.classList.add("post__gap")
    divArticlePost2.classList.add("post__name");
    divImgPost2.classList.add("post__title");
  
    buttonPost2.innerText = "X";
    buttonPost2.classList.add("close__button")
    buttonPost2.setAttribute("id", "closeModal__post2");

    imgPost2.src = "./src/assets/img/user6.svg";
    imgPost2.alt = "Carla Maria";
    imgPost2.classList.add("img__profile");

    titleDivPost2.innerText = "Carla Maria";
    titleDivPost2.classList.add("font-title2");

    paragraphDivPost2.innerText = "Front end Engineer";
    paragraphDivPost2.classList.add("font-text2");
  
    titlePost2.innerText = "Programa de estágio abre vagas em Segurança da Informação com regime remoto";
    titlePost2.classList.add("font-title1");

    paragraphPost2.innerText = "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.";
    paragraphPost2.classList.add("font-text1");
  
    divImgPost2.append(titleDivPost2, paragraphDivPost2);
    divArticlePost2.append(imgPost2, divImgPost2);
    articlePost2.append(divArticlePost2, titlePost2, paragraphPost2);
    divDialogPost2.append(buttonPost2, articlePost2);
    dialogElementPost2.append(divDialogPost2);
  
    const dialogElementPost3 = document.querySelector("#modalController__post3");
    const divDialogPost3 = document.createElement("div");
    const buttonPost3 = document.createElement("button");
    const articlePost3 = document.createElement("article");
    const divArticlePost3 = document.createElement("div");
    const imgPost3 = document.createElement("img");
    const divImgPost3 = document.createElement("div");
    const titleDivPost3 = document.createElement("h3");
    const paragraphDivPost3 = document.createElement("p");
    const titlePost3 = document.createElement("h3");
    const paragraphPost3 = document.createElement("p");
  
    divDialogPost3.classList.add("modal__container")
    divDialogPost3.classList.add("post__modal")
    articlePost3.classList.add("post__list");
    articlePost3.classList.add("post__gap")
    divArticlePost3.classList.add("post__name");
    divImgPost3.classList.add("post__title");
  
    buttonPost3.innerText = "X";
    buttonPost3.classList.add("close__button")
    buttonPost3.setAttribute("id", "closeModal__post3");
    
    imgPost3.src = "./src/assets/img/user7.svg";
    imgPost3.alt = "João Carvalho";
    imgPost3.classList.add("img__profile");

    titleDivPost3.innerText = "João Carvalho";
    titleDivPost3.classList.add("font-title3");

    paragraphDivPost3.innerText = "Devop's";
    paragraphDivPost3.classList.add("font-text3");
  
    titlePost3.innerText = "O que é programação orientada a objetos e programação funcional";
    titlePost3.classList.add("font-title1");

    paragraphPost3.innerText = "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.";
    paragraphPost3.classList.add("font-text1");
  
    divImgPost3.append(titleDivPost3, paragraphDivPost3);
    divArticlePost3.append(imgPost3, divImgPost3);
    articlePost3.append(divArticlePost3, titlePost3, paragraphPost3);
    divDialogPost3.append(buttonPost3, articlePost3);
    dialogElementPost3.append(divDialogPost3);
  }
  renderPosts()
  
  function handleModal() {
    const button1 = document.querySelector("#showMessage__post1");
    const modalContainer1 = document.querySelector("#modalController__post1")
  
    button1.addEventListener("click", () => {
      modalContainer1.showModal();
  
      closeModal();
    });
    const button2 = document.querySelector("#showMessage__post2");
    const modalContainer2 = document.querySelector("#modalController__post2")
  
    button2.addEventListener("click", () => {
      modalContainer2.showModal();
  
      closeModal();
    });
    const button3 = document.querySelector("#showMessage__post3");
    const modalContainer3 = document.querySelector("#modalController__post3")
  
    button3.addEventListener("click", () => {
      modalContainer3.showModal();
  
      closeModal();
    });
  }
  
  function closeModal() {
    const button1 = document.querySelector("#closeModal__post1");
    const modalContainer1 = document.querySelector("#modalController__post1")
  
    button1.addEventListener("click", () => {
      modalContainer1.close();
    });
  
    const button2 = document.querySelector("#closeModal__post2");
    const modalContainer2 = document.querySelector("#modalController__post2")
  
    button2.addEventListener("click", () => {
      modalContainer2.close();
    });
    const button3 = document.querySelector("#closeModal__post3");
    const modalContainer3 = document.querySelector("#modalController__post3")
  
    button3.addEventListener("click", () => {
      modalContainer3.close();
    });
  }
  
  handleModal();
  
  function follow() {
    const buttonFollow = document.querySelectorAll(".button__follow");
    for (let i = 0; i < buttonFollow.length; i++) {
      buttonFollow[i].addEventListener("click", () => {
        if (buttonFollow[i].innerHTML === "Seguir") {
          buttonFollow[i].innerHTML = "Seguindo";
          buttonFollow[i].style.background = "var(--color-brand-1)";
          buttonFollow[i].style.color = "var(--color-whiteFixed)";
          buttonFollow[i].style.border = "none";
        }
        else if (buttonFollow[i].innerHTML === "Seguindo") {
          buttonFollow[i].innerHTML = "Seguir";
          buttonFollow[i].style.background = "var(--color-whiteFixed)";
          buttonFollow[i].style.color = "var(--color-grey1)";
          buttonFollow[i].style.border = "1px solid var(--color-grey1)";
        }
      });
      buttonFollow[i].classList.add("button__follow")
    }
  }
  follow();
  
  function likePost() {
    const red = "http://127.0.0.1:5502/src/assets/img/heart-red.svg";
    const gray = "http://127.0.0.1:5502/src/assets/img/heart-gray.svg";
    const likedButton1 = document.querySelectorAll(".like__post1");

    const likes1 = document.querySelectorAll(".small__like1");

    for (let i = 0; i <= likedButton1.length; i++) {
      likedButton1[i].addEventListener("click", function (event) {
        event.preventDefault();
        
        if (event.target.src === red) {
          likedButton1[i].setAttribute("src", gray)
          likes1[i].innerHTML--;
          likedButton1[i].alt = "Empty Heart(Post not liked)";
        } else if (event.target.src === gray) {
          likedButton1[i].setAttribute("src", red)
          likedButton1[i].alt = "Red Heart(Post liked)";
          likes1[i].innerHTML++;
        }
      });
    }
  }
  likePost();
  
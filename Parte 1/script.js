// assincronismo

// AJAX
function requisicaoAjax(button) { //definição de função assincrona
    const container = button.parentElement.querySelector('.container-imagem'); //container que vai receber a imagem de exemplo
    const imagemExistente = container.querySelector('img'); //tem imagem no container?

    container.innerHTML = ''; //limpa o container
    if (!imagemExistente) { //verifica se tem imagem
        const imagem = document.createElement('img'); //cria a imagem
        imagem.src = 'ajax.jpeg'; //caminho
        imagem.alt = 'Exemplo AJAX'; //texto alternativo
        imagem.style.maxWidth = '50%'; //largura da imagem
        container.appendChild(imagem); //adiciona a imagem no container
    }
}

// Promises
function executarPromise(button) {
    const container = button.parentElement.querySelector('.container-imagem');
    const imagemExistente = container.querySelector('img');

    container.innerHTML = '';

    if (!imagemExistente) {
        const imagem = document.createElement('img');
        imagem.src = 'promise.jpeg';
        imagem.alt = 'Exemplo Promise';
        imagem.style.maxWidth = '50%';
        container.appendChild(imagem);
    }
}

// Fetch API
function requisicaoFetch(button) {
    const container = button.parentElement.querySelector('.container-imagem');
    const imagemExistente = container.querySelector('img');

    container.innerHTML = '';
    if (!imagemExistente) {
        const imagem = document.createElement('img');
        imagem.src = 'fetch.jpeg';
        imagem.alt = 'Exemplo Fetch';
        imagem.style.maxWidth = '50%';
        container.appendChild(imagem);
    }
}

// Async / Await
async function requisicaoAsync(button) {
    const container = button.parentElement.querySelector('.container-imagem');
    const imagemExistente = container.querySelector('img');

    container.innerHTML = '';

    if (!imagemExistente) {
        const imagem = document.createElement('img');
        imagem.src = 'await.jpeg';
        imagem.alt = 'Exemplo Async/Await';
        imagem.style.maxWidth = '50%';
        container.appendChild(imagem);
    }
}


// outros tópicos

// Hoisting
function mostrarHoisting(button) {
    const container = button.parentElement.querySelector('.container-imagem');
    const imagemExistente = container.querySelector('img');

    if (imagemExistente) {

        container.innerHTML = '';
    } else {

        const imagem = document.createElement('img');
        imagem.src = 'hoisting.jpeg';
        imagem.alt = 'Exemplo Hoisting';
        imagem.style.maxWidth = '50%';
        container.appendChild(imagem);
    }
}

// Arrow Functions
function mostrarArrowFunctions(button) {
    const container = button.parentElement.querySelector('.container-imagem');
    const imagemExistente = container.querySelector('img');

    if (imagemExistente) {
        container.innerHTML = '';
    } else {
        const imagem = document.createElement('img');
        imagem.src = 'arrow.jpeg';
        imagem.alt = 'Exemplo Arrow Functions';
        imagem.style.maxWidth = '50%';
        container.appendChild(imagem);
    }
}

// Destructuring
function mostrarDestructuring(button) {
    const container = button.parentElement.querySelector('.container-imagem');
    const imagemExistente = container.querySelector('img');

    if (imagemExistente) {
        container.innerHTML = '';
    } else {
        const imagem = document.createElement('img');
        imagem.src = 'destructuring.jpeg';
        imagem.alt = 'Exemplo Destructuring';
        imagem.style.maxWidth = '50%';
        container.appendChild(imagem);
    }
}

// Closure
function mostrarClosure(button) {
    const container = button.parentElement.querySelector('.container-imagem');
    const imagemExistente = container.querySelector('img');

    if (imagemExistente) {
        container.innerHTML = '';
    } else {
        const imagem = document.createElement('img');
        imagem.src = 'closure.jpeg';
        imagem.alt = 'Exemplo Closure';
        imagem.style.maxWidth = '50%';
        container.appendChild(imagem);
    }
}
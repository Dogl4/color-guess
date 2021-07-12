const objEle = { // objetos elementos globais
  cores: document.querySelectorAll('.table .tr'),
  paragrafo: document.querySelector('#rgb-color'),
};

const objFun = { // objetos funções
  colorRadom: function corAleatoria() { // cor aleatoria
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
  },
  criaPaleta: function createPaletteLine() { // cria paleta
    for (let i = 0; i < 6; i += 1) {
      const paletteColor = document.createElement('div');
      paletteColor.className = 'ball td';
      paletteColor.style.backgroundColor = objFun.colorRadom();
      objEle.cores[0].appendChild(paletteColor);
    }
  },
  aleatorioTexto: function text() { // atribui uma cor da paleta ao paragrafo
    const lista = document.querySelectorAll('.table .td');
    const aleatorio = lista[Math.floor(Math.random() * 5)];
    objEle.paragrafo.innerText = aleatorio.style.backgroundColor;
  },
  jogo: function jogoDoBixo() {
    document.querySelector('.tr').addEventListener('click', (event) => {
      const inicio = document.querySelector('#answer');
      const texto = document.querySelector('#rgb-color').innerHTML;
      if (event.target.style.backgroundColor === texto) {
        inicio.innerHTML = 'Acertou!';
      } else {
        inicio.innerHTML = 'Errou! Tente novamente!';
      }
    });
  },
};

window.onload = () => {
  objFun.colorRadom();
  objFun.criaPaleta();
  objFun.aleatorioTexto();
  objFun.jogo();
};

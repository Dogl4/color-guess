const objEle = { // objetos elementos globais
  cores: document.querySelectorAll('.table .tr'),
  paragrafo: document.querySelector('#rgb-color'),
};

const objFun = { // objetos funções
  colorRadom: function corAleatoria() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
  },
  criaPaleta: function createPaletteLine() {
    for (let i = 0; i < 6; i += 1) {
      const paletteColor = document.createElement('div');
      paletteColor.className = 'color td';
      paletteColor.style.backgroundColor = objFun.colorRadom();
      objEle.cores[0].appendChild(paletteColor);
    }
  },
  aleatorioTexto: function text() {
    const lista = document.querySelectorAll('.table .td');
    const aleatorio = lista[Math.floor(Math.random() * 6)].style.backgroundColor;
    objEle.paragrafo.innerText = aleatorio;
  },
};

window.onload = () => {
  objFun.colorRadom();
  objFun.criaPaleta();
  objFun.aleatorioTexto();
};

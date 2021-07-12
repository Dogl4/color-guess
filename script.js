const objEle = {
  cores: document.querySelectorAll('.table .tr'),
};

const objFun = {
  colorRadom: function corAleatoria() {
    const option = '0123456789ABCDEF';
    let hex = '';
    do {
      hex += option[(Math.floor(Math.random() * 16)).toString()];
    } while (hex.length !== 6 || hex === 'FFFFFF');
    return `#${hex}`;
  },
  CriaPaleta: function createPaletteLine() {
    for (let i = 0; i < 6; i += 1) {
      const paletteColor = document.createElement('div');
      paletteColor.className = 'color td';
      paletteColor.style.backgroundColor = objFun.colorRadom();
      objEle.cores[0].appendChild(paletteColor);
    }
  },
};

window.onload = () => {
  objFun.colorRadom();
  objFun.CriaPaleta();
};


const marcaCarro = document.querySelector('#marcaCarro');
const modeloCarro = document.querySelector('#modeloCarro');

const nomeMarcaCarro = marcaCarro.value;
console.log(nomeMarcaCarro);

if(nomeMarcaCarro == 'Marca'){
    modeloCarro.options[modeloCarro.options.length] = new Option('Fiat Uno', 'Fioriono');
}


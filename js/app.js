function selecaoModelo(){

    var marcaSelecionada = document.getElementById('marcaSelecionada');
	var value = marcaSelecionada.options[marcaSelecionada.selectedIndex].value;
	console.log(value); 

    const listaModelos = document.getElementById("listaModelos");
    const modeloDaFiat = ["Strada", "Uno", "Toro", "Argo", "Grand Siena", "Mobi", "Fiorino", "Doblò", "Cronos", "Doblò Cargo", "Ducato", "Weekend"]
    const modeloDaVolksvagem = ["Gol", "Voyage", "Fox", "Polo", "Virtus", "Nivus", "T-Cross", "Taos", "Jetta", "Saveiro", "Amarok"]
    const modeloGM = ["Onix", "Prisma", "S10", "Spin", "Cruze", "Cobalt", "Tracker", "Taos", "Montana", "Camaro", "TrailBlazer"]
    const modeloHyundai = ["HB20", "HB20S", "Creta", "Tucson", "ix35", "Santa Fe", "Azera", "Elantra", "HR"]
    const modeloRenault = ["Duster", "Sandero", "Logan", "Kwid", "Sandero Stepway", "Fluence", "Kangoo Express", "Captur", "Duster Oroch"]
    const modeloToyota = ["Corolla", "Hilux", "Etios", "SW4", "RAV4", "Yaris", "Prius", "Camry", "Corolla Cross"]
    const modeloHonda = ["Civic", "Fit", "HR-V", "City", "CR-V", "Accord", "WR-V"]
    const modeloNissan = ["Kicks", "Versa", "Sentra", "March", "Frontier", "GT-R", "LEAF"]
    const modeloPeugeot = ["208", "308", "408", "2008", "3008", "Partner", "5008"]
    const modeloCitroen = ["C3", "Aircross", "C4 Lounge", "Grand C4 Picasso", "Jumpy", "Jumper"]
    const modeloFord = ["EcoSport", "Ka", "Ka Sedan", "Ranger", "Focus", "Fusion"]

    switch (value){
        case 'FIAT':
            document.getElementById("listaModelos").options.length=0;
            modeloDaFiat.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Volkswagen':
            document.getElementById("listaModelos").options.length=0;
            modeloDaVolksvagem.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'GM':
            document.getElementById("listaModelos").options.length=0;
            modeloGM.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Hyundai':
            document.getElementById("listaModelos").options.length=0;
            modeloHyundai.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Renault':
            document.getElementById("listaModelos").options.length=0;
            modeloRenault.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Toyota':
            document.getElementById("listaModelos").options.length=0;
            modeloToyota.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Honda':
            document.getElementById("listaModelos").options.length=0;
            modeloHonda.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Nissan':
            document.getElementById("listaModelos").options.length=0;
            modeloNissan.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Peugeot':
            document.getElementById("listaModelos").options.length=0;
            modeloPeugeot.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Citroen':
            document.getElementById("listaModelos").options.length=0;
            modeloCitroen.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
        case 'Ford':
            document.getElementById("listaModelos").options.length=0;
            modeloFord.forEach((language) => {
                option = new Option(language, language.toLowerCase());
                listaModelos.options[listaModelos.options.length] = option;
              });
            break;
            
    }
}

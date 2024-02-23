function novaTarefa(){
    let botaoCriar = document.createElement("button");
    botaoCriar.id = "teste-botao";
    let textoBotaoCriar = document.createTextNode("Criar");
    botaoCriar.appendChild(textoBotaoCriar);
    
    let criarNovaTarefa = document.createElement("input");
    criarNovaTarefa.id = "teste" //Eu preciso fazer a tarefa mudar de id, se não todas vão ter o mesmo id
    
    //let criarTextoDaTarefa = document.createTextNode("fazer coco");
    //criarNovaTarefa.appendChild(criarTextoDaTarefa);
    
    let adicionarNaDiv = document.getElementById("div-de-tarefas");
    adicionarNaDiv.appendChild(criarNovaTarefa);
    adicionarNaDiv.appendChild(botaoCriar);
    //limitadorDeTarefas()
    //console.log(document.getElementById("asdf"))
}

function criarTarefa(){
    //console.log(document.getElementById("teste").value)
    
    let label = document.createElement("label"); 
    label.innerText = document.getElementById("teste").value; //! LINHA DE CODIGO PROBLEMATICA
    
    let removerBotao = document.getElementById("teste-botao");

    let quebrarUmaLinha = document.createElement("br");

    let adicionarNaDiv2 = document.getElementById("div-de-tarefas");
    adicionarNaDiv2.removeChild(removerBotao);
    adicionarNaDiv2.appendChild(label);
    adicionarNaDiv2.appendChild(quebrarUmaLinha);
    document.getElementById("teste").type = "checkbox"; //! LINHA DE CODIGO PROBLEMATICA
    return "proximo"
}

function criarId(){
    idLabel = [];
    idInput = [];


}


function limitadorDeTarefas(){
    
    if (document.getElementById("teste-botao") == null){
        novaTarefa()
        let limitador = document.getElementById("teste-botao").addEventListener("click", criarTarefa);
        
    }else{
        alert("Você só pode criar uma tarefa de cada vez!!!")
    }
    
}

document.getElementById("novaTarefa").addEventListener("click", limitadorDeTarefas);
//document.getElementById("teste-botao").addEventListener("click", criarTarefa);


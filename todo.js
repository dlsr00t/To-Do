function novaTarefa(){

    if (document.getElementById("nova-tarefa1") == null){

        let botaoCriar = document.createElement("button");
        botaoCriar.id = "botao-criar";
        let textoBotaoCriar = document.createTextNode("criar");
        botaoCriar.appendChild(textoBotaoCriar);
        

        let criarNovaTarefa = document.createElement("input");
        criarNovaTarefa.id = "nova-tarefa1" //*Eu preciso fazer a tarefa mudar de id, se não todas vão ter o mesmo id
        // var criarNovaTarefa = document.createElement("input");
        // criarNovaTarefa.id = "nova-tarefa" //*Eu preciso fazer a tarefa mudar de id, se não todas vão ter o mesmo id
        

        let teste = document.getElementById("nova-tarefa1");
        console.log(teste);

        //let criarTextoDaTarefa = document.createTextNode("fazer coco");
        //criarNovaTarefa.appendChild(criarTextoDaTarefa);
        
        let adicionarNaDiv = document.getElementById("div-de-tarefas");
        adicionarNaDiv.appendChild(criarNovaTarefa);
        adicionarNaDiv.appendChild(botaoCriar);
        //limitadorDeTarefas()
        //console.log(document.getElementById("asdf"))

    }else{
        var contadorNovaTarefa = 2;
        while(document.getElementById("nova-tarefa1") != null){
            if(document.getElementById(`nova-tarefa${contadorNovaTarefa}`) == null){
                let botaoCriar = document.createElement("button");
                botaoCriar.id = "botao-criar";

                let textoBotaoCriar = document.createTextNode("criar");
                botaoCriar.appendChild(textoBotaoCriar);

                let criarNovaTarefa = document.createElement("input");
                criarNovaTarefa.id = `nova-tarefa${contadorNovaTarefa}`;

                let teste = document.getElementById("nova-tarefa1");
                console.log(teste);
        

                let adicionarNaDiv = document.getElementById("div-de-tarefas");
                adicionarNaDiv.appendChild(criarNovaTarefa);
                adicionarNaDiv.appendChild(botaoCriar);
                break
            }else{
                contadorNovaTarefa+=1;
            }
        }
    }
    /*
    var criarNovaTarefa = document.createElement("input");
    criarNovaTarefa.id = "nova-tarefa" //*Eu preciso fazer a tarefa mudar de id, se não todas vão ter o mesmo id
    

    let teste = document.getElementById("nova-tarefa");
    console.log(teste);

    //let criarTextoDaTarefa = document.createTextNode("fazer coco");
    //criarNovaTarefa.appendChild(criarTextoDaTarefa);
    
    let adicionarNaDiv = document.getElementById("div-de-tarefas");
    adicionarNaDiv.appendChild(criarNovaTarefa);
    adicionarNaDiv.appendChild(botaoCriar);
    //limitadorDeTarefas()
    //console.log(document.getElementById("asdf"))
    */
}

function criarTarefa(){
    //console.log(document.getElementById("nova-tarefa").value
    

    let label = document.createElement("label"); 
    label.innerText = document.getElementById(`nova-tarefa${contadorNovaTarefa2}`).value; //! LINHA DE CODIGO PROBLEMATICA
    
    let removerBotao = document.getElementById("botao-criar");

    let quebrarUmaLinha = document.createElement("br");

    let adicionarNaDiv2 = document.getElementById("div-de-tarefas");
    adicionarNaDiv2.removeChild(removerBotao);
    adicionarNaDiv2.appendChild(label);
    adicionarNaDiv2.appendChild(quebrarUmaLinha);
    document.getElementById(`nova-tarefa${contadorNovaTarefa2}`).type = "checkbox"; //! LINHA DE CODIGO PROBLEMATICA
    contadorNovaTarefa2+=1;
    console.log(contadorNovaTarefa2)
    return "proximo"
    

}

function criarId(){
    idLabel = [];
    idInput = [];


}


function limitadorDeTarefas(){
    
    if (document.getElementById("botao-criar") == null){
        novaTarefa()
        let limitador = document.getElementById("botao-criar").addEventListener("click", criarTarefa);
        
    }else{
        alert("Você só pode criar uma tarefa de cada vez!!!")
    }
    
}

document.getElementById("novaTarefa").addEventListener("click", limitadorDeTarefas);
//document.getElementById("botao-criar").addEventListener("click", criarTarefa);
var contadorNovaTarefa2 = 1;

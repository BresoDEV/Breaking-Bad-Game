


//Variaveis

var listaVars = [
    ['level', '0'],
    ['dinheiro', '17000'],
    ['reputacao', '0'],
    ['vendas', '0'],
    ['devMode', '0'],
    ['membrosEquipe', '0'],
    ['labAtual', 'Nenhum'],
    ['capacidade_Max_labAtual', '0'],
    ['capacidade_Max_labAtualAzul', '0'],
    ['estoque_meth_normal', '0'],
    ['estoque_meth_azul', '0'],
    ['estoque_metilamina', '0'],
    ['dinheiroInfinito', '0'],
    ['velocidade_de_producao', '0'],
    ['materiaPrima', '0'],
    ['emProducao_normal', '0'],
    ['emProducao_azul', '0'],

    ['jaComprou_LavaRapido', '0'],//50.000 renda de 100 a cada 5 min
    ['jaComprou_Motel', '0'],//50.000 renda de 50 a cada 2 min
    ['jaComprou_Pollos', '0'],//100.000 Lucro: R$ 200 a cada 5 min
    ['jaComprou_Site', '0'],//10.000 Lucro: R$ 10 a cada 2 min  

    ['jaComprou_Lab_Clandestino', '0'],
    ['jaComprou_Lab_Fumegacao', '0'],
    ['jaComprou_Lab_GusLab', '0'],
    ['jaComprou_Lab_Trailer', '0'],

    ['capacidade_Lab_Clandestino', '300'],
    ['capacidade_Lab_Fumegacao', '700'],
    ['capacidade_Lab_GusLab', '1200'],
    ['capacidade_Lab_Trailer', '50'],

    ['velocidade_de_producao_Lab_Clandestino', '420000'],//7min
    ['velocidade_de_producao_Lab_Fumegacao', '300000'],//5min
    ['velocidade_de_producao_Lab_GusLab', '120000'],//2min
    ['velocidade_de_producao_Lab_Trailer', '600000'],//10min 600000

    ['jaComprou_Equip_Lab_Clandestino', '0'],
    ['jaComprou_Equip_Lab_Fumegacao', '0'],
    ['jaComprou_Equip_Lab_GusLab', '0'],
    ['jaComprou_Equip_Lab_Trailer', '0'],
    ['jaComprou_Roupa', '0'],

    ['jaComprou_Carro_Van', '0'],
    ['jaComprou_Carro_Van2', '0'],

    ['desbloqueou_personagem_Badger', '0'],//500 reais
    ['desbloqueou_personagem_Clovis', '0'],
    ['desbloqueou_personagem_Combo', '0'],
    ['desbloqueou_personagem_Crazy8', '0'],
    ['desbloqueou_personagem_Don', '0'],
    ['desbloqueou_personagem_Gaff', '0'],
    ['desbloqueou_personagem_Gale', '0'],
    ['desbloqueou_personagem_Gus', '0'],
    ['desbloqueou_personagem_Huel', '0'],
    ['desbloqueou_personagem_Jack', '0'],
    ['desbloqueou_personagem_Jessy', '0'],
    ['desbloqueou_personagem_Kenny', '0'],
    ['desbloqueou_personagem_Kuby', '0'],
    ['desbloqueou_personagem_Larry', '0'],
    ['desbloqueou_personagem_Lydia', '0'],
    ['desbloqueou_personagem_Marco', '0'],
    ['desbloqueou_personagem_Mike', '0'],
    ['desbloqueou_personagem_Saul', '0'],
    ['desbloqueou_personagem_Skinny', '0'],
    ['desbloqueou_personagem_Skyler', '0'],
    ['desbloqueou_personagem_Spooge', '0'],
    ['desbloqueou_personagem_Todd', '0'],
    ['desbloqueou_personagem_Tortuga', '0'],
    ['desbloqueou_personagem_Tuco', '0'],
    ['desbloqueou_personagem_Tyrus', '0'],

    ['desbloqueou_vendedor_Crazy8', '0'],
    ['desbloqueou_vendedor_Don', '0'],
    ['desbloqueou_vendedor_Gaff', '0'],
    ['desbloqueou_vendedor_Gus', '0'],
    ['desbloqueou_vendedor_Jack', '0'],
    ['desbloqueou_vendedor_Tuco', '0'],

    ['desbloqueou_trofeu_1', '0'],//Alcançou o level 5
    ['desbloqueou_trofeu_2', '0'],//Alcançou o level 15
    ['desbloqueou_trofeu_3', '0'],//Arrecadou 100.000
    ['desbloqueou_trofeu_4', '0'],//Comprou metilamina pela primeira vez
    ['desbloqueou_trofeu_5', '0'],//Deixou um membro morrer
    ['desbloqueou_trofeu_6', '0'],//Liberou o Hank
    ['desbloqueou_trofeu_7', '0'],//Produziu meth azul pela primeira vez
    ['desbloqueou_trofeu_8', '0'],//Reviveu um membro morto
    ['desbloqueou_trofeu_9', '0'],//Comprou o Pollos Hermanos
    ['desbloqueou_trofeu_10', '0'],//Ligou pro Saul
    ['desbloqueou_trofeu_11', '0'],//Comprou o Lab Fumegacao
    ['desbloqueou_trofeu_12', '0'],//Liberou o Gus
    ['desbloqueou_trofeu_13', '0'],//Liberou o Saul
    ['desbloqueou_trofeu_14', '0'],//Arrecadou 500.000
    ['desbloqueou_trofeu_15', '0'],//Alcançou o level 25
    ['desbloqueou_trofeu_16', '0'],//Foi capturado pelo DEA
    ['desbloqueou_trofeu_17', '0'],//Comprou tudo que tem a venda

    ['descricao_trofeu_1', 'Alcançou o level 5'],
    ['descricao_trofeu_2', 'Alcançou o level 15'],
    ['descricao_trofeu_3', 'Arrecadou R$ 100.000'],
    ['descricao_trofeu_4', 'Comprou metilamina pela primeira vez'],
    ['descricao_trofeu_5', 'Deixou um membro morrer'],
    ['descricao_trofeu_6', 'Liberou o Hank'],
    ['descricao_trofeu_7', 'Produziu meth azul pela primeira vez'],
    ['descricao_trofeu_8', 'Reviveu um membro morto'],
    ['descricao_trofeu_9', 'Comprou o Pollos Hermanos'],
    ['descricao_trofeu_10', 'Ligou pro Saul'],
    ['descricao_trofeu_11', 'Comprou o Lab Fumegacao'],
    ['descricao_trofeu_12', 'Liberou o Gus'],
    ['descricao_trofeu_13', 'Liberou o Saul'],
    ['descricao_trofeu_14', 'Arrecadou R$ 500.000'],
    ['descricao_trofeu_15', 'Alcançou o level 25'],
    ['descricao_trofeu_16', 'Foi capturado pelo DEA'],
    ['descricao_trofeu_17', 'Comprou tudo que tem a venda'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
];

listaVars.forEach(element => {
    if (!localStorage.getItem(element[0])) {
        localStorage.setItem(element[0], element[1]);
        cLog(element[0] + ' setado');
    }
});






//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
function addEstoqueNormal(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('estoque_meth_normal')) + valor;
    localStorage.setItem('estoque_meth_normal', l);
}

function addEstoqueAzul(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('estoque_meth_azul')) + valor;
    localStorage.setItem('estoque_meth_azul', l);
}
//-------------------------------------------
function addVendas(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('vendas')) + valor;
    localStorage.setItem('vendas', l);
}

function setVendas(valor) {
    valor = parseInt(valor);
    localStorage.setItem('vendas', valor);
}

//-------------------------------------------
function addReputacao(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('reputacao')) + valor;
    localStorage.setItem('reputacao', l);
}

function setReputacao(valor) {
    valor = parseInt(valor);
    localStorage.setItem('reputacao', valor);
}

//-------------------------------------------
function if_TemDinheieo(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('dinheiro'))



    if (localStorage.getItem('dinheiroInfinito') == '1') {
        return true;
    }
    else if (l >= valor)
        return true;
    else
        return false;
}

function addDinheiro(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('dinheiro')) + valor;
    localStorage.setItem('dinheiro', l);
}

function removeDinheiro(valor) {
    valor = parseInt(valor);
    if (localStorage.getItem('dinheiroInfinito') == '1') {

    }
    else if (if_TemDinheieo(valor)) {
        var l = parseInt(localStorage.getItem('dinheiro')) - valor;
        localStorage.setItem('dinheiro', l);
    }
}


function setDinheiro(valor) {
    valor = parseInt(valor);
    localStorage.setItem('dinheiro', valor);
}
//-------------------------------------------

function addLevel(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('level')) + valor;
    localStorage.setItem('level', l);
}


function setLevel(valor) {
    valor = parseInt(valor);
    localStorage.setItem('level', valor);
}
//--------------------------------------------

function addMembro() {
    var l = parseInt(localStorage.getItem('membrosEquipe')) + 1;
    localStorage.setItem('membrosEquipe', l);
}

function removeMembro(valor) {
    var l = parseInt(localStorage.getItem('membrosEquipe'));
    if (l >= 1) {
        localStorage.setItem('membrosEquipe', l - 1);
    }
}//--------------------------------------------

function addMetilamina(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('estoque_metilamina')) + valor;
    localStorage.setItem('estoque_metilamina', l);
}

function removeMetilamina(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('estoque_metilamina'));
    if (l >= valor) {
        localStorage.setItem('estoque_metilamina', l - valor);
    }
}


function temMetilamina(valor) {
    valor = parseInt(valor);
    var l = parseInt(localStorage.getItem('estoque_metilamina'));
    if (l >= valor) {
        return true;
    }
    else {
        return false;
    }
}
//--------------------------------------------


function obterFotoPerfil() {
    var l = parseInt(localStorage.getItem('level'));
    if (l >= 1 && l <= 3) {
        return "imagens/Avatar/WW1.jpg";
    }
    else if (l > 3 && l <= 8) {
        return "imagens/Avatar/WW2.jpg";
    }
    else if (l > 8 && l <= 15) {
        return "imagens/Avatar/WW3.jpg";
    }
    else if (l > 15 && l <= 20) {
        return "imagens/Avatar/WW4.jpg";
    }
    else
        return "imagens/Avatar/WW4.jpg";
}



function showDevMenu() {
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.right = '10px';
    div.style.top = '10px';
    div.style.width = '100px';
    div.style.backgroundColor = 'black';
    div.style.color = 'red';
    div.style.fontSize = '10px';
    div.innerHTML = 'DevMenu';


    const ad = document.createElement('button');
    ad.style.width = '100%';
    ad.style.backgroundColor = 'aliceblue';
    ad.style.marginTop = '3px';
    ad.innerHTML = '+ R$ 1000';
    ad.style.fontSize = '10px';
    div.appendChild(ad);


    const rd = document.createElement('button');
    rd.style.width = '100%';
    rd.style.backgroundColor = 'aliceblue';
    rd.style.marginTop = '3px';
    rd.innerHTML = '- R$ 1000';
    rd.style.fontSize = '10px';
    div.appendChild(rd);


    const ar = document.createElement('button');
    ar.style.width = '100%';
    ar.style.backgroundColor = 'aliceblue';
    ar.style.marginTop = '3px';
    ar.innerHTML = 'add Reput 100';
    ar.style.fontSize = '10px';
    div.appendChild(ar);



    const al = document.createElement('button');
    al.style.width = '100%';
    al.style.backgroundColor = 'aliceblue';
    al.style.marginTop = '3px';
    al.innerHTML = 'add level';
    al.style.fontSize = '10px';
    div.appendChild(al);


    const av = document.createElement('button');
    av.style.width = '100%';
    av.style.backgroundColor = 'aliceblue';
    av.style.marginTop = '3px';
    av.innerHTML = 'add vendas';
    av.style.fontSize = '10px';
    div.appendChild(av);

    const aen = document.createElement('button');
    aen.style.width = '100%';
    aen.style.backgroundColor = 'aliceblue';
    aen.style.marginTop = '3px';
    aen.innerHTML = 'add estoque normal';
    aen.style.fontSize = '10px';
    div.appendChild(aen);

    const acla = document.createElement('button');
    acla.style.width = '100%';
    acla.style.backgroundColor = 'aliceblue';
    acla.style.marginTop = '3px';
    acla.innerHTML = '+ cap estoque';
    acla.style.fontSize = '10px';
    div.appendChild(acla);

    //--------------------------

    const aea = document.createElement('button');
    aea.style.width = '100%';
    aea.style.backgroundColor = 'aliceblue';
    aea.style.marginTop = '3px';
    aea.innerHTML = 'add estoque azul';
    aea.style.fontSize = '10px';
    div.appendChild(aea);

    const aclaazul = document.createElement('button');
    aclaazul.style.width = '100%';
    aclaazul.style.backgroundColor = 'aliceblue';
    aclaazul.style.marginTop = '3px';
    aclaazul.innerHTML = '+ cap estoque azul';
    aclaazul.style.fontSize = '10px';
    div.appendChild(aclaazul);

    const zerar = document.createElement('button');
    zerar.style.width = '100%';
    zerar.style.backgroundColor = 'aliceblue';
    zerar.style.marginTop = '3px';
    zerar.innerHTML = 'Zerar Tudo';
    zerar.style.fontSize = '10px';
    div.appendChild(zerar);

    const ddm = document.createElement('button');
    ddm.style.width = '100%';
    ddm.style.backgroundColor = 'aliceblue';
    ddm.style.marginTop = '3px';
    ddm.innerHTML = 'desativar Devmode';
    ddm.style.fontSize = '10px';
    div.appendChild(ddm);


    document.body.appendChild(div);

    aea.addEventListener('click', () => {

        var l = parseInt(localStorage.getItem('estoque_meth_azul')) + 1;
        localStorage.setItem('estoque_meth_azul', l);
    });

    aclaazul.addEventListener('click', () => {

        var l = parseInt(localStorage.getItem('capacidade_Max_labAtualAzul')) + 1;
        localStorage.setItem('capacidade_Max_labAtualAzul', l);
    });

    acla.addEventListener('click', () => {

        var l = parseInt(localStorage.getItem('capacidade_Max_labAtual')) + 1;
        localStorage.setItem('capacidade_Max_labAtual', l);
    });

    ad.addEventListener('click', () => {
        addDinheiro('1000')
    });

    rd.addEventListener('click', () => {
        removeDinheiro('1000')
    });
    ar.addEventListener('click', () => {
        addReputacao('100')
    });
    al.addEventListener('click', () => {
        addLevel('1')
    });

    av.addEventListener('click', () => {
        addVendas('1')
    });

    aen.addEventListener('click', () => {
        addEstoqueNormal('1')
    });


    zerar.addEventListener('click', () => {
        listaVars.forEach(element => {
            if (localStorage.getItem(element[0])) {
                localStorage.setItem(element[0], element[1]);
                cLog(element[0] + ' setado');
            }
        });
        localStorage.setItem('devMode', '1');
        window.location.reload();
    });


    ddm.addEventListener('click', () => {

        localStorage.setItem('devMode', '0');
        window.location.reload();
    });



}



if (localStorage.getItem('devMode') == '1') {
    showDevMenu();
}

function cLog(msg) {
    console.log('%c' + msg, 'color:green');
}
function cLogErro(msg) {
    console.log('%c' + msg, 'color:red');
}

function msgbox(titulo, texto, tempo = 1000, layout = 0, corFundo = 'green', corfonte = 'aliceblue', borderradius = true, textoCentralizado = false) {
    var topo = 10;
    var opacidade = 0.0;
    const rect = document.createElement('div');
    rect.style.position = 'fixed';
    rect.style.zIndex = '10000';
    rect.style.minWidth = '25%';
    rect.style.maxWidth = '50%';

    //rect.style.height = '100px';
    if (borderradius) {
        rect.style.borderRadius = '10px';
    }
    rect.style.backgroundColor = corFundo;




    rect.style.padding = '10px';
    rect.style.opacity = opacidade;


    const titlee = document.createElement('span');
    titlee.innerHTML = titulo;
    titlee.style.color = corfonte;

    const alerta = document.createElement('span');
    alerta.innerHTML = '<br>' + texto;
    alerta.style.color = corfonte;


    rect.appendChild(titlee);
    rect.appendChild(alerta);
    document.body.appendChild(rect);

    switch (layout) {
        case 0:
            rect.style.right = '10px';
            topo = 10;
            rect.style.top = topo + 'px';
            if (textoCentralizado) { rect.style.textAlign = 'center'; }
            else { rect.style.textAlign = 'right'; }
            break;
        case 1:
            rect.style.left = '10px';
            topo = 10;
            rect.style.top = topo + 'px';
            if (textoCentralizado) { rect.style.textAlign = 'center'; }
            else { rect.style.textAlign = 'left'; }
            break;
        case 2:
            rect.style.left = '10px';
            topo = 10;
            rect.style.bottom = topo + 'px';
            if (textoCentralizado) { rect.style.textAlign = 'center'; }
            else { rect.style.textAlign = 'left'; }
            break;

        case 3:
            rect.style.right = '10px';
            topo = 10;
            rect.style.bottom = topo + 'px';
            if (textoCentralizado) { rect.style.textAlign = 'center'; }
            else { rect.style.textAlign = 'right'; }
            break;


        case 4:

            rect.style.right = ((window.innerWidth / 2) - (rect.offsetWidth / 2)) + 'px';
            topo = 10;
            rect.style.top = topo + 'px';

            rect.style.textAlign = 'center';
            break;

        case 5:
            rect.style.right = ((window.innerWidth / 2) - (rect.offsetWidth / 2)) + 'px';
            rect.style.top = ((window.innerHeight / 2) - (rect.offsetHeight / 2)) + 'px';

            rect.style.textAlign = 'center';
            break;

        case 6:
            rect.style.right = ((window.innerWidth / 2) - (rect.offsetWidth / 2)) + 'px';
            topo = 10;
            rect.style.bottom = topo + 'px';

            rect.style.textAlign = 'center';
            break;

        default:
            rect.style.right = '10px';
            topo = 10;
            rect.style.top = topo + 'px';
            if (textoCentralizado) { rect.style.textAlign = 'center'; }
            else { rect.style.textAlign = 'right'; }
            break;
    }

    var lp = setInterval(() => {
        if (opacidade <= 0.9) {
            opacidade += 0.002;
            rect.style.opacity = opacidade;
        }
        else {
            clearInterval(lp);
            setTimeout(() => {
                var loop = setInterval(() => {
                    if (topo !== window.innerHeight) {
                        topo++;

                        if (layout === 0 || layout === 1) { rect.style.top = topo + 'px'; }

                        opacidade -= 0.002;
                        rect.style.opacity = opacidade;
                    }
                    else {

                        clearInterval(loop);
                        rect.remove();
                    }


                }, 1);
            }, tempo);
        }


    }, 1);

}

function descomprarTodosLabs() {

    let listaVars = [
        ['labAtual', 'Nenhum'],
        ['jaComprou_Lab_Clandestino', '0'],
        ['jaComprou_Lab_Fumegacao', '0'],
        ['jaComprou_Lab_GusLab', '0'],
        ['jaComprou_Lab_Trailer', '0'],

    ];

    listaVars.forEach(element => {
        localStorage.setItem(element[0], element[1]);
    });

}

setInterval(() => {
    verificarTrofeus();
}, 5000);

function verificarTrofeus() {
    var valor;
    var valor2;

    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_1'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('level'));
        if (valor2 >= 5) {
            localStorage.setItem('desbloqueou_trofeu_1', '1');
            msgbox('Conquista desbloqueada', 'Alcançou o level 5', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_2'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('level'));
        if (valor2 >= 15) {
            localStorage.setItem('desbloqueou_trofeu_2', '1');
            msgbox('Conquista desbloqueada', 'Alcançou o level 15', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_3'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('dinheiro'));
        if (valor2 >= 100000) {
            localStorage.setItem('desbloqueou_trofeu_3', '1');
            msgbox('Conquista desbloqueada', 'Arrecadou R$ 100.000', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_4'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('estoque_metilamina'));
        if (valor2 >= 1) {
            localStorage.setItem('desbloqueou_trofeu_4', '1');
            msgbox('Conquista desbloqueada', 'Comprou metilamina pela primeira vez', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_5'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        //trofeu desativado
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_6'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        //trofeu desativado
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_7'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('estoque_meth_azul'));
        if (valor2 >= 1) {
            localStorage.setItem('desbloqueou_trofeu_7', '1');
            msgbox('Conquista desbloqueada', 'Produziu cristal azul pela primeira vez', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_8'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        //trofeu desativado
    }
    //---------------------------------
    
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_9'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('jaComprou_Pollos'));
        if (valor2 === 1) {
            localStorage.setItem('desbloqueou_trofeu_9', '1');
            msgbox('Conquista desbloqueada', 'Comprou o Pollos', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_10'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        //trofeu desativado
    }
    //---------------------------------
   
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_11'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('jaComprou_Lab_Fumegacao'));
        if (valor2 === 1) {
            localStorage.setItem('desbloqueou_trofeu_11', '1');
            msgbox('Conquista desbloqueada', 'Comprou o Comprou o Lab de Fumegacao', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_12'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('desbloqueou_personagem_Gus'));
        if (valor2 === 1) {
            localStorage.setItem('desbloqueou_trofeu_12', '1');
            msgbox('Conquista desbloqueada', 'Liberou o Gus', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_13'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('desbloqueou_personagem_Saul'));
        if (valor2 === 1) {
            localStorage.setItem('desbloqueou_trofeu_13', '1');
            msgbox('Conquista desbloqueada', 'Liberou o Saul', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_14'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('dinheiro'));
        if (valor2 >= 500000) {
            localStorage.setItem('desbloqueou_trofeu_14', '1');
            msgbox('Conquista desbloqueada', 'Arrecadou R$ 500.000', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_15'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        valor2 = parseInt(localStorage.getItem('level'));
        if (valor2 >= 25) {
            localStorage.setItem('desbloqueou_trofeu_15', '1');
            msgbox('Conquista desbloqueada', 'Alcançou o level 25', 5000);
        }
    }
    //---------------------------------
    valor = parseInt(localStorage.getItem('desbloqueou_trofeu_16'));
    if (valor === 0)//nao desbloqueou o trofeu
    {
        //trofeu desativado
    }
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
    //---------------------------------
}
//falta fazer

function playerAleatorio() {
    let membrosQueEuTenho = parseInt(localStorage.getItem('membrosEquipe'));
    let meuLevel = parseInt(localStorage.getItem('level'));
    let meuDinheiro = parseInt(localStorage.getItem('dinheiro'));
    let capacidade_labAtual = parseInt(localStorage.getItem('capacidade_Max_labAtual'));
    let capacidade_Max_labAtualAzul = parseInt(localStorage.getItem('capacidade_Max_labAtualAzul'));
    let estoque_meth_normal = parseInt(localStorage.getItem('estoque_meth_normal'));
    let estoque_meth_azul = parseInt(localStorage.getItem('estoque_meth_azul'));
    let estoque_metilamina = parseInt(localStorage.getItem('estoque_metilamina'));
    //let reputacao = parseInt(localStorage.getItem('reputacao'));

    let dinheiroOponente = numAleatorio(0, meuDinheiro + 1000);
    let levelOponente = numAleatorio(0, meuLevel * 2);
    let membrosOponente = numAleatorio(0, membrosQueEuTenho * 2);

    let methSeGanhar = numAleatorio(0, (capacidade_labAtual - estoque_meth_normal));
    let methAzulSeGanhar = numAleatorio(0, (capacidade_Max_labAtualAzul - estoque_meth_azul));
    let reputacaoSeGanhar = numAleatorio(100, 500);
    let nomeUser = usuarioAleatorio();

    console.log('dinheiroOponente: ' + dinheiroOponente);
    console.log('levelOponente: ' + levelOponente);
    console.log('membrosOponente: ' + membrosOponente);
    console.log('methSeGanhar: ' + methSeGanhar);
    console.log('methAzulSeGanhar: ' + methAzulSeGanhar);
    console.log('reputacaoSeGanhar: ' + reputacaoSeGanhar);
    console.log('nomeUser: ' + nomeUser);


}
playerAleatorio();


function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function usuarioAleatorio() {
    var a = '1234567890abcdefghijklmnopqrstuvwxyz';
    var b = 'userID_';
    for (let index = 0; index < 10; index++) {
        b += a[Math.floor(Math.random() * a.length)].toUpperCase();
    }
    return b;
}





/*
    ['jaComprou_Site', '0'],//10.000 Lucro: R$ 10 a cada 2 min 
    */
setInterval(() => {
    if (parseInt(localStorage.getItem('jaComprou_LavaRapido')) === 1) {
        addDinheiro(100);
        msgbox('Lucro Recebido', 'Lucros do Lava Rapido foram depositados na sua conta', 5000);
    }
}, (60 * 1000) * 5);

setInterval(() => {
    if (parseInt(localStorage.getItem('jaComprou_Motel')) === 1) {
        addDinheiro(50);
        msgbox('Lucro Recebido', 'Lucros do Motel foram depositados na sua conta', 5000);
    }
}, (60 * 1000) * 2);

setInterval(() => {
    if (parseInt(localStorage.getItem('jaComprou_Pollos')) === 1) {
        addDinheiro(200);
        msgbox('Lucro Recebido', 'Lucros do Pollos foram depositados na sua conta', 5000);
    }
}, (60 * 1000) * 5);

setInterval(() => {
    if (parseInt(localStorage.getItem('jaComprou_Site')) === 1) {
        addDinheiro(10);

    }
}, (60 * 1000) * 2);

function obterFotoLab() {
    switch (localStorage.getItem('labAtual')) {
        case 'Nenhum':
            return "imagens/Vazio.jpg";
            break;
        case 'Clandestino':
            return "imagens/Labs/ClandestinoDentro.jpeg";
            break;
        case 'Trailer':
            return "imagens/Labs/TrailerDentro.jpeg";
            break;
        case 'Fumegação':
            return "imagens/Labs/FumegacaoDentro.jpeg";
            break;
        case 'Gus':
            return "imagens/Labs/GusLabDentro.jpeg";
            break;
        default:
            return "imagens/Vazio.jpg";
            break;

    }
}

function addMateriaPrima(quant)
{
    let m = parseInt(localStorage.getItem('materiaPrima'));
    if((m+quant) <= 10)
    {
        localStorage.setItem('materiaPrima',m+quant);
        return true;
    }
    return false;
}
function removeMateriaPrima(quant)
{
    let m = parseInt(localStorage.getItem('materiaPrima'));
    if(m>=quant)
    {
        localStorage.setItem('materiaPrima',m-quant);
    }
    else{
        localStorage.setItem('materiaPrima','0');
    }
}
function temMateriaPrima()
{
    let m = parseInt(localStorage.getItem('materiaPrima'));
    if(m>=1)
    {
        return true;
    }
    return false;
}
 

if(parseInt(localStorage.getItem('emProducao_normal'))===1)
{
    produzirNormal();
}

function produzirNormal() 
{
    if(parseInt(localStorage.getItem('emProducao_normal')) === 1)
    {
        let timer = 1000000;
        //
        if (localStorage.getItem('labAtual') == 'Trailer') 
        {
           timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_Trailer'));
        }
        else if (localStorage.getItem('labAtual') == 'Clandestino') 
        {
            timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_Clandestino'));
        }
        else if (localStorage.getItem('labAtual') == 'Fumegação') 
        {
            timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_Fumegacao'));
        }
        else if (localStorage.getItem('labAtual') == 'Gus') 
        {
            timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_GusLab'));
        }
    
        let looptrailer =  setInterval(() => {
            if(temMateriaPrima())
            {
                if(parseInt(localStorage.getItem('estoque_meth_normal')) +5 <= parseInt(localStorage.getItem('capacidade_Max_labAtual')))
                {
                    removeMateriaPrima(1);
                    addEstoqueNormal(5);
                }
                else{
                    msgbox('Erro','Deposito cheio',5000,0,'red');
                    clearInterval(looptrailer);
                }
                
            }
            else{
                msgbox('Erro','Sem materia prima',5000,0,'red');
                clearInterval(looptrailer);
            }
        }, timer);
    }
}



if(parseInt(localStorage.getItem('emProducao_azul'))===1)
{
    produzirAzul();
}
 

function produzirAzul() 
{
    if(parseInt(localStorage.getItem('emProducao_azul')) === 1)
    {
        let timer = 1000000;
        //
        if (localStorage.getItem('labAtual') == 'Trailer') 
        {
           timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_Trailer'));
        }
        else if (localStorage.getItem('labAtual') == 'Clandestino') 
        {
            timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_Clandestino'));
        }
        else if (localStorage.getItem('labAtual') == 'Fumegação') 
        {
            timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_Fumegacao'));
        }
        else if (localStorage.getItem('labAtual') == 'Gus') 
        {
            timer = parseInt(localStorage.getItem('velocidade_de_producao_Lab_GusLab'));
        }
    
        let looptrailer =  setInterval(() => {
            if(temMetilamina(1))
            {
                if(parseInt(localStorage.getItem('estoque_meth_azul')) +5 <= parseInt(localStorage.getItem('capacidade_Max_labAtualAzul')))
                {
                    removeMetilamina(1);
                    addEstoqueAzul(5);
                }
                else{
                    msgbox('Erro','Deposito cheio',5000,0,'red');
                    clearInterval(looptrailer);
                }
                
            }
            else{
                msgbox('Erro','Sem materia prima',5000,0,'red');
                clearInterval(looptrailer);
            }
        }, timer);
    }
}



calcularLevel();

function calcularLevel()
{
    let rep = parseInt(localStorage.getItem('reputacao'));
    for (let index = 0; index < 1000000; index++) {
        if((index*1000) <= rep)
        {
            localStorage.setItem('level',index)
        }
        else{
            localStorage.setItem('level',index)
            break;
        }
    }
}

function calcularDivisaoDeLucros(valor){
    let membrosEquipe = parseInt(localStorage.getItem('membrosEquipe'));
    
}


const table = document.querySelector("#tabelaJogadores")

let listaJogadores = []

function Pessoa(name) {
  return {
    name: name,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  }
}

function adicinarNaTela() {
  table.innerHTML = ""
  for (let index = 0; index < listaJogadores.length; index++) {
    const element = listaJogadores[index]

    table.innerHTML += `
        <tr value="${index}">
          <td>${element.name}</td>
          <td>${element.vitorias}</td>
          <td>${element.empates}</td>
          <td>${element.derrotas}</td>
          <td>${element.pontos}</td>
          <td><button value="${element.name}" onClick="adicionarVitorias(this)">Vitória</button></td>
          <td><button value="${element.name}" onClick="adicionarEmpate(this)">Empate</button></td>
          <td><button value="${element.name}" onClick="adicionarDerrota(this)">Derrota</button></td>
        </tr>
        `
  }
}

function adicionarJogador() {
  const novoJogador = document.querySelector("#nomeJogador").value
  const novaPessoa = new Pessoa(novoJogador)
  listaJogadores.push(novaPessoa)
  adicinarNaTela()
}

function adicionarVitorias(element) {
  const elementName = element.getAttribute("value")
  const jogador = listaJogadores.find((jogador) => jogador.name === elementName)
  if (jogador) {
    jogador.vitorias++
    jogador.pontos += 3
  }

  adicinarNaTela()
}

function adicionarEmpate(element) {
  const elementName = element.getAttribute("value")
  const jogador = listaJogadores.find((jogador) => jogador.name === elementName)
  if (jogador) {
    jogador.empates++
    jogador.pontos += 1
  }
  adicinarNaTela()
}

function adicionarDerrota(element) {
  const elementName = element.getAttribute("value")
  const jogador = listaJogadores.find((jogador) => jogador.name === elementName)
  if (jogador) {
    jogador.derrotas++
  }
  adicinarNaTela()
}
adicinarNaTela()

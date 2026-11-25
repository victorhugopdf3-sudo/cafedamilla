const SENHA_ADMIN = "cafeDAmilla883982";
const WHATSAPP_LOJA = "558496690606";
const CHAVE_PRODUTOS = "cafe_milla_cardapio_v4";

const produtosIniciais = [
  {id:1,nome:"Pão de Queijo de Batata Doce",categoria:"Congelados",preco:15,descricao:"Sem glúten, feito com queijo de coalho zero lactose. Porção com 5 unidades.",disponivel:true},
  {id:2,nome:"Coxinha Fit de Macaxeira com Frango",categoria:"Congelados",preco:16,descricao:"Sem leite, sem ovos e sem fritura. Empanada na linhaça dourada. Porção com 4 unidades.",disponivel:true},
  {id:3,nome:"Coxinha Fit de Macaxeira com Carne de Sol",categoria:"Congelados",preco:18,descricao:"Sem leite, sem ovos e sem fritura. Empanada na linhaça dourada. Porção com 4 unidades.",disponivel:true},

  {id:4,nome:"Empada de Frango",categoria:"Salgados Fit",preco:8,descricao:"Empada fit de frango.",disponivel:true},
  {id:5,nome:"Empada Fit de Carne de Sol",categoria:"Salgados Fit",preco:9,descricao:"Empada preparada com carne de sol.",disponivel:true},
  {id:6,nome:"Empada de Palmito e Queijo Coalho",categoria:"Salgados Fit",preco:10,descricao:"Feita com mix de farinhas sem glúten e manteiga ghee sem lactose.",disponivel:true},
  {id:7,nome:"Coxinha Fit de Macaxeira",categoria:"Salgados Fit",preco:8,descricao:"Feita com caldo de galinha caseiro, farinha de arroz, macaxeira cozida, azeite e frango desfiado.",disponivel:true},
  {id:8,nome:"Coxinha Fit de Carne de Sol",categoria:"Salgados Fit",preco:9,descricao:"Coxinha preparada com carne de sol.",disponivel:true},
  {id:9,nome:"Pastel de Forno Fit com Frango",categoria:"Salgados Fit",preco:9,descricao:"Feito com grão-de-bico, batata-doce cozida e mix de farinhas e grãos.",disponivel:true},
  {id:10,nome:"Pastel de Forno Fit de Carne de Sol",categoria:"Salgados Fit",preco:10,descricao:"Feito com grão-de-bico, batata-doce cozida e mix de farinhas e grãos.",disponivel:true},

  {id:11,nome:"Bolo Pequeno",categoria:"Bolos Funcionais",preco:25,descricao:"Até 6 fatias. Consulte os sabores disponíveis.",disponivel:true},
  {id:12,nome:"Bolo Médio",categoria:"Bolos Funcionais",preco:40,descricao:"Até 10 fatias. Consulte os sabores disponíveis.",disponivel:true},

  {id:13,nome:"Pão de Macaxeira",categoria:"Pães",preco:27,descricao:"Sem leite e sem glúten. Unidade com 12 fatias.",disponivel:true},
  {id:14,nome:"Pão de Jerimum",categoria:"Pães",preco:27,descricao:"Sem leite e sem glúten. Unidade com 12 fatias.",disponivel:true},
  {id:15,nome:"Pão de Batata Doce",categoria:"Pães",preco:27,descricao:"Sem leite e sem glúten. Unidade com 12 fatias.",disponivel:true},

  {id:16,nome:"Sanduíche Natural",categoria:"Nossos Pratos",preco:15,descricao:"Com pão integral, patê de frango sem lactose e alface.",disponivel:true},
  {id:17,nome:"Crepioca Leve de Frango",categoria:"Nossos Pratos",preco:18,descricao:"Crepioca recheada com frango.",disponivel:true},
  {id:18,nome:"Crepioca Leve de Carne de Sol",categoria:"Nossos Pratos",preco:20,descricao:"Crepioca recheada com carne de sol.",disponivel:true},
  {id:19,nome:"Tapioca de Frango",categoria:"Nossos Pratos",preco:18,descricao:"Tapioca recheada com frango.",disponivel:true},
  {id:20,nome:"Tapioca de Carne de Sol",categoria:"Nossos Pratos",preco:20,descricao:"Tapioca recheada com carne de sol.",disponivel:true},
  {id:21,nome:"Cuscuz de Carne e Queijo Coalho",categoria:"Nossos Pratos",preco:22,descricao:"Cuscuz recheado com carne e queijo coalho.",disponivel:true},
  {id:22,nome:"Cuscuz de Frango e Queijo",categoria:"Nossos Pratos",preco:20,descricao:"Cuscuz recheado com frango e queijo.",disponivel:true},

  {id:23,nome:"Yo Pro",categoria:"Bebidas",preco:10,descricao:"Bebida Yo Pro.",disponivel:true},
  {id:24,nome:"Refrigerante Zero",categoria:"Bebidas",preco:6,descricao:"Refrigerante zero.",disponivel:true},
  {id:25,nome:"Capuccino",categoria:"Bebidas",preco:7,descricao:"Capuccino.",disponivel:true},
  {id:26,nome:"Capuccino Pequeno",categoria:"Bebidas",preco:5,descricao:"Porção pequena de capuccino.",disponivel:true},
  {id:27,nome:"Água Mineral",categoria:"Bebidas",preco:3,descricao:"Água mineral.",disponivel:true},
  {id:28,nome:"Água com Gás",categoria:"Bebidas",preco:4,descricao:"Água mineral com gás.",disponivel:true},
  {id:29,nome:"Suco Natural",categoria:"Bebidas",preco:7,descricao:"Suco natural.",disponivel:true},
  {id:30,nome:"Suco ao Leite",categoria:"Bebidas",preco:8,descricao:"Suco preparado com leite.",disponivel:true}
];

function carregarProdutos() {
  try {
    const dados = localStorage.getItem(CHAVE_PRODUTOS);
    if (dados) {
      const lista = JSON.parse(dados);
      if (Array.isArray(lista)) return lista;
    }
  } catch (erro) {
    console.error(erro);
  }
  return produtosIniciais.map(p => ({...p}));
}

let produtos = carregarProdutos();
let carrinho = [];
let categoriaAtiva = "Todos";

function salvarDados() {
  localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(produtos));
}

function dinheiro(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function escapar(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  })[c]);
}

/* CATEGORIAS */

function desenharCategorias() {
  const categorias = ["Todos", ...new Set(produtos.map(p => p.categoria))];

  document.getElementById("categorias").innerHTML = categorias.map(c => `
    <button class="categoria-btn ${c === categoriaAtiva ? "ativa" : ""}"
      onclick="filtrarCategoria('${escapar(c)}')">
      ${escapar(c)}
    </button>
  `).join("");
}

function filtrarCategoria(categoria) {
  categoriaAtiva = categoria;
  desenharCategorias();
  desenharProdutos();
}

/* PRODUTOS */

function desenharProdutos() {
  const area = document.getElementById("produtos");
  const lista = categoriaAtiva === "Todos"
    ? produtos
    : produtos.filter(p => p.categoria === categoriaAtiva);

  if (!lista.length) {
    area.innerHTML = "<p>Nenhum produto cadastrado nesta categoria.</p>";
    return;
  }

  area.innerHTML = lista.map(p => `
    <article class="produto ${p.disponivel === false ? "produto-indisponivel" : ""}">
      <div class="produto-conteudo">
        <span class="produto-categoria">${escapar(p.categoria)}</span>
        <h3>${escapar(p.nome)}</h3>
        <p class="produto-descricao">${escapar(p.descricao)}</p>

        <div class="produto-rodape">
          <span class="preco">${dinheiro(p.preco)}</span>
          <button class="btn-adicionar"
            ${p.disponivel === false ? "disabled" : ""}
            onclick="adicionarCarrinho(${p.id})">
            ${p.disponivel === false ? "Indisponível" : "Adicionar +"}
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/* CARRINHO */

function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto || produto.disponivel === false) return;

  const item = carrinho.find(i => i.id === id);
  if (item) item.quantidade++;
  else carrinho.push({id, quantidade:1});

  atualizarCarrinho();
}

function alterarQuantidade(id, valor) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;

  item.quantidade += valor;
  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(i => i.id !== id);
  }
  atualizarCarrinho();
}

function removerCarrinho(id) {
  carrinho = carrinho.filter(i => i.id !== id);
  atualizarCarrinho();
}

function calcularTotal() {
  return carrinho.reduce((total, item) => {
    const produto = produtos.find(p => p.id === item.id);
    return total + (produto ? produto.preco * item.quantidade : 0);
  }, 0);
}

function atualizarCarrinho() {
  const quantidade = carrinho.reduce((soma, i) => soma + i.quantidade, 0);
  document.getElementById("contador-carrinho").textContent = quantidade;

  const total = calcularTotal();
  document.getElementById("subtotal-carrinho").textContent = dinheiro(total);
  document.getElementById("total-carrinho").textContent = dinheiro(total);

  const area = document.getElementById("itens-carrinho");

  if (!carrinho.length) {
    area.innerHTML = `
      <div class="carrinho-vazio">
        Seu carrinho está vazio.<br>
        Escolha seus produtos no cardápio.
      </div>`;
    return;
  }

  area.innerHTML = carrinho.map(item => {
    const p = produtos.find(produto => produto.id === item.id);
    if (!p) return "";

    return `
      <div class="item-carrinho">
        <div>
          <strong>${escapar(p.nome)}</strong>
          <small>${dinheiro(p.preco)} cada</small>
          <button class="remover-item" onclick="removerCarrinho(${p.id})">Remover</button>
        </div>
        <div class="controles-quantidade">
          <button onclick="alterarQuantidade(${p.id},-1)">−</button>
          <b>${item.quantidade}</b>
          <button onclick="alterarQuantidade(${p.id},1)">+</button>
        </div>
      </div>`;
  }).join("");
}

function abrirCarrinho() {
  atualizarCarrinho();
  document.getElementById("modal-carrinho").classList.add("aberto");
}

/* PEDIDO PELO WHATSAPP */

function finalizarPedido() {
  if (!carrinho.length) {
    alert("Seu carrinho está vazio.");
    return;
  }

  const nome = document.getElementById("cliente-nome").value.trim();
  const telefone = document.getElementById("cliente-telefone").value.trim();
  const endereco = document.getElementById("cliente-endereco").value.trim();
  const horario = document.getElementById("horario-entrega").value;

  if (!nome || !telefone || !endereco || !horario) {
    alert("Preencha todos os dados para continuar.");
    return;
  }

  const [h, m] = horario.split(":").map(Number);
  const minutos = h * 60 + m;

  const horarioValido =
    (minutos >= 660 && minutos <= 740) ||
    (minutos >= 840 && minutos <= 1020);

  if (!horarioValido) {
    alert("Entregas disponíveis das 11h às 12h20 e das 14h às 17h.");
    return;
  }

  const linhas = carrinho.map(item => {
    const p = produtos.find(produto => produto.id === item.id);
    return `${item.quantidade}x ${p.nome} - ${dinheiro(p.preco * item.quantidade)}`;
  });

  const mensagem = `
Olá! Gostaria de fazer um pedido no Café da Milla.

MEU PEDIDO:
${linhas.join("\n")}

TOTAL: ${dinheiro(calcularTotal())}

DADOS PARA ENTREGA:
Nome: ${nome}
Telefone: ${telefone}
Endereço: ${endereco}
Horário desejado: ${horario}

Aguardo a confirmação do pedido.
  `.trim();

  window.open(
    `https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
}

/* MODAIS */

function fecharModal(id) {
  document.getElementById(id).classList.remove("aberto");
}

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("aberto");
  });
});

/* CABINE DA PROPRIETÁRIA */

function abrirAdmin() {
  document.getElementById("senha-admin").value = "";
  document.getElementById("erro-login").textContent = "";
  document.getElementById("modal-login").classList.add("aberto");
}

function entrarAdmin() {
  const senha = document.getElementById("senha-admin").value;

  if (senha !== SENHA_ADMIN) {
    document.getElementById("erro-login").textContent = "Senha incorreta.";
    return;
  }

  fecharModal("modal-login");
  desenharListaAdmin();
  document.getElementById("modal-admin").classList.add("aberto");
}

function sairAdmin() {
  fecharModal("modal-admin");
  limparFormulario();
}

function salvarProduto() {
  const id = document.getElementById("produto-id").value;
  const nome = document.getElementById("admin-nome").value.trim();
  const precoTexto = document.getElementById("admin-preco").value;
  const preco = Number(precoTexto);
  const categoria = document.getElementById("admin-categoria").value;
  const descricao = document.getElementById("admin-descricao").value.trim();

  if (!nome || precoTexto === "" || !Number.isFinite(preco) || preco < 0) {
    alert("Informe um nome e um preço válido.");
    return;
  }

  if (id) {
    const p = produtos.find(item => item.id === Number(id));
    if (!p) return;

    p.nome = nome;
    p.preco = preco;
    p.categoria = categoria;
    p.descricao = descricao;
  } else {
    produtos.push({
      id: Date.now(),
      nome,
      preco,
      categoria,
      descricao,
      disponivel: true
    });
  }

  salvarDados();
  limparFormulario();
  atualizarTela();
  desenharListaAdmin();
  alert("Produto salvo com sucesso!");
}

function editarProduto(id) {
  const p = produtos.find(item => item.id === id);
  if (!p) return;

  document.getElementById("produto-id").value = p.id;
  document.getElementById("admin-nome").value = p.nome;
  document.getElementById("admin-preco").value = p.preco;
  document.getElementById("admin-categoria").value = p.categoria;
  document.getElementById("admin-descricao").value = p.descricao || "";
  document.getElementById("titulo-form").textContent = "Editar produto";

  document.querySelector(".janela-admin").scrollTo({top:0, behavior:"smooth"});
}

function limparFormulario() {
  document.getElementById("produto-id").value = "";
  document.getElementById("admin-nome").value = "";
  document.getElementById("admin-preco").value = "";
  document.getElementById("admin-descricao").value = "";
  document.getElementById("admin-categoria").selectedIndex = 0;
  document.getElementById("titulo-form").textContent = "Adicionar produto";
}

function excluirProduto(id) {
  const p = produtos.find(item => item.id === id);
  if (!p) return;

  if (!confirm(`Deseja excluir "${p.nome}"?`)) return;

  produtos = produtos.filter(item => item.id !== id);
  carrinho = carrinho.filter(item => item.id !== id);

  salvarDados();
  atualizarTela();
  atualizarCarrinho();
  desenharListaAdmin();
}

function alternarDisponibilidade(id) {
  const p = produtos.find(item => item.id === id);
  if (!p) return;

  p.disponivel = p.disponivel === false;
  salvarDados();
  atualizarTela();
  desenharListaAdmin();
}

function desenharListaAdmin() {
  const area = document.getElementById("lista-admin");

  document.getElementById("quantidade-produtos").textContent =
    `${produtos.length} produtos`;

  if (!produtos.length) {
    area.innerHTML = "<p>Nenhum produto cadastrado.</p>";
    return;
  }

  area.innerHTML = produtos.map(p => `
    <div class="admin-item">
      <div>
        <strong>${escapar(p.nome)}</strong>
        <small>${escapar(p.categoria)} · ${dinheiro(p.preco)}</small>
        <small>${p.disponivel === false ? "Indisponível" : "Disponível"}</small>
      </div>

      <div class="admin-acoes">
        <button onclick="editarProduto(${p.id})">Editar</button>
        <button onclick="alternarDisponibilidade(${p.id})">
          ${p.disponivel === false ? "Disponibilizar" : "Indisponibilizar"}
        </button>
        <button class="excluir" onclick="excluirProduto(${p.id})">Excluir</button>
      </div>
    </div>
  `).join("");
}

/* INICIALIZAÇÃO */

function atualizarTela() {
  const categorias = ["Todos", ...new Set(produtos.map(p => p.categoria))];

  if (!categorias.includes(categoriaAtiva)) categoriaAtiva = "Todos";

  desenharCategorias();
  desenharProdutos();
}

atualizarTela();
atualizarCarrinho();
/* Janela explicativa de cada app da família ULVA.
   O site não leva o visitante para dentro dos portais: cada botão abre esta
   janela, com o que o app faz, para quem é, as telas e todas as ferramentas. */
(function () {
  var T = 'assets/telas/';
  var APPS = {
    ulva: {
      nome: 'ULVA', logo: 'assets/logo-ulva.svg', redondo: true,
      para: 'Portal de gestão da loja · gerência',
      resumo: 'O ULVA é o centro da família. É nele que entram as planilhas do sistema da loja (vendas e estoque) e é dele que os outros apps puxam os dados. A gerência acompanha a loja inteira em um só lugar: venda e meta do dia, estoque, ruptura, validade, perdas, equipe e rotina. Funciona no computador (portal) e no celular (app).',
      destaques: [
        'Duas planilhas por dia alimentam tudo: a venda e o estoque. O resto o ULVA calcula cruzando as duas.',
        'Cada alerta vira tarefa para alguém resolver, e volta para a gerência validar.',
        'Relatórios em PDF prontos para mandar no WhatsApp.',
        'Cada pessoa vê só as ferramentas liberadas para ela.'
      ],
      telas: [
        ['portal-venda-dia', 'Venda do dia'], ['portal-vendas-loja', 'Vendas da Loja'], ['portal-giro', 'Giro de Produtos'],
        ['portal-validade', 'Controle de Validade'], ['portal-perdas', 'Perdas e Desperdícios'], ['portal-checklist', 'Checklist'],
        ['portal-mapa', 'Mapa da Loja'], ['portal-chegadas', 'Mercadoria que chegou'], ['portal-estoque', 'Estoque Loja'],
        ['portal-conferencias', 'Conferências'], ['portal-vendas-abc', 'Vendas · curva ABC'], ['portal-inventario', 'Inventário'],
        ['portal-avisos', 'Mural de Avisos'], ['portal-ocorrencias', 'Ocorrências']
      ],
      grupos: [
        { titulo: 'Vendas e resultados', itens: [
          ['🎯', 'Venda do dia', 'Mostra, para qualquer dia, a venda total, quanto falta para a meta, o acumulado do mês comparado com o mês anterior, a venda por setor (com a variação contra o mesmo dia da semana passada) e o top 10 de produtos em valor e em volume. Sai em PDF.'],
          ['📈', 'Vendas da Loja', 'A venda do mês, dos últimos 7 ou 30 dias, ou do mês anterior, com gráfico dia a dia contra o mesmo período anterior, média por dia, melhor dia e margem estimada. Desce de setor para grupo, categoria, subcategoria e produto.'],
          ['📊', 'Vendas · curva ABC', 'Coloca os produtos em curva ABC pelo faturamento, com quantidade vendida, participação, acumulado e dias de estoque. Mostra rápido o que sustenta a loja e o que está sobrando.'],
          ['📋', 'Relatório diário', 'Todo dia cedo: a venda de ontem contra a meta, a meta de hoje, quem está de folga ou falta e a quebra por setor. Vira um PDF para mandar no WhatsApp.'],
          ['🗓️', 'Relatório mensal', 'O fechamento do mês em painéis: meta por setor, venda por caixa, por hora e por forma de pagamento, ticket médio, produtos mais vendidos, quebras e turnover da equipe. Exporta em PDF.'],
          ['🧮', 'Resultados de inventário', 'Guarda o resultado de cada inventário por setor: venda, perda identificada e não identificada, metas e os produtos que mais pesaram.'],
          ['⬆️', 'Importar vendas', 'Sobe a planilha de vendas exportada do sistema da loja, de um ou de vários dias. O ULVA confere se algum dia veio incompleto antes de gravar.']
        ]},
        { titulo: 'Estoque, ruptura e pedidos', itens: [
          ['🗄️', 'Estoque Loja', 'Consulta o saldo, o preço de venda, o custo e a margem de cada produto, a partir da última planilha de estoque. Busca por código ou nome, com a lista de estoque crítico dos produtos curva A.'],
          ['🔁', 'Giro de Produtos', 'Cruza venda e estoque para mostrar produtos sem venda, parados há mais de 30 dias e quanto dinheiro está parado. Dá para ajustar o estoque (com aprovação) ou ocultar insumos que não são de venda.'],
          ['🧺', 'Ruptura', 'Lista de prioridade de coleta por grupo da gôndola. O colaborador bipa o que está exposto, e o ULVA separa o que é ruptura de verdade do que é só falta de venda. Gera tratativas, a fila de pedidos para o CD e o controle de cortes.'],
          ['🗺️', 'Mapa da Loja', 'A planta real da loja dividida em setores e corredores. Cada área tem fotos do posicionamento e os produtos que ficam ali. Serve de base para a ruptura e para a conferência do folheto.'],
          ['🚚', 'Mercadoria que chegou', 'Sobe a nota (planilha ou PDF) e o ULVA cruza com o estoque: mostra o que estava em falta, o que é novo e o que precisa ir direto para a área de venda. A equipe confirma no celular o que já foi abastecido.'],
          ['📦', 'Inventário', 'A contagem é feita no celular, por área e por pessoa. No portal o gestor junta as contagens, compara com o estoque e exporta a planilha.'],
          ['🔎', 'Busca produto', 'No app, bipa o código de barras e vê na hora o estoque, o preço, os dias de estoque, os dias sem venda e onde o produto fica no mapa.'],
          ['🧾', 'Conferência de nota', 'Confere item a item o que chegou contra o que foi pedido, a partir de um PDF, e aponta as divergências.']
        ]},
        { titulo: 'Validade e perdas', itens: [
          ['📅', 'Controle de Validade', 'Cadastra os produtos com data de validade, quantidade e endereço. Mostra os vencidos e os que vencem nos próximos dias por setor, e manda alerta antes do vencimento.'],
          ['👀', 'De olho na validade', 'Registra quando um cliente encontra um produto vencido: leitura do cupom fiscal pelo QR code, fotos e assinaturas, para a tratativa não se perder.'],
          ['📉', 'Perdas e Desperdícios', 'Importa o relatório de quebra e mostra quanto cada setor perdeu, a porcentagem sobre a venda e os produtos que mais pesaram. Sai em PDF por setor ou da loja toda.']
        ]},
        { titulo: 'Comercial', itens: [
          ['💬', 'Ofertas no WhatsApp', 'Monta o card da oferta já com o preço oficial do estoque da loja. A equipe sugere, a gerência aprova e quem divulga recebe pronto para mandar no grupo.'],
          ['📰', 'Jornal de ofertas', 'O folheto da semana em PDF para toda a equipe, com o estoque de cada item. Avisa o que vai acabar antes do fim da oferta.'],
          ['🗞️', 'Conferência do folheto', 'Lê o PDF do folheto sozinho (produto, preço e código) e gera a lista para marcar OK, ruptura ou sem etiqueta, com a rota pelo mapa e o relatório pronto.'],
          ['🏷️', 'Pesquisa de preço', 'Registra os preços dos concorrentes e compara com o preço da loja.'],
          ['🗂️', 'Pontas e pontos extras', 'O que está montado em cada ponta de gôndola e ponto extra, com foto de cada montagem.']
        ]},
        { titulo: 'Equipe e rotina', itens: [
          ['👥', 'Equipe', 'Cadastro de quem usa o app, com função, setor e as ferramentas liberadas para cada um.'],
          ['🗓️', 'Escala e folgas', 'Importa a escala do mês, cadastra quem entrou, tira quem saiu e mostra quem está de folga em cada dia. Também registra faltas e atestados.'],
          ['✅', 'Checklist', 'A rotina do dia de cada setor e a avaliação de setor com nota. O painel mostra o aproveitamento de cada setor ao longo das semanas.'],
          ['🔔', 'Mural de avisos', 'Comunicados para a loja toda ou para um setor, com marcação de urgente e a lista de quem já viu.'],
          ['⚠️', 'Ocorrências', 'Qualquer colaborador relata um problema da loja, com foto. A gerência acompanha o que está aberto e o que já foi resolvido.']
        ]}
      ]
    },
    ultra: {
      nome: 'ULTRA', logo: 'assets/logo-ultra.png',
      para: 'Resultados e gôndola',
      resumo: 'O ULTRA leva os resultados da loja para o celular do encarregado. Ele entra com o mesmo login do ULVA e vê o estoque, a venda, a quebra e a ruptura do setor no piso da loja, sem precisar ir até o computador.',
      destaques: [
        'Mesmo login e mesmos dados do ULVA, sempre atualizados.',
        'Cada um vê o que é da sua função: o estoque fica aberto para todos e os resultados para a gerência.',
        'PDFs prontos para compartilhar no WhatsApp.'
      ],
      telas: [
        ['ultra-inicio', 'Tela inicial'], ['ultra-venda-dia', 'Venda do dia'], ['ultra-relatorio-diario', 'Relatório diário'],
        ['ultra-vendas-loja', 'Vendas da Loja'], ['ultra-perdas', 'Perdas e Desperdício'], ['ultra-giro', 'Giro de Produtos'],
        ['ultra-ruptura', 'Ruptura'], ['ultra-estoque', 'Estoque Loja']
      ],
      grupos: [
        { titulo: 'Estoque', itens: [
          ['🗄️', 'Estoque Loja', 'Saldo e preço de cada produto, por código ou nome, direto no celular.']
        ]},
        { titulo: 'Resultados', itens: [
          ['📋', 'Relatório diário', 'Venda de ontem contra a meta, meta de hoje, quem está fora e quebra por setor. Um toque e o PDF vai para o WhatsApp.'],
          ['🗓️', 'Relatório mensal', 'O fechamento do mês: meta, caixas, quebras e turnover, em PDF.'],
          ['📉', 'Perdas e Desperdício', 'Quebra por setor e por produto, com a porcentagem sobre a venda. O PDF sai por setor ou da loja toda.'],
          ['📊', 'Painel Resultados', 'Os indicadores de cada setor em uma tela.'],
          ['🧮', 'Resultados de inventário', 'O resultado final de cada inventário por setor.'],
          ['📈', 'Vendas e Vendas da Loja', 'Venda por categoria, gráfico dia a dia, média, melhor dia e margem estimada.'],
          ['🎯', 'Venda do dia', 'Total do dia, acumulado do mês, venda por setor e top 10, com PDF.'],
          ['🔁', 'Giro de Produtos', 'Produtos parados e sem venda, quanto está parado em estoque e o botão para pedir ajuste.']
        ]},
        { titulo: 'Gôndola', itens: [
          ['🧺', 'Ruptura', 'O encarregado escolhe o grupo da gôndola e bipa o que está exposto. Tem a ruptura sugerida, as tratativas, os pedidos na fila e os cortes do CD.'],
          ['🗞️', 'Conferência de folheto', 'Marca cada item do folheto como OK, ruptura ou sem etiqueta e gera o relatório.']
        ]}
      ]
    },
    level: {
      nome: 'LEVEL', logo: 'assets/logo-level.png',
      para: 'Para vendedores e promotores',
      resumo: 'O LEVEL é o app de quem vem de fora atender a loja. O vendedor de cada indústria recebe o aviso quando os produtos dele estão acabando, já com a sugestão de pedido pronta. O promotor cadastra validades e mostra onde cada produto fica no mapa. O vendedor vê quantos dias o produto aguenta, e o estoque da loja continua protegido.',
      destaques: [
        'O vendedor entra com o nome e o código de sugestão da indústria.',
        'Alerta de "compareça à loja" quando o estoque não dá para uma semana de venda.',
        'Um mesmo vendedor pode atender várias indústrias.',
        'A gerência cadastra vendedores e promotores no portal LEVEL.'
      ],
      telas: [['level-inicio', 'Tela inicial do vendedor'], ['level-pedido', 'Sugestão de pedido']],
      grupos: [
        { titulo: 'Vendedor', itens: [
          ['🚨', 'Compareça à loja', 'Quando algum produto da indústria tem estoque para menos de uma semana, o vendedor recebe o aviso no celular, já com a sugestão de pedido.'],
          ['🏭', 'Suas indústrias', 'Todas as indústrias que o vendedor atende, com quantos itens estão em alerta e quantos estão para pedir.'],
          ['🧾', 'Pedido semanal e mensal', 'Sugestão em caixas para cobrir uma semana ou um mês de venda, item por item, com quantos dias cada produto ainda aguenta na loja.'],
          ['📤', 'Compartilhar', 'Manda a sugestão pronta para quem fecha o pedido.']
        ]},
        { titulo: 'Promotor', itens: [
          ['📅', 'Cadastro de validade', 'O promotor registra as datas de validade dos produtos que repõe, e elas entram no controle de validade da loja.'],
          ['🗺️', 'Localização no mapa', 'Marca no mapa da loja onde cada produto fica, ajudando a ruptura e a reposição.'],
          ['🔐', 'Primeiro acesso', 'Entra com o nome e uma senha inicial e troca a senha no primeiro acesso.']
        ]},
        { titulo: 'Portal LEVEL (gerência)', itens: [
          ['👤', 'Cadastro', 'A gerência cadastra vendedores (nome, telefone, indústria e código de sugestão) e promotores (nome e empresa).'],
          ['📄', 'Sugestão a partir do sistema', 'Lê o relatório de sugestão de compras do sistema da loja e monta a lista de produtos de cada vendedor.']
        ]}
      ]
    },
    vita: {
      nome: 'VITA', logo: 'assets/logo-vita.png', tag: 'MULTILOJA',
      para: 'Controle de validade',
      resumo: 'O VITA é o controle de validade da família, gratuito para as lojas. Cada loja tem o seu espaço separado, com acesso único para a unidade: todo mundo usa o mesmo número e senha e se identifica pelo nome, para ficar registrado quem cadastrou cada produto. Uma loja nova começa a usar no mesmo dia.',
      destaques: [
        'Os produtos vencendo aparecem logo na tela inicial.',
        'Tratativa diária dos lotes grandes perto do vencimento, com foto da exposição.',
        'Alertas no celular antes do vencimento.',
        'O administrador libera as lojas novas pelo painel VITA · Lojas.'
      ],
      telas: [['vita-inicio', 'Tela inicial'], ['vita-validade', 'Validade'], ['vita-tratativa', 'Tratativa']],
      grupos: [
        { titulo: 'No dia a dia', itens: [
          ['🏪', 'Acesso por loja', 'Número da loja e senha da unidade. Depois a pessoa informa o nome e a função, e tudo que ela cadastrar fica com o nome dela.'],
          ['📅', 'Validade', 'Cadastra o produto pelo código de barras, com data, quantidade e setor. A lista mostra os vencidos e quantos dias faltam para cada um, por setor. Dá para editar, remover e exportar.'],
          ['🛠️', 'Tratativa', 'Os produtos com mais de 12 unidades perto do vencimento entram na lista de prioridades. Todo dia a equipe atualiza o preço e a quantidade que sobrou, com foto da exposição, até vender tudo.'],
          ['📊', 'Dashboard', 'Quanto foi salvo com as tratativas, quanto virou perda e o que ainda está em aberto.']
        ]},
        { titulo: 'Para o administrador', itens: [
          ['🔔', 'Alertas', 'Notificação no celular quando um produto está perto de vencer.'],
          ['🗝️', 'VITA · Lojas', 'Painel para cadastrar e liberar novas lojas no app.']
        ]}
      ]
    },
    audit: {
      nome: 'AUDIT', logo: 'assets/logo-audit.png',
      para: 'Prevenção e auditoria',
      resumo: 'O AUDIT é o app de quem fiscaliza a loja: checklists por setor, visitas técnicas, visitas do supervisor e ocorrências, com foto e assinatura. Funciona sem internet e envia tudo sozinho quando o sinal volta.',
      destaques: [
        'Confirma a unidade e registra a localização no início da visita.',
        'Fotos, assinaturas e um PDF único da visita, dividido por setor.',
        'Pontos apontados viram correções que a loja resolve e o responsável aprova.',
        'Portal da Visita Técnica para técnicos e diretoria.'
      ],
      telas: [['audit-inicio', 'Tela inicial'], ['audit-visita-tecnica', 'Visita Técnica'], ['audit-checklist', 'Checklist'], ['audit-ocorrencias', 'Ocorrências']],
      grupos: [
        { titulo: 'Ferramentas', itens: [
          ['🩺', 'Visita Técnica', 'Avaliação sanitária da loja por setor, com perguntas, fotos (até 5 por item) e assinatura. Controla o vencimento dos documentos da loja. No fim sai um PDF único com uma página por setor, para entregar a cada encarregado.'],
          ['🧑‍💼', 'Visita Supervisor', 'Registro da visita do supervisor, com os pontos observados e o acompanhamento até a correção.'],
          ['✅', 'Checklist', 'A rotina do dia de cada setor e a avaliação de setor, com o andamento de cada setor ao longo do dia.'],
          ['⚠️', 'Ocorrências', 'Problemas relatados na loja, separados entre abertos e resolvidos.']
        ]},
        { titulo: 'Portal da Visita Técnica', itens: [
          ['🗺️', 'Painel e mapa', 'Relatórios, notas por loja e por setor, correções pendentes e o mapa com a rota de cada técnico pelas lojas que ele atende.'],
          ['✏️', 'Perguntas', 'A diretoria edita as perguntas de cada setor sem precisar atualizar o app.']
        ]}
      ]
    }
  };

  var css = document.createElement('style');
  css.textContent = [
    '.ex-fundo{position:fixed;inset:0;z-index:1000;background:rgba(8,10,14,.78);backdrop-filter:blur(4px);display:none;align-items:flex-start;justify-content:center;overflow-y:auto;padding:32px 16px;}',
    '.ex-fundo.aberto{display:flex;}',
    '.ex-caixa{background:#17191E;border:1px solid #2B2D33;border-radius:22px;width:100%;max-width:980px;position:relative;margin:auto 0;}',
    '.ex-topo{display:flex;align-items:center;gap:16px;padding:28px 28px 0;}',
    '.ex-topo .lg{width:64px;height:64px;border-radius:16px;background:#0E1B2C;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.ex-topo .lg img{width:46px;height:46px;}',
    '.ex-topo h3{margin:0;font-size:28px;font-weight:800;color:#fff;}',
    '.ex-topo .para{margin:4px 0 0;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--accent);}',
    '.ex-fechar{position:sticky;top:12px;float:right;margin:12px 12px 0 0;width:40px;height:40px;border-radius:50%;border:1px solid #3A3C43;background:#1E2025;color:#fff;font-size:20px;cursor:pointer;z-index:2;}',
    '.ex-corpo{padding:18px 28px 28px;}',
    '.ex-resumo{font-size:15.5px;line-height:1.7;color:#C9C8C2;margin:0 0 18px;}',
    '.ex-dest{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin:0 0 28px;padding:0;list-style:none;}',
    '.ex-dest li{background:#1E2025;border:1px solid #2B2D33;border-radius:12px;padding:12px 14px;font-size:13.5px;line-height:1.5;color:#D6D5CF;}',
    '.ex-dest li:before{content:"✓";color:var(--accent);font-weight:800;margin-right:8px;}',
    '.ex-sub{font-size:13px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#8E8D86;margin:0 0 12px;}',
    '.ex-telas{display:flex;gap:14px;overflow-x:auto;padding:4px 2px 14px;margin:0 0 26px;scroll-snap-type:x mandatory;}',
    '.ex-tela{flex:0 0 auto;scroll-snap-align:start;margin:0;cursor:zoom-in;}',
    '.ex-tela img{display:block;border-radius:12px;border:1px solid #2B2D33;background:#0E1B2C;}',
    '.ex-tela.cel img{height:440px;width:auto;}',
    '.ex-tela.pc img{height:300px;width:auto;}',
    '.ex-tela figcaption{font-size:12px;color:#8E8D86;margin-top:6px;text-align:center;}',
    '.ex-grupo{margin:0 0 22px;}',
    '.ex-grupo h4{font-size:17px;font-weight:800;color:#fff;margin:0 0 10px;}',
    '.ex-itens{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px;}',
    '.ex-item{background:#1E2025;border:1px solid #2B2D33;border-radius:14px;padding:14px 16px;display:flex;gap:12px;}',
    '.ex-item .ic{width:34px;height:34px;border-radius:50%;background:#262A44;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px;}',
    '.ex-item b{display:block;font-size:14.5px;color:#fff;margin-bottom:4px;}',
    '.ex-item span{font-size:13.5px;line-height:1.55;color:#A3A29B;}',
    '.ex-cta{margin-top:26px;background:linear-gradient(135deg,rgba(47,123,255,.16),rgba(47,123,255,.05));border:1px solid rgba(47,123,255,.35);border-radius:16px;padding:20px;display:flex;gap:16px;align-items:center;justify-content:space-between;flex-wrap:wrap;}',
    '.ex-cta p{margin:0;font-size:14.5px;color:#DCE8FF;font-weight:600;}',
    '.ex-cta a{padding:11px 20px;border-radius:10px;font-size:14px;font-weight:700;}',
    '.ex-zoom{position:fixed;inset:0;z-index:1100;background:rgba(0,0,0,.92);display:none;align-items:center;justify-content:center;padding:16px;cursor:zoom-out;}',
    '.ex-zoom.aberto{display:flex;}',
    '.ex-zoom img{max-width:100%;max-height:100%;border-radius:10px;}',
    'button.btn-explicar{border:0;cursor:pointer;font-family:inherit;}',
    '.app-card .links button{padding:9px 16px;border-radius:9px;font-size:13px;font-weight:700;}',
    '@media (max-width:760px){.ex-fundo{padding:0;}.ex-caixa{border-radius:0;min-height:100%;border:0;}.ex-topo{padding:20px 18px 0;}.ex-topo h3{font-size:24px;}.ex-corpo{padding:14px 18px 28px;}.ex-tela.cel img{height:380px;}.ex-tela.pc img{height:200px;}}'
  ].join('\n');
  document.head.appendChild(css);

  function esc(x) { return String(x).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var fundo = document.createElement('div');
  fundo.className = 'ex-fundo';
  fundo.setAttribute('role', 'dialog');
  fundo.setAttribute('aria-modal', 'true');
  document.body.appendChild(fundo);
  var zoom = document.createElement('div');
  zoom.className = 'ex-zoom';
  zoom.innerHTML = '<img alt="">';
  document.body.appendChild(zoom);
  zoom.addEventListener('click', function () { zoom.classList.remove('aberto'); });

  function abrir(chave) {
    var a = APPS[chave];
    if (!a) return;
    var html = '<div class="ex-caixa"><button class="ex-fechar" aria-label="Fechar">✕</button>' +
      '<div class="ex-topo"><div class="lg"><img src="' + a.logo + '" alt=""' + (a.redondo ? ' style="border-radius:50%"' : '') + '></div>' +
      '<div><h3>' + a.nome + (a.tag ? ' <span class="tag-novo">' + a.tag + '</span>' : '') + '</h3><p class="para">' + esc(a.para) + '</p></div></div>' +
      '<div class="ex-corpo"><p class="ex-resumo">' + esc(a.resumo) + '</p>' +
      '<ul class="ex-dest">' + a.destaques.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('') + '</ul>' +
      '<p class="ex-sub">Telas ' + (chave === 'ulva' ? 'do portal' : 'do app') + ' · toque para ampliar</p>' +
      '<div class="ex-telas">' + a.telas.map(function (t) {
        var pc = t[0].indexOf('portal-') === 0;
        return '<figure class="ex-tela ' + (pc ? 'pc' : 'cel') + '"><img loading="lazy" src="' + T + t[0] + '.jpg" alt="' + esc(t[1]) + '"><figcaption>' + esc(t[1]) + '</figcaption></figure>';
      }).join('') + '</div>' +
      '<p class="ex-sub">Todas as ferramentas</p>' +
      a.grupos.map(function (g) {
        return '<div class="ex-grupo"><h4>' + esc(g.titulo) + '</h4><div class="ex-itens">' + g.itens.map(function (i) {
          return '<div class="ex-item"><div class="ic">' + i[0] + '</div><div><b>' + esc(i[1]) + '</b><span>' + esc(i[2]) + '</span></div></div>';
        }).join('') + '</div></div>';
      }).join('') +
      '<div class="ex-cta"><p>Quer o ' + a.nome + ' na sua loja? Fale com a gente.</p><a href="#contato" class="btn-primary ex-contato">Entrar em contato</a></div>' +
      '<p style="font-size:11.5px;color:#6E6D67;margin:14px 0 0;">Telas com dados de demonstração.</p>' +
      '</div></div>';
    fundo.innerHTML = html;
    fundo.classList.add('aberto');
    fundo.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    fundo.querySelector('.ex-fechar').addEventListener('click', fechar);
    fundo.querySelector('.ex-contato').addEventListener('click', fechar);
    fundo.querySelectorAll('.ex-tela img').forEach(function (im) {
      im.addEventListener('click', function () { zoom.querySelector('img').src = im.src; zoom.classList.add('aberto'); });
    });
    if (history.replaceState) history.replaceState(null, '', '#app-' + chave);
  }
  function fechar() {
    fundo.classList.remove('aberto');
    document.body.style.overflow = '';
    if (history.replaceState && /^#app-/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
  }
  fundo.addEventListener('click', function (e) { if (e.target === fundo) fechar(); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (zoom.classList.contains('aberto')) zoom.classList.remove('aberto'); else fechar();
  });
  document.querySelectorAll('[data-app]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); abrir(el.getAttribute('data-app')); });
  });
  var m = /^#app-(\w+)$/.exec(location.hash);
  if (m) abrir(m[1]);
  window.abrirExplicativo = abrir;
})();

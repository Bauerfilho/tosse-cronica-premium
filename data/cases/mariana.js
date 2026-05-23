/* mariana.js — dados do caso clínico evolutivo da Mariana */

export const mariana = {
  id: 'mariana',
  nome: 'Mariana',
  idade: 25,
  profissao: 'Pós-graduanda de dermatologia',
  avatarSlug: 'mariana',
  beats: [
    // A1 — parte 1 (apresentação)
    {
      id: 'm-a1-b1',
      aula: 'A1',
      pagina: 'caso-mariana-parte1',
      ordem: 1,
      titulo: 'Apresentação',
      texto:
        'Tosse há <strong>mais de 2 meses</strong>. Pela duração: <strong>tosse crônica</strong> (> 8 semanas). O desconforto lembrou episódios da infância, quando ela vivia no pronto-socorro com chiado no peito.',
      nota: 'A história de chiado na infância sugere asma como possibilidade — quadros asmáticos infantis podem retornar na vida adulta.',
      ancoragens: ['tosse crônica', 'asma'],
    },
    {
      id: 'm-a1-b2',
      aula: 'A1',
      pagina: 'caso-mariana-parte1',
      ordem: 2,
      titulo: 'Início do quadro atual',
      texto:
        'Tudo começou com <strong>resfriado comum</strong>. Tentou vitamina C efervescente e pomada no peito todos os dias — sem melhora.',
      nota: 'A sequência "resfriado → tosse que não passa" sugere UACS (síndrome da tosse das vias aéreas superiores) como causa pós-infecciosa.',
      ancoragens: ['UACS'],
    },
    {
      id: 'm-a1-b3',
      aula: 'A1',
      pagina: 'caso-mariana-parte1',
      ordem: 3,
      titulo: 'Falha terapêutica empírica',
      texto:
        'Vários xaropes, nebulização, "simpatias" — tudo em vão. <strong>Acentuou pirose</strong> que ela vinha sentindo nos últimos dias.',
      nota: 'A pirose acentuada após os xaropes sugere DRGE como causa de tosse crônica.',
      ancoragens: ['DRGE'],
    },
    {
      id: 'm-a1-b4',
      aula: 'A1',
      pagina: 'caso-mariana-parte1',
      ordem: 4,
      titulo: 'Perda de peso assintomática',
      texto:
        'Pensou em procurar um colega médico, mas, <strong>satisfeita com a perda de peso</strong> que vinha apresentando, decidiu não investigar.',
      nota: 'Asma não emagrece. Refluxo também não. UACS muito menos. A perda de peso muda o jogo — sinaliza causa consumptiva.',
      ancoragens: ['sinal de alarme', 'perda de peso'],
    },
    // A1 — parte 2 (congresso)
    {
      id: 'm-a1-b5',
      aula: 'A1',
      pagina: 'caso-mariana-parte2',
      ordem: 5,
      titulo: 'Cenário do congresso',
      texto:
        'A preocupação começou a aumentar no <strong>Congresso Brasileiro de Dermatologia</strong>, quando ela se sentiu mal após a apresentação do seu próprio tema. O alívio veio junto com a tosse.',
      ancoragens: ['contexto'],
    },
    {
      id: 'm-a1-b6',
      aula: 'A1',
      pagina: 'caso-mariana-parte2',
      ordem: 6,
      titulo: 'Hemoptise',
      quote:
        'Do fundo de sua alma saiu um <strong>catarro brancassento com raias de sangue</strong>.',
      texto:
        'Clinicamente: <strong>escarro hemoptoico</strong> — eliminação de pequena quantidade de sangue pela tosse, oriunda do trato respiratório abaixo da laringe (volumes < 20-30 mL/24h).',
      ancoragens: ['hemoptise', 'escarro hemoptoico'],
    },
    {
      id: 'm-a1-b7',
      aula: 'A1',
      pagina: 'caso-mariana-parte2',
      ordem: 7,
      titulo: 'Reação da amiga',
      quote:
        'Horrorizada e enojada, <strong>a amiga não suportou aquela cena e vomitou o coffee break em cima da Mariana</strong>.',
      ancoragens: ['narrativa'],
    },
    {
      id: 'm-a1-b8',
      aula: 'A1',
      pagina: 'caso-mariana-parte2',
      ordem: 8,
      titulo: 'Arrependimento',
      texto:
        'Mariana se arrependia dos <strong>plantões de emergência</strong> que ela deu após se formar. A exposição ocupacional fica sugerida — ambiente hospitalar amplifica o risco de exposição a doenças respiratórias transmissíveis.',
      ancoragens: ['exposição ocupacional'],
    },
    {
      id: 'm-a1-b9',
      aula: 'A1',
      pagina: 'caso-mariana-parte2',
      ordem: 9,
      titulo: 'A máscara',
      texto:
        'A amiga, suspeitando da doença, tirou da bolsa Louis Vuitton uma <strong>máscara bico de pato</strong> e pediu que Mariana se afastasse um pouco.',
      nota: '"Máscara bico de pato" é como popularmente se chamam respiradores N95/PFF2 — equipamentos para precaução por aerossol, conduta clássica em paciente bacilífero de tuberculose.',
      ancoragens: ['N95', 'precaução por aerossol', 'isolamento respiratório'],
    },
    // A2 — Dinâmica e Diagnóstico
    {
      id: 'm-a2-b1',
      aula: 'A2',
      pagina: 'tb-pos-primaria-adulto',
      ordem: 10,
      titulo: 'Da hipótese ao raciocínio fisiopatológico',
      texto:
        'Aos 25 anos, com tosse > 8 semanas + hemoptise + perda de peso + exposição ocupacional em plantões de emergência, Mariana entra no algoritmo de <strong>TB pulmonar pós-primária</strong>. A reativação de foco latente em ápices é o cenário mais provável. A exposição hospitalar amplifica o risco de reativação em quem fez algum contato prévio com o bacilo — talvez na infância, talvez nos próprios plantões.',
      ancoragens: ['pós-primária', 'reativação', 'foco latente', 'exposição ocupacional'],
    },
    {
      id: 'm-a2-b2',
      aula: 'A2',
      pagina: 'tb-pos-primaria-adulto',
      ordem: 11,
      titulo: 'Radiografia de tórax',
      texto:
        'A radiografia mostra <strong>infiltrado em ápice direito com cavitação</strong> — achado clássico de TB pós-primária. Não há adenopatia hilar bilateral (DDx sarcoidose descartado pelo padrão).',
      ancoragens: ['cavitação apical', 'Rx tórax', 'ápice direito'],
    },
    {
      id: 'm-a2-b3',
      aula: 'A2',
      pagina: 'metodos-pcr-genexpert',
      ordem: 12,
      titulo: 'Coleta de escarro pra PCR',
      texto:
        'Escarro <strong>caseoso, brancacento</strong> coletado. O hospital realiza <strong>teste molecular rápido (Xpert MTB/RIF Ultra)</strong> como exame inicial — exame de escolha por velocidade (~2h) + sensibilidade + detecção de resistência à rifampicina. Em paralelo, amostra é enviada pra cultura (antibiograma completo, resultado em semanas).',
      ancoragens: ['escarro caseoso', 'PCR', 'GeneXpert', 'Xpert Ultra'],
    },
    {
      id: 'm-a2-b4',
      aula: 'A2',
      pagina: 'metodos-pcr-genexpert',
      ordem: 13,
      titulo: 'Resultado',
      texto:
        'PCR <strong>positivo para M. tuberculosis, sensível à rifampicina</strong>. Diagnóstico de TB pulmonar pós-primária confirmado. Cultura segue em andamento (semanas), mas o tratamento pode começar — não há rifampicina-resistência sinalizada, então RIPE empírico é o esquema adequado.',
      ancoragens: ['diagnóstico confirmado', 'sensível à rifampicina', 'início RIPE'],
    },
    {
      id: 'm-a2-b5',
      aula: 'A2',
      pagina: 'tb-miliar-bcg-sintese',
      ordem: 14,
      titulo: 'Isolamento por aerossol',
      texto:
        'Com diagnóstico confirmado de TB pulmonar pós-primária cavitária bacilífera, Mariana é colocada em <strong>precaução por aerossol</strong>: quarto privativo + <strong>N95 / "máscara bico de pato"</strong> (a mesma máscara que a amiga puxou da bolsa Louis Vuitton, agora em uso clínico estruturado) pra equipe e visitas. A precaução é mantida até completar 15 dias de RIPE com melhora clínica OU até 3 baciloscopias seriadas negativas — assunto que a próxima aula aborda em detalhe.',
      ancoragens: ['precaução por aerossol', 'isolamento', 'N95', 'máscara bico de pato'],
    },
    {
      id: 'm-a2-b6',
      aula: 'A2',
      pagina: 'tb-miliar-bcg-sintese',
      ordem: 15,
      titulo: 'Transição pra próximo módulo',
      texto:
        'Diagnóstico confirmado. Cultura segue em andamento pra antibiograma completo, mas o tratamento pode começar — não há rifampicina-resistência sinalizada. Mariana recebe <strong>alta hospitalar com encaminhamento pra Unidade Básica de Saúde</strong> pra início do <strong>RIPE</strong> (rifampicina + isoniazida + pirazinamida + etambutol) — o que estrutura o próximo módulo da plataforma.',
      ancoragens: ['transição A3', 'RIPE', 'alta hospitalar'],
    },
    // === BEATS A3 — TRATAMENTO ===
    {
      id: 'm-a3-b1',
      aula: 'A3',
      pagina: 'mariana-inicia-ripe',
      ordem: 16,
      titulo: 'Início do RIPE na UBS',
      texto:
        'Após alta hospitalar com diagnóstico confirmado, Mariana é encaminhada à <strong>Unidade Básica de Saúde</strong> da sua região pra início do tratamento. Recebe o esquema padrão: <strong>RIPE</strong> em comprimido de dose fixa combinada (4DFC). Como adulta sem gestação, sem diabetes, sem HIV — <strong>não precisa de piridoxina profilática</strong>. Pesando ~55 kg (faixa 51-70 kg), toma <strong>4 cps/dia em jejum</strong> (1h antes ou 2h depois da primeira refeição) pra otimizar a absorção da rifampicina.',
      ancoragens: ['RIPE', 'início tratamento', 'dose fixa combinada', '4DFC', 'sem piridoxina'],
    },
    {
      id: 'm-a3-b2',
      aula: 'A3',
      pagina: 'mariana-inicia-ripe',
      ordem: 17,
      titulo: 'Fase intensiva — 2 meses com os 4 fármacos',
      texto:
        'Mariana entra nas <strong>primeiras 8 semanas</strong> tomando os 4 fármacos diariamente. É a fase em que a carga bacilar despenca rapidamente — depois de 15 dias com melhora clínica, a precaução por aerossol foi suspensa (assunto da próxima aula). A adesão é monitorada na UBS; doses observadas quando possível. Ela retoma plantões com prudência redobrada, agora ela mesma usando N95 quando atende paciente com tosse crônica.',
      ancoragens: ['fase intensiva', '8 semanas', 'adesão', 'queda da bacilemia'],
    },
    {
      id: 'm-a3-b3',
      aula: 'A3',
      pagina: 'mariana-inicia-ripe',
      ordem: 18,
      titulo: 'A urina ficou cor de laranja',
      quote: '"Doutora, minha urina ficou laranja. Posso parar o remédio?"',
      texto:
        'Mariana liga assustada após 3 dias. A médica explica: <strong>coloração alaranjada da urina (e do suor, lágrimas e até lentes de contato) por rifampicina é esperada, inofensiva, e some quando o esquema termina</strong>. <em>Não suspender</em> — o aviso prévio teria evitado o susto.',
      nota: 'Aviso obrigatório no momento da prescrição: rifampicina cora urina, suor, lágrimas e até lentes de contato (que podem ficar manchadas permanentemente). Inofensivo, mas precisa ser dito antes do paciente sair da consulta.',
      ancoragens: ['rifampicina', 'coloração alaranjada', 'orientação ao paciente'],
    },
    {
      id: 'm-a3-b4',
      aula: 'A3',
      pagina: 'monitoramento-pcr-vs-baciloscopia',
      ordem: 19,
      titulo: 'Baciloscopia mensal — negativando',
      texto:
        'Final do <strong>1º mês</strong>: baciloscopia diminui (de +++ pra +). Final do <strong>2º mês</strong>: baciloscopia <strong>negativa</strong>. A fase intensiva está cumprida com sucesso. Mariana entra na fase de manutenção (apenas rifampicina + isoniazida por mais 4 meses). <strong>PCR não é repetida</strong> — permaneceria positiva com bacilo morto e enganaria o seguimento.',
      ancoragens: ['baciloscopia mensal', 'negativação', 'fase manutenção', 'PCR não para acompanhamento'],
    },
    {
      id: 'm-a3-b5',
      aula: 'A3',
      pagina: 'mariana-alta-transicao-a4',
      ordem: 20,
      titulo: 'Alta clínica por cura',
      texto:
        'Sexto mês completado. Baciloscopia ao final do tratamento: <strong>negativa</strong>. Nenhum dos 3 critérios de falência preenchido. Mariana recebe <strong>alta por cura</strong>. Ganhou peso, está bem disposta, voltou plenamente aos plantões. O caso vira história — agora a atenção da Vigilância vai pra <strong>quem conviveu com ela no período bacilífero</strong>.',
      ancoragens: ['alta por cura', 'sem critérios de falência', 'transição A4', 'contactantes'],
    },
    {
      id: 'm-a3-b6',
      aula: 'A3',
      pagina: 'mariana-alta-transicao-a4',
      ordem: 21,
      titulo: 'A pergunta que vem em seguida',
      texto:
        'Mariana é <strong>caso-fonte</strong>: durante as semanas em que esteve bacilífera (antes do diagnóstico), conviveu com colegas de plantão, familiares e uma colega específica que vai aparecer no próximo módulo — <strong>Lucita</strong>, técnica de enfermagem que foi sua parceira de setor em vários plantões pré-diagnóstico. Contactante assintomática, vai precisar de avaliação com PPD/IGRA pra definir se é portadora de TB latente e se deve receber quimioprofilaxia. Essa é a aula que vem.',
      ancoragens: ['caso-fonte', 'Lucita', 'transição A4', 'contactante'],
    },
    // Beats da aula A4 acrescentados pelo executor A4
  ],
  perguntas: [
    {
      id: 'p-a1-q1',
      aula: 'A1',
      pagina: 'caso-mariana-parte1',
      enunciado:
        'Como é classificada a tosse de Mariana quanto à duração, e quais são as principais hipóteses diagnósticas a serem lembradas?',
      resposta:
        '<p>Quanto à duração: <strong>tosse crônica</strong> (> 8 semanas — "mais de 2 meses").</p><p>Três principais hipóteses (universo canônico): <strong>UACS</strong> (síndrome da tosse das vias aéreas superiores), <strong>asma</strong> e <strong>DRGE</strong> (refluxo gastroesofágico).</p><p><em>Nota:</em> a perda de peso já é um sinal de alarme que torna obrigatória a investigação de causas consumptivas — entre elas, no Brasil, tuberculose.</p>',
    },
    {
      id: 'p-a1-q2',
      aula: 'A1',
      pagina: 'caso-mariana-parte2',
      enunciado:
        'Qual é a hipótese que deve ser obrigatoriamente descartada nesse momento, e quais são as formas clínicas dessa doença?',
      resposta:
        '<p>Hipótese a descartar obrigatoriamente: <strong>Tuberculose</strong>.</p><p>Formas clínicas: pulmonares (primária e pós-primária) e extrapulmonares (pleural, meníngea, ganglionar, osteoarticular, entre outras) — desenvolvidas em detalhe no próximo módulo desta plataforma (Dinâmica e Diagnóstico da TB).</p>',
    },
    {
      id: 'p-a2-q1',
      aula: 'A2',
      pagina: 'metodos-pcr-genexpert',
      enunciado:
        'Por que o teste molecular rápido (Xpert MTB/RIF Ultra) é preferido como exame inicial em vez da baciloscopia tradicional, especialmente em paciente bacilífero como Mariana?',
      resposta:
        '<p>Três razões principais:</p><ol><li><strong>Velocidade</strong>: resultado em ~2 horas (vs 14-60 dias da cultura, e horas-dias da baciloscopia técnico-dependente);</li><li><strong>Sensibilidade superior</strong>: detecta cargas bacilares menores que a baciloscopia (~88-98% em escarro positivo, ~77% em paucibacilar; vs ~50-60% da BAR);</li><li><strong>Detecção de resistência à rifampicina</strong> simultânea — informação crítica que muda imediatamente a decisão terapêutica.</li></ol><p>A cultura segue obrigatória <strong>em paralelo</strong> pra antibiograma completo, mas o início do RIPE não precisa esperar.</p>',
    },
    // === PERGUNTAS A3 ===
    {
      id: 'p-a3-q1',
      aula: 'A3',
      pagina: 'mariana-inicia-ripe',
      enunciado:
        'Mariana liga assustada porque a urina ficou laranja. Qual é a conduta correta e por que não suspender o RIPE?',
      resposta:
        '<p>Conduta: <strong>tranquilizar e manter o esquema</strong>. A coloração alaranjada da urina, suor, lágrima e secreções pela rifampicina é um efeito esperado, inofensivo, e desaparece quando o tratamento termina.</p><p>Por que não suspender:</p><ul><li>É um efeito <strong>cosmético</strong>, não um marcador de toxicidade;</li><li>Suspender o RIPE por isso aumentaria o risco de <strong>seleção de resistência</strong> (bacilo "esmagado" parcialmente pode rebrotar resistente);</li><li>Adesão errática à fase intensiva é o <strong>maior fator de falência terapêutica</strong>.</li></ul><p><strong>Regra de ouro pro prescritor</strong>: avisar ANTES do paciente sair da consulta de prescrição. Aviso simples evita susto e evita suspensão desnecessária.</p>',
    },
    {
      id: 'p-a3-q2',
      aula: 'A3',
      pagina: 'monitoramento-pcr-vs-baciloscopia',
      enunciado:
        'Por que NÃO se repete o teste molecular rápido (PCR / Xpert) pra acompanhar a evolução do tratamento, mesmo tendo sido o exame que confirmou o diagnóstico?',
      resposta:
        '<p>Porque o PCR <strong>detecta sequência genética do bacilo — vivo ou morto</strong>. Após semanas de RIPE, a maior parte dos bacilos está morta, mas o DNA ainda é detectável por dias-semanas. O PCR continuaria <strong>positivo</strong>, criando a falsa impressão de persistência infecciosa.</p><p>A <strong>baciloscopia</strong> (microscopia com coloração Ziehl-Neelsen / fluorescência) detecta o <strong>bacilo inteiro</strong> — proxy razoável de bacilo viável. Quando a baciloscopia negativa, é razoável presumir que a carga viável caiu.</p><p>Por isso a regra é:</p><ul><li><strong>PCR para diagnóstico</strong> (sensibilidade alta + detecção de resistência à rifampicina em horas);</li><li><strong>Baciloscopia para acompanhamento</strong> (mensal ideal, bimestral mínimo).</li></ul>',
    },
  ],
};

export function beatsByPagina(slug) {
  return mariana.beats.filter(b => b.pagina === slug);
}

export function perguntasByPagina(slug) {
  return mariana.perguntas.filter(p => p.pagina === slug);
}

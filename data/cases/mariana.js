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
    // Beats das aulas A2/A3/A4 acrescentados pelos executors respectivos
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
  ],
};

export function beatsByPagina(slug) {
  return mariana.beats.filter(b => b.pagina === slug);
}

export function perguntasByPagina(slug) {
  return mariana.perguntas.filter(p => p.pagina === slug);
}

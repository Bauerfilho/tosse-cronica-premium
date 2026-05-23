/* lucita.js — dados do caso clínico evolutivo da Lucita (A4) */

export const lucita = {
  id: 'lucita',
  nome: 'Lucita',
  idade: 32,
  profissao: 'Técnica de enfermagem',
  contexto:
    'Colega de plantão de Mariana no setor de emergência durante o período pré-diagnóstico (~3 meses de exposição ocupacional próxima)',
  avatarSlug: 'lucita',
  beats: [
    {
      id: 'l-a4-b1',
      aula: 'A4',
      pagina: 'lucita-chega-ubs',
      ordem: 1,
      titulo: 'Chegada na UBS',
      texto:
        'Lucita, 32 anos, técnica de enfermagem, chega na UBS preocupada. Soube que <strong>Mariana</strong> — sua colega de plantão no setor de emergência durante os últimos 3 meses — recebeu diagnóstico de <strong>tuberculose pulmonar pós-primária bacilífera</strong>. Lucita teve <strong>contato ocupacional próximo</strong> com Mariana em vários plantões antes do isolamento ser instituído. Está <strong>assintomática</strong> mas amedrontada.',
      ancoragens: ['contactante ocupacional', 'caso-fonte Mariana', 'assintomática'],
    },
    {
      id: 'l-a4-b2',
      aula: 'A4',
      pagina: 'triagem-sintomatico-assintomatico',
      ordem: 2,
      titulo: 'Triagem inicial',
      texto:
        'Anamnese: Lucita <strong>nega tosse de qualquer duração, nega febre, nega perda de peso, nega hemoptise</strong>. Classificação: <strong>contactante assintomática</strong> — segue pelo ramo da investigação de TB latente (PPD/IGRA), não pelo ramo da TB ativa.',
      ancoragens: ['triagem', 'assintomática', 'ramo latente'],
    },
    {
      id: 'l-a4-b3',
      aula: 'A4',
      pagina: 'ppd-igra-janela-imunologica',
      ordem: 3,
      titulo: 'Aplicação do PPD',
      texto:
        'PPD aplicado intradermicamente no antebraço esquerdo. Lucita é orientada a retornar em <strong>48 a 72 horas</strong> pra leitura. A médica explica a <strong>janela imunológica</strong>: se o resultado vier negativo agora, vai precisar repetir em 8 semanas — porque a imunidade pode demorar até 8 semanas pra reagir após exposição.',
      nota:
        'IGRA seria alternativa (resultado único, sem retorno), mas a UBS não tem disponibilidade rotineira. PPD funciona bem; só precisa do retorno.',
      ancoragens: ['PPD aplicação', 'leitura 48-72h', 'janela imunológica'],
    },
    {
      id: 'l-a4-b4',
      aula: 'A4',
      pagina: 'lucita-resultado-decisao',
      ordem: 4,
      titulo: 'Resultado: PPD reator',
      texto:
        'Leitura em 72h: <strong>induração de 12 mm</strong>. Acima do corte de <strong>≥ 5 mm para contactante</strong> — <strong>PPD reator</strong>. Conclusão: <strong>infecção latente por M. tuberculosis</strong> confirmada. Próximo passo: avaliar se Lucita entra como candidata a tratamento.',
      ancoragens: ['PPD reator', '12 mm', 'infecção latente confirmada'],
    },
    {
      id: 'l-a4-b5',
      aula: 'A4',
      pagina: 'lucita-resultado-decisao',
      ordem: 5,
      titulo: 'Critério de "alto risco" — contactante recente',
      texto:
        'Lucita é candidata a tratamento da TB latente por <strong>contato recente com bacilífero documentado</strong> (Mariana, caso-fonte). Esse é o critério canônico de "alto risco" que se aplica aqui — não a profissão em si, mas o <strong>contato ocupacional recente</strong> com caso bacilífero confirmado. <strong>Risco de adoecer maior nos primeiros 2 anos pós-contato</strong> — tratar agora previne progressão.',
      nota:
        'Profissional de saúde NÃO está na lista canônica de "alto risco" pelo simples fato de exercer a profissão (vigilância ocupacional é separada). O gatilho aqui é a viragem tuberculínica documentada em contactante de caso-fonte.',
      ancoragens: ['alto risco', 'contactante recente', '2 anos pós-contato'],
    },
    {
      id: 'l-a4-b6',
      aula: 'A4',
      pagina: 'lucita-3hp-inicia',
      ordem: 6,
      titulo: 'Início do 3HP',
      texto:
        'Lucita inicia o esquema preferido: <strong>3HP — rifapentina + isoniazida semanal por 3 meses</strong> (12 doses totais). Cada dose tomada em jejum, preferencialmente na UBS com observação (TDO opcional pra reforçar adesão em contactante de alto risco). Lucita é orientada sobre <strong>coloração alaranjada da urina pela rifapentina</strong> (mesmo aviso que Mariana recebeu sobre rifampicina) e sobre os sinais de hepatotoxicidade. Próximos 3 meses são de seguimento.',
      ancoragens: ['3HP', '12 doses semanais', 'TDO opcional', 'orientação'],
    },
  ],
  perguntas: [
    {
      id: 'p-l-a4-q1',
      aula: 'A4',
      pagina: 'lucita-resultado-decisao',
      enunciado:
        'Lucita teve PPD com induração de 12 mm. Ela é candidata a tratamento de TB latente? Por quê?',
      resposta:
        '<p>Sim, Lucita é candidata a tratamento.</p><p>Justificativa em 3 camadas:</p><ol><li><strong>PPD reator</strong>: induração 12 mm > corte de 5 mm para contactante adulto → infecção latente confirmada;</li><li><strong>Alto risco de progressão</strong>: contato recente com bacilífero documentado (Mariana, caso-fonte) é critério canônico de "alto risco";</li><li><strong>Janela crítica</strong>: risco máximo de adoecer está nos primeiros 2 anos pós-contato — intervenção precoce previne progressão.</li></ol><p>Não é a profissão de Lucita (técnica de enfermagem) que define "alto risco" — é o contato documentado com caso-fonte recente.</p>',
    },
    {
      id: 'p-l-a4-q2',
      aula: 'A4',
      pagina: 'lucita-3hp-inicia',
      enunciado:
        'Por que o esquema 3HP (rifapentina + isoniazida semanal por 3 meses) é o preferido em vez de isoniazida diária por 9 meses?',
      resposta:
        '<p>Por <strong>adesão</strong>. Os dois esquemas têm eficácia semelhante em ensaios clínicos, mas a operacionalidade é radicalmente diferente:</p><ul><li><strong>3HP</strong>: <strong>12 doses semanais</strong> em 3 meses — supervisionável, adesão alta, esquema curto, paciente vê o fim;</li><li><strong>Isoniazida 9 meses</strong>: <strong>270 doses diárias</strong> — atrito alto, adesão tende a despencar nos últimos meses, abandono frequente.</li></ul><p>Adesão é o <strong>fator clínico determinante</strong> do sucesso do tratamento de ILTB. Esquema com adesão de 90% e eficácia 85% bate esquema com eficácia 90% e adesão 50%.</p><p>3HP só é contraindicado em alguns cenários específicos (interações com TARV em HIV+ com inibidores de protease, intolerância prévia a rifamicinas, gestação no 1º trimestre — verificar caso a caso).</p>',
    },
  ],
};

export function beatsLucitaByPagina(slug) {
  return lucita.beats.filter(b => b.pagina === slug);
}

export function perguntasLucitaByPagina(slug) {
  return lucita.perguntas.filter(p => p.pagina === slug);
}

// BANCO DE DADOS DE E-BOOKS
const EBOOKS_DATA = [
    { 
        id: 1, 
        titulo: "JavaScript Sem Trauma", 
        categoria: "Tecnologia", 
        preco: "R$ 20,00", 
        capa: "assets/img/JavaScript_Sem_Trauma_Cover.png", 
        rotation: -3, 
        link: "https://seulink.com",
        descricao: `JavaScript Sem Trauma é um e-book feito para quem já tentou aprender JavaScript, mas se sentiu perdido, inseguro ou travou no meio do caminho.

Aqui você aprende o essencial do JavaScript com exemplos simples, explicações claras e projetos reais — sem linguagem acadêmica e sem promessas milagrosas.

O objetivo não é te transformar em "gênio da programação", mas te ajudar a entender JavaScript de verdade e dar seus primeiros passos como desenvolvedor front-end.`,
        preview: `<strong>Você Não Está Sozinho Nessa</strong> <br><br> 
        Se você está aqui, provavelmente já... Respira fundo: isso é normal. <br><br> 
        → Tentou aprender JavaScript e travou <br><br> 
        → Se sentiu "burro" vendo outros entenderem rápido <br><br> 
        → Abandonou cursos no meio por frustração <br><br> 
        → Se perguntou se programação é realmente pra você <br><br> 
        JavaScript assusta muita gente no começo. Não porque seja impossível, mas porque a maioria dos cursos foca na teoria chata antes da prática real.`
    },
    { 
        id: 2, 
        titulo: "Manual do Rebelde", 
        categoria: "Estratégia", 
        preco: "R$ 29,90", 
        capa: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000", 
        rotation: 2, 
        link: "https://seulink.com",
        descricao: "Como hackear sua carreira e não depender de caminhos tradicionais. Um guia para quem quer liberdade.",
        preview: "Capítulo 1: O Grande Erro. <br><br> Nos ensinaram que o diploma era o fim, mas ele era apenas a primeira amarra..."
    }
];

// BANCO DE DADOS DO DIÁRIO (BLOG)
const POSTS_DATA = [
    {
        id: 1,
        data: "05 Fev, 2026",
        titulo: "Do TCC GoLand ao Growth Design",
        resumo: "Como a experiência de criar uma plataforma de landing pages moldou meu critério visual.",
        conteudo: "Escrever 90% do código do GoLand me ensinou que design sem técnica é apenas desenho, e técnica sem design é apenas ferramenta. Integrar Django com um senso estético apurado me deu a base para o que hoje aplico em Growth...",
        rotation: 1
    }
];

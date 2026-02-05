// BANCO DE DADOS DE E-BOOKS
const EBOOKS_DATA = [
    { 
        id: 1, 
        titulo: "Front-End Pro 2026", 
        categoria: "Tecnologia", 
        preco: "R$ 47,90", 
        capa: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000", 
        rotation: -3, 
        link: "https://seulink.com",
        descricao: "O mapa completo para quem quer dominar Next.js e IA em 2026. Saia do básico e aprenda a construir produtos reais.",
        preview: "Capítulo 1: O Código Vivo. <br><br> Em 2026, programar não é mais sobre sintaxe, é sobre diálogo com a máquina..."
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
        conteudo: "Escrever 90% do código do GoLand me ensinou que design sem técnica é apenas desenho, e técnica sem design é apenas ferramenta...",
        rotation: 1
    }
];

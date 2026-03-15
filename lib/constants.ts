export const BRAND = {
  name: 'Mazanga Marketing',
  tagline: 'Crescemos quando o cliente cresce',
  whatsapp: '+244942277576',
  email: 'vendas@mazanga.digital',
  website: 'www.mazanga.digital',
  nif: '5002824086',
}

export const getWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/244942277576?text=${encoded}`
}

export const WHATSAPP_MESSAGES = {
  header: 'Olá Mazanga! Vi a proposta de pacotes 2025 e gostaria de agendar uma reunião estratégica para discutir como podem ajudar o meu negócio.',
  hero: 'Olá! Gostaria de agendar uma reunião gratuita para discutir como a Mazanga Marketing pode ajudar o meu negócio a crescer.',
  floating: 'Olá Mazanga! Gostaria de saber mais sobre os vossos serviços.',
  fundacao: 'Olá! Vi a proposta e tenho interesse no Pacote Fundação Digital Express (2.500.000 Kz). Gostaria de agendar reunião.',
  essential: 'Olá! Vi a proposta e tenho interesse no Pacote Essential (8.787.000 Kz / 3 meses). Gostaria de agendar reunião.',
  growth: 'Olá! Vi a proposta e tenho interesse no Pacote Growth Premium (29.700.000 Kz / 6 meses). Gostaria de agendar reunião.',
}

type Package = {
  id: string
  title: string
  price: string
  period: string
  badge: string | null
  featured: boolean
  items: Array<{ category: string; benefits: string[] }>
  bonuses: string[] | null
  breakdown: Record<string, string> | null
  ctaText: string
  whatsappMessage: string
}

export const PACKAGES: Package[] = [
  {
    id: 'fundacao',
    title: 'Fundação Digital Express',
    price: '2.500.000',
    period: 'Pagamento único • 20 dias',
    badge: null,
    featured: false,
    items: [
      {
        category: 'Infraestrutura Digital',
        benefits: [
          'Website responsivo 5 páginas',
          'Domínio próprio + hospedagem 1 ano',
          'Email empresarial',
          'Certificado SSL (HTTPS)',
        ],
      },
      {
        category: 'Presença Google',
        benefits: [
          'Google Meu Negócio completo',
          'Mapa 3D otimizado',
          '50 fotos de alta qualidade',
          'Integração com Google Calendar',
        ],
      },
      {
        category: 'Materiais Criativos',
        benefits: [
          'Logo design profissional',
          'Identidade visual básica',
          '30 posts redes sociais',
          '2 banners web otimizados',
        ],
      },
      {
        category: 'Campanha Meta Ads',
        benefits: [
          'Setup Facebook + Instagram',
          'Audiência segmentada',
          '3 variações criativas',
          'Tracking & pixel setup',
          '500.000 Kz budget INCLUÍDO',
        ],
      },
    ],
    bonuses: null,
    breakdown: null,
    ctaText: 'Começar Agora',
    whatsappMessage: WHATSAPP_MESSAGES.fundacao,
  },
  {
    id: 'essential',
    title: 'Essential',
    price: '8.787.000',
    period: '3 meses',
    badge: 'MAIS POPULAR',
    featured: true,
    items: [
      {
        category: 'Tráfego Pago',
        benefits: ['Google Ads', 'Facebook/Instagram', 'LinkedIn', 'A/B testing contínuo'],
      },
      {
        category: 'Conteúdo',
        benefits: ['40 posts sociais', '4 vídeos curtos', '4 blog posts', 'Email 2x semana'],
      },
      {
        category: 'Analytics',
        benefits: ['Google Analytics 4', 'Meta Pixel', 'Dashboard automático', 'Relatório mensal'],
      },
    ],
    bonuses: [
      'Setup tracking avançado (400k Kz)',
      'Google Meu Negócio otimizado (200k Kz)',
      '3 criativos bónus (300k Kz)',
      'Auditoria digital (350k Kz)',
    ],
    breakdown: {
      'Gestão campanhas': '3.600.000 Kz (1.2M/mês)',
      'Produção conteúdo': '2.400.000 Kz (800k/mês)',
      'Analytics & tracking': '1.200.000 Kz (400k/mês)',
      'Gestão CRM & leads': '900.000 Kz (300k/mês)',
    },
    ctaText: 'Começar Agora',
    whatsappMessage: WHATSAPP_MESSAGES.essential,
  },
  {
    id: 'growth',
    title: 'Growth Premium',
    price: '29.700.000',
    period: '6 meses',
    badge: 'PREMIUM',
    featured: false,
    items: [
      {
        category: 'Multi-Canal',
        benefits: ['Google', 'Meta', 'LinkedIn', 'TikTok', 'YouTube'],
      },
      {
        category: 'Conteúdo Premium',
        benefits: ['80 posts', '12 vídeos', '12 blog posts', 'Podcast 4 episódios'],
      },
      {
        category: 'CRM',
        benefits: ['HubSpot Professional', '15+ automações', 'Dashboards customizados'],
      },
    ],
    bonuses: [
      'Website profissional (3.5M Kz)',
      'Fotografia profissional (650k Kz)',
      'Vídeo institucional (800k Kz)',
      'Setup CRM avançado (1.2M Kz)',
      'Automações WhatsApp (700k Kz)',
      'Workshop estratégico (600k Kz)',
      'Landing pages adicionais (1M Kz)',
    ],
    breakdown: {
      'Gestão multi-canal': '12.000.000 Kz (2M/mês)',
      'Conteúdo premium': '7.200.000 Kz (1.2M/mês)',
      'CRM & automações': '3.600.000 Kz (600k/mês)',
    },
    ctaText: 'Começar Agora',
    whatsappMessage: WHATSAPP_MESSAGES.growth,
  },
]

export const INTRO_TEXT = [
  'Na Mazanga Marketing, crescimento digital não é sobre posts bonitos. É sobre sistemas integrados que geram resultados mensuráveis.',
  'Cada pacote para empresas B2B em Angola e Suíça. Não fragmentamos — gestão, criação, análise, tudo integrado.',
  'Quando você cresce, crescemos. ROI real, dados reais, decisões baseadas em números.',
]

export const APPROACH_CARDS = [
  { title: 'Estruturados', description: 'Sistemas integrados. Ads, conteúdo, análise funcionam juntos.', icon: 'Layout' },
  { title: 'Mensuráveis', description: 'ROI comprovado. Cada Kz rastreado. Relatórios reais.', icon: 'TrendingUp' },
  { title: 'Escaláveis', description: 'Do setup ao domínio. Crescimento sustentável.', icon: 'Zap' },
]

export const STEPS = [
  { title: 'Agende Reunião', description: '45-60 min entendendo objetivos e mercado.', icon: 'Calendar' },
  { title: 'Receba Proposta', description: 'Documento detalhado com estratégia e breakdown.', icon: 'FileText' },
  { title: 'Lançamento', description: 'Setup, campanhas ativas em dias.', icon: 'Rocket' },
]

export const CLIENT_LOGOS = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
  'design-1.png', 'design-2.png', 'design-3.png', 'design-4.png', 'design-5.png', 'design-6.png',
]

export const COMPARISON_TABLE = [
  { category: 'Website Responsivo', fundacao: '✓', essential: '✓', growth: '✓' },
  { category: 'Google Meu Negócio', fundacao: '✓', essential: '✓', growth: '✓' },
  { category: 'Google Ads', fundacao: '-', essential: '✓', growth: '✓' },
  { category: 'Facebook/Instagram Ads', fundacao: '✓', essential: '✓', growth: '✓' },
  { category: 'LinkedIn Ads', fundacao: '-', essential: '✓', growth: '✓' },
  { category: 'TikTok/YouTube Ads', fundacao: '-', essential: '-', growth: '✓' },
  { category: 'Gestão de Conteúdo', fundacao: '30 posts', essential: '40 posts', growth: '80 posts' },
  { category: 'Vídeos Profissionais', fundacao: '-', essential: '4 vídeos', growth: '12 vídeos' },
  { category: 'Email Marketing', fundacao: '-', essential: '2x/semana', growth: '3x/semana' },
  { category: 'CRM Setup', fundacao: '-', essential: '-', growth: 'HubSpot Pro' },
  { category: 'Analytics Dashboard', fundacao: '-', essential: '✓', growth: '✓' },
  { category: 'Relatórios Mensais', fundacao: '-', essential: '✓', growth: '✓' },
  { category: 'Suporte Dedicado', fundacao: 'Email', essential: 'Telefone', growth: '24/7' },
  { category: 'Ideal para', fundacao: 'Startup/PME', essential: 'Crescimento Rápido', growth: 'Domínio Mercado' },
]

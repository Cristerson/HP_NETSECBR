# Guia de Publicação e Deployment - NetSecBR

## Visão Geral

Este projeto foi desenvolvido com HTML5, CSS3 e JavaScript puro, garantindo máxima compatibilidade e leveza. O website pode ser publicado em qualquer plataforma de hospedagem com suporte a arquivos estáticos.

## Estrutura do Projeto

```
netsecbr/
├── website/              # Arquivos HTML do site
├── assets/              # CSS, JavaScript, imagens e logos
├── presentation/        # Apresentação institucional (PPTX)
├── docs/                # Documentação (Branding, SEO, Conteúdo)
├── README.md            # Informações gerais do projeto
└── DEPLOYMENT.md        # Este arquivo
```

## Opções de Publicação

### 1. GitHub Pages (Recomendado para Repositórios Públicos)

**Vantagens:** Gratuito, fácil de configurar, integrado com Git.

**Passo a passo:**

1. Crie um repositório no GitHub com o nome `netsecbr` (ou similar)
2. Faça push do repositório local:
   ```bash
   git remote add origin https://github.com/seu-usuario/netsecbr.git
   git branch -M main
   git push -u origin main
   ```

3. Acesse as configurações do repositório no GitHub
4. Vá para **Settings > Pages**
5. Em **Source**, selecione **Deploy from a branch**
6. Escolha a branch `main` e a pasta `website/`
7. Clique em **Save**

O site estará disponível em: `https://seu-usuario.github.io/netsecbr/`

**Nota:** Se usar a pasta raiz em vez de `website/`, ajuste os caminhos dos assets no HTML (remova `../`).

### 2. Netlify (Recomendado para Projetos Profissionais)

**Vantagens:** Deploy automático, SSL gratuito, domínio customizado fácil.

**Passo a passo:**

1. Acesse [netlify.com](https://netlify.com) e faça login
2. Clique em **New site from Git**
3. Conecte seu repositório GitHub
4. Configure:
   - **Build command:** (deixe vazio, não há build necessário)
   - **Publish directory:** `website/`
5. Clique em **Deploy site**

O site estará disponível em um domínio Netlify. Para usar um domínio customizado, configure as configurações de DNS.

### 3. Cloudflare Pages

**Vantagens:** Performance global, CDN rápido, SSL gratuito.

**Passo a passo:**

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Clique em **Create a project**
3. Conecte seu repositório GitHub
4. Configure:
   - **Build command:** (deixe vazio)
   - **Build output directory:** `website/`
5. Clique em **Save and Deploy**

### 4. Vercel

**Vantagens:** Otimizado para performance, deploy automático, suporte a domínios customizados.

**Passo a passo:**

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **New Project**
3. Importe seu repositório GitHub
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `website/`
5. Clique em **Deploy**

### 5. Hospedagem Compartilhada Tradicional

**Vantagens:** Controle total, suporte a domínios próprios, email corporativo.

**Passo a passo:**

1. Acesse o painel de controle da sua hospedagem (cPanel, Plesk, etc.)
2. Crie uma pasta pública (geralmente `public_html/`)
3. Faça upload dos arquivos da pasta `website/` para a raiz pública
4. Certifique-se de que os caminhos dos assets estejam corretos:
   - Se os arquivos estão em `public_html/`, os caminhos devem ser relativos: `assets/css/style.css`
   - Se criou uma subpasta (ex: `public_html/netsecbr/`), ajuste os caminhos conforme necessário

5. Aponte seu domínio para a hospedagem (configuração de DNS)

## Configuração de Domínio Customizado

### Para GitHub Pages

1. No repositório, vá para **Settings > Pages**
2. Em **Custom domain**, insira seu domínio (ex: `netsecbr.com.br`)
3. Configure os registros DNS do seu domínio:
   - **Tipo A:** Aponte para `185.199.108.153`
   - **Tipo CNAME:** (se preferir) Aponte para `seu-usuario.github.io`

### Para Netlify

1. No painel do Netlify, vá para **Domain settings**
2. Clique em **Add custom domain**
3. Insira seu domínio
4. Siga as instruções para configurar os registros DNS

### Para Cloudflare Pages

1. Adicione seu domínio ao Cloudflare
2. No projeto Pages, vá para **Custom domains**
3. Clique em **Set up a custom domain**
4. Siga as instruções

## Otimização para SEO

O website foi desenvolvido com as seguintes práticas de SEO:

- **Meta tags:** Cada página possui `title`, `description` e `keywords` otimizados
- **Heading structure:** Uso semântico de H1, H2, H3
- **URLs amigáveis:** Nomes descritivos (ex: `/servicos.html`, `/solucoes.html`)
- **Schema.org:** Marcação estruturada na página inicial
- **Performance:** HTML/CSS/JS puro garante carregamento rápido
- **Responsividade:** Design mobile-first

### Próximos Passos para SEO

1. **Google Search Console:** Registre o site em [search.google.com/search-console](https://search.google.com/search-console)
2. **Google Analytics:** Configure rastreamento em [analytics.google.com](https://analytics.google.com)
3. **Sitemap:** Crie um arquivo `sitemap.xml` listando todas as páginas
4. **Robots.txt:** Crie um arquivo `robots.txt` na raiz pública

## Manutenção e Atualizações

### Fazer Alterações no Site

1. Edite os arquivos HTML, CSS ou JavaScript localmente
2. Teste as alterações em um navegador
3. Faça commit das mudanças:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   ```
4. Faça push para o repositório:
   ```bash
   git push origin main
   ```
5. O site será atualizado automaticamente (dependendo da plataforma de publicação)

### Adicionar Novas Páginas

1. Crie um novo arquivo HTML na pasta `website/`
2. Use o template padrão (copie de uma página existente)
3. Atualize os links de navegação em todas as páginas
4. Faça commit e push

## Checklist de Publicação

- [ ] Domínio registrado e apontado para a hospedagem
- [ ] SSL/HTTPS configurado
- [ ] Todos os links internos funcionando
- [ ] Imagens carregando corretamente
- [ ] Formulário de contato testado
- [ ] Site responsivo em mobile, tablet e desktop
- [ ] Google Search Console configurado
- [ ] Google Analytics ativo
- [ ] Sitemap.xml criado e submetido
- [ ] Robots.txt configurado
- [ ] Backup do repositório realizado

## Suporte e Troubleshooting

### Problema: Assets não carregam

**Solução:** Verifique se os caminhos relativos estão corretos. Se o site está em uma subpasta, ajuste os caminhos no HTML.

### Problema: Formulário não funciona

**Solução:** O formulário atual é apenas um placeholder. Para funcionalidade real, configure um serviço como Formspree, Netlify Forms ou seu próprio backend.

### Problema: Site lento

**Solução:** Comprima as imagens, minifique CSS e JavaScript, ou considere usar um CDN.

## Contato

Para dúvidas sobre deployment ou manutenção, consulte a documentação de cada plataforma ou entre em contato com o time de desenvolvimento.

---

**Última atualização:** 2026

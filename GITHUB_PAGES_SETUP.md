# Guia Completo: Publicar Website no GitHub Pages

## Status Atual ✅

Seu repositório `HP_NETSECBR` já está configurado com:
- ✅ Website completo em HTML/CSS/JS
- ✅ GitHub Actions workflow para deploy automático
- ✅ Conteúdo atualizado com informações do seu site atual

## Passo 1: Ativar GitHub Pages no Repositório

1. Acesse seu repositório: https://github.com/Cristerson/HP_NETSECBR
2. Clique em **Settings** (Configurações)
3. No menu esquerdo, clique em **Pages**
4. Em **Build and deployment**, você verá:
   - **Source:** Deve estar em "Deploy from a branch"
   - **Branch:** Selecione `main` e pasta `/ (root)`
5. Clique em **Save**

## Passo 2: Aguardar o Deploy

Após ativar GitHub Pages:

1. Vá para a aba **Actions** do seu repositório
2. Você verá um workflow chamado "Deploy to GitHub Pages" em execução
3. Aguarde até que fique com status ✅ (verde)
4. Isso leva geralmente 2-5 minutos

## Passo 3: Acessar seu Site

Após o deploy bem-sucedido, seu site estará disponível em:

```
https://cristerson.github.io/HP_NETSECBR/
```

**Nota:** Pode levar alguns minutos para o site ficar acessível. Se receber erro 404, aguarde 5-10 minutos e tente novamente.

## Passo 4: Usar Domínio Customizado (Opcional)

Se quiser usar seu domínio `netsecbr.com.br` em vez da URL do GitHub:

### 4.1 Configurar DNS

Acesse o painel de controle do seu registrador de domínio e adicione um registro:

**Opção A - Usar CNAME (Recomendado):**
- Tipo: CNAME
- Nome: `www` (ou deixe em branco para raiz)
- Valor: `cristerson.github.io`

**Opção B - Usar A Records:**
- Tipo: A
- Nome: `@` (raiz do domínio)
- Valores:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### 4.2 Configurar no GitHub

1. Volte para **Settings > Pages** do seu repositório
2. Em **Custom domain**, insira: `netsecbr.com.br`
3. Clique em **Save**
4. Marque a opção **Enforce HTTPS** (quando disponível)

### 4.3 Aguardar Propagação de DNS

A propagação de DNS pode levar de 24 a 48 horas. Você pode verificar o status em:
- https://www.whatsmydns.net/

## Estrutura de Pastas Publicada

O GitHub Pages publica automaticamente os arquivos da pasta `website/`:

```
website/
├── index.html              # Home
├── sobre.html              # Quem Somos
├── servicos.html           # Serviços
├── solucoes.html           # Soluções
├── tecnologias.html        # Tecnologias
├── contato.html            # Contato
└── ../assets/              # CSS, imagens, logos
```

## Fazendo Atualizações

Sempre que você fazer mudanças no código:

1. **Edite os arquivos** em `website/` localmente ou no GitHub
2. **Faça commit e push** para a branch `main`:
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push origin main
   ```
3. **O GitHub Actions** detectará automaticamente a mudança
4. **O site será atualizado** em 2-5 minutos

## Verificar Status do Deploy

1. Acesse: https://github.com/Cristerson/HP_NETSECBR/actions
2. Clique no workflow mais recente
3. Verifique se o status é ✅ (sucesso)

## Troubleshooting

### Problema: Site não carrega ou mostra erro 404

**Solução:**
- Aguarde 10 minutos após o deploy
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se o workflow em Actions está com status ✅

### Problema: Assets (CSS, imagens) não carregam

**Solução:**
- Verifique se os caminhos relativos estão corretos
- Os arquivos devem estar em `website/assets/`
- Os caminhos no HTML devem ser: `../assets/css/style.css`

### Problema: Domínio customizado não funciona

**Solução:**
- Aguarde 24-48 horas para propagação de DNS
- Verifique se o registro DNS foi criado corretamente
- Teste em: https://www.whatsmydns.net/

## Próximos Passos

1. **SEO:** Registre seu site em Google Search Console
2. **Analytics:** Configure Google Analytics para rastrear visitantes
3. **Manutenção:** Atualize conteúdo regularmente
4. **Backup:** Mantenha uma cópia local do repositório

## Contato e Suporte

Para dúvidas sobre GitHub Pages:
- Documentação oficial: https://docs.github.com/en/pages
- Comunidade GitHub: https://github.community

---

**Seu site está pronto para ir ao ar! 🚀**

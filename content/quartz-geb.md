---
title: [incompleto] Usando o Quartz 4 para criar um site estático
draft: false
date: 2024-08-29
tags:
  - tutorial
---
# gebrael, atenção!
eu fiz esse tutorial para uma pessoa usando windows. qualquer um desses programas, com excessão do *chocolatey*, que serve para instalar programas no windows via terminal, pode ou deve ser instalada usando >brew install (...) no terminal do mac. Os outros passos seguem os mesmos.
## atenção parte 2
isso não está completo...não a parte de colocar online, mas uma hora estará. talvez. já vou adiantando que é super fácil e não tem custo, só se quiseres usar teu próprio domínio como eu faço.
#### Pré-requisitos
1. Baixe e instale o [NodeJS](). Marque a opção se instalar itens adicionais à instalação (Chocolatey; Python):
![[Pasted image 20240829194746.png]]
2. Utilize o comando `winget` no **Windows Powershell** e rode:
- `winget install --id Git.Git -e --source winget`
#### Baixando os arquivos do site
1. Crie uma pasta em algum lugar, como Documentos, e nomeie-a arbitrariamente.
2. Clique com o botão direito do mouse, dentro da pasta vazia, e selecione "Abrir no Terminal".
3. Copie e cole o seguinte comando:
	- `git clone https://github.com/jackyzha0/quartz.git`
4. Digite o comando `cd quartz` para acessar a pasta que foi criada, contendo os arquivos do site. `cd` é o comando utilizado para acessar diretórios no terminal; `cd ..` retorna para a pasta anterior.
5. Rode o comando `npm i` no terminal, para montar os arquivos, funções e ferramentas do Quartz, e então rode `npx quartz create` para por fim montar o site: aperte a tecla **Enter** para "*chose how to initialize the content in (...)*" e "*Choose how Quartz should resolve links (...)*"
### Entendendo o Quartz
Ao digitar o comando `ls` no terminal, será imprimido na tela todos os arquivos e pastas no diretório atual. Lembrando que tudo isso pode ser visualizado utilizando o **Windows Explorer**. A partir daqui o uso do terminal só será necessário para salvar as alterações (no caso de publicação online) ou para iniciar o site localmente.

Dentro da pasta `content`, haverá apenas um arquivo: `index.md`. Essa é a página inicial do seu site, e pode ser alterada livremente. Como ela existe para contextualizar o usuário e fazê-lo acessar o tutorial do Quartz, recomendo substituí-la por algo melhor. Então copie e cole esse exemplo de `index.md` no lugar do atual:

```
title: Bem-vindo 👋🏻
---

Espaço para um resumo.

Explore as publicações através da página de [tags](/tags).
***
### Sobre mim

Uma descrição mais aprofundada. Abaixo, um espaço para um gif (ou uma imagem, altere o endereço de qualquer forma).

<div class="centered">
        <img src="https://media.tenor.com/qJRMLPlR3_8AAAAi/maxwell-cat.gif" alt="GIF">
    </div>

***

### Publicações recentes

[Artigo 1](/artigo) | [Explorando conceitos](/conceitos) | [Entendendo coisas](/coisas) | [Design Espacial](/espaço) | [Evolução Estética](/estetica)
```

***Todas as suas publicações devem ser colocadas dentro da pasta `content`***, no formado *Markdown* (`.md`). Não se preocupe, um arquivo `.word` pode ser facilmente "traduzido" para *Markdown* através do seguinte [conversor](https://word2md.com/) ou pelo uso da ferramente **Pandoc**.

#### Alterando elementos

Por padrão, o site baixo é meramente um modelo genérico distribuído pelo criador do Quartz. Então, será preciso fuçar um pouco para customizar totalmente o site.

1. `quartz.layout.ts`: neste arquivo, pode-se alterar o rodapé do Quartz, o que é automaticamente aplicado para todas as páginas do site.
	![[Pasted image 20240829203313.png]]
	Aqui, a sintaxe funciona da seguinte forma: cada nova "palavra" adicionada inclui, no rodapé, um novo endereço clicável. No caso de mais uma palavra, adicionar aspas duplas.
	![[Pasted image 20240829203551.png]]
	Pode-se também visualizar os elementos que compõem cada página, como em `left` o título da página, a ferramenta de pesquisa, a opção de modo escuro; em `right` o componente do gráfico, tabela de conteúdos e *backlinks* (endereços anteriores à página, se neles mencionada)
2. `quartz.config.ts`: é neste arquivo que serão feitas alterações importantíssimas, que ditam praticamente o funcionamento todo do site.
	![[Pasted image 20240829204034.png]]
	Aqui, deve-se alterar `baseUrl` para `localhost`. Isso será modificado posteriormente caso o site seja colocado no ar. Mude `pageTitle` para algo como "Início". Evite alterar outras linhas do arquivo.
#### Montando o site localmente
No terminal, rode `npx quartz build`. Então, rode `npx quartz build --serve` - isso iniciará o servidor localmente no endereço `localhost:8080, como exibido na tela.
**Importante**: conceda ao NodeJS acesso, quando solicitado.
![[Pasted image 20240829204637.png]]
#### Criando publicações
Agora que o site está rodando localmente no seu computador, está na hora de criar arquivos de texto. Qualquer publicação no Quartz deve conter a seguinte sintaxe anterior a qualquer escrita:
```
---
title: Publicação teste
draft: false
tags:
  - primeira_tag
  - segunda_tag

date: 2024-08-29
---
```
`draft: false` significa que o arquivo estará prontamente disponível para ser acessado no site, se estiver na pasta `content`. O restante é autoexplicativo. Toda e qualquer alteração será atualizada em tempo real no Quartz. Criando um arquivo teste, ele automaticamente fica disponível no menu `Explorer`:
![[Pasted image 20240829205402.png]]
### Publicando online
(...)

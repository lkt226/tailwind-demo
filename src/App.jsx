import './App.css'

function App() {
  const codes = {
    html: 
`<button class='meubotao'> 
  Meu Botão 
</button>`,
    css: 
`.meubotao {
  background-color: red;
  border-radius: 4px;
  padding: 8px;
}`,
    tailwind: 
`<button class='bg-red-500 rounded p-2'>
  Meu Botão 
</button>`
  }

  return (
    <>
      <main className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-2'>
            <h2>O que é TailwindCSS?</h2>
            <p>Bom em termos técnicos, TailwindCSS é um é um Framework de CSS baseado em utility-first, mas trazendo para o português claro, é uma feramenta para desenvolvedores que busca estilizar uma pagina de forma mais produtiva.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2>Como ele funciona?</h2>
            <p>O funcionamento dele é bem simples, normalmente nos nomeamos um elemento da pagina e dizemos que esse nome precisa ter determinadas características, isso se chama “classe” no CSS, basicamente oque o TailwindCSS faz é usar essa “classe” para nomear uma característica no lugar de um elemento, dessa forma quando eu quero dar uma característica para um elemento eu vou listando as “classes” que o TailwindCSS já deixou pronto e configurado.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2>Como usar?</h2>
            <p>Usar o tailwindCSS não é uma tarefa muito dificil, tem algumas opções possíveis, mas vou falar somente sobre 2 delas.</p>
            <p>se você estiver usando uma ferramenta baseada com PostCSS como o React e Vue, você vai seguir esse passo a passo aqui: 
              <a href='https://tailwindcss.com/docs/installation/using-postcss'>https://tailwindcss.com/docs/installation/using-postcss</a>
            </p>
            <p>caso você esteja fazendo ele com HTML, CSS e Javascript simples, você segue esse daqui: 
              <a href='https://tailwindcss.com/docs/installation/play-cdn'>https://tailwindcss.com/docs/installation/play-cdn</a>
            </p>
            <p>caso seja outro, pode procurar ele nessa lista: 
              <a href='https://tailwindcss.com/docs/installation/framework-guides'>https://tailwindcss.com/docs/installation/framework-guides</a>
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col gap-2'>
            <h3>Normalmente</h3>
            <div className='grid grid-cols-2 items-center'>
              <div className='flex flex-col gap-1'>
                <div className='code'>
                  { codes.html }
                </div>
                <div className='code'>
                  { codes.css }
                </div>
              </div>
              <button className='bg-red-500 rounded p-2'>
                Meu botão
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h3>TailwindCSS</h3>
            <div className='grid grid-cols-2 items-center'>
              <div className='flex flex-col gap-1'>
                <div className='code'>
                  { codes.tailwind }
                </div>
              </div>
              <button className='bg-red-500 rounded p-2'>
                Meu botão
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h3>Lista das classes</h3>
            <p>As classes tem nomes bem parecidos com as características que elas representam, mas não são exatamente iguais, nessa pagina tem uma lista de todas as características salvas, você pode também pesquisar se souber o nome da caracteristica. 
              <a href='https://tailwindcss.com/docs/utility-first'>https://tailwindcss.com/docs/utility-first</a>
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3>Recomendações</h3>
            <p>Existe um plugin para o VScode, onde ele te ajuda completando as classes e mostrando as características delas: 
              <a href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss</a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

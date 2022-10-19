// chamando o botao 
//adicionando uma funcao anonima com o proprio evento de click

// btn.addEventListener('click', (evento)=> { 
     // })
     
     // Arrow function ou funcao de seta 
     
(()=>{
     const btn = document.querySelector('[data-form-button]')
     // const novaTarefa = (evento)=>{
     //      // // pegando o valor do input
     //      // const nomeTrefa = document.querySelector('[data-form-input]').value
     //      // evento.preventDefault();
     //      // // buscando ul 
     //      // const listaul = document.querySelector('[data-list]');
     //      // //criando o elemento li
     //      // const criarli = document.createElement( 'li')
          
     //      // const conteudo = `<p class="content" >${nomeTrefa}</p> `

     //      // criarli.innerHTML = conteudo

     //      // listaul.appendChild(criarli)
     //      // nomeTrefa.value = ""
     // }

     const criarNovaTarefa = (evento)=>{
          evento.preventDefault();
          const valorInput = document.querySelector('[data-form-input]').value
          if (valorInput.length > 0) {
               const conteudop = `<p class="content">${valorInput} </p>`
               const criandoli = document.createElement('li')
               const listaul = document.querySelector('[data-list]')

               criandoli.innerHTML = conteudop
               listaul.appendChild(criandoli)
               criandoli.appendChild(criarBotao())
               criandoli.appendChild(btnDeletarTarefa()) 
          }     
     }

     const criarBotao = ()=>{
          const btnConclui = document.createElement('button')
          btnConclui.classList.add('btn-conclui')
          btnConclui.innerText = 'Concluir'

          btnConclui.addEventListener('click', concluiTarefa);

          return btnConclui
     }
     const concluiTarefa = (evento) =>{
          const btnConclui = evento.target
          const tarefaCompleta = btnConclui.parentElement

          tarefaCompleta.classList.toggle('done')
     }

     const btnDeletarTarefa = ()=> {
          const btnDeleta = document.createElement('button')
          btnDeleta.classList.add('btn-deleta')
          btnDeleta.innerText = 'Deletar'

          btnDeleta.addEventListener('click', deletarTarefa)           
          return btnDeleta
     }
     const deletarTarefa = (evento)=>{
          const deletaTarefa = evento.target

          const tarefaCompleta = deletaTarefa.parentElement

          tarefaCompleta.remove()     
          return deletaTarefa
     }

     btn.addEventListener('click', criarNovaTarefa)

})()
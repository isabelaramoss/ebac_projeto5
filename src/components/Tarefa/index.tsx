import { useState } from 'react'
import * as S from './styles'

const Tarefa = () => {
  //useState
  //Se estiver editando não mostrar os botões editar e remover e sim salvar e cancelar.
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>Nome da tarefa</S.Titulo>
      <S.Tag>importante</S.Tag>
      <S.Tag>pendente</S.Tag>
      <S.Descricao />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa

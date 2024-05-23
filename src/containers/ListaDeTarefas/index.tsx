import Tarefa from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  //const tarefas = useSelector((state: RootReducer) => state.tarefas)
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas

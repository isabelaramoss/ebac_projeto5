import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../uteis/enums/Tarefas'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver aula 3 EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir à academia',
    descricao: 'Treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
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

export default ListaDeTarefas

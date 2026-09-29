import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [nome, setNome] = useState('');
  const [prioridade, setPrioridade] = useState('Média');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (nome.trim() === '') {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      nome: nome,
      concluida: false,
      prioridade: prioridade,
      favorita: false,
    };

    setTarefas([...tarefas, novaTarefa]);

    setNome('');
    setPrioridade('Média');
  }

  function excluirTarefa(id) {
    setTarefas(
      tarefas.filter((item) => item.id !== id)
    );
  }

  function concluirTarefa(id) {
    setTarefas(
      tarefas.map((item) =>
        item.id === id
          ? { ...item, concluida: !item.concluida }
          : item
      )
    );
  }

  function favoritarTarefa(id) {
    setTarefas(
      tarefas.map((item) =>
        item.id === id
          ? { ...item, favorita: !item.favorita }
          : item
      )
    );
  }

  function corPrioridade(prioridade) {
    if (prioridade === 'Alta') {
      return '#ffaaaa';
    }

    if (prioridade === 'Média') {
      return '#ffd699';
    }

    return '#aaddaa';
  }

  const concluidas = tarefas.filter(
    (item) => item.concluida
  ).length;

  const pendentes = tarefas.length - concluidas;

  function renderItem({ item }) {
    return (
      <View
        style={[
          styles.card,
          { backgroundColor: corPrioridade(item.prioridade) },
        ]}
      >
        <Pressable
          onPress={() => concluirTarefa(item.id)}
          style={styles.conteudo}
        >
          <Text
            style={[
              styles.nome,
              item.concluida && styles.riscado,
            ]}
          >
            {item.nome}
          </Text>

          <Text>
            Prioridade: {item.prioridade}
          </Text>

          <Text>
            {item.concluida ? 'Concluída' : 'Pendente'}
          </Text>
        </Pressable>

        <View style={styles.botoes}>
          <Pressable
            onPress={() => favoritarTarefa(item.id)}
          >
            <Text style={styles.botao}>
              {item.favorita ? '★' : '☆'}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => excluirTarefa(item.id)}
          >
            <Text style={styles.botao}>Excluir</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Gerenciador de Tarefas
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da tarefa"
        value={nome}
        onChangeText={setNome}
      />

      <Picker
        selectedValue={prioridade}
        onValueChange={setPrioridade}
        style={styles.picker}
      >
        <Picker.Item label="Alta" value="Alta" />
        <Picker.Item label="Média" value="Média" />
        <Picker.Item label="Baixa" value="Baixa" />
      </Picker>

      <Pressable
        style={styles.adicionar}
        onPress={adicionarTarefa}
      >
        <Text style={styles.textoBotao}>
          Adicionar tarefa
        </Text>
      </Pressable>

      <View style={styles.resumo}>
        <Text>Total: {tarefas.length}</Text>
        <Text>Concluídas: {concluidas}</Text>
        <Text>Pendentes: {pendentes}</Text>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
  },

  picker: {
    marginBottom: 10,
  },

  adicionar: {
    padding: 12,
    backgroundColor: '#333',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  resumo: {
    marginVertical: 15,
  },

  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  conteudo: {
    marginBottom: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  riscado: {
    textDecorationLine: 'line-through',
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  botao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
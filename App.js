import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const modules = [
  {
    title: "Fundamentos da Educação Financeira",
    description:
      "Aprenda a organizar seu dinheiro, entender juros compostos e criar uma base sólida.",
    topics: ["Planejamento financeiro", "Reserva de emergência", "Inflação", "Juros compostos"],
    link: "https://www.ev.org.br/cursos/educacao-financeira",
  },
  {
    title: "Introdução aos Investimentos",
    description:
      "Conheça tipos de investimentos, perfis de risco e comece a montar sua carteira.",
    topics: ["Renda fixa vs. variável", "Perfil de investidor", "Tesouro Direto", "CDB, LCI, LCA"],
    link: "https://www.youtube.com/c/ClubedoValor",
  },
  {
    title: "Bolsa de Valores e Ações",
    description:
      "Entenda como funcionam as ações, FIIs e ETFs, com simulações práticas.",
    topics: ["O que são ações", "Dividendos", "Fundos imobiliários", "ETFs"],
    link: "https://simulador.b3.com.br",
  },
  {
    title: "Rotina de Estudo Semanal",
    description:
      "Organize seus estudos com uma rotina leve e prática.",
    topics: [
      "Seg: Teoria (vídeo/livro)",
      "Ter: Simulador de investimento",
      "Qua: Revisão e anotações",
      "Qui: Novo tema",
      "Sex: Podcast/canal leve",
      "Sáb: Simulação real",
      "Dom: Pausa ou leitura leve",
    ],
    link: "",
  },
];

export default function InvestStudyApp() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <ScrollView style={styles.container}>
      {modules.map((mod, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.title}>{mod.title}</Text>
          <Text style={styles.description}>{mod.description}</Text>
          <View style={styles.topics}>
            {mod.topics.map((t, i) => (
              <Text key={i} style={styles.topic}>{t}</Text>
            ))}
          </View>
          {mod.link ? (
            <Button
              title="Acessar Conteúdo"
              onPress={() => window.open(mod.link, "_blank")}
            />
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  topics: {
    marginBottom: 10,
  },
  topic: {
    fontSize: 12,
    color: 'gray',
  },
});

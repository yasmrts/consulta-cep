import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8', // Fundo rosa bem clarinho, super elegante
  },
  header: {
    backgroundColor: '#D81B60', // Rosa escuro/Magenta
    padding: 25,
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor: '#D81B60', // Sombra rosa
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 15,
    color: '#FCE4EC', // Rosa super claro
    marginTop: 6,
    fontWeight: '500',
  },
  conteudo: {
    padding: 20,
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
    color: '#880E4F', // Rosa vinho
    marginBottom: 6,
    marginTop: 18,
    textTransform: 'uppercase', // Deixa as labels em maiúsculo (dá um ar moderno)
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#F8BBD0', // Borda rosa clara
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 16,
    color: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 2,
  },
  botao: {
    backgroundColor: '#E91E63', // Rosa vibrante
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
    shadowColor: '#E91E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  botaoDesabilitado: {
    backgroundColor: '#F48FB1', // Rosa desbotado
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
  resultadoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A148C',
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 14,
    borderLeftWidth: 6, // Faixa rosa na esquerda do card
    borderLeftColor: '#E91E63',
    shadowColor: '#D81B60',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cep: {
    fontSize: 16,
    fontWeight: '900',
    color: '#C2185B', // Texto do CEP num rosa escuro
    backgroundColor: '#FCE4EC', // Fundo tipo etiqueta
    alignSelf: 'flex-start', // Faz o fundo abraçar só o texto
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  textoCard: {
    fontSize: 15,
    color: '#555555',
    marginBottom: 6,
    lineHeight: 22,
  },
  vazio: {
    textAlign: 'center',
    color: '#F06292',
    marginTop: 30,
    fontSize: 15,
    fontStyle: 'italic',
    paddingHorizontal: 20,
  },
});
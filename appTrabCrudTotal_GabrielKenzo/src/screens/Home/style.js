import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  header:{
    backgroundColor: '#fafafa',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.1,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset : { width: 1, height: 5},
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 55,
    marginTop:33,
  },
  menu:{
    position: 'absolute',
    left: 20,
    alignSelf: "center",
    top: 10,
  },
  logo:{
    width: 140,
    height: 60,
    alignSelf: "center",
    marginTop: 10,
  },

  containerHeader:{
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: "10%",
  },

  botao: {
    backgroundColor: '#1C58F2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textobotao: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  navinput: {
    width: '100%',
    padding: 10,
    fontSize: 17,
    backgroundColor: '#1C58F2',
    borderRadius: 10,
    borderBottomWidth: 0.1,
    borderBottomColor: '#000',
    marginBottom: 15,
    color: '#fff',
  },
  flat: {
    flex: 1
  },
  containertarefas: {
    backgroundColor: '#baff69',
    borderRadius: 10,
    borderColor:'#ff9e06',
    borderWidth: 3,
    padding: 15,
    marginBottom: 20,
  },
  linhaTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textosTarefa: {
    marginLeft: 10,
    flexShrink: 1,
  },
  imag: {
    width: 45,
    height: 45,
  },
  textolistatitulo: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textolista: {
    color: '#000',
    fontSize: 15,
  },
  linhaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textolistacargo: {
    color: '#181A1F',
    fontSize: 13,
    backgroundColor: '#DDE3F0',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  textolistadata: {
    color: '#181A1F',
    fontSize: 14,
  },
  gridbotaoEditar:{
    position: 'absolute',
    right:40,
    color:'#5c7ef6',
    bottom:1
  },
    
  gridbotaoExcluir:{
    position: 'absolute',
    right:15,
    color:'#cc1414',
    bottom:1
  },
});

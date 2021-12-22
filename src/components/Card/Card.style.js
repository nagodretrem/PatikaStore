import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#d7d9db',
		margin:8,
		borderRadius :5,

	},
		text_container:{
		marginLeft:10,
		
	},
		image_container:{
		margin:10,
		backgroundColor: 'white',
		borderRadius :5,
	},
	
	image: {
		height: Dimensions.get('window').height/4,
		resizeMode:'contain',
		
	},
	title:{
		fontWeight: 'bold',
		fontSize : 18,
		marginBottom:5,
		
	},
		price:{
		fontSize : 14,
		color:'grey',
		fontWeight: 'bold',
		textAlign:'left',
		

	},
	stock:{
		color:'#aa1000',
		fontWeight: 'bold',
		fontSize : 15,
	},
})
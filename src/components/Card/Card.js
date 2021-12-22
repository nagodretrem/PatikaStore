import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './Card.style'

export default function Card({product})  {
  return(
		<View style={styles.container}>
			<View style= {styles.image_container}>
				<Image style={styles.image} 
				source={{uri: product.imgURL}}/>
			</View>
			<View style={styles.text_container}>			
			<Text style={styles.title}>{product.title}</Text>
			<Text style={styles.price}>{product.price}</Text>
			<Text style={styles.stock}>{product.inStock ? '':'STOKTA YOK'}</Text>
			</View>

		</View>
  );
}


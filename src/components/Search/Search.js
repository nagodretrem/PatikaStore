import React from "react";
import {TextInput } from "react-native";
import styles from './Search.style'

export default function Search(){

    return(
        <TextInput style={styles.input} placeholder="Ara..."/>
    );
}
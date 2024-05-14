import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native";

import Detalhes from "../Detalhes";


export default function Filmes({data}){

    const [visible, setVisible] = useState(false)
    return(
        <View>

            <View style={styles.card}>
                <Text style={styles.title}>{data.nome}</Text>

                <Image
                source={{uri: data.foto}}
                style={styles.capa}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.btn} onPress={ ()=> setVisible(true)}>
                        <Text style={styles.txtBtn}>Leia mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visible}>
                <Detalhes filme={data} voltar={ ()=> setVisible(false)}/>
            </Modal>

        </View>
    )
}                           

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        marginBottom: 40,
        borderRadius: 8,
        elevation: 2,
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    title:{
        padding: 15,
        fontSize: 18,
        color: '#000'
    },
    areaBtn:{
        alignItems: 'flex-end',
        marginTop: -50,
        zIndex: 4
    },
    btn:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity:1,
        padding: 8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius: 5
    },
    txtBtn:{
        color: '#fff',
        textAlign: 'center'
    }
})
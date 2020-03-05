import React, { useState } from 'react';
import {
    TouchableHighlight,
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity,
    Modal
} from 'react-native';

export default function subjectItem({ item, handleDelete }) {

    const alertDelete = (name, handleDelete) => {
        return Alert.alert(
            'Thông báo', // tham so dau tien: title
            `Bạn có muốn xóa ${name} Không?`, // tham so t2: content
            [
                {
                    text: 'Có',
                    onPress: () => { handleDelete(name) }
                },
                {
                    text: 'Không',
                    onPress: () => { }
                }
            ],
            { cancleable: false } // cho click ra ben ngoai alert hay khong (true -> disable)
        )
    };
    const [showModalComic, setShowModalComic] = useState(false);
    
    return (
        <View style={style.colum}  >
            <View>
                <View style={style.row}>
                    <View style={style.viewboder}>
                        < Image style={style.image} source={{ uri: item.img }} />
                    </View>

                    <View style={style.item1} >
                        <View >
                            <Text style={style.h1}>{`${item.name}`}</Text>
                            <Text style={style.h2}>{`Category: ${item.category}`}</Text>
                            <Text style={style.h2}>{`Chapters: ${item.chapters}`}</Text>

                            <Text style={style.h2}>{`Active: ${item.active ? 'Full' : 'Not full'}`}</Text>
                        </View>
                    </View>

                    <View style={style.item} >

                        <TouchableHighlight
                            style={style.submit}
                            onPress={() => { setShowModalComic(true) }}>
                            <Text style={style.submitText}>Thông tin</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={style.submitDelete}
                            onPress={() => { alertDelete(item.name, handleDelete) }}
                            underlayColor='#fff'>
                            <Text style={style.submitText}>Xóa</Text>
                        </TouchableHighlight>


                    </View>
                </View>


                
            </View>
            <Modal visible={showModalComic} 
            transparent={false}
            animationType={"slide"}>

                <View style={style.colum}>
                    <View style={style.viewboder1} >
                        < Image style={style.imgmodel} source={{ uri: item.img }} />

                    </View>

                    <TouchableHighlight
                        style={style.backButton}
                        onPress={() => { setShowModalComic(false) }}>
                        <Text style={{fontSize: 20, color: '#fff'}}>Trở lại</Text>
                    </TouchableHighlight>
                    <View style={style.item1} >
                        <View  >
                            <Text style={style.h1}>{`Name: ${item.name}`}</Text>
                            <Text style={style.h2}>{`Author: ${item.author}`}</Text>
                            <Text style={style.h2}>{`Category: ${item.category}`}</Text>
                            <Text style={style.h2}>{`Chapters: ${item.chapters}`}</Text>
                            <Text style={style.h2}>{`Content: ${item.content}`}</Text>
                            <Text style={style.h2}>{`Active: ${item.active ? 'Full' : 'Not full'}`}</Text>
                        </View>


                    </View>
                </View>
            </Modal>

        </View>
    )
}

const style = StyleSheet.create({
    colum: {
        justifyContent: "center",
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightgray',
        borderColor: "#00bcd4",
        padding: 5,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    viewboder: {
        marginRight: 5,
        padding: 3,
        backgroundColor: "#fff",
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,

    },
    viewboder1: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: "#ffff",
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    }
    , image: {
        width: 95,
        height: 120,
        borderRadius: 2
    },
    h1: {
        padding: 5,
        fontSize: 20,

    },
    h2: {
        marginLeft: 5,
        padding: 5,
    },
    submit: {
        overflow: 'hidden',
        marginTop: 13,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        borderColor: "#ffff"
    },
    submitDelete: {
        overflow: 'hidden',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        borderRadius: 10,
        borderColor: "#ffff"
    },

    submitText: {
        color: '#fff',
        textAlign: 'center',
    },
    item1: {
        flex: 1,
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    item: {
        marginRight: 5,
        marginLeft: 5
    },
    row2: {
        marginTop: 50,
        display: "flex",
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: "#00bcd4"

    },
    imgmodel: {
        width: 175,
        height: 300,
    },

    backButton: {
        position: 'absolute',
        backgroundColor: '#00bcd4',
        padding: 5,
        borderRadius: 5,
        top: 30,
        left: 10
    }

});

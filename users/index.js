import React, { useState } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Switch,
  Modal,
  Button,
  TextInput,
  Picker,
  Alert,
  Platform,
  TouchableOpacity
}
  from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SubjectItem from './subject-item';
import InfoText from './info-text';
import { TrackingConfiguration } from 'expo/build/AR';

export default function Profile() {

  const userProfile = {
    info: {
      name: "",
      age: "",
    },
    comic: [
      {
        img: 'https://sachvui.com/cover/2016/doraemon.jpg',
        name: 'Draemon',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Fujiko F. Fujio",
        content: "Các câu chuyện trong Doraemon thường có một công thức chung, đó là xoay quanh những rắc rối hay xảy ra với cậu bé Nobita học lớp bốn, nhân vật chính thứ nhì của bộ truyện",
        status: true
      },
      {
        img: 'http://image.phimmoi.net/film/2296/poster.medium.jpg',
        name: 'Naruto',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Kishimoto Masashi",
        content: "Bối cảnh Naruto xảy ra vào mười hai năm trước khi câu chuyện chính thức bắt đầu, một con hồ ly chín đuôi đã tấn công Konohagakure. Nó là một con quái vật có sức mạnh khủng khiếp",
        status: false
      },
      {
        img: 'http://image.phimmoi.net/film/665/poster.medium.jpg',
        name: 'One Piece',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Eiichiro Oda",
        content: "One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }
    ]
  };
  // Khai bao state + ham thay doi gia tri cua no
  const [showInfo, setShowInfo] = useState(true);
  // Chuyen viec su dung userprofile sang state, de khi user thay doi gia tri se render lai man hinh
  const [user, setUser] = useState(userProfile);
  // Tao state kiem soat viec hien thi cua modal add subject
  const [showModal, setShowModal] = useState(true);
  const [showComic, setShowComic] = useState(false);
  // Khai bao ham thuc hien cong viec xoa
  const handleDeleteSubject = (name) => {
    // su dung let de co the gan gia tri moi
    let newSubjectList = user.comic;
    // filter ((item) => tra ve dieu kien ma item do se duoc xu ly)
    // sau khi filter xong (chay het vong lap voi dieu kien dua ra) -> tra ve mang moi co cac item thoa man dk

    newSubjectList = newSubjectList.filter((subject) => subject.name != name);
    userProfile.comic = newSubjectList;
    console.log(userProfile);

    setUser(userProfile);
  }
  const [inputUserName, setInputUserName] = useState('');
  const [inputUserAge, setInputUserAge] = useState('');
  const [pickerSubjectClass, setPickerSubjectClass] = useState("PT1111");

  const setDefaultValue = () => {
    setInputUserName('');
    setInputUserAge('');
    setShowComic(false);
  }

  const setDefaultButton = () => {
    setShowComic(false);
  }


  // Tao ham va xu ly viec add subject
  const handleAddUser = () => {
    userProfile.info.name = inputUserName,
      userProfile.info.email = inputUserAge,
      setUser(userProfile);
    setShowModal(false);
    setDefaultValue();
  }

  return (
    <View>
      <View style={{ flex: 1, flexDirection: "column", marginTop: Platform.OS === 'ios' ? 24 : 0 }}   >

        <View style={{
          height: 50,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
          <View 
          style={{
              justifyContent: 'center',
              paddingLeft: 20,
              backgroundColor: '#cdcdcd',
              width: 250,
            }}>
            <Text style={{ fontSize: 20, color: 'green', }}>{`Tên: ${user.info.name}`}</Text>
          </View>


          <TouchableOpacity
            style={{ alignSelf: 'center', marginLeft: 20 }}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Text style={{ fontSize: 20, color: '#0000FF' }}>
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>


        {/* // sửa Height ở đây nếu màn hình k kín */}
        <View style={{ height: 600, backgroundColor: "#cdcdcd" }} >

          <FlatList
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            data={user.comic} // mảng nhận vào để hiển thị danh sách
            renderItem={({ item }) => (
              <SubjectItem item={item}
                handleDelete={handleDeleteSubject} />
            )} // item ứng với {name: '', identity: '', className: ''}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>

      <Modal
        visible={showModal}
        transparent={false}
        animationType={"slide"}>

        <View style={styles.container}>

          <Text style={styles.title}>Thông tin người dùng</Text>

          <View>
            <TextInput
              style={styles.inputLabel}
              placeholder='Nhập tên ...'
              value={inputUserName}
              onChangeText={(value) => setInputUserName(value)} />

            <Icon name={'user'}
              size={25}
              color={'rgba(0, 0, 0, 0.7)'}
              style={styles.inputIcon}
            ></Icon>
          </View>

          <View>
            <TextInput
              keyboardType='number-pad'
              placeholder='Nhập tuổi ...'
              style={styles.inputLabel}
              value={inputUserAge}
              onChangeText={(value) => setInputUserAge(value)} />

            <Icon name={'tag'}
              size={25}
              color={'rgba(0, 0, 0, 0.7)'}
              style={styles.inputIcon}
            ></Icon>

          </View>
          <TouchableHighlight
            disabled={showComic}
            style={style.submit}

            onPress={() => {
              if (inputUserAge == "" || inputUserAge == "") {
                Alert.alert(
                  'Bạn phải nhập đầy đủ thông tin')

              } else {
                if (inputUserAge < 18) {
                  setShowComic(true)
                  Alert.alert(
                    'Bạn chưa đủ tuổi !'
                  )
                  setDefaultButton();
                }

                else {
                  setShowModal(false);
                  setShowComic(false);
                  handleAddUser()
                }
              }

            }
            }
            underlayColor='#fff'>
            <Text style={style.submitText}>Vào đọc truyện</Text>
          </TouchableHighlight>

        </View>
      </Modal>
    </View >
  );
}


const styles = StyleSheet.create({

  inputIcon: {
    position: 'absolute',
    top: 18,
    left: 43,
  },

  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    textAlign: "center",
    color: "#000",

  },
  inputLabel: {
    fontSize: 20,
    color: "#000",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 45,
    marginTop: 10,
    height: 40,
    width: 320,
    alignSelf: 'center'
  },



  bt: {
    color: "#00bcd4"

  }
});
const style = StyleSheet.create({
  profileContainer: {
    marginTop: 50
  },
  img: {},
  image: {
    width: 200,
    height: 200,
    borderRadius: 200
  },

  submit: {
    overflow: 'hidden',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 25,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    borderColor: '#fff',
    alignSelf: 'center'
  },

  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
});


const mystyles = StyleSheet.create({

  btnParent: {
    color: "#00bcd4",
    marginTop: 16,
    flexDirection: "row"

  },
  button: {

    margin: 8,
    justifyContent: "space-around"
  },

});

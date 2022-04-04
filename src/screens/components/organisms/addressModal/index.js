import React from 'react';
import {Text, View, FlatList, Pressable, ActivityIndicator} from 'react-native';

import Modal from 'react-native-modal';

import color from '_theme/colors';
import {hS} from '_theme/metrics';

const AddressList = ({data, loading, onSelectList}) => {
  console.log(data);
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <FlatList
      scrollEnabled={true}
      data={data}
      keyExtractor={(_, id) => 'modal' + id}
      renderItem={({item, index}) => (
        <Pressable
          onPress={() => onSelectList(item)}
          android_ripple={{color: 'rgba(220,220,220,0.7)'}}
          style={{
            padding: 8,
            justifyContent: 'center',
            height: hS * (8 / 100),
            backgroundColor: index % 2 === 0 ? color.white : '#efefef',
          }}>
          <Text adjustsFontSizeToFit style={{fontSize: 22, color: color.text}}>
            {item.nama}
          </Text>
        </Pressable>
      )}
    />
  );
};
const AddressModal = ({
  visible,
  closeModal,
  onSelectList,
  data = [],
  title,
  regionLoading,
}) => {
  return (
    <Modal
      style={{margin: 0}}
      visible={visible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      transparent={true}
      onBackButtonPress={closeModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            height: '75%',
            paddingHorizontal: 14,
            paddingTop: 12,
            width: '100%',
            backgroundColor: color.white,
            borderRadius: 12,
            justifyContent: 'flex-start',
          }}>
          <View style={{width: '100%'}}>
            <Pressable
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={closeModal}>
              <View>
                <Text style={{textTransform: 'capitalize'}}>
                  {'pilih ' + title}
                </Text>
              </View>
              <View>
                <Text onPress={closeModal}>Exit</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              paddingVertical: 4,
              marginVertical: 22,
            }}>
            <AddressList
              data={data}
              loading={regionLoading}
              onSelectList={item => onSelectList(item)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddressModal;

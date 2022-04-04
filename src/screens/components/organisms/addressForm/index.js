import React, {useState, useEffect} from 'react';
import {Text, View, Alert} from 'react-native';

import qs from 'query-string';
// import {useFocusEffect} from '@react-navigation/native';

import Label from '_atoms/label';
import Button from '_atoms/button';
import AddressModal from '_organisms/addressModal';
import AddressSelector from '_molecules/addressSelector';
import {getAddress, getPostalCode} from '_services/addressAPI';
import color from '_theme/colors';

const initialAddressForm = {
  provinsi: '',
  kota: '',
  kecamatan: '',
  kelurahan: '',
};

const initialAddressList = {
  provinsi: [],
  kota: [],
  kecamatan: [],
  kelurahan: [],
};

const addressQuery = (area, id) => {
  switch (area) {
    case 'kota':
      return qs.stringify({id_provinsi: id});
    case 'kecamatan':
      return qs.stringify({id_kota: id});
    case 'kelurahan':
      return qs.stringify({id_kecamatan: id});
  }
};

const AddressForm = ({route, navigation: nav}) => {
  const [form, setForm] = useState(initialAddressForm);
  const [area, setArea] = useState(initialAddressList);
  const [postalCodeInfo, setPostalCodeInfo] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [loadingRegion, setLoadingRegion] = useState(false);
  const [areaValid, setAreaValid] = useState(false);
  const [listModal, showListModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const onGettingArea = async (area = 'provinsi', addId = null) => {
    setLoadingRegion(true);
    let query = area;
    if (addId) query += '?' + addressQuery(area, addId);
    try {
      const areaList = await getAddress(query).then(res => res.data);
      switch (area) {
        case 'provinsi':
          setArea(_ => ({
            provinsi: areaList['provinsi'],
            kota: [],
            kecamatan: [],
            kelurahan: [],
          }));
          break;
        case 'kota':
          setArea(state => ({
            ...state,
            kota: areaList['kota_kabupaten'],
            kecamatan: [],
            kelurahan: [],
          }));
          break;
        case 'kecamatan':
          setArea(state => ({
            ...state,
            kecamatan: areaList['kecamatan'],
            kelurahan: [],
          }));
          break;
        case 'kelurahan':
          setArea(state => ({...state, kelurahan: areaList['kelurahan']}));
          break;
      }
    } catch (e) {
      Alert.alert('Getting Area Error', e.message);
    } finally {
      setLoadingRegion(false);
    }
  };

  const onSelectArea = (region, selectedArea) => {
    showListModal(false);
    const {id, nama} = selectedArea;
    switch (region) {
      case 'kelurahan':
        setForm(state => ({...state, kelurahan: nama}));
        break;
      case 'kecamatan':
        setForm(state => ({
          ...state,
          kecamatan: nama,
          kelurahan: '',
        }));
        onGettingArea('kelurahan', id);
        break;
      case 'kota':
        setForm(state => ({
          ...state,
          kota: nama,
          kecamatan: '',
          kelurahan: '',
        }));
        onGettingArea('kecamatan', id);
        break;
      case 'provinsi':
        setForm(_ => ({
          provinsi: nama,
          kota: '',
          kecamatan: '',
          kelurahan: '',
        }));
        onGettingArea('kota', id);
        break;
    }
  };

  const onSubmit = async () => {
    setSubmitLoading(true);
    const query = {q: form['kelurahan']};
    try {
      const postalCode = await getPostalCode('?' + qs.stringify(query))
        .then(res => {
          return res.data;
        })
        .then(res => {
          if (res.status)
            return res.data.filter(
              val =>
                val['subdistrict'] == form['kecamatan'] &&
                val['urban'] == form['kelurahan'],
            );
          else throw new Error('Kode Pos Tidak Ditemukan');
        });
      setPostalCodeInfo(postalCode[0]);
    } catch (e) {
      Alert.alert('Getting Postal Code Error', e.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const openAreaModal = region => {
    setModalTitle(region);
    setSelectedRegion(area[region]);
    setTimeout(() => {
      showListModal(true);
    }, 500);
  };

  const closeModal = () => {
    setTimeout(() => {
      showListModal(false);
    }, 500);
    setTimeout(() => {
      setSelectedRegion([]);
      setModalTitle('');
      showListModal(false);
    }, 700);
  };

  useEffect(() => {
    if (form['kelurahan'] === '') {
      setAreaValid(false);
      setPostalCodeInfo(null);
    } else {
      setAreaValid(true);
    }
    if (form['provinsi'] === '') {
      onGettingArea();
    }
  }, [form]);

  return (
    <View style={{flex: 1, paddingHorizontal: 16, marginTop: 12}}>
      <AddressSelector
        region={'Provinsi'}
        label={form['provinsi'] || 'Pilih Provinsi'}
        disabled={area['provinsi'].length === 0}
        openList={() => openAreaModal('provinsi')}
      />
      <AddressSelector
        region={'Kota/Kabupaten'}
        label={form['kota'] || 'Pilih Kota/Kabupaten'}
        disabled={area['kota'].length === 0}
        openList={() => openAreaModal('kota')}
      />
      <AddressSelector
        region={'Kecamatan'}
        label={form['kecamatan'] || 'Pilih Kecamatan'}
        disabled={area['kecamatan'].length === 0}
        openList={() => openAreaModal('kecamatan')}
      />
      <AddressSelector
        region={'Kelurahan'}
        label={form['kelurahan'] || 'Pilih Kelurahan'}
        disabled={area['kelurahan'].length === 0}
        openList={() => openAreaModal('kelurahan')}
      />
      <Button
        ripple
        disabled={!areaValid && submitLoading}
        onPress={onSubmit}
        center
        style={{
          borderRadius: 8,
          overflow: 'hidden',
          marginTop: 8,
          marginBottom: 12,
          height: 48,
          width: '100%',
        }}
        contentStyle={{
          backgroundColor: !areaValid ? '#e3e3e3' : color.primary,
          width: '100%',
          paddingHorizontal: 8,
        }}>
        <Text>{submitLoading ? 'Mencari Kode Pos....' : 'Cek Kode Pos'}</Text>
      </Button>

      {postalCodeInfo && !submitLoading && (
        <View style={{marginVertical: 24}}>
          <Label>Provinsi : {postalCodeInfo['province']}</Label>
          <Label>Kota / Kabupaten : {postalCodeInfo['city']}</Label>
          <Label>Kelurahan : {postalCodeInfo['subdistrict']}</Label>
          <Label>Kecamatan : {postalCodeInfo['urban']}</Label>
          <Label>
            Kode Pos :{' '}
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              {postalCodeInfo['postalcode']}
            </Text>
          </Label>
        </View>
      )}

      <AddressModal
        title={modalTitle}
        visible={listModal}
        onSelectList={item => onSelectArea(modalTitle.toLowerCase(), item)}
        closeModal={closeModal}
        data={selectedRegion}
        regionLoading={loadingRegion}
      />
    </View>
  );
};

export default AddressForm;

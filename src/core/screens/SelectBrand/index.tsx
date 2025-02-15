import { View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation } from '@react-navigation/native'
import SearchComponent from '@src/common/components/SearchComponent'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import SelectModal from './components/SelectModal'
import BrandItem from './components/BrandItem'
import { styles } from './styles'
import { spacing } from '@src/common/styles/values'
import { getCompaniesListAPI } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'

export const brandsData = [
	{
		"_id": "677a840a569a769a13cac4e7",
		"name": "Aston Martin",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4e8",
		"name": "Audi",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4e9",
		"name": "Austin",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4ea",
		"name": "Bentley",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4eb",
		"name": "BMW",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4ec",
		"name": "Bugatti",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4ed",
		"name": "Caterham",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4ee",
		"name": "Chevrolet",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4ef",
		"name": "Chrysler",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4f0",
		"name": "Citroën",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4f1",
		"name": "Daewoo",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4f2",
		"name": "Datsun",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4f3",
		"name": "DC",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4f4",
		"name": "Fiat",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4f5",
		"name": "Force Motors",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	},
	{
		"_id": "677a840a569a769a13cac4f6",
		"name": "Ford",
		"isDeleted": false,
		"isSuspended": false,
		"image": "https://motor-api-pp3m.onrender.com/logo.jpeg"
	}
]

const SelectBrand = () => {
	const navigation: any = useNavigation()

	const [searchText, setSearchText] = useState<string>('')

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	const [allBrandsData, setAllBrandsData] = useState<any[]>(brandsData)
	const [searchedBrandsData, setSearchedBrandsData] = useState<any[]>(brandsData)

	useEffect(() => {
		getCompaniesListAPI((res: API_RESPONSE) => {
			if (res.data) {
				setAllBrandsData(res.data)
				setSearchedBrandsData(res.data)
			}
		})
	}, [])

	useEffect(() => {
		searchItemLocally()
	}, [searchText])

	const searchItemLocally = async () => {
		const data =
			allBrandsData?.length > 0
				? allBrandsData?.filter((item: any) => {
					return searchText?.length > 0 ? item?.name?.toLowerCase().includes(searchText?.toLowerCase()) : true
				})
				: allBrandsData
		setSearchedBrandsData(data)
	}

	const RenderBrandItem = ({ item }: { item: any }) => {
		return <BrandItem item={item} onPress={() => setIsModalVisible(true)} />
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Select Your Brand'>
			<View style={styles.main}>
				<View style={commonMarginStyles.marginVerticalM}>
					<SearchComponent searchText={searchText} handleSearch={setSearchText} clearSearch={() => setSearchText('')} />
				</View>
				<FlatList data={searchedBrandsData} renderItem={RenderBrandItem} keyExtractor={(item: any) => item?._id} numColumns={4} columnWrapperStyle={{ gap: scaleWidthPX(spacing.m || 0) }} contentContainerStyle={searchedBrandsData.length === 0 && styles.center} ListEmptyComponent={NoRecordFound} />
			</View>
			{isModalVisible && (
				<SelectModal
					selectedItem={null}
					title='Select Modal'
					subHeaderTitle='Hyundai'
					visible={isModalVisible}
					onClose={() => {
						setIsModalVisible(false)
					}}
					setSelectedItem={(item: any) => {
						setIsModalVisible(false)
						navigation.navigate('VehicleForm')
					}}
					data={searchedBrandsData}
				/>
			)}
		</MainFrame>
	)
}

export default SelectBrand

import React, { useEffect, useState } from 'react'
import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import { Button, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { Post, search } from '@himeka/booru';
import { ImageThumb } from './components/ImageThumb';



function Home(): JSX.Element {
  const [postList, setPostList] = useState<Post[]>([])

  async function fetchData() {
    console.log("FETCHING DATA...")
    const result = await search('safebooru', ['genshin_impact'], { limit: 10, random: false })
    console.info("GETTING POST DATA:")
    console.log(result)
    setPostList(result)
  }

  function renderImageView({ sampleUrl, previewUrl, tags }: Post): JSX.Element {
    if (sampleUrl && previewUrl) {
      let imageUrl = ''
      if (sampleUrl.length > 0) {
        imageUrl = sampleUrl
      } else if (previewUrl.length > 0) {
        imageUrl = previewUrl
      }

      return imageUrl.length > 0 ? <TouchableOpacity onPress={() => {
        console.log(tags)
      }}><ImageThumb src={previewUrl} /></TouchableOpacity> : <></>
    } else {
      return <></>
    }
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Button onPress={fetchData} title="Fetch Data" />
      <View style={{ flex: 1, flexGrow: 1 }}>
        <MasonryFlashList
          data={postList}
          numColumns={2}
          renderItem={({ item }) => renderImageView(item)}
          estimatedItemSize={50}
        />
      </View>
    </View>
  )
}

export default Home
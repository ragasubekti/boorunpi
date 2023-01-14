import React from 'react'
import FastImage from 'react-native-fast-image'


export interface IImageThumb {
  src: string
}

export function ImageThumb({ src }: IImageThumb): JSX.Element {
  return (
    <FastImage source={{ uri: src }} style={{ width: 200, height: 200 }} resizeMode={FastImage.resizeMode.cover} />
  )
}
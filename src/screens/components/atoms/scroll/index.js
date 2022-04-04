import React, {forwardRef} from 'react';
import {ScrollView} from 'react-native';
import color from '_theme/colors';

const Scroll = forwardRef(
  (
    {
      children,
      bgColor,
      style,
      contStyle,
      nested,
      horizontal,
      onScroll,
      paging,
      scrollIndicator,
      snapOffset = [],
      snapInterval,
    },
    ref,
  ) => {
    return (
      <ScrollView
        ref={ref}
        onScroll={onScroll}
        pagingEnabled={horizontal && paging}
        showsHorizontalScrollIndicator={!horizontal && scrollIndicator}
        showsVerticalScrollIndicator={horizontal && scrollIndicator}
        horizontal={horizontal}
        nestedScrollEnabled={nested}
        style={[{backgroundColor: bgColor || color.white}, contStyle]}
        snapToInterval={snapInterval || null}
        snapToOffsets={snapOffset.length > 0 ? snapOffset : null}
        decelerationRate={snapInterval || snapOffset > 0 ? 'fast' : 'normal'}
        contentContainerStyle={style}>
        {children}
      </ScrollView>
    );
  },
);

export default Scroll;

import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos,isPending, canScroll}) => {
console.log(videos);
	return (
		<div className={`videos_list grid grid-cols-12 gap-x-4 gap-y-5 ${canScroll ? 'overflow-y-scroll lg:h-[calc(100vh-66px-60px)]' : ''}`}>
			{
				isPending ? <div className='col-span-12 flex items-center justify-center h-full text-4xl font-bold'>Loading...</div>:
				videos.map((item,index) => (
					item.id.videoId ? <VideoCard video={item} key={item.id.videoId}/> :
					item.id.channelId ? <ChannelCard channel={item} key={item.id.channelId+index}/> :
					item.id.playlistId && <VideoCard video={item} key={item.id.playlistId}/>
				))
			}
		</div>
	)
}

export default Videos
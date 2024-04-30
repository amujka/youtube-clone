import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos}) => {
	console.log("videos",videos);
	return (
		<div className='grid grid-cols-12 gap-4 overflow-y-scroll'>
			{
				videos.map((item,index) => (
					
					<div className='col-span-12 md:col-span-4 xl:col-span-3 2xl:col-span-2 border border-white/50' key={index}>
						{item.id.videoId && <VideoCard video={item}/>}
						{item.id.channelId && <ChannelCard channel={item}/>}
					</div>
				))
			}
		</div>
	)
}

export default Videos
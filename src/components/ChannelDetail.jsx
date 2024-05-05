import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { fetchFromApi } from "../utils/apis";
import Videos from "./Videos";

function ChannelDetail() {
    const [channelDetails, setChannelDetails] = useState(null)
    const [channelVideos, setChannelVideos] = useState([])
    let { id } = useParams();

	useEffect(()=>{
		fetchFromApi(`channels?part=snippet&id=${id}`)
        .then(data => setChannelDetails(data.items[0]))
        .then(()=> console.log(channelDetails))
		fetchFromApi(`search?part=snippet&channelId=${id}&order=date`)
        .then(data => setChannelVideos(data.items))
        .then(()=> console.log(channelVideos))
	},[id])
    return (
        channelDetails &&
        <div className="max-w-7xl mx-auto px-4">
            <div className="border-b border-b-gray-400 pb-4 lg:pb-8">
                <figure className="w-full max-w-7xl max-h-52 mx-auto aspect-video rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src={channelDetails?.brandingSettings.image.bannerExternalUrl} alt={channelDetails?.brandingSettings.channel.title} />
                </figure>
                <div className="flex gap-4 mt-4 lg:flex-row lg:gap-8 lg:mt-8">
                    <figure className="w-20 h-20 lg:w-40 lg:h-40 rounded-full overflow-hidden shrink-0">
                        <picture>
                            <source media="(min-width:1024px)" srcSet={channelDetails.snippet.thumbnails.high.url}/>
                            <img className="w-full h-full" src={channelDetails.snippet.thumbnails.medium.url} alt={channelDetails?.brandingSettings.channel.title}/>
                        </picture>
                    </figure>
                    <div>
                        <h1 className="font-extrabold text-2xl lg:text-4xl">{channelDetails?.brandingSettings.channel.title}</h1>
                        <p className="flex flex-col md:flex-row gap-1 text-sm text-gray-400 mt-2"><span>{channelDetails.snippet.customUrl}</span> <span>{parseInt(channelDetails.statistics.subscriberCount).toLocaleString()} subscribers</span></p>
                        <p className="hidden lg:block text-sm text-gray-400 mt-2">{channelDetails.brandingSettings.channel.description}</p>
                    </div>
                </div>
                <p className="lg:hidden text-sm text-gray-400 mt-2">{channelDetails.brandingSettings.channel.description}</p>
            </div>
            <Videos videos={channelVideos} isPending={false} canScroll={false}/>
        </div>
    )
}

export default ChannelDetail
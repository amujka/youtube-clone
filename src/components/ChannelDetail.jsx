import {useParams} from "react-router-dom"
import Videos from "./Videos";
import useFetch from "../hooks/useFetch";

function ChannelDetail() {
    let { id } = useParams();

    const {data:channelDetails,isPending:channelDetailsPending,error:channelDetailsError} = useFetch(`channels?part=snippet&maxResults=50&id=${id}&`,id)
    const {data:channelVideos,isPending:channelVideosPending} = useFetch(`search?part=snippet&maxResults=50&channelId=${id}&&order=date`,id)

    return (
        channelDetailsPending ? <div className=' flex items-center justify-center h-full text-4xl font-bold'>Loading...</div>:
        channelDetailsError ? <div className=' flex flex-col items-center gap-4 justify-center h-full'></div>:
        <>
            <div className="max-w-7xl mx-auto px-4">
                <div className="border-b border-b-gray-400 pb-4 lg:pb-8">
                    <figure className="w-full max-w-7xl max-h-52 mx-auto aspect-video rounded-2xl overflow-hidden">
                        <img className="w-full h-full object-cover" src={channelDetails[0]?.brandingSettings.image.bannerExternalUrl} alt={channelDetails[0]?.brandingSettings.channel.title} />
                    </figure>
                    <div className="flex gap-4 mt-4 lg:flex-row lg:gap-8 lg:mt-8">
                        <figure className="w-20 h-20 lg:w-40 lg:h-40 rounded-full overflow-hidden shrink-0">
                            <picture>
                                <source media="(min-width:1024px)" srcSet={channelDetails[0]?.snippet.thumbnails.high.url}/>
                                <img className="w-full h-full" src={channelDetails[0]?.snippet.thumbnails.medium.url} alt={channelDetails[0]?.brandingSettings.channel.title}/>
                            </picture>
                        </figure>
                        <div>
                            <h1 className="font-extrabold text-2xl lg:text-4xl">{channelDetails[0]?.brandingSettings.channel.title}</h1>
                            <p className="flex flex-col md:flex-row gap-1 text-sm text-gray-400 mt-2"><span>{channelDetails[0]?.snippet.customUrl}</span> <span>{parseInt(channelDetails[0]?.statistics.subscriberCount).toLocaleString()} subscribers</span></p>
                            <p className="hidden lg:block text-sm text-gray-400 mt-2">{channelDetails[0]?.brandingSettings.channel.description}</p>
                        </div>
                    </div>
                    <p className="lg:hidden text-sm text-gray-400 mt-2">{channelDetails[0]?.brandingSettings.channel.description}</p>
                </div>
                <div className="mt-4 lg:mt-8">
                    {!channelVideosPending && <Videos videos={channelVideos} canScroll={false}/>}
                </div>
            </div>
        </>
    )
}

export default ChannelDetail
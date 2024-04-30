import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';
import ChannelDetail from './components/ChannelDetail';
const App = () => {
	return (
		<BrowserRouter>
			<div className='bg-black h-screen'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Feed />} />
					<Route path='/video/:id' element={<VideoDetail />} />
					<Route path='/channel/:id' element={<ChannelDetail />} />
					<Route path='/search/:search-term' element={<SearchFeed />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;

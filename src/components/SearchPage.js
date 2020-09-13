import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image=""
                channel="Clever Progammer"
                verified
                subs="659k"
                noOfVideos={382}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae quas repudiandae beatae dolorum recusandae obcaecati praesentium in? Cum, laboriosam."
            />
            <hr />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae quas repudiandae beatae dolorum recusandae obcaecati praesentium in? Cum, laboriosam."
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS"
                image="https://source.unsplash.com/collection/190727/246x138"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae quas repudiandae beatae dolorum recusandae obcaecati praesentium in? Cum, laboriosam."
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS"
                image="https://source.unsplash.com/collection/190727/246x138"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae quas repudiandae beatae dolorum recusandae obcaecati praesentium in? Cum, laboriosam."
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS"
                image="https://source.unsplash.com/collection/190727/246x138"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae quas repudiandae beatae dolorum recusandae obcaecati praesentium in? Cum, laboriosam."
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS"
                image="https://source.unsplash.com/collection/190727/246x138"
            />
        </div>
    )
}

export default SearchPage

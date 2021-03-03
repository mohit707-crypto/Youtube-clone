import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPage__filter">
              <TuneOutlinedIcon />
              <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
              image="https://images.justwatch.com/poster/193183335/s592"
              channel="Whats Your Status"
              verified
              subs="660k"
              noOfVideos={385}
              description=" Best Web Series in this world"
             />
             <hr />

             <VideoRow 
               views="1.5m"
               subs="660k"
               description="Ultra Shorts Presents What's Your Status, a web series of 3 different people, going through the 3 different phases of relationships ..."
               timestamp="59 sec ago"
               channel="Whats Your Status"
               title="Episode 1"
               image="http://img.youtube.com/vi/zCNB6Upo0M0/0.jpg"
             />

              <VideoRow 
               views="2.5m"
               subs="770k"
               description="Ultra Shorts Presents What's Your Status, a web series of 3 different people, going through the 3 different phases of relationships ..."
               timestamp="4 Days ago"
               channel="Whats Your Status"
               title="Episode 2"
               image="https://i.ytimg.com/vi/hYq-mfL7Lb8/maxresdefault.jpg"
             />

              <VideoRow 
               views="4.5m"
               subs="7780k"
               description="Ultra Shorts Presents What's Your Status, a web series of 3 different people, going through the 3 different phases of relationships ..."
               timestamp="21 Days ago"
               channel="Whats Your Status"
               title="Episode 3"
               image="https://www.thedigitalhash.com/wp-content/uploads/2018/07/status1.jpg"
             />

              <VideoRow 
               views="5.5m"
               subs="550k"
               description="Ultra Shorts Presents What's Your Status, a web series of 3 different people, going through the 3 different phases of relationships ..."
               timestamp="45 Days ago"
               channel="Whats Your Status"
               title="Episode 4"
               image="https://pbs.twimg.com/media/DhwgkYtU8AAfWax.jpg"
             />
        </div>
    );
}

export default SearchPage; 

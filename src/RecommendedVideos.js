import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
             <div className="recommendedVideos__videos">
                 <VideoCard 
                   title="whats your status"
                   views="2.4M Views"
                   timestamp="4 days to ago"
                   channelImage="https://thumbs.dreamstime.com/z/check-your-status-online-web-site-update-position-words-website-screen-to-illustrate-research-evluation-assessment-35971726.jpg"
                   channel="Web Series"
                   image="http://www.buzzincontent.com/uploads/large/whatsyourstatus.jpg" 
                    />
                 <VideoCard
                     title="How To Become An Android Developer"
                     views="1.4M Views"
                     timestamp="4 days to ago"
                     channelImage="https://developer.android.com/studio/images/studio-icon.svg"
                     channel="Web dev Series"
                     image="https://endivesoftware.com/blog/wp-content/uploads/2018/10/How-does-Android-developers-charge-to-develop-application_1132205840-1140x694.jpg" 
                    />
                
                 <VideoCard
                   title="Headphones & Earphones Buying Gyan ⚡ Ye Aapko Jarur Pata Honi Chahiye 🎧🎧"
                   views="25.4M Views"
                   timestamp=" 45 days to ago"
                   channelImage="http://technewslog.com/wp-content/uploads/2017/02/switch-bluetooth-headphones.jpg"
                   channel="HeadPhones Guru Ji"
                   image="https://images.financialexpress.com/2017/09/headphones.jpg" 
                  />
                 <VideoCard 
                   title="सिर्फ 6 मिनट) रोज ऐसा करने पर पा सकते है महादेव की अनंत कृपा |"
                   views="2.4M Views"
                   timestamp="4 days to ago"
                   channelImage="https://pbs.twimg.com/profile_images/1023526071487143936/txQ7NGAu.jpg"
                   channel="Spiritual Secrets"
                   image="https://static.langimg.com/imagenext/nbtblogs/photo/astro/wp-content/uploads/2018/07/shivji-1.jpg" 
                 />
                 <VideoCard 
                  title="Deadliest Bird On Earth"
                  views="23.4M Views"
                  timestamp="45 days to ago"
                  channelImage="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"
                  channel="vichtra 4U"
                  image="https://www.allaboutbirds.org/news/wp-content/uploads/2020/03/THeron-Anderson-124505431.jpg" 
                  />

                 <VideoCard 
                  title="Motivational Video"
                  views="4.4M Views"
                  timestamp="10 days to ago"
                  channelImage="https://motivationalspeakerz.com/wp-content/uploads/2019/09/female-motivational-speaker.jpg"
                  channel="Series"
                  image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_614138202_365699.jpg" 
                  />  
             </div>
        </div>
    )
}

export default RecommendedVideos; 

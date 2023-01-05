import React ,{useEffect, useState} from "react";
import "./menu.css"
export default function Lmenu()
{
    return(

        <div className="lmenu">
<div className="lcontainer">
<div className="secm1">
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/free/png-256/home-1779425-1512882.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Home</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="images/shorts.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Shorts</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/free/png-128/subscriptions-1781681-1518361.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Subscriptions</span></div>
              
                </div>

                
            </div>
            <div className="secm2">
            <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/library-3163013-2637687.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Library</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/history-1772726-1508617.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>History</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/free/png-256/videos-movies-music-theater-video-player-30439.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Your videos</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/free/png-128/watch-later-1781603-1513853.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Watch Later</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/free/png-256/like-1439749-1214321.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Liked videos</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/alphabet-93-897036.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Show more</span></div>
              
                </div>
            </div>
            <div className="secm3">
                <p style={{fontSize:15,marginLeft:10}}>Subscriptions</p>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/free/png-128/excel-1-129882.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Excel Master</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/travel-271-688998.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Travel</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdni.iconscout.com/illustration/premium/preview/cup-cakes-3630905-3045648.png?w=0&h=700" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Something sweet</span></div>
              
                </div>
            </div>
            <div className="secm4">
                <p style={{fontSize:15,marginLeft:10}}>Explore</p>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/trending-5165886-4301443.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Trending</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/music-tune-3660686-3094947.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Music</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/clapperboard-1709978-1452254.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Movies</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/broadcast-1752947-1492419.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Live</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/controller-6964322-5713717.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Gaming</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/news-50-214015.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>News</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src=" https://cdn.iconscout.com/icon/free/png-128/trophy-medal-badge-prize-award-winner-win-5-21686.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Sports</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/idea-341-589479.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Learning</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/hanger-1819427-1544312.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Fashion</span></div>
              
                </div>
            </div>    
            <div className="secm5">
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/setting-3661039-3095459.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Settings</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/flag-44-89619.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Report History</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/free/png-128/help-3660949-3095369.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Help</span></div>
              
                </div>
                <div className="individual">
               <div className="image"> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/exclamation-6356550-5323514.png" width="25"/></div>
               <div className="text"> <span style={{fontSize:15}}>Send Feedback</span></div>
              
                </div>
                
                
            </div>
            <div className="secm6">
                <div className="end1">
                    <p>About</p>
                    <p>Press</p>
                    <p>Copyright</p>
                </div>
                <div className="end1">
                    <p>Contact us</p>
                    <p>Creators</p>
                </div>
                <div className="end1">
                    <p>Advertise</p>
                    <p>Developers</p>
                </div>
                

                

            </div>
</div>

        </div>
    
    )
       
}
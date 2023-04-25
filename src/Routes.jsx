import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserAccount = React.lazy(() => import("pages/UserAccount"));
const Uploadmedia = React.lazy(() => import("pages/Uploadmedia"));
const Trending = React.lazy(() => import("pages/Trending"));
const SMSSettings = React.lazy(() => import("pages/SMSSettings"));
const SMS = React.lazy(() => import("pages/SMS"));
const SelfDestructiveMessage = React.lazy(() =>
  import("pages/SelfDestructiveMessage")
);
const Repost = React.lazy(() => import("pages/Repost"));
const NearbyFriends = React.lazy(() => import("pages/NearbyFriends"));
const MuteUnmuteChat = React.lazy(() => import("pages/MuteUnmuteChat"));
const MentionsTagging = React.lazy(() => import("pages/MentionsTagging"));
const LiveFeedScheduling = React.lazy(() => import("pages/LiveFeedScheduling"));
const LikePost = React.lazy(() => import("pages/LikePost"));
const InAppGifting = React.lazy(() => import("pages/InAppGifting"));
const Hashtags = React.lazy(() => import("pages/Hashtags"));
const HashtagGenerator = React.lazy(() => import("pages/HashtagGenerator"));
const Groups = React.lazy(() => import("pages/Groups"));
const GroupChat = React.lazy(() => import("pages/GroupChat"));
const GIFs = React.lazy(() => import("pages/GIFs"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const Followers = React.lazy(() => import("pages/Followers"));
const FanWall = React.lazy(() => import("pages/FanWall"));
const ConversationThreading = React.lazy(() =>
  import("pages/ConversationThreading")
);
const ContactSharing = React.lazy(() => import("pages/ContactSharing"));
const Comments = React.lazy(() => import("pages/Comments"));
const CollageCreator = React.lazy(() => import("pages/CollageCreator"));
const Chatbot = React.lazy(() => import("pages/Chatbot"));
const ChatBackupRestore = React.lazy(() => import("pages/ChatBackupRestore"));
const PerformanceTracker = React.lazy(() => import("pages/PerformanceTracker"));
const BroadcastMessage = React.lazy(() => import("pages/BroadcastMessage"));
const SalesReporting = React.lazy(() => import("pages/SalesReporting"));
const Analytics = React.lazy(() => import("pages/Analytics"));
const AddFriends = React.lazy(() => import("pages/AddFriends"));
const InventoryTrendAnalysis = React.lazy(() =>
  import("pages/InventoryTrendAnalysis")
);
const ActivityFeed = React.lazy(() => import("pages/ActivityFeed"));
const GraphicalCharts = React.lazy(() => import("pages/GraphicalCharts"));
const Share = React.lazy(() => import("pages/Share"));
const FriendList = React.lazy(() => import("pages/FriendList"));
const Filter = React.lazy(() => import("pages/Filter"));
const Emaillogin = React.lazy(() => import("pages/Emaillogin"));
const DemoAccount = React.lazy(() => import("pages/DemoAccount"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const AdhocReporting = React.lazy(() => import("pages/AdhocReporting"));
const BaslineReporting = React.lazy(() => import("pages/BaslineReporting"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/baslinereporting" element={<BaslineReporting />} />
          <Route path="/adhocreporting" element={<AdhocReporting />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/demoaccount" element={<DemoAccount />} />
          <Route path="/emaillogin" element={<Emaillogin />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/friendlist" element={<FriendList />} />
          <Route path="/share" element={<Share />} />
          <Route path="/graphicalcharts" element={<GraphicalCharts />} />
          <Route path="/activityfeed" element={<ActivityFeed />} />
          <Route
            path="/inventorytrendanalysis"
            element={<InventoryTrendAnalysis />}
          />
          <Route path="/addfriends" element={<AddFriends />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/salesreporting" element={<SalesReporting />} />
          <Route path="/broadcastmessage" element={<BroadcastMessage />} />
          <Route path="/performancetracker" element={<PerformanceTracker />} />
          <Route path="/chatbackuprestore" element={<ChatBackupRestore />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/collagecreator" element={<CollageCreator />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/contactsharing" element={<ContactSharing />} />
          <Route
            path="/conversationthreading"
            element={<ConversationThreading />}
          />
          <Route path="/fanwall" element={<FanWall />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gifs" element={<GIFs />} />
          <Route path="/groupchat" element={<GroupChat />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/hashtaggenerator" element={<HashtagGenerator />} />
          <Route path="/hashtags" element={<Hashtags />} />
          <Route path="/inappgifting" element={<InAppGifting />} />
          <Route path="/likepost" element={<LikePost />} />
          <Route path="/livefeedscheduling" element={<LiveFeedScheduling />} />
          <Route path="/mentionstagging" element={<MentionsTagging />} />
          <Route path="/muteunmutechat" element={<MuteUnmuteChat />} />
          <Route path="/nearbyfriends" element={<NearbyFriends />} />
          <Route path="/repost" element={<Repost />} />
          <Route
            path="/selfdestructivemessage"
            element={<SelfDestructiveMessage />}
          />
          <Route path="/sms" element={<SMS />} />
          <Route path="/smssettings" element={<SMSSettings />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/uploadmedia" element={<Uploadmedia />} />
          <Route path="/useraccount" element={<UserAccount />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

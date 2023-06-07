import '../styles/videos.css'
import { useState } from "react";
const Videos = () => {
    let [video, setVideo] = useState(
        [
            {
                id: 1,
                thumbnail: "https://i.ytimg.com/vi/MVotUSc7NYw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFfyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEwoRDAP&rs=AOn4CLDVEGvYMJu-9brSs2PkNa7SjHCTdA",
                title: "https://www.youtube.com/watch?v=MVotUSc7NYw&pp=ygUSdG1rb2Mgb2xkIGVwaXNvZGVz",
                channel: "https://www.youtube.com/@TaarakMehtaKaOoltahChashmah",
                views: "22M views"
            },
            {
                id: 2,
                thumbnail: "https://i.ytimg.com/vi/T_lexKUXQy8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFfyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgxIGEoZTAP&rs=AOn4CLBxw63WpEVh6bVvcfnhqlA-ogdn9A",
                title: "https://www.youtube.com/watch?v=T_lexKUXQy8&pp=ygUOYmhhZ3lhIGxha3NobWk%3D",
                channel: "https://www.youtube.com/@zeetv",
                views: "12M views"
            },
            {
                id: 3,
                thumbnail: "https://i.ytimg.com/vi/HWZgQj3bMNk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtDWXpWa8zxowMhaWCR2jcTH52Aw",
                title: "https://www.youtube.com/watch?v=HWZgQj3bMNk&pp=ygUGa2h1c2hp",
                channel: "https://www.youtube.com/@spdigital385",
                views: "2.2M views"
            },
            {
                id: 4,
                thumbnail: "https://i.ytimg.com/vi/Lwi0vHyBw3g/oar2.jpg?sqp=-oaymwEaCJUDENAFSFfyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBSGSpR26QYyDb_wjZSBRpbHu_AGg",
                title: "https://www.youtube.com/shorts/2ygMMLk9EKw",
                channel: "https://www.youtube.com/@EverestMarathi",
                views: "256K views"
            },
            {
                id: 5,
                thumbnail: "https://i.ytimg.com/vi/Z5LM8z6U0D8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWyQcras93SgVu6qSM5JeSb1TDOg",
                title: "https://www.youtube.com/shorts/2ygMMLk9EKw",
                channel: "https://www.youtube.com/@EverestMarathi",
                views: "220K views"
            },
            {
                id: 6,
                thumbnail: "https://i.ytimg.com/vi/sywxIYZWmn4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFfyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFgoVjAP&rs=AOn4CLBUqnajScwn-Lk-Fy8Ax-ozFq7pJw",
                title: "https://www.youtube.com/watch?v=sywxIYZWmn4&pp=ygULdHVtIGpvIGFheWU%3D",
                channel: "https://www.youtube.com/@LofiBeats-07",
                views: "1.2M views"
            },
            {
                id: 7,
                thumbnail: "https://i.ytimg.com/vi/nzW6mEu20ho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAW0sOuOgN8Vxb6aQ37JYPCo_aF2g",
                title: "https://www.youtube.com/watch?v=1ZAhbLaC8Kg&pp=ygUMcmFtIHNpeWEgcmFt",
                channel: "https://www.youtube.com/@zeemusiccompany",
                views: "150K views"
            },
            {
                id: 8,
                thumbnail: "https://i.ytimg.com/vi/xSRMwwm9vlQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByitmV0Rssdq4pXtunMEdhAPZ_bg",
                title: "https://www.youtube.com/watch?v=xSRMwwm9vlQ&pp=ygUUZGhhZ28gc2UgYmFuZGhhIHNvbmc%3D",
                channel: "https://www.youtube.com/@zeemusiccompany",
                views: "2M views"
            },
            {
                id: 9,
                thumbnail: "https://i.ytimg.com/an_webp/oEB3PTtnjX4/mqdefault_6s.webp?du=3000&sqp=CJrZ_aMG&rs=AOn4CLAXjSLsZ3MiAdeuEuHdhT4bQPUOrA",
                title: "https://www.youtube.com/watch?v=dKw7bdk6hQ8&pp=ygURb2dpIGFuZCBjb2Nrcm9hY2g%3D",
                channel: "https://www.youtube.com/@OggyHindi",
                views: "3.4M views"
            },
            {
                id: 10,
                thumbnail: "https://i.ytimg.com/vi/urGQfaeh0Ws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKMBRa7zgZOK31lCskHePPhGq4NQ",
                title: "https://www.youtube.com/watch?v=urGQfaeh0Ws&pp=ygUVcmFkaGEsIGtyaXNobmEgc2VyaWFs",
                channel: "https://www.youtube.com/@StarBharat",
                views: "789K views"
            },
            {
                id: 11,
                thumbnail: "https://i.ytimg.com/vi/zU-03YrSsio/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWTmIJFDlNDoHkqJINGrysKTkHKw",
                title: "https://www.youtube.com/watch?v=46WY0dojLdY",
                channel: "https://www.youtube.com/@tseries",
                views: "356K views"
            },
            {
                id: 12,
                thumbnail: "https://i.ytimg.com/vi/2ygMMLk9EKw/oar2.jpg?sqp=-oaymwEaCJUDENAFSFfyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCkCjzt70ZFDxO1IUDR03zyS_d5Lw",
                title: "https://www.youtube.com/shorts/2ygMMLk9EKw",
                channel: "https://www.youtube.com/@EverestMarathi",
                views: "520K views"
            },
        ]
    )
    let removeVideo = (id, name) => {
        let result = video.filter((x) => x.id !== id)
        setVideo(result)
        alert(`$(name) video got removed`)
    }
    return (
        <div className="videos">
            <h1>Featured Video</h1>
            <div className="videoData">
                {video.map((data) => {
                    return (
                        <div className="video">

                            <img src={data.thumbnail} alt="" />
                            <div className="videoDetails">
                                <h1>{data.id}</h1>
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                                <a href="" onClick={() => removeVideo(data, id, data.channel)}>Remove</a>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}
export default Videos;
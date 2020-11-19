import * as React from "react";
import { Video, VideoFields } from "../lib/search";
import styles from "./VideoDetail.module.css";
import formattedDate from "../lib/date";
import secondsToMs from "../lib/secondsToMs";
import stripTag from "../lib/stripTag";

type Props = {
  video: Pick<Video, keyof VideoFields>;
};

const VideoDetail = ({ video }: Props) => (
  <div className={styles.videoDetail}>
    <div className={styles.videoWrap}>
      <p className={styles.itemTime}>
        <span>{formattedDate(video.startTime)}</span>
        <span className={styles.separate}>投稿</span>
      </p>
      <div className={styles.itemThumbBox}>
        <div className={styles.itemThumb}>
          <div>
            <a
              href={`http://nico.ms/${video.contentId}`}
              className={styles.itemThumbWrap}
              target="_blank"
            >
              <img src={video.thumbnailUrl} alt={video.title} />
            </a>
          </div>
          <span className={styles.videoLength}>
            {secondsToMs(video.lengthSeconds)}
          </span>
        </div>
      </div>
    </div>
    <div className={styles.itemContent}>
      <p className={styles.itemTitle}>
        <a href={`http://nico.ms/${video.contentId}`}>{video.title}</a>
      </p>
      <div>
        <p className={styles.itemDescription}>{stripTag(video.description)}</p>
      </div>
      <div className={styles.itemData}>
        <ul className={styles.list}>
          <li className={styles.count}>
            再生{" "}
            <span className={styles.value}>
              {video.viewCounter.toLocaleString()}
            </span>
          </li>
          <li className={styles.count}>
            コメ{" "}
            <span className={styles.value}>
              {video.commentCounter.toLocaleString()}
            </span>
          </li>
          <li className={styles.count}>
            マイ{" "}
            <span className={styles.value}>
              {video.mylistCounter.toLocaleString()}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default VideoDetail;

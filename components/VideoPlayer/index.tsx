import React from 'react';
import captionStyles from './layouts/captions.module.css';
import styles from './layouts/video-layout.module.css';

import { Captions, Controls, Gesture } from '@vidstack/react';

import * as Buttons from './components/buttons';
import * as Menus from './components/menus';
import * as Sliders from './components/sliders';
import { TimeGroup } from './components/time-group';
import { Title } from './components/title';
import Gestures from './gestures';

export interface VideoLayoutProps {
  thumbnails?: string;
}

const VideoPlayer:React.FC<VideoLayoutProps> = (props) => {
  const {thumbnails} = props;
  const video_url:string = "https://files.vidstack.io/sprite-fight/720p.mp4";


  return (
    <>
      <Gestures />
      <Captions
        className={`${captionStyles.captions} media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`}
      />
      <Controls.Root
        className={`${styles.controls} media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity`}
      >
        <div className="flex-1" />
        <Controls.Group className="flex w-full items-center px-2">
          <Sliders.Time thumbnails={thumbnails} />
        </Controls.Group>
        <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2">
          <Buttons.Play tooltipPlacement="top start" />
          <Buttons.Mute tooltipPlacement="top" />
          <Sliders.Volume />
          <TimeGroup />
          <Title />
          <div className="flex-1" />
          <Buttons.Caption tooltipPlacement="top" />
          <Menus.Settings placement="top end" tooltipPlacement="top" />
          <Buttons.PIP tooltipPlacement="top" />
          <Buttons.Fullscreen tooltipPlacement="top end" />
        </Controls.Group>
      </Controls.Root>
    </>
  )
}

export default VideoPlayer
'use client';

import { useState } from 'react';

const YOUTUBE_VIDEOS = [
  '7lypV97ovyc',
  'aG6uUhiWAPA',
  'zgrwh9S2oz0',
  'd-1kyKSVmvw',
  'lQYug_yWHC8',
];

export default function YoutubeEmbed() {
  const [videoId] = useState(
    () => YOUTUBE_VIDEOS[Math.floor(Math.random() * YOUTUBE_VIDEOS.length)]
  );

  return (
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="Sağlık kamu spotu"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

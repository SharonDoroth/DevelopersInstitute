class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// Instantiate a new Video 
const video1 = new Video("Video 1", "Uploader 1", 120);
video1.watch();

// Instantiate a second Video 
const video2 = new Video("Video 2", "Uploader 2", 180);
video2.watch();

// Bonus
const videosData = [
  { title: "Video 1", uploader: "Uploader 1", time: 120 },
  { title: "Video 2", uploader: "Uploader 2", time: 180 },
  { title: "Video 3", uploader: "Uploader 3", time: 90 },
  { title: "Video 4", uploader: "Uploader 4", time: 240 },
  { title: "Video 5", uploader: "Uploader 5", time: 150 },
];

// Loop through 
const videos = [];
for (const data of videosData) {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
}

// Example 
for (const video of videos) {
  video.watch();
}
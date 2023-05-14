class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

const video1 = new Video("Video 1", "Uploader 1", 120);
video1.watch();

const video2 = new Video("Video 2", "Uploader 2", 180);
video2.watch();

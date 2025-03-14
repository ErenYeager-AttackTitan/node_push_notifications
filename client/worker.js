console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Greatest Anime Of All Time Attack On Titan",
    icon: "https://goodproxy.goodproxy.workers.dev/fetch?url=https://wallpapers.com/images/featured-small/attack-on-titan-poster-wqgkxk56b56hrkco.webp"
  });
});

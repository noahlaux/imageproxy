(() => {
  const imaginaryHost = `http://${location.hostname}:9000`;
  const container = document.getElementById("image");

  function cropImage({ width, height, url }) {
    const proxyUrl = `${imaginaryHost}/crop?width=${width}&height=${height}&gravity=smart&url=${url}`;
    container.style.backgroundImage = `url('${proxyUrl}')`;
  }

  function renderImage() {
    const url = new URL(window.location.href);
    const imageUrl = url.searchParams.get("url");

    cropImage({
      width: container.clientWidth,
      height: container.clientHeight,
      url: imageUrl
    });
  }

  renderImage();

  // resizing is mostly for dev playground
  const debounce = (callback, time = 250, interval) => (...args) =>
    clearTimeout(
      interval,
      (interval = setTimeout(() => callback(...args), time))
    );

  window.addEventListener("resize", debounce(renderImage, 200));
})();

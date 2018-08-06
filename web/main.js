(() => {
  const imaginaryHost = `http://${location.hostname}:9000`;
  const container = document.getElementById("image");

  function getProxyUrl({ width, height, url }) {
    return `${imaginaryHost}/crop?width=${width}&height=${height}&gravity=smart&url=${url}`;
  }

  function renderImage() {
    const url = new URL(window.location.href);
    const imageUrl = url.searchParams.get("url");

    const proxyUrl = getProxyUrl({
      width: container.clientWidth,
      height: container.clientHeight,
      url: imageUrl
    });

    container.style.backgroundImage = `url('${proxyUrl}')`;
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

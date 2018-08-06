# Image proxy

Cleverly crops, resizes & caches image provided with the `url` parameter to full screen dimensions using [imaginary](https://github.com/h2non/imaginary).

## Usage

Run docker-compose.yml using [docker-compose](https://docs.docker.com/compose/)

```sh
docker-compose up
```

Navigate your browser to http://localhost:3001/?url=https://fortunedotcom.files.wordpress.com/2017/08/big-ben.jpg

Use the `url` parameter to point to image. The image above is almost `758KB` & `3002x2003`. You can properly shave off a least a 9 times of the size using the service.

try http://localhost:3001/?url=http://www.jasondunn.com/images/Cape-Breton-Lighthouse-16-9-HDR.jpg and notice how the image crops [cleverly](https://github.com/jcupitt/libvips/blob/master/libvips/conversion/smartcrop.c) when you resize your browser window. It makes sure the lighthouse is always nicely centered, because it's entropy is significant in the overall image.

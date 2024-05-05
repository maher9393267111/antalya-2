const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
const link = (id) =>`/gallery/gallery-${id}.jpg`;

const galleryPhotos = [
  { id: 1 },
  { id: 2 },
  { id: 3},
  { id: 4},
];

const photos = galleryPhotos.map((photo) => {
  const width = 1500;
  const height = 1186;

  return {
    src: link(photo.id),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round(0.8 * breakpoint);
      return {
        src: link(photo.id),
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;

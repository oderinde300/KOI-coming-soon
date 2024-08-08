const ImageComp = ({
  image,
  alt = "image",
  width,
  height,
  className = "",
  handleClick,
}) => {
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onClick={handleClick}
    />
  );
};

export default ImageComp;

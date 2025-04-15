function Video({ image, link, altText = "", className = "" }) {
    return (
      <div
        className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={altText}
            className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-200"
          />
        </a>
      </div>
    );
  }
  
  export default Video;
  
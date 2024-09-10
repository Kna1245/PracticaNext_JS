
  function Profile({src,alt}) {
  return <img src={src}
      alt={alt}  />;
}

 function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile src={"https://i.imgur.com/QIrZWGIs.jpg"} alt={"1"} />
      <Profile src={"https://i.imgur.com/QIrZWGIs.jpg"} alt={"2" }/>
      <Profile src={"https://i.imgur.com/hjfhj.jpg"} alt={"3"} />
    </section>
  );
}


export { 
  Profile, Gallery
}

export default Gallery
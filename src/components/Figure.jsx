function Figure({data, onPrev, onNext}){
  const {url, desc} = data;
  return (
    <figure>
      <img alt="img-1" src={url}></img>
      <figcaption>{desc}</figcaption>
      <button type="button" 
          onClick={e => {
            e.preventDefault();
            onPrev();
          }
        }>
        <img alt="prev" src="images/left.png" >
        </img>
      </button>
      <button type="button" 
          onClick={e => {
            e.preventDefault();
            onNext();
          }
        }>
        <img alt="next" src="images/right.png">
        </img>
      </button>
    </figure>
  );
}

export default Figure;
export const Heading = () => {
    const name = "Malyaj Singh";
    const imgSrc = "https://render.fineartamerica.com/images/rendered/default/poster/7/8/break/images/artworkimages/medium/3/doremon-deepak-pengoria.jpg";
    return (
      <div>
        <h1>Welcome {name} !</h1>
        <p>This is a statement</p>
        <img src={imgSrc} />
      </div>
    )
  }
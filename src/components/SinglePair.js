import "./SinglePair.css";

export default function SinglePair({ pair, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(pair);
    }
  };

  return (
    <div className="pair">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={pair.src} alt="pair front" />
        <img
          className="back"
          src="https://th.bing.com/th/id/R.08a0090c26ab040fdebe5c2501798523?rik=xcqT5SKZHX8ZlQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_1AgA_BSRr40%2fTI_YtyvDrnI%2fAAAAAAAAAkA%2fMLMj23dgqtM%2fs1600%2fhoyleback.jpg&ehk=IDHmlJBGTAPUjdIlHjt%2fSrEG68VHDhKUm%2fBG746zong%3d&risl=&pid=ImgRaw&r=0"
          onClick={handleClick}
          alt="pair back" //handles the click detected by the back of the card image
        />
      </div>
    </div>
  );
}

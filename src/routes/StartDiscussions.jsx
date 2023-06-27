import Footer from "../components/Footer";
import "../components/StartDiscussions.css";
// import profile from "../assets/person.svg"
import Header from "../components/Header";

export const StartDiscussions = () => {
  return (
    <>
    <Header/>
      <section className="containerCommunity">
        <div className="contentCommunity">
          <h1>Animu New Discussion</h1>
          <div className="ContainerDiscussion">
            <h4>START A NEW DISCUSSION</h4>
            <div className="boxDiscussion">
              <div className="box-1">
                {/* <img src={profile} alt="" /> */}
                </div>
              <div className="box-2"><textarea placeholder="enter a title" id="" cols="300" rows="10"></textarea></div>
              <div className="box-3"></div>
              <div className="box-4"><textarea placeholder="say something" id="" cols="300" rows="10"></textarea></div>
            <button className="submit-button" id="">Submit</button>
            </div>
          </div>
        </div>

        <aside className="asideCommunity">
          <p>INFO!</p>
          <p>
            Dikarenakan ini adalah website pertama kami maka dari itu untuk
            konten pada komunitas hanya sekedar forum. Nantikan fitur lainnya
            pada update berikutnya.!
          </p>
        </aside>
      </section>
      <Footer />
    </>
  );
};

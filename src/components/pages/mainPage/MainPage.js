import "./mainPage.scss";
import { Container, Row, Col } from "react-bootstrap";
import AppBanner from "../../appBanner/AppBanner";
import SearchForm from "../../searchForm/SearchForm";
import FavoriteHotels from "../../favoriteHotels/FavoriteHotels";
import SearchesHotels from "../../searchesHotels/SearchesHotels";

function MainPage() {
  return (
    <>
      <Container className="container">
        <AppBanner />
      </Container>
      <Container>
        <div className="main">
          <aside className="main__aside">
            <SearchForm />
            <FavoriteHotels />
          </aside>
          <main>
            <SearchesHotels />
          </main>
        </div>
      </Container>
    </>
  );
}

export default MainPage;

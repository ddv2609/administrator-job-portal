import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import { ConfigProvider } from "antd";
import Footer from "../../components/FooterMain/Footer";
import SearchJob from "../../components/Candidate/Search/SearchJob";
function Home() {

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBg: "blue",
          },
          Select: {
            defaultActiveBg: "blue",
          },
        },
      }}
    >
      <div>
        <Header />
        <div className={styles.pages_job_search}>
          <div className={styles.section_header}>
            <div className={styles.content}>
              <SearchJob />
            </div>
          </div>
          <div
            className={styles.footer_main}
            style={{
              width: "1150px",
              height: "170px",
              margin: "0 auto",
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Home;
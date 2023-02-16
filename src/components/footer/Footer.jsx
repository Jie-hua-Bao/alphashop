import { ReactComponent as SvgIconLogo } from "../../imagefiles/icons/logo.svg";
import { ReactComponent as SvgIconFacebook } from "../../imagefiles/icons/facebook.svg";
import { ReactComponent as SvgIconInstagram } from "../../imagefiles/icons/ig.svg";
import { ReactComponent as SvgIconWhatsapp } from "../../imagefiles/icons/whatsapp.svg";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <SvgIconLogo className="icon-logo" />
        </div>
        <section className="footer-section">
          <h2 className="section-title">客戶服務</h2>
          <div className="section-content">
            <a className="page-link" href="#">
              運送說明
            </a>
            <a className="page-link" href="#">
              退換貨相關
            </a>
            <a className="page-link" href="#">
              付款資訊
            </a>
            <a className="page-link" href="#">
              FAQ
            </a>
          </div>
        </section>
        <section className="footer-section">
          <h2 className="section-title">關於我們</h2>
          <div className="section-content">
            <a className="page-link" href="#">
              品牌故事
            </a>
            <a className="page-link" href="#">
              媒體聯繫
            </a>
            <a className="page-link" href="#">
              Press kit
            </a>
          </div>
        </section>
        <section className="footer-section">
          <h2 className="section-title">資訊</h2>
          <div className="section-content">
            <a className="page-link" href="#">
              隱私權政策
            </a>
            <a className="page-link" href="#">
              Cookie
            </a>
            <a className="page-link" href="#">
              GDPR
            </a>
          </div>
        </section>
        <section className="footer-section">
          <h2 className="section-title">追蹤 ALPHA Shop</h2>
          <div className="section-content">
            <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <SvgIconFacebook className="social-icon cursor-point" />
              <SvgIconInstagram className="social-icon cursor-point" />
              <SvgIconWhatsapp className="social-icon cursor-point" />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

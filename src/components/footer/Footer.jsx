import { ReactComponent as SvgIconLogo } from "../../imagefiles/icons/logo.svg";
import { ReactComponent as SvgIconFacebook } from "../../imagefiles/icons/facebook.svg";
import { ReactComponent as SvgIconInstagram } from "../../imagefiles/icons/ig.svg";
import { ReactComponent as SvgIconWhatsapp } from "../../imagefiles/icons/whatsapp.svg";

function Footer() {
  return (
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-logo-container">
          <SvgIconLogo />
        </div>
        <section class="footer-section">
          <h2 class="section-title">客戶服務</h2>
          <div class="section-content">
            <a class="page-link" href="#">
              運送說明
            </a>
            <a class="page-link" href="#">
              退換貨相關
            </a>
            <a class="page-link" href="#">
              付款資訊
            </a>
            <a class="page-link" href="#">
              FAQ
            </a>
          </div>
        </section>
        <section class="footer-section">
          <h2 class="section-title">關於我們</h2>
          <div class="section-content">
            <a class="page-link" href="#">
              品牌故事
            </a>
            <a class="page-link" href="#">
              媒體聯繫
            </a>
            <a class="page-link" href="#">
              Press kit
            </a>
          </div>
        </section>
        <section class="footer-section">
          <h2 class="section-title">資訊</h2>
          <div class="section-content">
            <a class="page-link" href="#">
              隱私權政策
            </a>
            <a class="page-link" href="#">
              Cookie
            </a>
            <a class="page-link" href="#">
              GDPR
            </a>
          </div>
        </section>
        <section class="footer-section">
          <h2 class="section-title">追蹤 ALPHA Shop</h2>
          <div class="section-content">
            <div class="tel-info">+886 02123-45678</div>
            <div class="social-icon-group">
              <SvgIconFacebook />
              <SvgIconInstagram />
              <SvgIconWhatsapp />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

import "./diamant.css" ;
import DotGrid from "./DotGrid";
import MagicBento from './bento/BottomGrid';
import ScrollableCard from "./carouselCards/carouselCard";
import LocateButton from "./location";
import ceo from "./img/ceo.jpg";

const socialLinks = [
    {
      platform: 'Facebook',
      href: '',
      icon: <i className='bi bi-facebook'></i>,
      className: 'facebook'
    },
    {
      platform: 'Instagram',
      href: '',
      icon: <i className='bi bi-instagram'></i>,
      className: 'instagram'
    },
    {
      platform: 'LinkedIn',
      href: '',
      icon: <i className='bi bi-linkedin'></i>,
      className: 'linkedin'
    },
    {
      platform: 'TikTok',
      href: '',
      icon: <i className='bi bi-tiktok'></i>,
      className: 'tiktok'
    }
  ];
  
  const handleSocialClick = (platform) => {
    console.log(`Social media click: ${platform}`);
  };


const Diamant_blocks = () => {
    return (
      <div>
        <div className="bg">
            <img src="https://gooddiyplans.com/wp-content/uploads/2022/05/9-3-1536x1229.jpg" alt="ff" className="bg-img"/>
            <div className="t-1">DIAMANT</div>
            <div className="t-2">BAR</div>
            <div className="t-3">
              <span className="t-3-1">ATASSI</span>
              <span className="t-3-2">DROME</span>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.className}`}
                  title={social.platform}
                  onClick={() => handleSocialClick(social.platform)}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="contact-open">
              <div className="s-1">
                Contact <br/>
                whatsapp: +229 91655665 <br/>
                téléphone : +229 91655665
              </div>
              <div className="s-2">
                Ouvert 24 heures <br/>
                Tous les jours !
              </div>
            </div>


            <div className="special-info">
              Entrez dans DIAMANT BAR, où l'éclat des lustres en cristal rencontre l'âme du battement de minuit de l'Atassi Drome.
            </div>

            <div className="locate-us">
                <div>Locate Us Instantly!</div>
                <i>
                  <lord-icon
                      src="https://cdn.lordicon.com/surcxhka.json"
                      trigger="loop"
                      colors="primary:#000000,secondary:#eec600"
                      style={{width: '20px', height: '20px'}}
                    />
                </i>
            </div>

            <div className="h-1"></div>
            <div className="h-2"></div>
            <div className="h-3">
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <DotGrid
                        dotSize={5}
                        gap={10}
                        baseColor={`#00000000`}
                        activeColor="#ddb400"
                        proximity={80}
                        shockRadius={250}
                        shockStrength={9}
                        resistance={550}
                        returnDuration={1.5}
                    />
                </div>
            </div>
        </div>

        <div className='sec-sec'>
          <div className="ct">Pourquoi choisir notre bar prestigieux ?</div>
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={100}
            particleCount={1000}
            glowColor="255, 215, 0"
          />
        </div>

        <div className="roler">
          <ScrollableCard />
        </div> 

        <section class="sec-4">
          <div class="float-div">
              <div>The Icon of DIAMANT</div>
              <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing <br/> Lorem ipsum dolor sit amet adipisicing <br/>Lorem ipsum dolor sit amet.
              </div>
          </div>
          <div>
              <div>
                  <img src={ceo} alt="ceo" />
              </div>
              <div class="sec-4-right">
                  <div class="sec-4-l-watch">
                      <img src="https://static.vecteezy.com/system/resources/previews/020/704/147/non_2x/classic-wine-bottle-vintage-country-restaurant-bar-saloon-logo-vector.jpg" alt="cloth"/>
                  </div>
                  <div class="sec-4-writeup">
                      <h2>CEO</h2>
                      Lorem ipsum dolor sit amet <br />Lorem ipsum dolor sit <br />Lorem, ipsum dolor.
                  </div>
              </div>
          </div>
      </section>
      </div>


        
    );
}
export default Diamant_blocks;
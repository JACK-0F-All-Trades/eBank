import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="prod{uct" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="" className="w-[100%] h-[100%] relative z-[5]" />

      {/* for the gradients */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={`${layout.sectionInfo} sm:ml-10 ml-0`}>
      <h2 className={`${styles.heading2} text-white`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dimWhite`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      {/* Now we add two images for apple store and google play store */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[142px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play_store"
          className="w-[128px] h-[128px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;

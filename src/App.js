import "./App.css";
import "./css/main.css";
import { useEffect, useState, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import WalletProvider from "./walletProvider/walletProvider";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { scroll } = useLocomotiveScroll();
  const [state, setConect] = useState(false);

  const onChange = (value) => {
    setConect(value);
  };
  useEffect(() => {
    console.log(state);
  }, [state]);

  const tl = gsap.timeline();
  const ref = useRef(null);
  const options = {
    el: ref.current,
    smooth: true,
  };

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.body,
      smooth: true,
      getSpeed: true,
      getDirection: true,
      inertia: 0.55,
      useKeyboard: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
      // offset: ["100%", 0],
    });

    locoScroll.update();
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrapper scroll" data-scroll-container data-scroll-speed="-10" id="js-scroll">
      {/* <WalletProvider onChange={onChange} /> */}
      <div className="content">
        <header className="main-header">
          <div className="layers">
            <div className="layer__header" data-scroll data-scroll-speed="-2">
              <div className="layers__caption">Welcome to Parallax</div>
              <div className="layers__title">Fairy Forest</div>
            </div>

            <div className="layer layers__base" data-scroll data-scroll-speed="-2"></div>
            <div className="layer layers__middle" data-scroll data-scroll-speed="-1"></div>
            <div className="layer layers__front" data-scroll data-scroll-speed="0"></div>
          </div>
        </header>
        <div className="main-article" data-scroll data-scroll-speed="-2">
          <div className="main-article__content">
            <h2 className="main-article__header">To be continued</h2>
            <p className="main-article__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

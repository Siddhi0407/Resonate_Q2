import EmblaCarousel from "embla-carousel";
import { setupPrevNextBtns, disablePrevNextBtns } from "./prevAndNextButtons";
import { setupDotBtns, generateDotBtns, selectDotBtn } from "./dotButtons";
import "../css/base.css";
import "../css/reset.css";
import "../css/embla.css";

const setupEmblaCarousel = (emblaNode, options) => {
  const viewPort = emblaNode.querySelector(".embla__viewport");
  const prevBtn = emblaNode.querySelector(".embla__button--prev");
  const nextBtn = emblaNode.querySelector(".embla__button--next");
  const dots = emblaNode.querySelector(".embla__dots");
  const embla = EmblaCarousel(viewPort, options);
  const dotsArray = generateDotBtns(dots, embla);
  const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
  const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

  setupPrevNextBtns(prevBtn, nextBtn, embla);
  setupDotBtns(dotsArray, embla);

  embla.on("select", setSelectedDotBtn);
  embla.on("select", disablePrevAndNextBtns);
  embla.on("init", setSelectedDotBtn);
  embla.on("init", disablePrevAndNextBtns);
};

const options = { loop: false };
const emblaNodes = [].slice.call(document.querySelectorAll(".embla"));
const emblaCarousels = emblaNodes.map(emblaNode =>
  setupEmblaCarousel(emblaNode, options)
);

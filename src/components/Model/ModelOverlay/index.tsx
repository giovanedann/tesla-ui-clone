import { useState, useCallback, useLayoutEffect } from "react";
import { useTransform } from "framer-motion";
import useWrapperScroll from "../../../hooks/useWraperScroll";
import { CarModel } from "../../../Context/ModelsContext";
import { Container } from "./styles";

interface Props {
  model: CarModel;
  children?: React.ReactNode;
}

// creating a type that will get only the offsetTop and offsetHeight from the div element
type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const getSectionDimensions = useCallback(() => {
    const { sectionRef: { current } } = model;
    return {
      offsetTop: current?.offsetTop ?? 0,
      offsetHeight: current?.offsetHeight ?? 0,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [getSectionDimensions, model.sectionRef]);

  const { scrollY } = useWrapperScroll();

  // calculating the actual scroll (y) and subtracting from the dimensions of the current div (dimensions)
  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  // adjusting the opacity according to the scroll progress
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );

  // handling pointer events
  const pointerEvents = useTransform(opacity, opacityValue => opacityValue > 0 ? 'auto' : 'none')

  // remember: useTransform hook only works with motion styled components, need to import motion from framer motion and transform the styled.div into styled(motion.div)
  return <Container style={{ opacity, pointerEvents }}>{ children }</Container>;
};

export default ModelOverlay;

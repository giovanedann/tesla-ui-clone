import { Container } from "./styles";
import useModel from '../../../hooks/useModel';
import { useEffect, useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
  children?: React.ReactNode
}

const ModelSection: React.FC<Props> = ({
  modelName, overlayNode, children, ...props
}) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [])

  return (
    <Container ref={ sectionRef } { ...props }>
      { children }
    </Container>
  )
}

export default ModelSection;

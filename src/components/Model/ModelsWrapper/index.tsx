import { Container, OverlaysRoot } from "./styles";
import { useRef, useState, useCallback } from 'react';
import ModelsContext, { CarModel } from '../../../Context/ModelsContext';
import ModelOverlay from '../ModelOverlay';

interface Props {
  children?: React.ReactNode
}

const ModelsWrapper: React.FC<Props> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((prevState) => [...prevState, model])
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((prevState) => (
      prevState.filter((model) => model.modelName !== modelName)
    ))
  }, []);

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find((model) => model.modelName === modelName) || null
  }, [registeredModels]);

  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={ wrapperRef }>
        <OverlaysRoot>
          { registeredModels.map((item, index) => (
            <ModelOverlay key={ item.modelName + index } model={ item }>
              { item.overlayNode }
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        { children }
      </Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper;

import { Container, Spacer } from "./styles";
import { ModelSection, ModelsWrapper } from "../Model";
import DefaultOverlayContent from "../DefaultOverlayContent";
import UniqueOverlay from "../UniqueOverlay";

const models: string[] = [
  'Model One',
  'Model Two',
  'Model Three',
  'Model Four',
  'Model Five',
  'Model Six',
  'Model Seven',
]

const Page: React.FC = () => { 
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((model, index) => (
            <ModelSection
              key={ model + index }
              className="colored"
              modelName={ model }
              overlayNode={
                <DefaultOverlayContent
                  label={ model }
                  description="Order Online for Delivery"
                />
              }
            />
            ))}
        </div>
      <Spacer />
      <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page;
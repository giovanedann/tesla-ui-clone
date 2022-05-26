import ModelsContext from "../Context/ModelsContext";
import { useContext, useEffect, useCallback } from 'react';

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(ModelsContext);

  useEffect(() =>  () => unregisterModel(modelName), [modelName, unregisterModel]);

  const getModel = useCallback(
      () => getModelByName(modelName),
      [getModelByName, modelName]
    );

  return { registerModel, getModel }
}

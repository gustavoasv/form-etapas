import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/formContext";
import { Theme } from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

export const FormStepOne = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      history("/steptwo");
    } else {
      alert("Preencha os dados");
    }
  };

  const nameHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p> Passo de 1/3 {state.currentStep}</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>
        <hr />
        <label>
          Seu nome completo
          <input type="text" autoFocus onChange={nameHandleChange}></input>
        </label>

        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

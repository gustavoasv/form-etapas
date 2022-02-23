import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/formContext";
import { Theme } from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectionOptions";
import { Link } from "react-router-dom";
export const FormStepTwo = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      history("/stepthree");
    } else {
      alert("Preencha os dados");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p> Passo de 2/3 {state.currentStep}</p>
        <h1>{state.name}, o que melhor descreve você</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual
          profissionalmente
        </p>
        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar a menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        ></SelectOption>
        <SelectOption
          title="Sou programador"
          description="Já programo ha 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        ></SelectOption>

        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

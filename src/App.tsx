import { Router } from "./router";
import { FormProvider } from "./contexts/formContext";

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;

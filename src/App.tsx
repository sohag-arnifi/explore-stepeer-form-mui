import "./App.css";
import { Container } from "@mui/material";
import StepperForm from "./components/stepperForm/stepperForm";

function App() {
  return (
    <>
      <Container
        sx={{
          bgcolor: "white",
          width: "100%",
          padding: "100px",
        }}
      >
        <StepperForm />
      </Container>
    </>
  );
}

export default App;

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;

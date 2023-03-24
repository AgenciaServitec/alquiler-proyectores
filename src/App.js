import { Router } from "./router";
import { AuthenticationProvider, VersionProvider } from "./providers";

const App = () => (
  <AuthenticationProvider>
    <Router />
  </AuthenticationProvider>
);

export default App;

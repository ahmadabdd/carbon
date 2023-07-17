import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from "layouts/dashboard/dashboard";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}

export default App;

import Homepage from "./(main)/Homepage";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
}) 
export default function Home() {
  return (
    <>
    {/* <QueryClientProvider client={queryClient}> */}
      <Homepage />
    {/* </QueryClientProvider> */}
    </>
  );
}

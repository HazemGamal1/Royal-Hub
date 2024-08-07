import { Oval } from 'react-loader-spinner'
const FullPageLoader = () => {
  return (
    <div className="fixed top-0 w-full h-full bg-gray-300/45 bg z-[1000] grid place-content-center">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4F46E5"
          secondaryColor='#4F46E5'
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
    </div> 
  )
}

export default FullPageLoader

import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    const errorCode = error?.status
    const erroMessage = error?.error?.message
    const errorStatusText = error?.statusText

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-purple-400">{errorCode || '403' }</h1>
            <h1 className="text-6xl font-medium py-8">{errorStatusText || 'Someting Went Wrong!' }</h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              {erroMessage || 'Please Check Your code overwise Check You Console For finding The Error' }
            </p>
            <Link to="/">
              <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

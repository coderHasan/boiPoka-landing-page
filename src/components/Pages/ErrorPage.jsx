const ErrorPage = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="text-center">
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <p className="text-2xl mt-4">Oops! Page not found.</p>
            <p className="text-lg mt-2 text-gray-600">
              The page you’re looking for doesn’t exist or may have been moved.
            </p>
          </div>

          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search for pages..."
              className="input input-bordered w-full mb-4"
            />
            <div className="flex justify-center space-x-4">
              <a href="/" className="btn btn-primary">
                Go Home
              </a>
            </div>
          </div>
          <footer className="mt-10 text-sm text-gray-500">
            Need help?{" "}
            <a href="/" className="text-primary">
              Contact us
            </a>
            .
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

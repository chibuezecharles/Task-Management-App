import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

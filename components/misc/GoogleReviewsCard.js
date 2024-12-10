import React from "react";

const GoogleReviewsCard = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg border border-yellow-300 rounded-lg p-4 flex items-center space-x-4 bg-white-500 z-50">
      {/* Google Icon and Title */}
      <div>
        <div className="flex items-center space-x-2">
          {/* Inline SVG for Google Icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png"
            alt="Google Logo"
            className="w-5  h-5"
          />
          <span className="font-medium text-gray-900">Google Reviews</span>
        </div>
        {/* Rating and Stars */}
        <div className="flex items-center mt-2">
          <span className="text-3xl font-bold text-gray-900">4.9</span>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <div>
            <p className="text-gray-800 font-medium">11,500 +</p>
            <div className="flex text-yellow-400">
              {/* Star Icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FCBF02"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.849 1.42 8.284L12 18.896l-7.421 4.471L6 15.083 0 9.234l8.332-1.216z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FCBF02"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.849 1.42 8.284L12 18.896l-7.421 4.471L6 15.083 0 9.234l8.332-1.216z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FCBF02"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.849 1.42 8.284L12 18.896l-7.421 4.471L6 15.083 0 9.234l8.332-1.216z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FCBF02"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.849 1.42 8.284L12 18.896l-7.421 4.471L6 15.083 0 9.234l8.332-1.216z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FCBF02"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.849 1.42 8.284L12 18.896l-7.421 4.471L6 15.083 0 9.234l8.332-1.216z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsCard;

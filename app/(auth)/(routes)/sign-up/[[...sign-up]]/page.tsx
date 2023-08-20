import { useEffect } from "react";

import { SignUp } from "@clerk/nextjs";



export default function Page() {

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Check if the URL contains the redirect_url parameter
    if (currentUrl.includes('redirect_url=')) {
      // Split the URL into base URL and query parameters
      const [baseUrl, queryParams] = currentUrl.split('?');

      // Parse the query parameters into an object
      const params = new URLSearchParams(queryParams);

      // Delete the redirect_url parameter from the params object
      params.delete('redirect_url');

      // Create a new URL without the redirect_url parameter
      const newUrl = baseUrl + (params.toString() ? '?' + params.toString() : '');

      // Redirect to the new URL
      window.location.href = newUrl;
    }
  }, []);

  return <SignUp />;
}
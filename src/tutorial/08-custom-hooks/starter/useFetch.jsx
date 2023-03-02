import React from "react";

const useFetch = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [user, setUser] = React.useState(null);
    
    const fetchUser = async (url) => {
        try {
          const resp = await fetch(url);
          // console.log(resp);
          if (!resp.ok) {
            setIsError(true);
            setIsLoading(false);
            return;
          }
  
          const user = await resp.json();
          setUser(user);
        } catch (error) {
          setIsError(true);
          // console.log(error);
        }
        // hide loading
        setIsLoading(false);
    };

    return [isLoading, isError, user, fetchUser ]
}

export default useFetch;
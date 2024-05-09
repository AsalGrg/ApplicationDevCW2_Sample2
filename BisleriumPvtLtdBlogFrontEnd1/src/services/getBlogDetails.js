import api_urls from "./api_urls";

export async function get_blog_details(blogId) {
    const api_url = api_urls.getBlogDetails(blogId);
    const token = "Bearer "+localStorage.getItem("token");
    
    try {
      const res = await fetch(api_url, 
        {
        method:"GET",
          headers:{
              Authorization: token,
          }
      }
      );
  
      return res;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }
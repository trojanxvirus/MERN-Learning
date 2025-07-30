function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data Fetched");
        }, 2000)
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Comment Data Fetched");
      }, 3000);
    });
}


async function getBlogData() {
    
    try {
        console.log("Fetching blog data");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();
        //can be written as:
        const [postData, commentData] =await Promise.all([fetchPostData(),fetchCommentData()])

        console.log(postData);
        console.log(commentData);
        
        
        console.log("fetch completed");
        
        
    } catch(error){
        console.log("Error fetching blog data", error);
        
    }
}

getBlogData();
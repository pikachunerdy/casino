  export async function addUserReview (review) {
    return await fetch(`127.0.0.1:8000/reviews/`, {
        method: "POST",
        body: JSON.stringify(review)
    }).then((response) => response.body)
    .then((body => {
        console.log('response body tetsing', body)
    }));
}
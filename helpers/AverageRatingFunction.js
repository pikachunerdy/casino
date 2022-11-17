export function getAllDataForOneCasino(casinoData, casino_name) {
    const arrOfSameCasinoRatings = casinoData.filter((casinoObj) => {
      if (casinoObj.casino_name === casino_name) return casinoObj;
    });

    return arrOfSameCasinoRatings;
  }

  export function calculateCasinoAvgRating(arrCasinoObj) {
   console.log('arr obj', arrCasinoObj)
        //takes in arrayOfCasinoObjects
    const res = { up_vote: [], down_vote: [] };
    let numCasinoObj = 0; //could add a counter for each value
    arrCasinoObj.forEach((casinoObj) => {
      const { score, up_vote, down_vote } = casinoObj;
      if (score !== null || score !== undefined) {
        res.score === undefined ? (res.score = +score) : (res.score += +score);
        numCasinoObj++;
      }

      res.up_vote.push(up_vote);
      res.down_vote.push(down_vote);
    });

    res.up_vote.flat(3);
    res.down_vote.flat(3); // verify how many flat is needed

    

    const avgCasinoRatingObj = {
      score: (res.score / numCasinoObj).toFixed(2),
      // avgScore: (numCasinoObj += numCasinoObj) / numCasinoObj.length,
      percent: Math.round(((res.score / numCasinoObj) / 5) * 100),
      // pos: up_vote.length,
      // neg: down_vote.length,
    };

    console.log(`score`, avgCasinoRatingObj)
    
    return [avgCasinoRatingObj];
  }




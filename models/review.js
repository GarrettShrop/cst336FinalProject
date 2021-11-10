
class review {
    id
    reviewText
    reviewNumber
    lastUpdated
}


function isValidNumber(reviewNumber) {
    return reviewNumber > 0 && reviewNumber < 6;
}

function isValidText(reviewText) {
    return reviewText !== "";
}


// exports.isValidReview = async (reviewText, reviewNumber) => {
//     return isValidText(reviewText) && isValidNumber(reviewNumber);
// }


// app.js

// reviewRouter = require('pathtoreviewrouterfile');

// app.use('/reviews', reviewRouter)

// reviewRouter.js
// reviewController = require('path to review controlle file');


// router.post('/', reviewController.create);

// reviewController.js
// review = require('/models/review');

// function create(req, res, next) {
//     let {reviewText, reviewNumber} = req.body;
//     if (review.isValidReview(reviewText, reviewNumber)) {
//         pool.query('create the review using the data up above');
//     }

// }


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {   
        name: { type: String },
        book: [{ type: Schema.ObjectId, ref: 'Book' }],
    }
);

// Virtual for book's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });
    GenreSchema
    .virtual('title')
    .get(function () {
      return this.name;
    });
//Export model
module.exports = mongoose.model('Genre', GenreSchema);
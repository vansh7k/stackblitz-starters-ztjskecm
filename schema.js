const mongoose = require('mongoose');
const BlogPostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        description: "Unlocking the Secrets of Modern Web Development."
    },
    content:{
        type: String,
        required: true,
        minlength: 50,
        description: 'modern development .'
        },
    author: {
        type: String,
        required: true,
        description: 'ruskin bond.'
    },
    tags: {
        type: [String],
        description: 'Optional field for storing tags or keywords related to the post.'
        },
    category: {
        type: String,
        default: 'General',
        description: 'Indicates the post category.'
        },
    likes: {
        type: [String],
        description: 'Stores usernames of users who liked the post.'
        },
    createdAt: {
        type: Date,
        default: Date.now,
        description: 'Automatically records the post creation time.'
        },
    updatedAt: {
        type: Date,
        description: 'Automatically updated on modifications.'
    },
    
    timestamps: true 
    });

    const CommentSchema = new mongoose.Schema({
    username: {
            type: String,
            required: true,
            description: 'Username of the commenter.'
        },
    message: {
            type: String,
            required: true,
            description: 'The comment text.'
        },
    commentedAt: {
            type: Date,
            default: Date.now,
            description: 'Automatically records the comment creation time.'
        }
        });
    comments: [CommentSchema]
    
    

    module.exports = mongoose.model('BlogPost', BlogPostSchema);


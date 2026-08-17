const { GraphQLList, GraphQLString, GraphQLID } = require('graphql');
const { UserType, PostType, CommentType } = require('./types');
const { User, Post, Comment } = require('../models');

const users = {
    type: new GraphQLList(UserType),
    async resolve() {
        return await User.find()
    }
}

const user = {
    type: UserType,
    descripcion: "Get a user by id",
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_, args) {
        return await User.findById(args.id)
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: "get all posts",
    resolve: () => Post.find()
}

const post = {
    type: PostType,
    description: "get a post by id",
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_, args) {
        return await Post.findById(args.id)
    }
}

const comments = {
    type: CommentType,
    description: "get all comments",
    resolve: () => Comment.find()
}


const comment = {
    type: CommentType,
    description: "get a comment by id",
    args: {
        id: { type: GraphQLID }
    },
    resolve: (_, { id }) => Comment.findById(id)
}

module.exports = { users, user, posts, post, comments, comment }
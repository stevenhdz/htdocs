const { GraphQLString, GraphQLID } = require("graphql");
const { User, Post, Comment } = require("../models");
const { createJWTToken } = require("../util/auth");
const { PostType, CommentType } = require("./types");

const register = {
    type: GraphQLString,
    description: "Register a new user and return token",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString }
    },
    async resolve(_, args) {

        const { username, email, password, displayName } = args

        const user = User({ username, email, password, displayName })

        await user.save()

        const token = createJWTToken({ _id: user._id, username: user.username, email: user.email })

        return token
    }
}

const login = {
    type: GraphQLString,
    description: "Login a user and returns a token",
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_, args) {

        const user = await User.findOne({ email: args.email }).select('+password')

        if (!user || args.password !== user.password) throw new Error("Invalid credentials")

        const token = createJWTToken({ _id: user._id, username: user.username, email: user.email })

        return token
    }
}

const createPost = {
    type: PostType,
    description: "Create a new post",
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    async resolve(_, args, { verifiedUser }) {

        const post = new Post({
            title: args.title,
            body: args.body,
            authorId: verifiedUser._id
        })

        await post.save()

        return post

    }
}

const updatePost = {
    type: PostType,
    description: "Update a post",
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    async resolve(_, { id, title, body }, { verifiedUser }) {

        if (!verifiedUser) throw new Error("Unauthorized")

        const updatedPost = await Post.findOneAndUpdate(
            {
                _id: id, authorId: verifiedUser._id
            },
            {
                title: title,
                body: body
            },
            {
                new: true,
                runValidators: true
            }
        )

        return updatedPost

    }
}


const deletePost = {
    type: GraphQLString,
    description: "delete a post",
    args: {
        postId: { type: GraphQLID },
    },
    async resolve(_, { postId }, { verifiedUser }) {

        if (!verifiedUser) throw new Error("Unauthorized")

        const postDeleted = await Post.findOneAndDelete({
            _id: postId,
            authorId: verifiedUser._id
        })

        if (!postDeleted) throw new Error("Post no found")

        return "Post deleted"
    }
}



const createComment = {
    type: CommentType,
    description: "add a comment to a post",
    args: {
        comment: { type: GraphQLString },
        postId: { type: GraphQLID }
    },
    async resolve(_, { comment, postId }, { verifiedUser }) {

        const newComment = new Comment({
            comment: comment,
            postId,
            userId: verifiedUser._id
        })
        return newComment.save()
    }
}

const updateComment = {
    type: CommentType,
    description: "update a comment",
    args: {
        id: { type: GraphQLID },
        comment: { type: GraphQLString }
    },
    async resolve(_, { id, comment }, { verifiedUser }) {

        if (!verifiedUser) throw new Error("Unauthorized")

        const commentUpdated = await Comment.findOneAndUpdate(
            {
                _id: id,
                userId: verifiedUser._id
            },
            {
                comment: comment
            },
            {
                new: true,
                runValidators: true
            }
        )

        if (!commentUpdated) throw new Error("Comment not found")

        return commentUpdated
    }
}


const deleteComment = {
    type: GraphQLString,
    description: "Delete a comment",
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_, { id }, { verifiedUser }) {
        if (!verifiedUser) throw new Error("Unauthorized")

        const commentDelete = await Comment.findOneAndDelete({
            _id: id,
            userId: verifiedUser._id
        })

        if (!commentDelete) throw new Error("Comment not found")

        return 'Comment deleted'
    }
}


module.exports = {
    register,
    login,
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment
}
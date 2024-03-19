const Task = require('./models/Task');

const resolvers = {
    Query: {
        hello: () => 'Welcome',
        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks
        },
        getTask: async (_, args) => {
            const task = await Task.findById(args.id)
            return task
        }
    },
    Mutation: {
        createTask: async (parent, args, context, info) => {
            const { title, description } = args.task
            const newTasks = new Task({ title, description })
            await newTasks.save()
            return newTasks
        },
        deleteTask: async (parent, args, context, info) => {
            const { id } = args
            await Task.findByIdAndDelete(id)
            return 'TASK DELETED'
        },
        updateTask: async (parent, { task, id }, context, info) => {
            await Task.findByIdAndUpdate(id, {
                $set: task
            }, { new: true })
            return task
        }
    }
}

module.exports = { resolvers }
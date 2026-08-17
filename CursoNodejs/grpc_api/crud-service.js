const { ItemModel } = require('./models');

class CrudService {
    static async readItem(call, callback) {
        try {
            const itemId = call.request.id;
            const item = await ItemModel.findOne({ id: itemId }).exec();
            callback(null, item);
        } catch (err) {
            callback(err, null);
        }
    }

    static async updateItem(call, callback) {
        try {
            const updatedItem = call.request;
            const item = await ItemModel.findOneAndUpdate({ id: updatedItem.id }, updatedItem, { new: true }).exec();
            callback(null, item);
        } catch (err) {
            callback(err, null);
        }
    }

    static async deleteItem(call, callback) {
        try {
            const itemId = call.request.id;
            const item = await ItemModel.findOneAndDelete({ id: itemId }).exec();
            callback(null, item);
        } catch (err) {
            callback(err, null);
        }
    }


    static listItems(call) {
        const stream = call;
        const cursor = ItemModel.find().cursor();
        cursor.eachAsync(
            (item) => {
                stream.write(item);
            },
            (err) => {
                if (err) {
                    console.error(err);
                    stream.emit('error', err);
                }
                stream.end();
            }
        );
    }
}

module.exports = { CrudService };

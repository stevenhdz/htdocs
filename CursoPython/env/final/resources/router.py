from flask import request, jsonify, Blueprint
from datetime import datetime
from database import tasks


endpoints = Blueprint('routes-tasks', __name__)


@endpoints.route('/tasks', methods=['POST'])
def add_task():
    title = request.json['title']
    created_date = datetime.now().strftime("%x")

    data = (title, created_date)
    task_id = tasks.insert_task(data)

    if task_id:
        task = tasks.select_task_by_id(task_id)
        return jsonify(task), 201
    return jsonify({'message': 'Internal Error'}), 400


@endpoints.route('/tasks', methods=['GET'])
def get_tasks():
    data = tasks.select_all_tasks()

    if data:
        return jsonify({'tasks': data}), 200
    elif data == False:
        return jsonify({'message': 'Internal Error'}), 400
    else:
        return jsonify({'tasks': {}}), 200


@endpoints.route('/tasks/one', methods=['GET'])
def get_tasks_id():
    id_arg = request.args.get('id')
    data = tasks.select_task_by_id(id_arg)

    if data:
        return jsonify({'tasks': data}), 200
    elif data == False:
        return jsonify({'message': 'Internal Error'}), 400
    else:
        return jsonify({'tasks': {}}), 200


@endpoints.route('/tasks', methods=['PUT'])
def update_task():
    title = request.json['title']
    completed = request.json['completed']
    id_arg = request.args.get('id')

    if tasks.update_task(id_arg, (title, completed)):
        task = tasks.select_task_by_id(id_arg)
        return jsonify(task), 200
    return jsonify({'message': 'Internal Error'}), 400


@endpoints.route('/tasks', methods=['DELETE'])
def delete_task():
    id_arg = request.args.get('id')

    if tasks.delete_task(id_arg):
        return jsonify({'message': 'Task Deleted'}), 200
    return jsonify({'message': 'Internal Error'}), 400

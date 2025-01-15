import asyncio
import cProfile
import multiprocessing
import threading
from functools import lru_cache

def fors():

    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:

        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]}

        for j in rules["steps"]:

            match j.get("step"):
                case "automateX":
                    print("automateX")
                case "iam":
                    print("iam")
                case "main":
                    print("main")
                    print(id)
                case _:
                    print("default")


def fors1():

    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:

        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]}

        for j in rules["steps"]:

            if j.get("step") == "automateX":
                print("automateX")
            elif j.get("step") == "iam":
                print("iam")
            elif j.get("step") == "main":
                print("main")
                print(id)
            else:
                print("default")

@lru_cache(maxsize=1, typed=True)
def fors_cache():

    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:

        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]}

        for j in rules["steps"]:

            if j.get("step") == "automateX":
                print("automateX")
            elif j.get("step") == "iam":
                print("iam")
            elif j.get("step") == "main":
                print("main")
                print(id)
            else:
                print("default")

def process_step(step, id):
    result = []
    match step:
        case "automateX":
            result = {"step": "automateX"}
        case "iam":
            result = {"step": "iam"}
        case "main":
            result = {"step": "main", "id": id}
        case _:
            result = {"step": "default"}
    return result


def fors2ultimate():
    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:
        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]
        }

        tasks = []
        for j in rules["steps"]:
            step = j.get("step")
            tasks.append(process_step(step, id))
        return tasks


async def process_step(step, id):
    result = []
    match step:
        case "automateX":
            result = {"step": "automateX"}
        case "iam":
            result = {"step": "iam"}
        case "main":
            result = {"step": "main", "id": id}
        case _:
            result = {"step": "default"}
    return result


async def fors2():
    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:
        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]
        }

        tasks = []
        for j in rules["steps"]:
            step = j.get("step")
            tasks.append(process_step(step, id))
        return tasks

@lru_cache(maxsize=2, typed=True)
async def fors3_cache_async():
    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:
        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]
        }

        tasks = []
        for j in rules["steps"]:
            step = j.get("step")
            tasks.append(process_step2(step, id))
        await asyncio.gather(*tasks)


async def process_step2(step, id):
    result = []
    match step:
        case "automateX":
            result = {"step": "automateX"}
        case "iam":
            result = {"step": "iam"}
        case "main":
            result = {"step": "main", "id": id}
        case _:
            result = {"step": "default"}
    return result


async def fors3():
    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:
        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]
        }

        tasks = []
        for j in rules["steps"]:
            step = j.get("step")
            tasks.append(process_step2(step, id))
        await asyncio.gather(*tasks)


def fors1_optimizado():
    cases_relation = [222, 333, 334, 444]

    pasos = {
        "automateX": lambda: print("automateX"),
        "iam": lambda: print("iam"),
        "main": lambda id: print("main", id),
        "default": lambda: print("default")
    }

    for id in cases_relation:
        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]
        }

        for j in rules["steps"]:
            step = j.get("step")
            pasos.get(step, pasos["default"])(
            ) if step != "main" else pasos[step](id)


def process_step_multiprocessing(step, id):
    if step == "automateX":
        print("automateX")
    elif step == "iam":
        print("iam")
    elif step == "main":
        print("main")
        print(id)
    else:
        print("default")


def fors_multiprocessing():
    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:
        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]
        }

        processes = []
        for j in rules["steps"]:
            step = j.get("step")
            p = multiprocessing.Process(
                target=process_step_multiprocessing, args=(step, id))
            processes.append(p)
            p.start()

        for p in processes:
            p.join()


def process_step_threading(step, id):
    if step == "automateX":
        print("automateX")
    elif step == "iam":
        print("iam")
    elif step == "main":
        print("main")
        print(id)
    else:
        print("default")


def fors_threading():
    cases_relation = [222, 333, 334, 444]

    for id in cases_relation:
        rules = {
            "steps": [
                {"step": "automateX"},
                {"step": "main"},
                {"step": "iam"}
            ]
        }

        threads = []
        for j in rules["steps"]:
            step = j.get("step")
            t = threading.Thread(
                target=process_step_threading, args=(step, id))
            threads.append(t)
            t.start()

        for t in threads:
            t.join()


async def main():
    print("normal")
    fors()
    print("normal")
    fors1()
    print("cache")
    fors_cache()
    print("async/await")
    await fors2()
    print("async/await and cache")
    await fors3()
    await fors3_cache_async()
    print("ultimate")
    fors2ultimate()
    print("optimizado")
    fors1_optimizado()
    print("multiprocessing")
    fors_multiprocessing()
    print("threading")
    fors_threading()


if __name__ == "__main__":
    # time in ms
    cProfile.run("asyncio.run(main())", sort="tottime",
                 filename="output_profile.prof")

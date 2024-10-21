import asyncio
import cProfile
import timeit


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


async def process_step(step, id):
    if step == "automateX":
        print("automateX")
    elif step == "iam":
        print("iam")
    elif step == "main":
        print("main")
        print(id)
    else:
        print("default")


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
        await asyncio.gather(*tasks)


async def process_step2(step, id):
    match step:
        case "automateX":
            print("automateX")
        case "iam":
            print("iam")
        case "main":
            print("main")
            print(id)
        case _:
            print("default")


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
            tasks.append(process_step(step, id))
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


async def main():
    fors()
    fors1()
    await fors2()
    await fors3()
    fors1_optimizado()


if __name__ == "__main__":
    cProfile.run("asyncio.run(main())", sort="totime",
                 filename="output_profile.prof")

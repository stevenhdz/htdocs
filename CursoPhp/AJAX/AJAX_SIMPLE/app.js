$(document).ready(function () {
  console.log("funcionando");

  let edit = false;
  $("#task-result").hide();
  fetchTask();

  $("#search").keyup(function (e) {
    if ($("#search").val()) {
      let search = $("#search").val();
      $.ajax({
        url: "task-search.php",
        type: "POST",
        data: { search: search },
        success: function (response) {
          let tasks = JSON.parse(response);
          let template = "";

          tasks.forEach((task) => {
            template += `<li>
                        ${task.name}
                    </li>`;
          });

          $("#container").html(template);
          $("#task-result").show();
        },
      });
    }
  });

  $("#task-form").submit(function (e) {
    const postData = {
      name: $("#name").val(),
      description: $("#description").val(),
      id: $("#taskId").val(),
    };

    //edit
    let url = edit === false ? "task-add.php" : "task-edit.php";

    $.post(url, postData, function (response) {
      fetchTask();
      $("#task-form").trigger("reset");
    });
    e.preventDefault();
  });

  function fetchTask() {
    $.ajax({
      url: "task-list.php",
      type: "GET",
      success: function (response) {
        let tasks = JSON.parse(response);
        let template = "";

        tasks.forEach((task) => {
          template += `<tr taskId="${task.id}">
              <td> ${task.id}</td>
              <td> <a href="#" class="task-item">${task.name}</a></td>
              <td> ${task.description}</td>
              <td><button class="task-delete btn btn-danger">Delete</button></td>
                      </tr>`;
        });

        $("#tasks").html(template);
      },
    });
  }

  $(document).on("click", ".task-delete", function () {
    if (confirm("Estas seguro? ")) {
      let element = $(this)[0].parentElement.parentElement;
      let id = $(element).attr("taskId");
      $.post("task-delete.php", { id: id }, function (response) {
        fetchTask();
      });
    }
  });

  $(document).on("click", ".task-item", function () {
    if (confirm("Estas seguro? ")) {
      let element = $(this)[0].parentElement.parentElement;
      let id = $(element).attr("taskId");
      $.post("task-single.php", { id: id }, function (response) {
        const task = JSON.parse(response);
        $("#name").val(task.name);
        $("#description").val(task.description);
        $("#taskId").val(task.id)
        edit = true;
      });
    }
  });
});

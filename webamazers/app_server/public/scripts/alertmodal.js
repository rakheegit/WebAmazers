function prompt(data) {
  showBSModal({
    title: data.title,
    body: data.body,
    actions: [
      {
        label: "Close",
        cssClass: "btn-success",
        onClick: function(e) {
          $(e.target)
            .parents(".modal")
            .modal("hide");
        }
      }
    ]
  });
}

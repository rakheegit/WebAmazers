//added
function loadM(webdata) {
  showBSModal({
    title: "Edit Values for : " + webdata.Website,
    body:
      "<ul>" +
      '<li>Country_Rank:    <input type="text" name="Country_Rank" id = "Country_Rank" value=' +
      webdata.Country_Rank +
      "><br></li>" +
      '<li>Child_Safety:    <input type="text" name="Child_Safety" id = "Child_Safety" value=' +
      webdata.Child_Safety +
      "><br></li>" +
      '<li>Trustworthiness: <input type="text" name="Trustworthiness" id = "Trustworthiness" value=' +
      webdata.Trustworthiness +
      "><br></li>" +
      '<li>Avg_Daily_Pageviews: <input type="text" name="Avg_Daily_Pageviews" id = "Avg_Daily_Pageviews" value=' +
      webdata.Avg_Daily_Pageviews +
      "><br></li>" +
      '<li>Privacy: <input type="text" name="Privacy" id = "Privacy" value=' +
      webdata.Privacy +
      "><br></li>",

    actions: [
      {
        label: "Cancel",
        cssClass: "btn-danger",
        onClick: function(e) {
          $(e.target)
            .parents(".modal")
            .modal("hide");
        }
      },
      {
        label: "Save",
        cssClass: "btn-success",
        onClick: function(e) {
          WebsiteData = {
            _id: webdata._id,
            Website: webdata.Website,
            Country_Rank: $("#Country_Rank")[0].value,
            Child_Safety: $("#Child_Safety")[0].value,
            Trustworthiness: $("#Trustworthiness")[0].value,
            Avg_Daily_Pageviews: $("#Avg_Daily_Pageviews")[0].value,
            Privacy: $("#Privacy")[0].value
          };
          $.ajax({
            url: "/editDbData/" + $webId,
            type:"PUT",
            data: WebsiteData,
            success: function(data) {
              alert(data.msg);
              window.location.reload();
            }
          });
        }
      }
    ]
  });
}
//added

function loadModel(webdata) {
  showBSModal({
    title: "Displaying the selected record",
    body:
      "<ul><li>" +
      "Website: " +
      webdata.Website +
      "</li>" +
      "<li>" +
      "Country Rank: " +
      webdata.Country_Rank +
      "</li>" +
      "<li>" +
      "Child Sefety: " +
      webdata.Child_Safety +
      "</li>" +
      "<li>" +
      "Trustworthiness: " +
      webdata.Trustworthiness +
      "</li>" +
      "<li>" +
      "Average Daily Views: " +
      webdata.Avg_Daily_Pageviews +
      "</li>" +
      "<li>" +
      "Privacy: " +
      webdata.Privacy +
      "</li>" +
      "</ul>",
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

function load_new_web_form(form_body) {
  showBSModal({
    title: "Add new website",
    body: form_body,
    actions: [
      {
        label: "Cancel",
        cssClass: "btn-danger",
        onClick: function(e) {
          $(e.target)
            .parents(".modal")
            .modal("hide");
        }
      },
      {
        label: "Save",
        cssClass: "btn-success",
        onClick: function(e) {
          var Website = {
            website: $("#website")[0].value,
            country: $("#country_rank")[0].value,
            safety: $("#safety")[0].value,
            trust: $("#trust")[0].value,
            pageview: $("#pageviews")[0].value,
            privacy: $("#privacy")[0].value
          };
          if (
            parseInt(Website.country) != NaN &&
            parseInt(Website.pageview) != NaN
          ) {
            $.ajax({
              url: "/insertDbData",
              type: "POST",
              data: Website,
              success: function(data) {
                alert(data.msg);
                $(e.target)
                  .parents(".modal")
                  .modal("hide");
                window.location.reload();
              }
            });
          }
          else{
              alert
          }
        }
      }
    ]
  });
}

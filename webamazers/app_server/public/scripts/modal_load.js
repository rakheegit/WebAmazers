//added
function loadM(webdata) {
  showBSModal({
    title: "Edit Values for : " + webdata.Domain,
    body:
      "<ul>" +
      '<li>Rank:    <input type="text" name="Rank" id = "Rank" value=' +
      webdata.Rank +
      "><br></li>" +
      '<li>Traffic Share:    <input type="text" name="Traffic_Share" id = "Traffic_Share" value=' +
      webdata.Traffic_Share +
      "><br></li>" +
      '<li>Bounce Rate: <input type="text" name="Bounce_Rate" id = "Bounce_Rate" value=' +
      webdata.Bounce_Rate +
      "><br></li>" +
      '<li>Average Visit Duration: <input type="text" name="Avg_Visit_Duration" id = "Avg_Visit_Duration" value=' +
      webdata.Avg_Visit_Duration +
      "><br></li>" +
      '<li>Average Monthly Visits: <input type="text" name="Avg_Month_Visits" id = "Avg_Month_Visits" value=' +
      webdata.Avg_Month_Visits +
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
            Website: webdata.Domain,
            Rank: $("#Rank")[0].value,
            Avg_Visit_Duration: $("#Avg_Visit_Duration")[0].value,
            Avg_Month_Visits: $("#Avg_Month_Visits")[0].value,
            Traffic_Share: $("#Traffic_Share")[0].value,
            Bounce_Rate: $("#Bounce_Rate")[0].value
          };
          $.ajax({
            url: "/editDbData/" + $webId,
            type: "PUT",
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

// Domain	Traffic_Share	Rank	Monthly Visits	Bounce_Rate	Desktop_Users	Mobile_Users	Pages_Per_Visit	Average_Duration_per_visit	Data_Change	Data_Favicon	Google_adsense_enabled	 Unique_Visitors

function loadModel(webdata) {
  showBSModal(
    {
      title: "Displaying the selected record",
      body:
        "<ul><li>" +
        "Website: " +
        webdata.Domain +
        "</li>" +
        "<li>" +
        "Rank: " +
        webdata.Rank +
        "</li>" +
        "<li>" +
        "Traffic Share: " +
        webdata.Traffic_Share +
        "</li>" +
        "<li>" +
        "Bounce Rate: " +
        webdata.Bounce_Rate +
        "</li>" +
        "<li>" +
        "Number of pages per visit: " +
        webdata.Pages_Per_Visit +
        "</li>" +
        "<li>" +
        "Average Monthly Visits: " +
        webdata.Avg_Month_Visits +
        "</li>" +
        "<li>" +
        "Average Visit Duration: " +
        webdata.Avg_Visit_Duration +
        "</li>" +
        "<li>" +
        "Unique Users: " +
        webdata.Unique_Users +
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
    },
    function() {
      dragElement(document.getElementsByClassName("modal fade")[0].children[0]);
    }
  );
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
          } else {
            alert;
          }
        }
      }
    ]
  });
}

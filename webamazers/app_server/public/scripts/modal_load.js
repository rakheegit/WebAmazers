//added
function loadM(webdata) {
  showBSModal({
    title: "Edit Values for : " + webdata.Website,
    body:
      "<ul>" +
      '<li>Rank:    <input type="text" name="Rank" id = "Rank" value=' +
      webdata.Rank +
      "><br></li>" +
      '<li>Domain:    <input type="text" name="Domain" id = "Domain" value=' +
      webdata.Domain +
      "><br></li>" +
      '<li>Desktop_Users: <input type="text" name="Desktop_Users" id = "Desktop_Users" value=' +
      webdata.Desktop_Users +
      "><br></li>" +
      '<li>Traffic_Share: <input type="text" name="Traffic_Share" id = "Traffic_Share" value=' +
      webdata.Traffic_Share +
      "><br></li>" +
      '<li>Bounce_Rate: <input type="text" name="Bounce_Rate" id = "Bounce_Rate" value=' +
      webdata.Bounce_Rate +
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

// Domain	Traffic_Share	Rank	Monthly Visits	Bounce_Rate	Desktop_Users	Mobile_Users	Pages_Per_Visit	Average_Duration_per_visit	Data_Change	Data_Favicon	Google_adsense_enabled	 Unique_Visitors													

function loadModel(webdata) {
  showBSModal({
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
      "Desktop_Users: " +
      webdata.Desktop_Users +
      "</li>" +
      "<li>" +
      "Mobile_Users: " +
      webdata.Mobile_Users +
      "</li>" +
      "<li>" +
      "Traffic_Share: " +
      webdata.Traffic_Share +
      "</li>" +
      "<li>" +
      "Bounce_Rate: " +
      webdata.Bounce_Rate +
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

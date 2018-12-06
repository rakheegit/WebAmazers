
function loadM(webdata) {
  showBSModal(
    {
      title: "Edit Values for : " + webdata.Domain,
      body:
        "<ul>" +
        '<li>Rank :    <input type="text" name="Rank" id = "Rank" value=' +
        webdata.Rank +
        "><br></li>" +
        '<li>Traffic Share :    <input type="text" name="Traffic_Share" id = "Traffic_Share" value=' +
        webdata.Traffic_Share +
        "><br></li>" +
        '<li>Bounce Rate :    <input type="text" name="Bounce_Rate" id = "Bounce_Rate" value=' +
        webdata.Bounce_Rate +
        "><br></li>" +
        '<li>Number of pageviews per visit :    <input type="text" name="Pages_Per_Visit" id = "Pages_Per_Visit" value=' +
        webdata.Pages_Per_Visit +
        "><br></li>" +
        '<li>Average Monthly Visits :    <input type="text" name="Avg_Month_Visits" id = "Avg_Month_Visits" value=' +
        webdata.Avg_Month_Visits +
        "><br></li>" +
        '<li>Changes in website from yesterday :    <input type="text" name="Website_Change" id = "Website_Change" value=' +
        webdata.Website_Change +
        "><br></li>" +
        '<li>Does it support Google Adsense :    <input type="text" name="Adsense" id = "Adsense" value=' +
        webdata.Adsense +
        "><br></li>" +
        '<li>Ratio of Desktop Device Users :    <input type="text" name="Desktop_Share" id = "Desktop_Share" value=' +
        webdata.Desktop_Share +
        "><br></li>" +
        '<li>Bounce Rate : <input type="text" name="Mobile_Share" id = "Mobile_Share" value=' +
        webdata.Mobile_Share +
        "><br></li>" +
        '<li>Unique Users : <input type="text" name="Unique_Users" id = "Unique_Users" value=' +
        webdata.Unique_Users +
        "><br></li>" +
        '<li>Average Visit Duration :  <input type="text" name="Avg_Visit_Duration" id = "Avg_Visit_Duration" value=' +
        webdata.Avg_Visit_Duration +
        "><br></li>" +
        "</ul>",

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
              Domain: webdata.Domain,
              Traffic_Share: $("#Traffic_Share")[0].value,
              Rank: $("#Rank")[0].value,
              Bounce_Rate: $("#Bounce_Rate")[0].value,
              Pages_Per_Visit: $("#Pages_Per_Visit")[0].value,
              Avg_Month_Visits: $("#Avg_Month_Visits")[0].value,
              Mobile_Share: $("#Mobile_Share")[0].value,
              Avg_Visit_Duration: $("#Avg_Visit_Duration")[0].value,
              Website_Change: $("#Website_Change")[0].value,
              Icon_Url: webdata.Icon_Url,
              Adsense: $("#Adsense")[0].value,
              Desktop_Share: $("#Desktop_Share")[0].value,
              Unique_Users: $("#Unique_Users")[0].value
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
    },
    function() {
      dragElement(document.getElementsByClassName("modal fade")[0].children[0]);
    }
  );
}

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
        "Number of pageviews per visit: " +
        webdata.Pages_Per_Visit +
        "</li>" +
        "<li>" +
        "Average Monthly Visits: " +
        webdata.Avg_Month_Visits +
        "</li>" +
        "<li>" +
        "Percentage of Mobile Device Users: " +
        (webdata.Mobile_Share * 100).toFixed(2) +
        "</li>" +
        "<li>" +
        "Percentage of Desktop Device Users: " +
        (webdata.Desktop_Share * 100).toFixed(2) +
        "</li>" +
        "<li>" +
        "Unique Users: " +
        webdata.Unique_Users +
        "</li>" +
        "<li>" +
        "Does it support Google Adsense: " +
        webdata.Adsense +
        "</li>" +
        "<li>" +
        "Changes in website from yesterday: " +
        webdata.Website_Change +
        "</li>" +
        "<li>" +
        "Average Visit Duration: " +
        webdata.Avg_Visit_Duration +
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
  showBSModal(
    {
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
              Domain: webdata.Domain,
              Traffic_Share: $("#Traffic_Share")[0].value,
              Rank: $("#Rank")[0].value,
              Bounce_Rate: $("#Bounce_Rate")[0].value,
              Pages_Per_Visit: $("#Pages_Per_Visit")[0].value,
              Avg_Month_Visits: $("#Avg_Month_Visits")[0].value,
              Mobile_Share: $("#Mobile_Share")[0].value,
              Avg_Visit_Duration: $("#Avg_Visit_Duration")[0].value,
              Website_Change: $("#Website_Change")[0].value,
              Icon_Url: webdata.Icon_Url,
              Adsense: $("#Adsense")[0].value,
              Desktop_Share: $("#Desktop_Share")[0].value,
              Unique_Users: $("#Unique_Users")[0].value
            };
            {
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
          }
        }
      ]
    },
    function() {
      dragElement(document.getElementsByClassName("modal fade")[0].children[0]);
    }
  );
}

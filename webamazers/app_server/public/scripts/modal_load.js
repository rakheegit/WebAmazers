
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

  function loadM(webdata) {
    showBSModal({
      title: webdata.Website,
      body:
        "<ul>" +
        '<li>Country_Rank:    <input id="country_name" type="text" name="Country_Rank" value=' +
        webdata.Country_Rank +
        "><br></li>" +
        '<li>Child_Safety:    <input type="text" name="Child_Safety" value=' +
        webdata.Child_Safety +
        "><br></li>" +
        '<li>Trustworthiness: <input type="text" name="Trustworthiness" value=' +
        webdata.Trustworthiness +
        "><br></li>" +
        '<li>Avg_Daily_Pageviews: <input type="text" name="Avg_Daily_Pageviews" value=' +
        webdata.Avg_Daily_Pageviews +
        "><br></li>" +
        '<li>Privacy: <input type="text" name="Privacy" value=' +
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
            //alert("Save button clicked");
            $.post({
              url: "/editDbData",
              data: WebsiteData,
              success: function(data) {
                alert(data.msg);
              }
            });
          }
        }
      ]
    });
  }


  function load_new_web_form(webdata) {
    showBSModal({
      title: webdata.Website,
      body:
        "<ul>" +
        '<li>Website Name:    <input id="website" type="text" name="Website" value=' +
        webdata.Country_Rank +
        "><br></li>" +
        '<li>Country_Rank:    <input id="country_rank" type="text" name="Country_Rank" value=' +
        webdata.Country_Rank +
        "><br></li>" +
        '<li>Child_Safety:    <input id="safety" type="text" name="Child_Safety" value=' +
        webdata.Child_Safety +
        "><br></li>" +
        '<li>Trustworthiness: <input id="trust" type="text" name="Trustworthiness" value=' +
        webdata.Trustworthiness +
        "><br></li>" +
        '<li>Avg_Daily_Pageviews: <input id="pageviews" type="text" name="Avg_Daily_Pageviews" value=' +
        webdata.Avg_Daily_Pageviews +
        "><br></li>" +
        '<li>Privacy: <input id="privacy" type="text" name="Privacy" value=' +
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
            //alert("Save button clicked");
            $.post({
              url: "/editDbData",
              data: WebsiteData,
              success: function(data) {
                alert(data.msg);
              }
            });
          }
        }
      ]
    });
  }


  
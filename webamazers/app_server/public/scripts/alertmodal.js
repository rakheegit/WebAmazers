function prompt(data) {
  showBSModal(
    {
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
    },
    function() {
      dragElement(document.getElementsByClassName("modal fade")[0].children[0]);
    }
  );
}


function comparemodal(data) {
  showBSModal(
    {
      title: "Comparing the websites",
      body:
        '<div class="comparison">' +
        "<table>" +
        '<thead> <tr> <th class="tl"></th> <th class="compare-heading">' +
        data.webs[0].Domain +
        "</th>" +
        '<th class="compare-heading">' +
        data.webs[1].Domain +
        "</th></tr>" +
        "</thead>" +
        "<tbody> " +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Logo</td> <td> <img src="'+ data.webs[0].Icon_Url +'"></img> </td> <td><img src="'+data.webs[1].Icon_Url  +'"></img></td> </tr>' +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Rank</td> <td> '+ data.webs[0].Rank +' </td> <td>'+ data.webs[1].Rank +' </td> </tr>' +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Traffic Share</td> <td>'+ data.webs[0].Traffic_Share +'</td> <td>'+ data.webs[1].Traffic_Share +'</td> </tr>' +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Bounce Rate</td> <td>'+ data.webs[0].Bounce_Rate +'</td> <td>'+ data.webs[1].Bounce_Rate +'</td> </tr>' +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Average Monthly Visits</td> <td>'+ data.webs[0].Avg_Month_Visits +'</td> <td>'+ data.webs[1].Avg_Month_Visits +'</td> </tr>' +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Average Duration per Visit</td> <td>'+ data.webs[0].Avg_Visit_Duration +'</td> <td>'+ data.webs[1].Avg_Visit_Duration +'</td> </tr>' +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Mobile Users vs Desktop User (%)</td> <td>'+ (data.webs[0].Mobile_Share*100).toFixed(2)+' : ' + (data.webs[0].Desktop_Share*100).toFixed(2)+'</td> <td>'+ (data.webs[1].Mobile_Share*100).toFixed(2)+' : ' + (data.webs[1].Desktop_Share*100).toFixed(2)+'</td> </tr>' +
        '<tr> <td></td> <td colspan="4"></td> </tr> <tr class="compare-row"> <td>Pageviews per Visit</td> <td>'+ data.webs[0].Pages_Per_Visit +'</td> <td>'+ data.webs[1].Pages_Per_Visit +'</td> </tr>' +
        "</tbody>" +
        "<table>" +
        "</div>",
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

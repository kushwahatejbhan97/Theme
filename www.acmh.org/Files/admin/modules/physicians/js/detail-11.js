window.DS_OPT = {
  buildSummaryHTML: function(data, ctx) {
    var x;
    if (data && data.valid) {
      var profile = data.profile;
      if (profile) {
        return '<!-- <div class="ds-title">' + profile.name + '</div> -->' +
          '<div class="inline1"><span class="ds-stars ds-stars' + profile.averageStarRatingStr  + '"/span></div> '  +
          '<div class="inline ds-xofy"> <span class="ds-average">' + profile.averageRatingStr + ' </span><span class="ds-average-max" style="color:black; font-weight:bold;">out of 5 <br/></span></div>' +
          '<div class="inline ds-ratings"><span class="ds-ratingcount">&nbsp;(' + profile.reviewcount + '</span> ' + profile.reviewCountLabel + '</div>' +
          '<div class="inline ds-comments"><span class="ds-commentcount">, ' + profile.bodycount + '</span> ' + profile.bodyCountLabel + ')</div>' + '<br class=clearBoth />' +
         
         '<script type="application/ld+json">{' +
          ' "@context": "http://schema.org",' +
          '"@type": "MedicalOrganization",' +
          '"name": "' + profile.name + '",' +
          '"aggregateRating": {' +
          '"@context": "http://schema.org",' +
          '"@type": "AggregateRating",' +
          '"ratingValue": "' + profile.averageRatingStr + '",' +
          '"reviewCount": "' + profile.reviewcount + '"}' +
          '}' +
          '<\/script>';
      }
    }
  }

};

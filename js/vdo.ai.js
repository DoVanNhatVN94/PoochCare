
    /*04-Dec-2021 20:46:54*/

    if(sessionStorage.getItem('vdo_error_v-w3layouts')) {
        var debugScript = document.createElement('script');
        debugScript.setAttribute('data-consolejs-channel', sessionStorage.getItem('vdo_error_v-w3layouts'));
        debugScript.src = 'https://remotejs.com/agent/agent.js';
        document.head.appendChild(debugScript);
    }
    var vdo_analyticsID = 'UA-113932176-35';
(function(v, d, o, ai) {
    ai = d.createElement('script');
    ai.async = true;
    ai.src = o;
    d.head.appendChild(ai);
})(
    window,
    document,
    'https://www.googletagmanager.com/gtag/js?id=' + vdo_analyticsID
);

function vdo_analytics() {
    window.dataLayer.push(arguments);

}
(function () {
  window.dataLayer = window.dataLayer || [];
  vdo_analytics("js", new Date());
})();
vdo_analytics('event', 'loaded', { send_to: vdo_analyticsID, event_category: 'vdoaijs', event_label: 'v-w3layouts' });


function logPixel(requestObject){

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://analytics.vdo.ai/logger', true);

    xhr.send(JSON.stringify(requestObject));
}

var requestObject = {
  domainName: location.hostname,
  page_url:location.href,
  tagName: 'v-w3layouts',
  event: 'loaded',
  eventData: 1,
  uid: ''
};

logPixel(requestObject);

try {



function insideSafeFrame() {
  try {
    if(top != self && window.innerWidth > 1 && window.innerHeight > 1) {
      return true;
    }
    if(top.location.href) {
      return false;
    }
  } catch (error) {
    return true;
  }
}



var w_vdo = (insideSafeFrame()) ? window : window.top,
d_vdo = w_vdo.document;
(function (window, document, deps, publisher) {
  var protocol = window.location.protocol;

  window.vdo_ai_ = window.vdo_ai_ || {};
  window.vdo_ai_.cmd = window.vdo_ai_.cmd || [];

    function loadPlayerDiv(id,parentId,iframeBurst=false) {
    if (!iframeBurst) {
      if(document.getElementById(id) == null) {
        var s = document.createElement('div');
        s.id = id;
      } else{
        var s = document.getElementById(id);
      }
       if (parentId != '') {
         var parentDiv = document.getElementById(parentId);
         parentDiv.style.display = "block";
         parentDiv.style.width = "100%";
         if (document.getElementById(parentId).parentNode.offsetWidth < 350){
           var margin = (352 - document.getElementById(parentId).parentNode.clientWidth )/2 ;
           parentDiv.style.marginLeft = '-'+margin + 'px';
         }
         parentDiv.appendChild(s);
       } else{
         document.body.appendChild(s);
       }

    } else{

      var parentIframes = top.document.querySelectorAll('iframe');
      for (var i=0; i < parentIframes.length; i++) {
        var el = parentIframes[i];
        if (el.contentWindow === self) {
            // here you can create an expandable ad
            var s = document.createElement('div');
            s.style.zIndex=111;
            s.style.margin = "0 auto";
            s.style.display = "block";
            s.style.position = "relative";
            s.width = 'fit-content';
            s.id = id;
            var googleDiv = el.parentNode;


            if (parentId != '') {
              var parentDiv = document.createElement('div');
              parentDiv.id = parentId;
              parentDiv.style.display = "block";
              parentDiv.style.width = "100%";
              parentDiv.appendChild(s);
              googleDiv.insertBefore(parentDiv, el);
            } else{
              googleDiv.insertBefore(s, el);
            }


            googleDiv.style.width = "auto";
            googleDiv.parentNode.style.width='auto';
            googleDiv.parentNode.style.height='auto';
        }
      }
    }
  }

  

  var playerLoaded = false;
  var adframeConfig = {"desktop":{"show":true,"muted":true,"width":640,"height":360,"bottomMargin":10,"topMargin":10,"unitType":"content-floating","leftOrRight":{"position":"left","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":60000},"passback":{"allow":false,"src":"","string":"","timeout":15000,"type":"timeout","value":15000},"smallWidth":498,"smallHeight":280,"crossSize":17,"dispose_off":false,"bannerOff":false,"companionOff":false,"autoResize":true},"mobile":{"dispose_off":false,"show":true,"muted":true,"width":333,"height":250,"bottomMargin":10,"topMargin":10,"unitType":"content","leftOrRight":{"position":"right","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":60000},"passback":{"allow":false,"type":"timeout","value":15000,"src":"","string":"","timeout":15000},"smallWidth":333,"smallHeight":250,"crossSize":17,"bannerOff":false,"companionOff":false,"autoResize":false},"bottomMargin":10,"showOnlyFirst":false,"cancelTimeout":10000,"id":"vdo_ai_8616","muted":true,"playsinline":true,"autoplay":true,"preload":true,"video_clickthrough_url":"","pubId":"650","brandLogo":{"img":"","url":""},"coppa":false,"add_on_page_ready":"no","showLogo":true,"adbreak_offsets":[0,5,10],"show_on_ad":false,"autoReplay":true,"close_after_first_ad_timer":0,"canAutoplayCheck":true,"domain":"w3layouts.com","path":"a.vdo.ai\/core\/v-w3layouts\/adframe.js","unitId":"_vdo_ads_player_ai_3944","tag_type":"other","parent_div":"v-w3layouts","playlist_id":null,"hls":false,"media_url":"https:\/\/vhs.vdo.ai\/","playlistType":"local","content_sources":[{"video":"uploads\/videos\/1635934310836182606622ad6.m3u8","img":"uploads\/thumbnails\/1635934310836182606622ad6.png"}],"show_on":"ads-ad-started","unitStyle":"single","disposeOnSkip":false,"autoplay_player":false,"playAdsOnly":false,"tagType":"video","google_mcm":"","google_mcm_apac":"","bidders":{"0":{"banner":{"amazon":[{"bidder":"amazon","params":{"placementId":"w3layouts.com"}}],"prebid":[{"bidder":"appnexus","params":{"placementId":20931114,"floor":0.5}},{"bidder":"eplanning","params":{"ci":"30135"}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v_w3layouts_b_pre_1","floor":"0"}}]},"bids":[{"bidder":"appnexus","params":{"placementId":20931101,"floor":0.5,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"v_w3layouts_v_pre_1","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"floor":"0"}},{"bidder":"spotx","params":{"channel_id":"308751","ad_unit":"instream","floor":0.5}},{"bidder":"Pubmatic_EBDA","params":{"placementId":"vdo_ai"}}]},"5":{"bids":[{"bidder":"appnexus","params":{"placementId":21452885,"floor":0.5,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"w3layouts.com_mid1_0x0_ATF","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"floor":"0"}},{"bidder":"Pubmatic_EBDA","params":{"placementId":"vdo_ai"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":21452890,"floor":0.5}},{"bidder":"eplanning","params":{"ci":"30135"}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"w3layouts.com_mid1_336x280_ATF","floor":"0"}}]}},"10":{"bids":[{"bidder":"appnexus","params":{"placementId":21452889,"floor":0.5,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"w3layouts.com_mid2_0x0_ATF","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"floor":"0"}},{"bidder":"Pubmatic_EBDA","params":{"placementId":"vdo_ai"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":21452891,"floor":0.5}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"w3layouts.com_mid2_336x280_ATF","floor":"0"}}]}}},"targeting":[],"waterfallTags":{"0":["pubads.g.doubleclick.net\/gampad\/ads?iu=\/26001828\/vdoai-dfp-parent-adunit\/z1_dfp_v_w3layouts_v_pre_1&description_url=http%3A%2F%2Fw3layouts.com&tfcd=0&npa=0&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vpos=preroll&sz=288x162%7C300x250%7C400x300%7C419x236%7C640x360%7C640x480%7C1x1"],"5":["pubads.g.doubleclick.net\/gampad\/ads?iu=\/26001828\/DFP_Z1_Parent_Second_AdBreak\/z1_dfp_v_w3layouts_v_mid1_1&description_url=http%3A%2F%2Fw3layouts.com&tfcd=0&npa=0&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vpos=preroll&sz=288x162%7C300x250%7C400x300%7C419x236%7C640x360%7C640x480%7C1x1","googleads.g.doubleclick.net\/pagead\/ads?client=ca-video-pub-7094677798399606&slotname=v-w3layouts-v-mid1-1&ad_type=video&description_url=http%3A%2F%2Fw3layouts.com&max_ad_duration=60000&videoad_start_delay=0&vpmute=1&vpa=1&sdmax=60000"],"10":["pubads.g.doubleclick.net\/gampad\/ads?iu=\/26001828\/DFP_Z1_Parent_third_AdBreak\/z1_dfp_v_w3layouts_v_mid2_1&description_url=http%3A%2F%2Fw3layouts.com&tfcd=0&npa=0&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vpos=preroll&sz=288x162%7C300x250%7C400x300%7C419x236%7C640x360%7C640x480%7C1x1","googleads.g.doubleclick.net\/pagead\/ads?client=ca-video-pub-7094677798399606&slotname=v-w3layouts-v-mid2-1&ad_type=video&description_url=http%3A%2F%2Fw3layouts.com&max_ad_duration=60000&videoad_start_delay=0&vpmute=1&vpa=1&sdmax=60000"]},"adx":{"0":[{"name":"google","placement_id":"v-w3layouts-b-pre-1v"}],"5":[{"name":"google","placement_id":"v-w3layouts-b-mid1-1"}],"10":[{"name":"google","placement_id":"v-w3layouts-b-mid2-1"}]},"s2s":false,"overflow_size":false,"handle_url_change":true,"style":"","ver":"v2.1"};

  var checkTimer = setInterval(function() {
      if(window.initVdo && typeof window.google != 'undefined' && window.google.ima) {
       callAdframe();
      }
  }, 1000);


  function callAdframe() {
    if(!playerLoaded) {
        playerLoaded = true;
        clearInterval(checkTimer);
        window.vdo_ai_.cmd.push(function() {
          window.initVdo(adframeConfig);
        });

    }
  }


  function loadScriptSync(src, id) {
    return new Promise(function(resolve, reject) {

        if(src.indexOf('ima3.js') > 0 && document.querySelector('script[src*="imasdk.googleapis.com/js/sdkloader/ima3.js"]')) {
          if(window.google && window.google.ima) {

            resolve();
            return false;
          } else {
            document.querySelector('script[src*="imasdk.googleapis.com/js/sdkloader/ima3.js"]').addEventListener('load', resolve);
            return false;
          }
        }
        var s = document.createElement("script");
        s.id = id;
        var existingScript = document.getElementById(id);

        s.async = true;
        s.src = protocol + src;
        document.body.appendChild(s);
        s.onload = resolve;
        s.onerror = reject;
    })
  }

  function inIframe(){try{return self!==top}catch(r){return!0}}var iframe_Burst=inIframe() ? insideSafeFrame() ? false : true : false;



  //#region full_dependencies testing
  function startTag(version){

                    loadPlayerDiv('_vdo_ads_player_ai_3944','v-w3layouts',iframe_Burst);
       if(typeof window.initVdo !== 'function') {  // Check for existing dependencies
            Promise.all([
              loadScriptSync(deps + "dependencies_hbv4_latest/vdo.min.js?v="+((typeof version === 'undefined') ? '' : version), "_vdo_ads_css_5654_"),
              loadScriptSync("//imasdk.googleapis.com/js/sdkloader/ima3.js", "_vdo_ads_sdk_5654_")
            ]).then(function() {
               callAdframe();
          })
        }

  }
  var current_url = location.host + location.pathname;
  current_url = current_url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
  var failsafeCheck = false;
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {
    if(!failsafeCheck) {
      failsafeCheck = true;
      clearTimeout(failsafeTimeout);
      var response = JSON.parse(this.response);

      if(response.agent=="false"){

        adframeConfig = Object.assign(adframeConfig, response);
        startTag(adframeConfig.ver);

      }
    }
  }.bind(oReq);
  oReq.open("get", "https://targeting.vdo.ai/allowed_url.php?type=json&url=" + encodeURIComponent(current_url) + "&tag=v-w3layouts&domain=" + adframeConfig.domain, true);
  oReq.send();

  var failsafeTimeout = setTimeout(function() {
    if(!failsafeCheck) {
      failsafeCheck = true;
      var response = {"allowed":"true","agent":"false","ip_address":"null","country":"unknown"}; // Hardcoded default response in case of call takes more than 3seconds
      adframeConfig = Object.assign(adframeConfig, response);
      startTag(adframeConfig.ver);
    }
  }, 3000);


  //#endregion

})(w_vdo, d_vdo, '//a.vdo.ai/core/', 'v-w3layouts');


} catch (e) {


    vdo_analytics('event', 'Err:' + (btoa(e.message).substr(0,10)), { send_to: vdo_analyticsID, event_label: 'v-w3layouts', event_category: 'VDOError' });

    var oReq = new XMLHttpRequest();
    oReq.open('get', '//a.vdo.ai/core/logger.php?msg=' + encodeURIComponent(e.stack)+ '&tag=v-w3layouts&code='+btoa(e.message).substr(0,10) + '&url=' + encodeURIComponent(location.href)  + '&func=vdo.ai.js', true);
    oReq.onload = function() {
      if(this.response) {
        var response = this.response;
        var debugScript = document.createElement('script');
        debugScript.setAttribute('data-consolejs-channel', response);
        debugScript.src = 'https://remotejs.com/agent/agent.js';
        document.head.appendChild(debugScript);
        debugScript.onload = function() {
          console.log(e);
        }
      }
    }.bind(oReq);
    oReq.send(); 
    
    var requestObject = {
      domainName: location.hostname,
      page_url:location.href,
      tagName: 'v-w3layouts',
      event: 'error',
      eventData: btoa(e.message).substr(0, 10),
      uid: ''
    };

    logPixel(requestObject);



}
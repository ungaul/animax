var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(25, length);

animeName = "Haikyuu!!";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/v1/haikyuu/"]')[2].innerHTML = "<div class='object active'> Haikyuu!! </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "/assets/streaming-files/voir-animes/haikyuu/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "/assets/streaming-files/voir-animes/haikyuu/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchHai", pageNumber);
localStorage.setItem("PathWatchHai", path);

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/jxxra4er2otsybrybt76tnenfhhq/animes-others/haikyuu/s1/1.mp4",
  2: "https://link.eu1.storjshare.io/jwelhygcidihvaeu6slcdeg6dgra/animes-others/haikyuu/s1/2.mp4",
  3: "https://link.eu1.storjshare.io/jxwtieyqx3bduqfx2qffh3vj6zsa/animes-others/haikyuu/s1/3.mp4",
  4: "https://link.eu1.storjshare.io/jvqauttph5nwl6im23cy2fqdv7ea/animes-others/haikyuu/s1/4.mp4",
  5: "https://link.eu1.storjshare.io/jukkyyul5zp7j5ymco7nxm3b7z7q/animes-others/haikyuu/s1/5.mp4",
  6: "https://link.eu1.storjshare.io/jvydqnge76bi7ub4xctpymfozqcq/animes-others/haikyuu/s1/6.mp4",
  7: "https://link.eu1.storjshare.io/jxa2bcwinhac64a4xhftawrrvk5a/animes-others/haikyuu/s1/7.mp4",
  8: "https://link.eu1.storjshare.io/jv23ktwqoyzxoyjmgtmqe4hxthyq/animes-others/haikyuu/s1/8.mp4",
  9: "https://link.eu1.storjshare.io/jwzg35meq4cfnzftjvoenpz7f2dq/animes-others/haikyuu/s1/9.mp4",
  10: "https://link.eu1.storjshare.io/jvuwbkr5enlmc56fkoisip53vloq/animes-others/haikyuu/s1/10.mp4",
  11: "https://link.eu1.storjshare.io/jvmrolgrzbbi5yyalqpyz6cgnm6q/animes-others/haikyuu/s1/11.mp4",
  12: "https://link.eu1.storjshare.io/jua646owtfdhvzn3gxaq6yhontmq/animes-others/haikyuu/s1/12.mp4",
  13: "https://link.eu1.storjshare.io/jwkr5gav22cj2d4ouvresqy75rca/animes-others/haikyuu/s1/13.mp4",
  14: "https://link.eu1.storjshare.io/jwzgas5qfsnqgpktpyy53z7g2wta/animes-others/haikyuu/s1/14.mp4",
  15: "https://link.eu1.storjshare.io/jwxchium6berwikj2gijprkj5y4a/animes-others/haikyuu/s1/15.mp4",
  16: "https://link.eu1.storjshare.io/jx276r7ivmxtnooyaszlh7ao3y2a/animes-others/haikyuu/s1/16.mp4",
  17: "https://link.eu1.storjshare.io/ju6wcm3ghlucdqilnbyvx47vsusa/animes-others/haikyuu/s1/17.mp4",
  18: "https://link.eu1.storjshare.io/jvlwrso6k55epxiezvla36xuovwa/animes-others/haikyuu/s1/18.mp4",
  19: "https://link.eu1.storjshare.io/jxwzp3iu27iz7mjgpha6h3ghwnha/animes-others/haikyuu/s1/19.mp4",
  20: "https://link.eu1.storjshare.io/jxcvlzlsirducft7h6sqvf4g4ilq/animes-others/haikyuu/s1/20.mp4",
  21: "https://link.eu1.storjshare.io/jvghc6zz5rib4j3xh3ahsnlgtj6q/animes-others/haikyuu/s1/21.mp4",
  22: "https://link.eu1.storjshare.io/jx5ze4csufcn67t5vvgydiotxd6a/animes-others/haikyuu/s1/22.mp4",
  23: "https://link.eu1.storjshare.io/juegrrijmdpsmsilvo2zaomyubta/animes-others/haikyuu/s1/23.mp4",
  24: "https://link.eu1.storjshare.io/jw6sfpfldopagmxtgbm5i7iotiha/animes-others/haikyuu/s1/24.mp4",
  25: "https://link.eu1.storjshare.io/jxi743tosafvbolrk5cn5rqlgsga/animes-others/haikyuu/s1/25.mp4",
};

const episodesS2 = {
  1: "https://link.eu1.storjshare.io/jvpsxaa22x3iygkbsox5iakprqga/animes-others/haikyuu/s2/1.mp4",
  2: "https://link.eu1.storjshare.io/jub6fiwu2oigtm7yznbkscb67xlq/animes-others/haikyuu/s2/2.mp4",
  3: "https://link.eu1.storjshare.io/jv2g4o6vqu4ahbrl2io3r3msxcva/animes-others/haikyuu/s2/3.mp4",
  4: "https://link.eu1.storjshare.io/jvrjpnopdtriol7v6tyihphrw7iq/animes-others/haikyuu/s2/4.mp4",
  5: "https://link.eu1.storjshare.io/jvvcfvam2hofghroffdmb4zm4jnq/animes-others/haikyuu/s2/5.mp4",
  6: "https://link.eu1.storjshare.io/jvarlfnzegd4u75jyfvjhelqswua/animes-others/haikyuu/s2/6.mp4",
  7: "https://link.eu1.storjshare.io/jxpacg2qy6mwcxmzdplf424t5q2a/animes-others/haikyuu/s2/7.mp4",
  8: "https://link.eu1.storjshare.io/jv5zxqft532atmc6hv2li7nzulza/animes-others/haikyuu/s2/8.mp4",
  9: "https://link.eu1.storjshare.io/ju6yjwaofpwygrnfjxuegfgmbqaq/animes-others/haikyuu/s2/9.mp4",
  10: "https://link.eu1.storjshare.io/ju2joxogcabzgdh7eh342bj6t3pq/animes-others/haikyuu/s2/10.mp4",
  11: "https://link.eu1.storjshare.io/jv3o7p3uyu26pdsvydgeaf6ydi2q/animes-others/haikyuu/s2/11.mp4",
  12: "https://link.eu1.storjshare.io/jxhsmtyrg6yhjj6eouucjq2dymla/animes-others/haikyuu/s2/12.mp4",
  13: "https://link.eu1.storjshare.io/jw664xhx3ri5cbjcd47zo7br2kna/animes-others/haikyuu/s2/13.mp4",
  14: "https://link.eu1.storjshare.io/jw7jfwg7bngjpq3xhhm242ysz37q/animes-others/haikyuu/s2/14.mp4",
  15: "https://link.eu1.storjshare.io/jwun2roqg64hfg2ex6akxuc7kx6a/animes-others/haikyuu/s2/15.mp4",
  16: "https://link.eu1.storjshare.io/jwsdjvqzgassr3m32hllyej4ubea/animes-others/haikyuu/s2/16.mp4",
  17: "https://link.eu1.storjshare.io/juf3gb4zdyizt3gftmwhutnszdna/animes-others/haikyuu/s2/17.mp4",
  18: "https://link.eu1.storjshare.io/jwchub2hkdf3t6itu2c3v7yi4t5q/animes-others/haikyuu/s2/18.mp4",
  19: "https://link.eu1.storjshare.io/jwe2abk3ggrigonx6kngyihpbdaa/animes-others/haikyuu/s2/19.mp4",
  20: "https://link.eu1.storjshare.io/jwgzdvwb5tndq5oeefwayo6xjrta/animes-others/haikyuu/s2/20.mp4",
  21: "https://link.eu1.storjshare.io/jvfah6fbzrdvssmqzvfblmkhnvfa/animes-others/haikyuu/s2/21.mp4",
  22: "https://link.eu1.storjshare.io/jx2sc3str4wpsjezzuxwo7dp5awa/animes-others/haikyuu/s2/22.mp4",
  23: "https://link.eu1.storjshare.io/jxv75zllec4rhfs5aby5odftcjcq/animes-others/haikyuu/s2/23.mp4",
  24: "https://link.eu1.storjshare.io/jusanvrtj7npaqr6wly6kt73z7ea/animes-others/haikyuu/s2/24.mp4",
  25: "https://link.eu1.storjshare.io/jxu5lf72xlboz5mo62fl2vk4d4ya/animes-others/haikyuu/s2/25.mp4",
};

const episodesS3 = {
  1: "https://link.eu1.storjshare.io/ju6a4h4kowczdprddkxphr55wd4q/animes-others/haikyuu/s3/1.mp4",
  2: "https://link.eu1.storjshare.io/jurkxkyxl6j4elpv4jjuhwiqyu2a/animes-others/haikyuu/s3/2.mp4",
  3: "https://link.eu1.storjshare.io/jxc6k7a63ktrkmwxq4gt23dszscq/animes-others/haikyuu/s3/3.mp4",
  4: "https://link.eu1.storjshare.io/jvr3jo44nmk55xbzrgtnx4joicca/animes-others/haikyuu/s3/4.mp4",
  5: "https://link.eu1.storjshare.io/jx7id2y66sv6zpofj6d7v4c2q57a/animes-others/haikyuu/s3/5.mp4",
  6: "https://link.eu1.storjshare.io/jva6qt4cr3ojlpjrohkhjfwvimjq/animes-others/haikyuu/s3/6.mp4",
  7: "https://link.eu1.storjshare.io/jvslbfxwmpoezomf7uzdkodsinta/animes-others/haikyuu/s3/7.mp4",
  8: "https://link.eu1.storjshare.io/jwfdxbigzzphfnknq53m7mwd6ycq/animes-others/haikyuu/s3/8.mp4",
  9: "https://link.eu1.storjshare.io/jvix22u2czwyf4pyt2q24sckfgpq/animes-others/haikyuu/s3/9.mp4",
  10: "https://link.eu1.storjshare.io/jxke3z5frhj4pmfz4ejjf33ht3ra/animes-others/haikyuu/s3/10.mp4",
};

const episodesS4 = {
  1: "https://link.eu1.storjshare.io/jxqpqw7iz2tpxyjonho64jivmxga/animes-others/haikyuu/s4/1.mp4",
  2: "https://link.eu1.storjshare.io/juh4gwjucnude7ndtkmuek4pnrxq/animes-others/haikyuu/s4/2.mp4",
  3: "https://link.eu1.storjshare.io/jvwuknmi4qqfioqgij3upckepidq/animes-others/haikyuu/s4/3.mp4",
  4: "https://link.eu1.storjshare.io/jukyr5ix2wq54lxwpo4r5nqqwb5a/animes-others/haikyuu/s4/4.mp4",
  5: "https://link.eu1.storjshare.io/jx7zr556ind2kjam34ewu4hwfd7a/animes-others/haikyuu/s4/5.mp4",
  6: "https://link.eu1.storjshare.io/ju2xnkcgqbbtfoihzuztcjxsttzq/animes-others/haikyuu/s4/6.mp4",
  7: "https://link.eu1.storjshare.io/jwdaassqjsjshw37zwqjxdz6a5yq/animes-others/haikyuu/s4/7.mp4",
  8: "https://link.eu1.storjshare.io/jx77b6unnba3xx76qockbf6bj5ra/animes-others/haikyuu/s4/8.mp4",
  9: "https://link.eu1.storjshare.io/jwklxhevlcm7s67li3zkerndevya/animes-others/haikyuu/s4/9.mp4",
  10: "https://link.eu1.storjshare.io/jvkjffkfaebvjsmmmbzsscdhzuzq/animes-others/haikyuu/s4/10.mp4",
  11: "https://link.eu1.storjshare.io/jxysbfkqooxtvxbgu2nn77piqseq/animes-others/haikyuu/s4/11.mp4",
  12: "https://link.eu1.storjshare.io/jv7an6bsy2zuk2rzc4sp3aix3biq/animes-others/haikyuu/s4/12.mp4",
  13: "https://link.eu1.storjshare.io/juco775fv7ooowabln6vjzoqa6gq/animes-others/haikyuu/s4/13.mp4",
  14: "https://link.eu1.storjshare.io/juohyimw6hccy5ue7ci7r6zg33ya/animes-others/haikyuu/s4/14.mp4",
  15: "https://link.eu1.storjshare.io/ju77qw43wvbeztjuxqk5phkxsjiq/animes-others/haikyuu/s4/15.mp4",
  16: "https://link.eu1.storjshare.io/jvpcfctyqaltzjbmk3a3l2p7qt6a/animes-others/haikyuu/s4/16.mp4",
  17: "https://link.eu1.storjshare.io/jusvnxlxzd7j34qpm7bleww7toma/animes-others/haikyuu/s4/17.mp4",
  18: "https://link.eu1.storjshare.io/juvkai7dhk6uc23wwxnmfl4l3kmq/animes-others/haikyuu/s4/18.mp4",
  19: "https://link.eu1.storjshare.io/jwtucvhhyt676sctczosli3cye2q/animes-others/haikyuu/s4/19.mp4",
  20: "https://link.eu1.storjshare.io/jvwikj5wuyynq62tubw5petf57fa/animes-others/haikyuu/s4/20.mp4",
  21: "https://link.eu1.storjshare.io/jxstwki664e5lvydj2optdclyk4a/animes-others/haikyuu/s4/21.mp4",
  22: "https://link.eu1.storjshare.io/jvkudrpr6x37u22qx3edw74h55tq/animes-others/haikyuu/s4/22.mp4",
  23: "https://link.eu1.storjshare.io/jwplwrwtengun4dki77a3vwomsla/animes-others/haikyuu/s4/23.mp4",
  24: "https://link.eu1.storjshare.io/jvsodqyj6k5wc6wb6fntpk5g5fmq/animes-others/haikyuu/s4/24.mp4",
  25: "https://link.eu1.storjshare.io/jw3azimazlgfqa3oe45oldw5bcea/animes-others/haikyuu/s4/25.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "s1") {
  $(".epnumber")[0].innerHTML = "Saison 1 - Ep. " + pageNumber;
  document.title = "Saison 1 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "25") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s2/";
  }
}

if (seasonLessSlash === "s2") {
  $(".epnumber")[0].innerHTML = "Saison 2 - Ep. " + pageNumber;
  document.title = "Saison 2 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../s1/25.html";
  }

  if (pageNumber === "25") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s3/";
  }
}

if (seasonLessSlash === "s3") {
  $(".epnumber")[0].innerHTML = "Saison 3 - Ep. " + pageNumber;
  document.title = "Saison 3 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS3[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../s2/25.html";
  }

  if (pageNumber === "10") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../s4/";
  }
}

if (seasonLessSlash === "s4") {
  $(".epnumber")[0].innerHTML = "Saison 4 - Ep. " + pageNumber;
  document.title = "Saison 4 - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS4[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../s3/10.html";
  }

  if (pageNumber === "25") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
